const HabitsList = ({habits, deleteHabit, toggleHabit}) => {
    return (
        <div>
            <h2>Habits List</h2>
                {habits.map((habit) => (
                    <div key={habit.id}>
                        <input type="checkbox" 
                        checked={habit.completed} 
                        onChange={() => toggleHabit(habit.id)} />
                        <p>{habit.name} - {habit.time} minutos</p>
                        <button onClick={() => deleteHabit(habit.id)}>❌</button>
                    </div>
                ))}
        </div>
    );
};

export default HabitsList;