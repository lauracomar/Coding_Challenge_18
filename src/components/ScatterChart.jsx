import React from 'react';
import { Scatter } from 'react-chartjs-2';

const ScatterChart = () => {
    const data = {
        datasets: [
            {
                label: 'Expenses vs. Profits',
                data: [
                    { x: 10, y: 20 },
                    { x: 15, y: 25 }
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    const options = {
        scales: {
            x: { beginAtZero: true, title: { display: true, text: 'Expenses' } },
            y: { beginAtZero: true, title: { display: true, text: 'Profits' } },
        },
    };

    return <Scatter data={data} options={options} />;
};

export default ScatterChart;

