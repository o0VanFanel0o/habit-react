import { useState, useEffect } from "react";
import HabitsList from "./components/HabitsList";
import HabitForm from "./components/HabitForm";
import ProgressSummary from "./components/ProgressSummary";
import FilterButtons from "./components/FilterButtons";
import HabitCheck from "./components/HabitCheck";
import HabitCheckList from "./components/HabitCheckList";
import StatsCards from "./components/StatsCards";

function App() {
  const [habits, setHabits] = useState(() => {
    const saveHabits = localStorage.getItem("habits");
    return saveHabits ? JSON.parse(saveHabits) : [];
  })

  const [checks, setChecks] = useState(() => {
    const saveChecks = localStorage.getItem("checks");
    return saveChecks ? JSON.parse(saveChecks) : [];
  })

  const [filter, setFilter] = useState("all")


  const addHabit = (newHabit) => {
    setHabits([...habits, { ...newHabit, completed: false }]);
  };

  const addCheck = (newCheck) => {
    setChecks([...checks, {...newCheck, completed: false}])
  }

  const deleteHabit = (id) => {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabits);
  };



  const toggleHabit = (id) => {
    const updatedHabits = habits.map(habit => habit.id === id ? {...habit, completed: !habit.completed} : habit);
    setHabits(updatedHabits);
  };

  const toggleCheck = (id) => {
    setChecks((prev) =>
      prev.map((check) =>
        check.id === id ? { ...check, completed: !check.completed } : check
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])

  useEffect(() => {
    localStorage.setItem("checks", JSON.stringify(checks))
  }, [checks])

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
    <div className="layout">
      <aside className="left-sidebar">

        <HabitForm onAddHabit={addHabit}/>

        <HabitCheck onAddCheck={addCheck}/>

      </aside>
      <main className="main-content">
        <h1>Habits Tracker</h1>

        <StatsCards habits={habits} check={checks}/>

        <ProgressSummary habits={habits}/>

        <FilterButtons filter={filter} setFilter={setFilter}/>

        <HabitsList habits={filteredHabits} deleteHabit={deleteHabit} toggleHabit={toggleHabit}/>

      </main>
      <aside className="right-sidebar">
        <HabitCheckList checks={checks} toggleCheck={toggleCheck}/>

      </aside>
    </div>
  );
}

export default App;