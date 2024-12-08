import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
    const barChartData = {
        labels: data.months,  // x-axis labels from data
        datasets: [
            {
                label: 'Monthly Sales',
                data: data.sales,   // y-axis values from data
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barChartOptions = {
        scales: {
            y: {
                beginAtZero: true // Ensures the Y-axis starts from zero for a consistent scale
            },
        },
    };

    return <ChartComponent type="bar" data={barChartData} options={barChartOptions} />; // Passes type, data, and options props to ChartComponent to render the bar chart
};

export default BarChart;
