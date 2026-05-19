import "./HabitsList.css"

const HabitsList = ({habits, deleteHabit, toggleHabit, editHabit}) => {
    return (
        <div>
            <h2>Habits List</h2>

            {habits.map((habit) => (
                <div className="habit-card" key={habit.id}>

                    <div className="habit-left">
            

                        <input type="checkbox" 
                            checked={habit.completed} 
                            onChange={() => toggleHabit(habit.id)} 
                        />

                        <div>
                            <h3>{habit.name}</h3>
                            <p>{habit.time} minutos</p>
                        </div>
                    </div>
                    <button className="edit-btn" onClick={() => editHabit(habit.id)}>e</button>
                    <button className="delete-btn" onClick={() => deleteHabit(habit.id)}>❌</button>
                </div>
            ))}
        </div>
    );
};

export default HabitsList;