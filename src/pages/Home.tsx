import { MonthlyCalendar } from "../components/calendar/MonthlyCalendar";

/**
 * Home page for LiftLog.
 *
 * This page currently displays the monthly calendar.
 */
export function Home() {
  return (
    <main>
      <h1>LiftLog</h1>
      <MonthlyCalendar />
    </main>
  );
}