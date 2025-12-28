/**
 * Estimates reading time for text content.
 * Uses an average reading speed of 200 words per minute.
 */

const WORDS_PER_MINUTE = 200;

/**
 * Calculates the estimated reading time for a given text.
 * @param text - The text content to analyze
 * @returns The estimated reading time in minutes (minimum 1)
 */
export function getReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / WORDS_PER_MINUTE);
  return Math.max(1, minutes);
}

/**
 * Formats reading time as a human-readable string.
 * @param text - The text content to analyze
 * @returns A formatted string like "5 min read"
 */
export function formatReadingTime(text: string): string {
  const minutes = getReadingTime(text);
  return `${minutes} min read`;
}
