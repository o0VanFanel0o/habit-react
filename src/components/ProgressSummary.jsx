import "./ProgressSummary.css"

const ProgressSummary = ({habits}) => {

    const total = habits.length;
    const completed = habits.filter(habit => habit.completed).length;
    const percentage = total === 0 ? 0 : Math.round((completed/total)*100);

    return (
        <div className="progress-summary">
            <h2>Progreso</h2>

            <p>
                {completed} de {total} completados ({percentage}%)
            </p>
            <div className="progress-bar">
                <div className="progress-fill"
                style={{width: `${percentage}%`,
                backgroundColor: percentage === 100 ? "limegreen" : "orange" }}
                ></div>
            </div>
        </div>
    )
}

export default ProgressSummary