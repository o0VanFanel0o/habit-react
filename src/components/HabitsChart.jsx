import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./HabitsChart.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const HabitsChart = ({ habits = [] }) => {
    const completed = habits.filter((habit) => habit.completed).length;
    const pending = habits.length - completed;

    const data = {
        labels: ["Completed", "Pending"],
        datasets: [
        {
            data: [completed, pending],
            backgroundColor: ["#4ade80", "#f87171"],
            borderRadius: 8,
            borderSkipped: false,
        },
        ],
    };

    const options = {
        indexAxis: "y",
        maintainAspectRatio: false,
        plugins: {
        legend: {
            display: false,
        },
        },
        scales: {
        x: {
            beginAtZero: true,
            ticks: {
            stepSize: 1,
            precision: 0,
            },
        },
        },
    };

    if (habits.length === 0) {
        return (
        <div className="chart-container">
            <h2>Habits Progress</h2>
            <p>No hay hábitos para mostrar</p>
        </div>
        );
    }

    return (
        <div className="chart-container">
        <div className="chart-wrapper chart-wrapper--bar">
            <Bar data={data} options={options} />
        </div>
        </div>
    );
    };

export default HabitsChart;
