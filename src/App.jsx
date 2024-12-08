import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/data/financial_data.json')
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!chartData) {
    return <div>loading data...</div>;
  }

  const { months, sales, profits, expenses } = chartData;

  return (
    <div>
      <h1>Dashboard</h1>
      <BarChart months={months} sales={sales} />
      <LineChart months={months} profits={profits} />
      <ScatterChart expenses={expenses} profits={profits} />
      <BubbleChart sales={sales} expenses={expenses} profits={profits} />
    </div>
  );
}

export default App;
