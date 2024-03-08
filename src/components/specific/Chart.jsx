import React from 'react'
import { Line, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, Tooltip, Filler, LinearScale, PointElement, LineElement, ArcElement, Legend } from 'chart.js'
import { BorderColor } from '@mui/icons-material'
import { getLast7Days } from '../../lib/features'
import { dark } from '@mui/material/styles/createPalette'

ChartJS.register(CategoryScale, Tooltip, Filler, LinearScale, PointElement, LineElement, ArcElement, Legend)

const labels = getLast7Days()

const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false
        }
    },
    scales: {
        x: {
            grid: { display: false }
        },
        y: {
            beginAtZero: true,
            grid: { display: false }
        }
    }
}

const LineChart = ({ value = [] }) => {
    const data = {
        labels,
        datasets: [{
            data: value,
            label: 'rev',
            backgroundColor: 'rgba(0,0,0,0.1)',
            fill: true,
            borderColor: 'rgba(0,0,0,0.5)'
        }]
    }
    return (
        <Line data={data} options={lineChartOptions}></Line>
    )
}

const dougnoutChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        }
    },
    cutout: 120
}

const DoughnutChart = ({ value = [], labels = [] }) => {
    const data = {
        labels,
        datasets: [{
            data: value,
            label: 'Total Chats vs Group Chats',
            backgroundColor: ['rgba(0,0,0,0.3)', 'rgba(180,100,180,0.3)'],
            hoverBackgroundColor: ['rgba(0,0,0,0.6)', 'rgba(180,100,180,0.6)'],
            borderColor: ['rgba(0,0,0,0.9)', 'rgba(180,100,180,0.9)'],
            offset: 10
        }]
    }
    return (
        <Doughnut data={data} options={dougnoutChartOptions} style={{ zIndex: 10 }} />
    )
}

export { LineChart, DoughnutChart }