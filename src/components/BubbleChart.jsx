import React from 'react';
import { Bubble } from 'react-chartjs-2';

const BubbleChart = () => {
    const data = {
        datasets: [
            {
                label: 'Sales Analysis',
                data: [
                    { x: 10, y: 20, r: 15 },
                    { x: 25, y: 30, r: 10 }
                ],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: { enabled: true },
        },
        scales: {
            x: { beginAtZero: true, title: { display: true, text: 'Sales Volume' } },
            y: { beginAtZero: true, title: { display: true, text: 'Revenue' } },
        },
    };

    return <Bubble data={data} options={options} />;
};

export default BubbleChart;
