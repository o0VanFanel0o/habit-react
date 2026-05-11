import { useState, useEffect } from "react";
import HabitsList from "./components/HabitsList";
import HabitForm from "./components/HabitForm";
import ProgressSummary from "./components/ProgressSummary";

function App() {
  const [habits, setHabits] = useState(() => {
    const saveHabits = localStorage.getItem("habits");

    return saveHabits ? JSON.parse(saveHabits) : [];
  })

  const addHabit = (newHabit) => {
    setHabits([...habits, { ...newHabit, completed: false }]);
  };
  const deleteHabit = (id) => {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabits);
  };



  const toggleHabit = (id) => {
    const updatedHabits = habits.map(habit => habit.id === id ? {...habit, completed: !habit.completed} : habit);
    setHabits(updatedHabits);
  };

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])

  return (
    <div className="app">
      <h1>Habits Tracker</h1>
      <HabitForm onAddHabit={addHabit}/>

      <ProgressSummary habits={habits}/>

      <HabitsList habits={habits} deleteHabit={deleteHabit} toggleHabit={toggleHabit} />
    </div>
  );
}

export default App;