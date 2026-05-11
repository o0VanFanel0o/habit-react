const ProgressSummary = ({habits}) => {

    const total = habits.length;
    const completed = habits.filter(habit => habit.completed).length;
    const percentage = total === 0 ? 0 : Math.round((completed/total)*100);

    return (
        <div>
            <h2>Progreso</h2>

            <p>
                {completed} de {total} completados ({percentage}%)
            </p>
            <div style={{
                width: "100%",
                backgroundColor: "#eee",
                borderRadius: "10px",
                overflow: "hidden"
            }}>
                <div style={{
                    width: `${percentage}%`,
                    backgroundColor: percentage === 100 ? "limegreen" : "orange",
                    height: "20px",
                    transition: "0.3s"
                }}
                ></div>
            </div>
        </div>
    )
}

export default ProgressSummary