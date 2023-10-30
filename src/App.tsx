import { useState } from "react";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";

export type Goal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoalHandler = () => {
    setGoals((prev) => {
      const newGoal: Goal = {
        title: "Goal one",
        description: "Goal one description",
        id: Math.random() + Math.random(),
      };
      return [newGoal, ...prev];
    });
  };

  const deleteGoalHandler = (id: number) => {
    setGoals((prev) => prev.filter((g) => g.id !== id));
  };

  return (
    <main>
      <Header image={{ src: "/goals.jpg", alt: "Set your goals" }}>
        <h1>My Goals</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      <CourseGoalList goals={goals} deleteGoal={deleteGoalHandler} />
    </main>
  );
}
