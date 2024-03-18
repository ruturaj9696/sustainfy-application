import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

import jsonData from './DemoGraphs.json';

const PowerGeneration = () => {
  const [monthlySums, setMonthlySums] = useState({});
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // If you're using local JSON data
        const monthlySumsFromJson = processData(jsonData);
        setMonthlySums(monthlySumsFromJson);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Extract unique years
    const uniqueYears = [...new Set(Object.keys(monthlySums).map((monthYear) => monthYear.split('-')[0]))];
    setYears(uniqueYears);
  }, [monthlySums]);

  useEffect(() => {
    // Draw chart once data is available
    if (Object.keys(monthlySums).length > 0 && selectedYear !== '') {
      drawChart(selectedYear);
    }
  }, [monthlySums, selectedYear]);

  const processData = (data) => {
    const monthlySums = {};

    data.forEach((entry) => {
      const date = new Date(entry.Date);
      const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`;
      if (!monthlySums[monthYear]) {
        monthlySums[monthYear] = 0;
      }
      monthlySums[monthYear] += entry['Power Generation at 05:30pm'];
    });

    return monthlySums;
  };

  const drawChart = (year) => {
    const ctx = chartRef.current.getContext('2d');

    // Clear previous chart
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    const filteredData = Object.entries(monthlySums).filter(([key]) =>
      key.startsWith(year)
    );

    const chartData = {
      labels: filteredData.map(([monthYear]) => monthYear),
      datasets: [
        {
          label: 'Power Generation by Month',
          data: filteredData.map(([, sum]) => sum),
          backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color for bars
          borderColor: 'rgba(54, 162, 235, 1)', // Border color
          borderWidth: 1,
        },
      ],
    };

    chartRef.current.chart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Power Generation',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Year-Month',
            },
          },
        },
      },
    });
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
      <h1>Power Generation by Month</h1>
      <div className='display flex justify-center border border-spacing-2 '>
        <label htmlFor="year">Select Year: </label>
        <select id="year" onChange={handleYearChange}>
          <option value="">--Select Year--</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default PowerGeneration;
