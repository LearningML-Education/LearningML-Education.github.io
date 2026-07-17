#!/usr/bin/env bun
/**
 * Local-only LinkedIn publisher. Credentials in .env.linkedin and the access
 * token in .linkedin/session.json are intentionally ignored by Git.
 */
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile, chmod } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { randomBytes } from 'node:crypto';
import { resolve } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const ROOT = process.cwd();
const ENV_FILE = resolve(ROOT, '.env.linkedin');
const SESSION_DIR = resolve(ROOT, '.linkedin');
const SESSION_FILE = resolve(SESSION_DIR, 'session.json');
const LINKEDIN_VERSION = '202606';

function fail(message) {
  console.error(`Error: ${message}`);
  process.exitCode = 1;
}

function usage() {
  console.log(`Uso:
  bun run linkedin:login
  bun run linkedin:whoami
  bun run linkedin:preview -- --as personal|learningml --file borrador.txt
  bun run linkedin:publish -- --as personal|learningml --file borrador.txt

Opciones de preview/publish:
  --file <ruta>  Texto de la publicación (recomendado).
  --text <texto> Texto de la publicación.
  --as <destino> personal (por defecto) o learningml.

La publicación solo se envía después de escribir exactamente PUBLICAR.`);
}

async function env() {
  if (!existsSync(ENV_FILE)) {
    throw new Error('Falta .env.linkedin. Cópialo desde .env.linkedin.example y completa sus valores.');
  }
  const values = {};
  for (const rawLine of (await readFile(ENV_FILE, 'utf8')).split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const index = line.indexOf('=');
    if (index < 1) continue;
    values[line.slice(0, index).trim()] = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, '');
  }
  return values;
}

function required(values, name) {
  if (!values[name]) throw new Error(`Falta ${name} en .env.linkedin.`);
  return values[name];
}

function argumentsObject(args) {
  const result = {};
  for (let i = 0; i < args.length; i += 1) {
    const key = args[i];
    if (!key.startsWith('--')) throw new Error(`Opción no reconocida: ${key}`);
    const value = args[i + 1];
    if (!value || value.startsWith('--')) throw new Error(`Falta el valor de ${key}.`);
    result[key.slice(2)] = value;
    i += 1;
  }
  return result;
}

async function saveSession(session) {
  await mkdir(SESSION_DIR, { recursive: true, mode: 0o700 });
  await writeFile(SESSION_FILE, `${JSON.stringify(session, null, 2)}\n`, { mode: 0o600 });
  await chmod(SESSION_FILE, 0o600);
}

async function session() {
  if (!existsSync(SESSION_FILE)) throw new Error('No hay sesión. Ejecuta primero `bun run linkedin:login`.');
  const data = JSON.parse(await readFile(SESSION_FILE, 'utf8'));
  if (!data.accessToken || !data.personUrn) throw new Error('La sesión local no es válida. Ejecuta `bun run linkedin:login` de nuevo.');
  return data;
}

function localCallbackServer(callbackUrl, expectedState) {
  const callback = new URL(callbackUrl);
  if (!['127.0.0.1', 'localhost'].includes(callback.hostname)) {
    throw new Error('LINKEDIN_REDIRECT_URI debe usar localhost o 127.0.0.1 para esta CLI local.');
  }
  return new Promise((resolvePromise, rejectPromise) => {
    const server = createServer((request, response) => {
      const received = new URL(request.url, `http://${request.headers.host}`);
      if (received.pathname !== callback.pathname) {
        response.writeHead(404).end('Not found');
        return;
      }
      const error = received.searchParams.get('error');
      const errorDescription = received.searchParams.get('error_description');
      const code = received.searchParams.get('code');
      const state = received.searchParams.get('state');
      if (error || !code || state !== expectedState) {
        const reason = error
          ? `${error}${errorDescription ? `: ${errorDescription}` : ''}`
          : state !== expectedState
            ? 'El parámetro state no coincide con el de la solicitud original.'
            : 'LinkedIn no devolvió un código de autorización.';
        console.error(`OAuth de LinkedIn no completado: ${reason}`);
        response.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(`<p>La autorización no se ha completado: ${reason.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')}.</p><p>Consulta la terminal para ver el detalle.</p>`);
        server.close();
        rejectPromise(new Error(`LinkedIn rechazó la autorización: ${reason}`));
        return;
      }
      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end('<p>LinkedIn autorizado correctamente. Ya puedes cerrar esta ventana y volver a la terminal.</p>');
      server.close();
      resolvePromise(code);
    });
    server.once('error', rejectPromise);
    server.listen(Number(callback.port || 80), callback.hostname);
  });
}

async function login() {
  const values = await env();
  const clientId = required(values, 'LINKEDIN_CLIENT_ID');
  const clientSecret = required(values, 'LINKEDIN_CLIENT_SECRET');
  const redirectUri = required(values, 'LINKEDIN_REDIRECT_URI');
  const scopes = values.LINKEDIN_SCOPES || 'openid profile w_member_social';
  const state = randomBytes(24).toString('hex');
  const authorization = new URL('https://www.linkedin.com/oauth/v2/authorization');
  authorization.search = new URLSearchParams({ response_type: 'code', client_id: clientId, redirect_uri: redirectUri, state, scope: scopes }).toString();
  const waitingForCode = localCallbackServer(redirectUri, state);
  console.log('\nAbre esta URL en tu navegador, inicia sesión en LinkedIn y acepta los permisos:\n');
  console.log(authorization.toString());
  console.log('\nEsperando la autorización local…');
  const code = await waitingForCode;
  const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'authorization_code', code, redirect_uri: redirectUri, client_id: clientId, client_secret: clientSecret }),
  });
  const token = await tokenResponse.json();
  if (!tokenResponse.ok || !token.access_token) throw new Error(`No se pudo obtener el token: ${token.error_description || token.error || tokenResponse.status}.`);
  const profileResponse = await fetch('https://api.linkedin.com/v2/userinfo', { headers: { Authorization: `Bearer ${token.access_token}` } });
  const profile = await profileResponse.json();
  if (!profileResponse.ok || !profile.sub) throw new Error('No se pudo identificar el perfil de LinkedIn autorizado.');
  await saveSession({ accessToken: token.access_token, expiresAt: new Date(Date.now() + token.expires_in * 1000).toISOString(), personUrn: `urn:li:person:${profile.sub}`, name: profile.name || profile.given_name || 'Perfil personal', scopes });
  console.log(`\nSesión guardada para ${profile.name || 'tu perfil'} (${`urn:li:person:${profile.sub}`}).`);
}

async function postText(accessToken, author, commentary, apiVersion) {
  const response = await fetch('https://api.linkedin.com/rest/posts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'LinkedIn-Version': apiVersion || LINKEDIN_VERSION,
      'X-Restli-Protocol-Version': '2.0.0',
    },
    body: JSON.stringify({ author, commentary, visibility: 'PUBLIC', distribution: { feedDistribution: 'MAIN_FEED', targetEntities: [], thirdPartyDistributionChannels: [] }, lifecycleState: 'PUBLISHED', isReshareDisabledByAuthor: false }),
  });
  const body = await response.text();
  if (!response.ok) throw new Error(`LinkedIn rechazó la publicación (${response.status}): ${body}`);
  return response.headers.get('x-restli-id') || '(identificador no devuelto)';
}

async function postInput(options) {
  if (options.file && options.text) throw new Error('Usa solo --file o --text.');
  const text = options.file ? await readFile(resolve(ROOT, options.file), 'utf8') : options.text;
  if (!text?.trim()) throw new Error('Indica el contenido con --file o --text.');
  const commentary = text.trim();
  if (commentary.length > 3000) throw new Error(`El texto tiene ${commentary.length} caracteres; LinkedIn admite un máximo de 3000.`);
  return commentary;
}

async function destination(options, values, storedSession) {
  const as = options.as || 'personal';
  if (as === 'personal') return { label: storedSession.name || 'Perfil personal', urn: storedSession.personUrn };
  if (as === 'learningml') {
    const id = required(values, 'LINKEDIN_ORGANIZATION_ID');
    return { label: 'Página de LearningML', urn: `urn:li:organization:${id}` };
  }
  throw new Error('El destino debe ser personal o learningml.');
}

async function preview(options) {
  const [values, storedSession, commentary] = await Promise.all([env(), session(), postInput(options)]);
  const target = await destination(options, values, storedSession);
  console.log(`\nDestino: ${target.label}\nAutor: ${target.urn}\n\n----- Publicación (${commentary.length}/3000) -----\n${commentary}\n---------------------------------------\n`);
}

async function publish(options) {
  const [values, storedSession, commentary] = await Promise.all([env(), session(), postInput(options)]);
  if (new Date(storedSession.expiresAt) <= new Date()) throw new Error('La autorización ha caducado. Ejecuta `bun run linkedin:login` de nuevo.');
  const target = await destination(options, values, storedSession);
  console.log(`\nVas a publicar desde: ${target.label}\nAutor: ${target.urn}\n\n${commentary}\n`);
  const readline = createInterface({ input, output });
  const confirmation = await readline.question('Escribe PUBLICAR para enviar esta publicación a LinkedIn: ');
  readline.close();
  if (confirmation !== 'PUBLICAR') {
    console.log('Publicación cancelada.');
    return;
  }
  const id = await postText(storedSession.accessToken, target.urn, commentary, values.LINKEDIN_API_VERSION);
  console.log(`Publicación creada correctamente. ID: ${id}`);
}

const [command, ...args] = process.argv.slice(2);
try {
  if (!command || command === '--help' || command === '-h') {
    usage();
  }
  else if (args.includes('--help') || args.includes('-h')) {
    usage();
  }
  else if (command === 'login') await login();
  else if (command === 'whoami') {
    const storedSession = await session();
    console.log(`${storedSession.name}\n${storedSession.personUrn}\nCaduca: ${storedSession.expiresAt}`);
  } else if (command === 'preview') await preview(argumentsObject(args));
  else if (command === 'publish') await publish(argumentsObject(args));
  else throw new Error(`Comando no reconocido: ${command}`);
} catch (error) {
  fail(error.message);
}
