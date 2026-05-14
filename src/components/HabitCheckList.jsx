const HabitCheckList = ({checks}) => {
    return(
        <div>
            <h2>Daily Checklist</h2>
            {checks.map((check) => (
            <div key={check.id}>
                <input type="checkbox"/>
                <span>{check.nameCheck}</span>

            </div>
            ))}
        </div>
    )
}

export default HabitCheckList