/**
 * Date formatting utilities for consistent date display across the site.
 */

/**
 * Formats a date for display with configurable month format.
 * @param date - The date to format
 * @param monthFormat - Whether to use 'long' (January) or 'short' (Jan) month names
 * @returns Formatted date string (e.g., "January 15, 2024" or "Jan 15, 2024")
 */
export function formatDate(
  date: Date,
  monthFormat: "long" | "short" = "long",
): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: monthFormat,
    day: "numeric",
  });
}

/**
 * Formats a date as an ISO 8601 date string (YYYY-MM-DD).
 * Used for datetime attributes in HTML time elements.
 * @param date - The date to format
 * @returns ISO date string (e.g., "2024-01-15")
 */
export function formatDateISO(date: Date): string {
  return date.toISOString().split("T")[0];
}
