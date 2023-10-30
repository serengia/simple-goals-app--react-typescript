import { type FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (goalText: string, summaryText: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const goalText = goal.current!.value;
    const summaryText = summary.current!.value;

    // Reset form inputs
    event.currentTarget.reset();

    // Trigger add
    onAddGoal(goalText, summaryText);
  };
  return (
    <form onSubmit={submitFormHandler}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} required />
      </p>
      <p>
        <label htmlFor="summary">Goal summary</label>
        <input id="summary" type="text" ref={summary} required />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
