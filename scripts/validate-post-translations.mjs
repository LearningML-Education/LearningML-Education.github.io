import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const contentRoot = path.join(root, 'src', 'content', 'posts');

const readDirNames = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
};

const extractFrontmatter = (raw) => {
  const match = raw.match(/^---\s*([\s\S]*?)\s*---/);
  return match ? match[1] : '';
};

const extractTranslation = (frontmatter) => {
  const match = frontmatter.match(/^\s*translation:\s*(.+)\s*$/m);
  if (!match) return undefined;
  const value = match[1].trim();
  return value.replace(/^['"]|['"]$/g, '');
};

const readTranslation = async (lang, slug) => {
  const filePath = path.join(contentRoot, lang, slug, 'index.md');
  const raw = await readFile(filePath, 'utf8');
  const frontmatter = extractFrontmatter(raw);
  return extractTranslation(frontmatter);
};

const loadLang = async (lang) => {
  const langDir = path.join(contentRoot, lang);
  const slugs = await readDirNames(langDir);
  const map = new Map();
  for (const slug of slugs) {
    map.set(slug, await readTranslation(lang, slug));
  }
  return map;
};

const report = (items, title) => {
  if (items.length === 0) return;
  console.log(`\n${title}`);
  for (const item of items) console.log(`- ${item}`);
};

const main = async () => {
  const es = await loadLang('es');
  const en = await loadLang('en');

  const missing = [];
  const invalid = [];
  const nonReciprocal = [];

  for (const [slug, translation] of es) {
    if (!translation) {
      missing.push(`es/${slug} missing translation`);
      continue;
    }
    if (!en.has(translation)) {
      invalid.push(`es/${slug} -> en/${translation} does not exist`);
      continue;
    }
    const back = en.get(translation);
    if (back !== slug) {
      nonReciprocal.push(`es/${slug} -> en/${translation} -> es/${back ?? '∅'}`);
    }
  }

  for (const [slug, translation] of en) {
    if (!translation) {
      missing.push(`en/${slug} missing translation`);
      continue;
    }
    if (!es.has(translation)) {
      invalid.push(`en/${slug} -> es/${translation} does not exist`);
      continue;
    }
    const back = es.get(translation);
    if (back !== slug) {
      nonReciprocal.push(`en/${slug} -> es/${translation} -> en/${back ?? '∅'}`);
    }
  }

  report(missing, 'Missing translation frontmatter:');
  report(invalid, 'Invalid translation targets:');
  report(nonReciprocal, 'Non-reciprocal mappings:');

  if (missing.length || invalid.length || nonReciprocal.length) {
    process.exitCode = 1;
    return;
  }
  console.log('All translations are present and reciprocal.');
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
