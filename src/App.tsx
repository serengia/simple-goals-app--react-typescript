import { useState } from "react";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type Goal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoalHandler = (goalText: string, summaryText: string) => {
    setGoals((prev) => {
      const newGoal: Goal = {
        title: goalText,
        description: summaryText,
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
      <NewGoal onAddGoal={addGoalHandler} />
      <CourseGoalList goals={goals} deleteGoal={deleteGoalHandler} />
    </main>
  );
}
