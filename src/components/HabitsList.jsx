const HabitsList = ({habits, onDeleteHabit}) => {
    return (
        <div>
            <h2>Habits List</h2>
                {habits.map((habit) => (
                    <p key={habit.id}>{habit.name} - {habit.time} minutos
                    <button className="deleteButton" onClick={() => onDeleteHabit(habit.id)}>❌</button>
                    </p>
                ))}
    </div>
  );
};

export default HabitsList;