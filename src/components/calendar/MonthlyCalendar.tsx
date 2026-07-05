import { useState } from "react";

import { CalendarGrid } from "./CalendarGrid";
import { CalendarHeader } from "./CalendarHeader";
import { generateCalendarDays } from "../../utils/calendar";

import { WEEKDAYS } from "../../data/calendar";

export function MonthlyCalendar() {
  const [currentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const days = generateCalendarDays(year, month);

  const monthTitle = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className="calendar">
      <CalendarHeader monthTitle={monthTitle} />

      <div className="calendar__weekdays">
        {WEEKDAYS.map((weekday) => (
          <span key={weekday}>{weekday}</span>
        ))}
      </div>

      <CalendarGrid days={days} />
    </section>
  );
}