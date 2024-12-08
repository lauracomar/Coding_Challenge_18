import React from 'react';
import { Scatter } from 'react-chartjs-2';

const ScatterChart = () => {
    const data = {
        datasets: [
            {
                label: 'expenses vs. profits',
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
            x: { beginAtZero: true, title: { display: true, text: 'expenses' } },
            y: { beginAtZero: true, title: { display: true, text: 'profits' } },
        },
    };

    return <Scatter data={data} options={options} />;
};

export default ScatterChart;

