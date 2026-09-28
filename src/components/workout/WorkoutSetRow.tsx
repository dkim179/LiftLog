import type { WorkoutSet } from "../../types/workout";

type WorkoutSetRowProps = {
  set: WorkoutSet;
  setNumber: number;
  onChange: (set: WorkoutSet) => void;
  onDelete: () => void;
};

export function WorkoutSetRow({
  set,
  setNumber,
  onChange,
  onDelete,
}: WorkoutSetRowProps) {
  return (
    <div className="workout-set">
      <span className="workout-set__number">{setNumber}</span>

      <div className="workout-set__input-group">
        <input
          type="number"
          min="0"
          step="2.5"
          placeholder="0"
          value={set.weight ?? ""}
          onChange={(event) =>
            onChange({
              ...set,
              weight:
                event.target.value === ""
                  ? null
                  : Number(event.target.value),
            })
          }
        />

        <span>lb</span>
      </div>

      <div className="workout-set__input-group">
        <input
          type="number"
          min="0"
          placeholder="0"
          value={set.reps ?? ""}
          onChange={(event) =>
            onChange({
              ...set,
              reps:
                event.target.value === ""
                  ? null
                  : Number(event.target.value),
            })
          }
        />

        <span>reps</span>
      </div>

      <button
        className="workout-set__delete"
        type="button"
        onClick={onDelete}
        aria-label={`Delete set ${setNumber}`}
      >
        ×
      </button>
    </div>
  );
}