import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const ChartComponent = ({ type, data, options }) => {
    //reference  for canva
    const chartRef = useRef(null);
    let chartInstance = useRef(null);

    useEffect(() => { // initialize the chart
        chartInstance.current = new Chart(chartRef.current, {
            type, //chart type
            data, //data as props
            options, //options as props
        });
        return () => chartInstance.current.destroy();
    }, [type, data, options]);
    return <canvas ref={chartRef} />;
};

export default ChartComponent;