import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const contentRoot = path.join(root, 'src', 'content', 'posts');
const mapPath = path.join(root, 'scripts', 'posts-map.md');

const parseMap = (raw) => {
  const lines = raw.split('\n');
  const pairs = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [es, en] = trimmed.split(/\s+/);
    if (!es || !en) continue;
    pairs.push({ es, en });
  }
  return pairs;
};

const updateFrontmatter = (raw, translation) => {
  const match = raw.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) {
    throw new Error('Missing frontmatter block');
  }
  const frontmatter = match[1];
  const hasTranslation = /^\s*translation:\s*.*$/m.test(frontmatter);
  let nextFrontmatter = frontmatter;
  if (hasTranslation) {
    nextFrontmatter = frontmatter.replace(/^\s*translation:\s*.*$/m, `translation: ${translation}`);
  } else {
    const withNewline = frontmatter.endsWith('\n') ? frontmatter : `${frontmatter}\n`;
    nextFrontmatter = `${withNewline}translation: ${translation}\n`;
  }
  return raw.replace(match[0], `---\n${nextFrontmatter}---`);
};

const updatePost = async (lang, slug, translation) => {
  const filePath = path.join(contentRoot, lang, slug, 'index.md');
  const raw = await readFile(filePath, 'utf8');
  const updated = updateFrontmatter(raw, translation);
  if (updated !== raw) {
    await writeFile(filePath, updated, 'utf8');
  }
};

const main = async () => {
  const mapRaw = await readFile(mapPath, 'utf8');
  const pairs = parseMap(mapRaw);

  const skipped = [];
  for (const { es, en } of pairs) {
    if (en === '-' || en === 'TODO' || en === '?') {
      skipped.push(`es/${es} -> en/${en}`);
      continue;
    }
    await updatePost('es', es, en);
    await updatePost('en', en, es);
  }

  if (skipped.length) {
    console.log('Skipped (missing mapping):');
    for (const item of skipped) console.log(`- ${item}`);
  } else {
    console.log('Applied translations to all mapped posts.');
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
