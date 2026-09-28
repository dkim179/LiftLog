import type { CalendarDay } from "../../types/calendar";
import { CalendarCell } from "./CalendarCell";

type CalendarGridProps = {
  days: CalendarDay[];
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
};

function isSameDate(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function CalendarGrid({
  days,
  selectedDate,
  onSelectDate,
}: CalendarGridProps) {
  return (
    <div className="calendar__grid">
      {days.map((calendarDay) => (
        <CalendarCell
          key={calendarDay.date.toISOString()}
          day={calendarDay}
          isSelected={isSameDate(calendarDay.date, selectedDate)}
          onSelect={onSelectDate}
        />
      ))}
    </div>
  );
}