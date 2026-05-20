import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import "./HabitsChart.css";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const HabitsChart = ({ habits = [] }) => {
    const completed = habits.filter((habit) => habit.completed).length;
    const pending = habits.length - completed;

    const data = {
        labels: ["Completed", "Pending"],
        datasets: [
        {
            data: [completed, pending],
            backgroundColor: ["#4ade80", "#f87171"],
            borderWidth: 0,
        },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
        legend: {
            position: "bottom",
        },
        },
    };

    if (habits.length === 0) {
        return (
        <div className="chart-container">
            <h2>Habits Progress</h2>
            <p>No hay hábitos para mostrar.</p>
        </div>
        );
    }

    return (
        <div className="chart-container">
        <h2>Habits Progress</h2>
        <div className="chart-wrapper">
            <PolarArea data={data} options={options} />
        </div>
        </div>
    );
};

export default HabitsChart;
