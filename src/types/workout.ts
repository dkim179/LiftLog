export type WorkoutSet = {
  id: string;
  weight: number | null;
  reps: number | null;
};

export type Exercise = {
  id: string;
  name: string;
  sets: WorkoutSet[];
};

export type WorkoutLog = {
  date: string;
  exercises: Exercise[];
  notes: string;
};