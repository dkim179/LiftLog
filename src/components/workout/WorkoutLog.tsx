import { useEffect, useState } from "react";

import type {
    Exercise,
    WorkoutLog as WorkoutLogType,
} from "../../types/workout";

import { formatDateKey } from "../../utils/date";

import {
    getPreviousWorkout,
    getRecentExerciseNames,
    getWorkoutLog,
    saveWorkoutLog,
} from "../../utils/workoutStorage";

import { ExerciseCard } from "./ExerciseCard";

type WorkoutLogProps = {
    selectedDate: Date;
    onWorkoutChange: () => void;
};

export function WorkoutLog({ selectedDate, onWorkoutChange, }: WorkoutLogProps) {
    const dateKey = formatDateKey(selectedDate);

    const [workout, setWorkout] = useState<WorkoutLogType>(() =>
        getWorkoutLog(dateKey)
    );

    const [isExercisePickerOpen, setIsExercisePickerOpen] =
        useState(false);

    const [recentExercises, setRecentExercises] = useState<string[]>([]);

    const previousWorkout = getPreviousWorkout(dateKey);

    useEffect(() => {
        setWorkout(getWorkoutLog(dateKey));
        setIsExercisePickerOpen(false);
    }, [dateKey]);

    useEffect(() => {
        if (workout.date === dateKey) {
            saveWorkoutLog(workout);
            onWorkoutChange();
        }
    }, [workout, dateKey, onWorkoutChange]);

    function openExercisePicker() {
        setRecentExercises(getRecentExerciseNames());
        setIsExercisePickerOpen(true);
    }

    function createExercise(name = "") {
        const newExercise: Exercise = {
            id: crypto.randomUUID(),
            name,
            sets: [
                {
                    id: crypto.randomUUID(),
                    weight: null,
                    reps: null,
                },
            ],
        };

        setWorkout((currentWorkout) => ({
            ...currentWorkout,
            exercises: [...currentWorkout.exercises, newExercise],
        }));

        setIsExercisePickerOpen(false);
    }

    function handleExerciseChange(updatedExercise: Exercise) {
        setWorkout((currentWorkout) => ({
            ...currentWorkout,
            exercises: currentWorkout.exercises.map((exercise) =>
                exercise.id === updatedExercise.id
                    ? updatedExercise
                    : exercise
            ),
        }));
    }

    function handleDeleteExercise(exerciseId: string) {
        setWorkout((currentWorkout) => ({
            ...currentWorkout,
            exercises: currentWorkout.exercises.filter(
                (exercise) => exercise.id !== exerciseId
            ),
        }));
    }

    function handleRepeatPreviousWorkout() {
        if (!previousWorkout) {
            return;
        }

        const copiedExercises: Exercise[] =
            previousWorkout.exercises.map((exercise) => ({
                ...exercise,

                id: crypto.randomUUID(),

                sets: exercise.sets.map((set) => ({
                    ...set,
                    id: crypto.randomUUID(),
                })),
            }));

        setWorkout({
            date: dateKey,
            exercises: copiedExercises,
            notes: "",
        });
    }

    const formattedDate = selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    const previousWorkoutDate = previousWorkout
        ? new Date(`${previousWorkout.date}T12:00:00`).toLocaleDateString(
            "en-US",
            {
                month: "short",
                day: "numeric",
            }
        )
        : null;

    return (
        <section className="workout-log">
            <div className="workout-log__header">
                <div>
                    <p className="workout-log__date">{formattedDate}</p>
                    <h2>Workout Log</h2>
                </div>

                <div className="workout-log__header-actions">
                    {workout.exercises.length === 0 && previousWorkout && (
                        <button
                            className="workout-log__repeat"
                            type="button"
                            onClick={handleRepeatPreviousWorkout}
                        >
                            Repeat {previousWorkoutDate} Workout
                        </button>
                    )}

                    <button
                        className="workout-log__add-exercise"
                        type="button"
                        onClick={openExercisePicker}
                    >
                        + Add Exercise
                    </button>
                </div>
            </div>

            {isExercisePickerOpen && (
                <div className="exercise-picker">
                    <div className="exercise-picker__header">
                        <div>
                            <p className="exercise-picker__eyebrow">
                                EXERCISE LIBRARY
                            </p>

                            <h3>Add Exercise</h3>
                        </div>

                        <button
                            className="exercise-picker__close"
                            type="button"
                            onClick={() => setIsExercisePickerOpen(false)}
                            aria-label="Close exercise picker"
                        >
                            ×
                        </button>
                    </div>

                    {recentExercises.length > 0 && (
                        <div className="exercise-picker__recent">
                            <p className="exercise-picker__label">RECENT</p>

                            <div className="exercise-picker__list">
                                {recentExercises.map((exerciseName) => (
                                    <button
                                        key={exerciseName.toLowerCase()}
                                        className="exercise-picker__exercise"
                                        type="button"
                                        onClick={() => createExercise(exerciseName)}
                                    >
                                        <span>{exerciseName}</span>
                                        <span className="exercise-picker__plus">+</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {recentExercises.length === 0 && (
                        <p className="exercise-picker__empty">
                            Your recently used exercises will appear here.
                        </p>
                    )}

                    <button
                        className="exercise-picker__create"
                        type="button"
                        onClick={() => createExercise()}
                    >
                        + Create New Exercise
                    </button>
                </div>
            )}

            {workout.exercises.length === 0 ? (
                <div className="workout-log__empty">
                    <p>No workout logged for this day.</p>
                    <span>Add your first exercise to start tracking.</span>
                </div>
            ) : (
                <div className="workout-log__exercises">
                    {workout.exercises.map((exercise) => (
                        <ExerciseCard
                            key={exercise.id}
                            exercise={exercise}
                            onChange={handleExerciseChange}
                            onDelete={() => handleDeleteExercise(exercise.id)}
                        />
                    ))}
                </div>
            )}

            <textarea
                className="workout-log__notes"
                placeholder="Workout notes..."
                value={workout.notes}
                onChange={(event) =>
                    setWorkout((currentWorkout) => ({
                        ...currentWorkout,
                        notes: event.target.value,
                    }))
                }
            />
        </section>
    );
}