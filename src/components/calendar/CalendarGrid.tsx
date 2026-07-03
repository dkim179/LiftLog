import type { CalendarDay } from "../../types/calendar";
import { CalendarCell } from "./CalendarCell";

type CalendarGridProps = {
  days: CalendarDay[];
};

/**
 * Displays a grid of calendar cells.
 *
 * This component is responsible for arranging CalendarCell components
 * into a calendar grid layout.
 */
export function CalendarGrid({ days }: CalendarGridProps) {
  return (
    <div>
      {days.map((calendarDay) => (
        <CalendarCell
          key={calendarDay.date.toISOString()}
          day={calendarDay}
        />
      ))}
    </div>
  );
}