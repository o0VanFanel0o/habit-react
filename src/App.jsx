import { useState } from "react";
import HabitsList from "./components/HabitsList";
import HabitForm from "./components/HabitForm";

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: "Read", time: 30, completed: false },
    { id: 2, name: "Exercise", time: 45, completed: true },
  ]);

  const addHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };
  const deleteHabit = (id) => {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabits);
  };
  return (
    <div>
      <h1>Habits Tracker</h1>
      <HabitForm onAddHabit={addHabit}/>
      <HabitsList habits={habits} onDeleteHabit={deleteHabit}/>
    </div>
  );
}

export default App;