import { useState } from "react";

import { CalendarGrid } from "./CalendarGrid";
import { CalendarHeader } from "./CalendarHeader";
import { WEEKDAYS } from "../../data/calendar";
import { generateCalendarDays } from "../../utils/calendar";

export function MonthlyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const days = generateCalendarDays(year, month);

  const monthTitle = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  function handlePreviousMonth() {
    setCurrentDate(new Date(year, month - 1, 1));
  }

  function handleNextMonth() {
    setCurrentDate(new Date(year, month + 1, 1));
  }

  function handleToday() {
    const today = new Date();

    setCurrentDate(today);
    setSelectedDate(today);
  }

  return (
    <section className="calendar">
      <CalendarHeader
        monthTitle={monthTitle}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
        onToday={handleToday}
      />

      <div className="calendar__weekdays">
        {WEEKDAYS.map((weekday) => (
          <span key={weekday}>{weekday}</span>
        ))}
      </div>

      <CalendarGrid
        days={days}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
    </section>
  );
}