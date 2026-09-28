import { useCallback, useState } from "react";

import { MonthlyCalendar } from "../components/calendar/MonthlyCalendar";
import { WorkoutLog } from "../components/workout/WorkoutLog";

export function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [workoutVersion, setWorkoutVersion] = useState(0);

  const handleWorkoutChange = useCallback(() => {
    setWorkoutVersion((version) => version + 1);
  }, []);

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

      <MonthlyCalendar
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        workoutVersion={workoutVersion}
      />

      <WorkoutLog
        selectedDate={selectedDate}
        onWorkoutChange={handleWorkoutChange}
      />
    </main>
  );
}