import type { Exercise, WorkoutSet } from "../../types/workout";
import { WorkoutSetRow } from "./WorkoutSetRow";

type ExerciseCardProps = {
    exercise: Exercise;
    onChange: (exercise: Exercise) => void;
    onDelete: () => void;
};

export function ExerciseCard({
    exercise,
    onChange,
    onDelete,
}: ExerciseCardProps) {
    function handleAddSet() {
        const newSet: WorkoutSet = {
            id: crypto.randomUUID(),
            weight: null,
            reps: null,
        };

        onChange({
            ...exercise,
            sets: [...exercise.sets, newSet],
        });
    }

    function handleDuplicateLastSet() {
        const lastSet = exercise.sets.at(-1);

        if (!lastSet) {
            handleAddSet();
            return;
        }

        const duplicatedSet: WorkoutSet = {
            ...lastSet,
            id: crypto.randomUUID(),
        };

        onChange({
            ...exercise,
            sets: [...exercise.sets, duplicatedSet],
        });
    }

    function handleSetChange(updatedSet: WorkoutSet) {
        onChange({
            ...exercise,
            sets: exercise.sets.map((set) =>
                set.id === updatedSet.id ? updatedSet : set
            ),
        });
    }

    function handleDeleteSet(setId: string) {
        onChange({
            ...exercise,
            sets: exercise.sets.filter((set) => set.id !== setId),
        });
    }

    return (
        <article className="exercise-card">
            <div className="exercise-card__header">
                <input
                    className="exercise-card__name"
                    type="text"
                    placeholder="Exercise name"
                    value={exercise.name}
                    onChange={(event) =>
                        onChange({
                            ...exercise,
                            name: event.target.value,
                        })
                    }
                />

                <button
                    className="exercise-card__delete"
                    type="button"
                    onClick={onDelete}
                >
                    Delete
                </button>
            </div>

            <div className="exercise-card__labels">
                <span>SET</span>
                <span>WEIGHT</span>
                <span>REPS</span>
                <span />
            </div>

            <div className="exercise-card__sets">
                {exercise.sets.map((set, index) => (
                    <WorkoutSetRow
                        key={set.id}
                        set={set}
                        setNumber={index + 1}
                        onChange={handleSetChange}
                        onDelete={() => handleDeleteSet(set.id)}
                    />
                ))}
            </div>

            <div className="exercise-card__actions">
                <button
                    className="exercise-card__add-set"
                    type="button"
                    onClick={handleAddSet}
                >
                    + Add Set
                </button>

                {exercise.sets.length > 0 && (
                    <button
                        className="exercise-card__duplicate-set"
                        type="button"
                        onClick={handleDuplicateLastSet}
                    >
                        Duplicate Last Set
                    </button>
                )}
            </div>
        </article>
    );
}
