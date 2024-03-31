import { ArcElement, CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, Tooltip, } from "chart.js";
import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { getLast7Days } from "../../lib/features";

ChartJS.register(Tooltip, CategoryScale, LinearScale, LineElement, PointElement, Filler, ArcElement, Legend);

const labels = getLast7Days();

const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },

    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            },
        },
    },
};

const LineChart = ({ value = [] }) => {
    const data = {
        labels,
        datasets: [
            {
                data: value,
                label: "Messages",
                fill: true,
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderColor: 'rgba(0,0,0,0.5)'
            },
        ],
    };

    return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    cutout: 120,
};

const DoughnutChart = ({ value = [], labels = [] }) => {
    const data = {
        labels,
        datasets: [
            {
                data: value,
                backgroundColor: ['rgba(0,0,0,0.3)', 'rgba(180,100,180,0.3)'],
                hoverBackgroundColor: ['rgba(0,0,0,0.6)', 'rgba(180,100,180,0.6)'],
                borderColor: ['rgba(0,0,0,0.9)', 'rgba(180,100,180,0.9)'],
                offset: 40,
            },
        ],
    };
    return (
        <Doughnut style={{ zIndex: 10 }} data={data} options={doughnutChartOptions} />
    );
};

export { DoughnutChart, LineChart };