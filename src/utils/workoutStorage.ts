import type { WorkoutLog } from "../types/workout";

const STORAGE_KEY = "liftlog-workouts";

type WorkoutStorage = Record<string, WorkoutLog>;

function getWorkoutStorage(): WorkoutStorage {
  const storedData = localStorage.getItem(STORAGE_KEY);

  if (!storedData) {
    return {};
  }

  try {
    return JSON.parse(storedData) as WorkoutStorage;
  } catch {
    return {};
  }
}

export function getWorkoutLog(date: string): WorkoutLog {
  const workouts = getWorkoutStorage();

  return (
    workouts[date] ?? {
      date,
      exercises: [],
      notes: "",
    }
  );
}

export function saveWorkoutLog(workout: WorkoutLog): void {
  const workouts = getWorkoutStorage();

  workouts[workout.date] = workout;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
}

export function getRecentExerciseNames(): string[] {
  const workouts = getWorkoutStorage();

  const sortedWorkouts = Object.values(workouts).sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  const exerciseNames: string[] = [];
  const seenNames = new Set<string>();

  for (const workout of sortedWorkouts) {
    for (const exercise of workout.exercises) {
      const name = exercise.name.trim();

      if (!name) {
        continue;
      }

      const normalizedName = name.toLowerCase();

      if (seenNames.has(normalizedName)) {
        continue;
      }

      seenNames.add(normalizedName);
      exerciseNames.push(name);
    }
  }

  return exerciseNames.slice(0, 8);
}

export function getWorkoutDates(): string[] {
  const workouts = getWorkoutStorage();

  return Object.values(workouts)
    .filter((workout) => workout.exercises.length > 0)
    .map((workout) => workout.date);
}

export function getPreviousWorkout(
  beforeDate: string
): WorkoutLog | null {
  const workouts = getWorkoutStorage();

  const previousWorkouts = Object.values(workouts)
    .filter(
      (workout) =>
        workout.date < beforeDate &&
        workout.exercises.length > 0
    )
    .sort((a, b) => b.date.localeCompare(a.date));

  return previousWorkouts[0] ?? null;
}