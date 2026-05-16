import {useState} from "react"
import "./HabitCheck.css"

const HabitCheck = ({onAddCheck}) => {
    const [nameCheck, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nameCheck) {
            alert("Por favor, ingresa nombre")
            return;
        }
        const newCheck = {
            id: Date.now(),
            nameCheck
            }
        onAddCheck(newCheck)
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