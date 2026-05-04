import { useState } from "react";

function App() {

  const [selectedDay, setSelectedDay] = useState("L");

  const days = ["L","Ma","Mi","J","V","S","D"];

  return (
    <div style={{ padding: "20px" }}>
      
      <h1>Día seleccionado: {selectedDay}</h1>

      <div style={{ display: "flex", gap: "10px" }}>
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            style={{
              padding: "10px",
              borderRadius: "50%",
              background: selectedDay === day ? "black" : "lightgray",
              color: selectedDay === day ? "white" : "black"
            }}
          >
            {day}
          </button>
        ))}
      </div>

    </div>
  );
}

export default App;