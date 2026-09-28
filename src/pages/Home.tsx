import { MonthlyCalendar } from "../components/calendar/MonthlyCalendar";

export function Home() {
  return (
    <main className="home">
      <header className="home__header">
        <div>
          <p className="home__eyebrow">TRAIN. TRACK. PROGRESS.</p>
          <h1 className="home__title">LiftLog</h1>
        </div>

        <div className="home__profile">
          <span>DK</span>
        </div>
      </header>

      <section className="home__intro">
        <div>
          <p className="home__section-label">YOUR TRAINING</p>
          <h2>Stay consistent.</h2>
          <p>
            Track every workout and keep your progress in one place.
          </p>
        </div>
      </section>

      <MonthlyCalendar />
    </main>
  );
}