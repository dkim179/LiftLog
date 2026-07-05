import type { CalendarDay } from "../types/calendar";
/**
 * Generates all calendar cells for a given month.
 *
 * The returned array contains:
 * - Trailing days from the previous month
 * - Every day in the current month
 * - Leading days from the next month
 *
 * The calendar always starts on Monday.
 *
 * @param year Full year (e.g. 2026)
 * @param month Zero-based month (0 = January, 11 = December)
 * @returns Array of CalendarDay objects
 */
export function generateCalendarDays(
  year: number,
  month: number
): CalendarDay[] {

  // Store today's date so we can highlight it later.
  const today = new Date();

  // -------------------------
  // Month Information
  // -------------------------

  // Create a Date object representing the first day
  // of the selected month.
  const firstDayOfMonth = new Date(year, month, 1);

  // JavaScript returns:
  // Sunday = 0
  // Monday = 1
  // ...
  // Saturday = 6
  const firstDayIndex = firstDayOfMonth.getDay();

  // Convert JavaScript's Sunday-first indexing
  // into a Monday-first indexing.
  //
  // Example:
  //
  // JavaScript
  // Sun Mon Tue Wed Thu Fri Sat
  //  0   1   2   3   4   5   6
  //
  // LiftLog
  // Mon Tue Wed Thu Fri Sat Sun
  //  0   1   2   3   4   5   6
  const mondayBasedStartIndex =
    firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  // Determine how many days exist in the selected month.
  //
  // JavaScript trick:
  // Day 0 of the next month is the last day
  // of the current month.
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays: CalendarDay[] = [];

  // -------------------------
  // Previous Month
  // -------------------------

  // Fill the empty cells before the first day
  // with dates from the previous month.
  for (let i = 0; i < mondayBasedStartIndex; i++) {
    const date = new Date(
      year,
      month,
      i - mondayBasedStartIndex + 1
    );

    calendarDays.push({
      date,
      day: date.getDate(),
      isCurrentMonth: false,
      isToday: isSameDate(date, today),
    });
  }

  // -------------------------
  // Current Month
  // -------------------------

  // Add every day of the selected month.
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);

    calendarDays.push({
      date,
      day,
      isCurrentMonth: true,
      isToday: isSameDate(date, today),
    });
  }

  // -------------------------
  // Next Month
  // -------------------------

  // Continue adding dates until the calendar
  // contains complete weeks.
  //
  // Example:
  // A calendar should never end halfway
  // through a row.
  while (calendarDays.length % 7 !== 0) {
    const lastDate = calendarDays[calendarDays.length - 1].date;

    const nextDate = new Date(
      lastDate.getFullYear(),
      lastDate.getMonth(),
      lastDate.getDate() + 1
    );

    calendarDays.push({
      date: nextDate,
      day: nextDate.getDate(),
      isCurrentMonth: false,
      isToday: isSameDate(nextDate, today),
    });
  }

  return calendarDays;
}

/**
 * Determines whether two Date objects represent
 * the exact same calendar day.
 */
function isSameDate(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}