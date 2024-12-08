import React from 'react';
import { Bubble } from 'react-chartjs-2';

const BubbleChart = () => {
    const data = {
        datasets: [
            {
                label: 'sales analysis',
                data: [
                    { x: 10, y: 20, r: 15 },
                    { x: 25, y: 30, r: 10 }
                ],
                backgroundColor: 'rgba(155, 105, 260, 0.6)',
            },
        ],
    };

    const options = {
        plugins: {
            tooltip: { enabled: true },
        },
        scales: {
            x: { beginAtZero: true, title: { display: true, text: 'sales volume' } },
            y: { beginAtZero: true, title: { display: true, text: 'revenue' } },
        },
    };

    return <Bubble data={data} options={options} />;
};

export default BubbleChart;
