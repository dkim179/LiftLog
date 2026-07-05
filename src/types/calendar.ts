/**
 * Represents a single day displayed in the monthly calendar.
 *
 * A calendar cell may belong to:
 * - The previous month
 * - The current month
 * - The next month
 */
export type CalendarDay = {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
};