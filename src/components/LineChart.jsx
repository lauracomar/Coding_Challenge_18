import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
    const lineChartData = {
        labels: data.months,
        datasets: [
            {
                label: 'monthly profits',
                data: data.profits,
                borderColor: 'rgba(75, 192, 192, 0.2)',
                backgroundColor: 'rgba(75, 192, 192, 1)',
                fill: true,
            },
        ],
    };

    const lineChartOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'monthly profits' },
        },
    };

    return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;
};

export default LineChart;
