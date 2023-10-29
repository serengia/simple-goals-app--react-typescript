import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";

export default function App() {
  type Goal = {
    title: string;
    description: string;
    id: number;
  };

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

  return (
    <main>
      <Header image={{ src: "/goals.jpg", alt: "Set your goals" }}>
        <h1>My Goals</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
