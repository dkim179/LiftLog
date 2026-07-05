import type { CalendarDay } from "../../types/calendar";

type CalendarCellProps = {
  day: CalendarDay;
};

/**
 * Displays a single day cell in the monthly calendar.
 */
export function CalendarCell({ day }: CalendarCellProps) {
  const className = [
    "calendar__cell",
    !day.isCurrentMonth ? "calendar__cell--muted" : "",
    day.isToday ? "calendar__cell--today" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <span>{day.day}</span>
    </div>
  );
}