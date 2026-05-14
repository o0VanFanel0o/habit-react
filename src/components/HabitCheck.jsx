import {useState} from "react"

const HabitCheck = ({onAddCheck}) => {
    const [nameCheck, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nameCheck) {
            alert("Por favor, ingresa nombre")
            return;
        }
        const newHabit = {
            id: Date.now(),
            nameCheck
            }
        onAddHabit(newHabit)
        setName("")
    };
    return(
        <form className="habit-check" onSubmit = {handleSubmit}>
            <input type="text" placeholder="Habit name" value={nameCheck} onChange={(e) => setName(e.target.value)}/>
            <button className="button2" type="submit">Agregar Hábito</button>
        </form>
    );
};

export default HabitCheck;