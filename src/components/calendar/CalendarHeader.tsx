type CalendarHeaderProps = {
  monthTitle: string;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
};

export function CalendarHeader({
  monthTitle,
  onPreviousMonth,
  onNextMonth,
  onToday,
}: CalendarHeaderProps) {
  return (
    <div className="calendar__header">
      <div>
        <p className="calendar__eyebrow">WORKOUT CALENDAR</p>
        <h2 className="calendar__title">{monthTitle}</h2>
      </div>

      <div className="calendar__controls">
        <button
          className="calendar__today-button"
          type="button"
          onClick={onToday}
        >
          Today
        </button>

        <button
          className="calendar__nav-button"
          type="button"
          onClick={onPreviousMonth}
          aria-label="Previous month"
        >
          ‹
        </button>

        <button
          className="calendar__nav-button"
          type="button"
          onClick={onNextMonth}
          aria-label="Next month"
        >
          ›
        </button>
      </div>
    </div>
  );
}