import { useState } from "react";
import "./HabitForm.css"

const HabitForm = ({onAddHabit}) => {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !time) {
            alert("Por favor, ingresa un nombre y un tiempo válidos.");
            return;
        }
        if (isNaN(time) || Number(time) <= 0) {
            alert("Por favor, ingresa un tiempo válido.");
            return;
        }
        const newHabit = {
            id: Date.now(),
            name,
            time
        };
        
        onAddHabit(newHabit);
        setName("");
        setTime("");
    };
    return (
        <form className="habit-form" onSubmit = {handleSubmit}>
            <input type="text" placeholder="Habit Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Habit Time" value={time} onChange={(e) => setTime(e.target.value)} />
            <button type="submit">Agregar Hábito</button>
        </form>
    );
};

export default HabitForm;