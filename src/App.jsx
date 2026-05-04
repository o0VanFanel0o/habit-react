import { useState } from "react";
import HabitsList from "./components/HabitsList";

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: "Read", time: 30, completed: false },
    { id: 2, name: "Exercise", time: 45, completed: true },
  ]);
  return (
    <div>
      <h1>Habits Tracker</h1>
      <HabitsList habits={habits}/>
    </div>
  );
}

export default App;