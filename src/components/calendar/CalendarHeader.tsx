type CalendarHeaderProps = {
  monthTitle: string;
};

/**
 * Displays the header for the monthly calendar.
 *
 * This component will later contain previous/next month navigation.
 */
export function CalendarHeader({ monthTitle }: CalendarHeaderProps) {
  return (
    <div className="calendar__header">
      <button className="calendar__nav-button">‹</button>
      <h2 className="calendar__title">{monthTitle}</h2>
      <button className="calendar__nav-button">›</button>
    </div>
  );
}