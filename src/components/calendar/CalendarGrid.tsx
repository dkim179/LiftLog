import type { CalendarDay } from "../../types/calendar";

import { formatDateKey } from "../../utils/date";
import { getWorkoutDates } from "../../utils/workoutStorage";

import { CalendarCell } from "./CalendarCell";

type CalendarGridProps = {
  days: CalendarDay[];
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  workoutVersion: number;
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
  workoutVersion,
}: CalendarGridProps) {
  // workoutVersion intentionally triggers a fresh localStorage read
  // whenever workout data changes.
  void workoutVersion;

  const workoutDates = new Set(getWorkoutDates());

  return (
    <div className="calendar__grid">
      {days.map((calendarDay) => {
        const dateKey = formatDateKey(calendarDay.date);
        const hasWorkout = workoutDates.has(dateKey);

        return (
          <CalendarCell
            key={calendarDay.date.toISOString()}
            day={calendarDay}
            isSelected={isSameDate(calendarDay.date, selectedDate)}
            hasWorkout={hasWorkout}
            onSelect={onSelectDate}
          />
        );
      })}
    </div>
  );
}