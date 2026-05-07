import { useState, useEffect } from "react";
import HabitsList from "./components/HabitsList";
import HabitForm from "./components/HabitForm";

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

  const total = habits.length;
  const completed = habits.filter(habit => habit.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed/total)*100);

  const toggleHabit = (id) => {
    const updatedHabits = habits.map(habit => habit.id === id ? {...habit, completed: !habit.completed} : habit);
    setHabits(updatedHabits);
  };

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits))
  }, [habits])

  return (
    <div>
      <h1>Habits Tracker</h1>
      <HabitForm onAddHabit={addHabit}/>
      <h2>Progreso</h2>
      <p>
        {completed} de {total} completados ({percentage}%)
      </p>
      <div style={{
        width: "100%",
        backgroundColor: "#eee",
        borderRadius: "10px",
        overflow: "hidden"
      }}>
      <div style={{
        width: `${percentage}%`,
        backgroundColor: percentage === 100 ? "limegreen" : "orange",
        height: "20px",
        transition: "0.3s"
      }}>
        
      </div>
      

      </div>
      <HabitsList habits={habits} deleteHabit={deleteHabit} toggleHabit={toggleHabit} />
    </div>
  );
}

export default App;