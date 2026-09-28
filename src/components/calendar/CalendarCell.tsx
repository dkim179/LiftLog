import type { CalendarDay } from "../../types/calendar";

type CalendarCellProps = {
  day: CalendarDay;
  isSelected: boolean;
  hasWorkout: boolean;
  onSelect: (date: Date) => void;
};

export function CalendarCell({
  day,
  isSelected,
  hasWorkout,
  onSelect,
}: CalendarCellProps) {
  const className = [
    "calendar__cell",
    !day.isCurrentMonth ? "calendar__cell--muted" : "",
    day.isToday ? "calendar__cell--today" : "",
    isSelected ? "calendar__cell--selected" : "",
    hasWorkout ? "calendar__cell--has-workout" : "",
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

      {hasWorkout && (
        <span
          className="calendar__workout-dot"
          aria-label="Workout logged"
        />
      )}
    </button>
  );
}