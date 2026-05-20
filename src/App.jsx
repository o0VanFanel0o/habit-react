import { useState, useEffect } from "react";
import HabitsList from "./components/HabitsList";
import HabitForm from "./components/HabitForm";
import ProgressSummary from "./components/ProgressSummary";
import FilterButtons from "./components/FilterButtons";
import HabitCheck from "./components/HabitCheck";
import HabitCheckList from "./components/HabitCheckList";
import StatsCards from "./components/StatsCards";
import HabitsChart from "./components/HabitsChart";

function App() {
  const [habits, setHabits] = useState(() => {
    try {
      const saveHabits = localStorage.getItem("habits");
      return saveHabits ? JSON.parse(saveHabits) : [];
    } catch {
      return [];
    }
  });

  const [checks, setChecks] = useState(() => {
    try {
      const saveChecks = localStorage.getItem("checks");
      return saveChecks ? JSON.parse(saveChecks) : [];
    } catch {
      return [];
    }
  });

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
  
  const editHabit = (id) => {
    const newName = prompt("Nuevo nombre:");

    if(!newName) return;

    const uptadeHabits = habits.map((habit) =>
      habit.id === id ? {...habit, name:newName} : habit);
    setHabits(uptadeHabits)
  }
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

        <HabitsChart habits={habits} />

        <ProgressSummary habits={habits}/>

        <FilterButtons filter={filter} setFilter={setFilter}/>

        <HabitsList habits={filteredHabits} deleteHabit={deleteHabit} toggleHabit={toggleHabit} editHabit={editHabit}/>

      </main>
      <aside className="right-sidebar">
        <HabitCheckList checks={checks} toggleCheck={toggleCheck}/>

      </aside>
    </div>
  );
}

export default App;