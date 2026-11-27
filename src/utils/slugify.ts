export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD') // Split accented characters into base + diacritics
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric chars (except spaces and hyphens)
    .trim() // Trim leading/trailing whitespace
    .replace(/[\s-]+/g, '-') // Replace spaces and repeated hyphens with a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}
