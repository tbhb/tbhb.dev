/**
 * Tag utilities for consistent tag handling across the site.
 */

/**
 * Normalizes a tag for use in URLs.
 * Converts to lowercase and replaces spaces with hyphens.
 * @param tag - The tag to normalize
 * @returns URL-safe tag string (e.g., "machine learning" -> "machine-learning")
 */
export function normalizeTag(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, "-");
}

/**
 * Formats a tag for display.
 * Capitalizes the first letter of the tag.
 * @param tag - The tag to format (typically already normalized)
 * @returns Display-formatted tag (e.g., "machine-learning" -> "Machine-learning")
 */
export function formatTagName(tag: string): string {
  return tag.charAt(0).toUpperCase() + tag.slice(1);
}
