import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";

export default function App() {
  return (
    <main>
      <Header image={{ src: "/goals.jpg", alt: "Set your goals" }}>
        <h1>My Goals</h1>
      </Header>
      <CourseGoal title="React Typescript Goals App">
        <p>Create simple Goals App with React and Typescript</p>
      </CourseGoal>
    </main>
  );
}
