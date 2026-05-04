const HabitsList = ({habits}) => {
    return (
        <div>
            <h2>Habits List</h2>
            <ul>
                {habits.map((habit) => (
                    <p key={habit.id}>{habit.name} - {habit.time} minutes</p>
                ))}
            </ul>
    </div>
  );
};

export default HabitsList;