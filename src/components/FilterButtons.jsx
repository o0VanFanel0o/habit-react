import "./FilterButtons.css"

const FilterButtons = ({filter, setFilter}) => {

    return (
        <div className="filters">

            <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>Todos</button>
            <button className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>Completados</button>
            <button className={filter === "pending" ? "active" : ""}onClick={() => setFilter("pending")}>Pendientes</button>

        </div>
    )
}

export default FilterButtons