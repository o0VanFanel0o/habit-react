const HabitCheckList = ({checks, toggleCheck}) => {
    return(
        <div>
            <h2>Daily Checklist</h2>
            {checks.map((check) => (
            <div key={check.id}>
                <input type="checkbox" checked={!!check.completed} onChange={() => toggleCheck(check.id)}/>
                <span>{check.nameCheck}</span>
            </div>
            ))}
        </div>
    )
}

export default HabitCheckList