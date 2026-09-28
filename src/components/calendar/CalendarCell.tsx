import type { CalendarDay } from "../../types/calendar";

type CalendarCellProps = {
  day: CalendarDay;
  isSelected: boolean;
  onSelect: (date: Date) => void;
};

export function CalendarCell({
  day,
  isSelected,
  onSelect,
}: CalendarCellProps) {
  const className = [
    "calendar__cell",
    !day.isCurrentMonth ? "calendar__cell--muted" : "",
    day.isToday ? "calendar__cell--today" : "",
    isSelected ? "calendar__cell--selected" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={className}
      type="button"
      onClick={() => onSelect(day.date)}
    >
      <span className="calendar__day-number">{day.day}</span>

      {day.isToday && <span className="calendar__today-dot" />}
    </button>
  );
}