export const normalizePostSlug = (slug: string) =>
  slug
    .replace(/^es\//, '')
    .replace(/^en\//, '')
    .replace(/\/index$/, '');
