import "./StatsCards.css";

const StatsCards = ({habits, check}) => {
    const totalHabits = habits.length;

    const completedHabits = habits.filter (
        (habit) => habit.completed).length;
    
    const pendingHabits = habits.filter (
        (habit) => !habit.completed).length;
    
    const totalChecks = check.length;

    return (
        <div className="stats-container">

            <div className="stat-card">
                <h3>{totalHabits}</h3>
                <p>Total Habits</p>
            </div>

            <div className="stat-card">
                <h3>{completedHabits}</h3>
                <p>Completed</p>
            </div>

            <div className="stat-card">
                <h3>{pendingHabits}</h3>
                <p>Pending</p>
            </div>

            <div className="stat-card">
                <h3>{totalChecks}</h3>
                <p>Daly Checks</p>
            </div>

        </div>
    )
}

export default StatsCards;