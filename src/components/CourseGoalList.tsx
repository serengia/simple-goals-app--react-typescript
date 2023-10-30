import CourseGoal from "./CourseGoal";
import { Goal } from "../App";

type CourseGoalListProps = {
  goals: Goal[];
  deleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  deleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} id={goal.id} deleteGoal={deleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
