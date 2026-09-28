/**
 * Converts a Date object into a local YYYY-MM-DD key.
 *
 * Using local date values prevents timezone conversion
 * from shifting the workout to a different day.
 */
export function formatDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}