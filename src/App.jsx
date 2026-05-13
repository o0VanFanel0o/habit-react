import { useState, useEffect } from "react";
import HabitsList from "./components/HabitsList";
import HabitForm from "./components/HabitForm";
import ProgressSummary from "./components/ProgressSummary";
import FilterButtons from "./components/FilterButtons";
import HabitCheck from "./components/HabitCheck";

function App() {
  const [habits, setHabits] = useState(() => {
    const saveHabits = localStorage.getItem("habits");

    return saveHabits ? JSON.parse(saveHabits) : [];
  })

  const [filter, setFilter] = useState("all")


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

  const filteredHabits = habits.filter((habit) => {
    if (filter === "completed"){
      return habit.completed
    }
    if (filter === "pending"){
      return !habit.completed
    }
    return true
  })

  return (
    <div className="app">
      <h1>Habits Tracker</h1>
      <HabitForm onAddHabit={addHabit}/>

      <HabitCheck onAddHabit={addHabit}/>

      <ProgressSummary habits={habits}/>

      <FilterButtons filter={filter} setFilter={setFilter}/>

      <HabitsList habits={filteredHabits} deleteHabit={deleteHabit} toggleHabit={toggleHabit}/>
    </div>
  );
}

export default App;