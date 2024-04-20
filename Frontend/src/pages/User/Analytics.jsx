// Working code for static data :

// import React, { useEffect, useState, useRef } from "react";
// import Chart from "chart.js/auto"; // Import Chart.js

// import jsonData from "./DemoGraphs.json";
// import { json } from "react-router-dom";

// const Analytics = () => {
//   const [monthlySums, setMonthlySums] = useState({});
//   const [years, setYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState("");
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // If you're using local JSON data
//         const monthlySumsFromJson = processData(jsonData);
//         // console.log(monthlySumsFromJson)  //Printing sum of each month in a year for all years
//         setMonthlySums(monthlySumsFromJson);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Extract unique years
//     const uniqueYears = [
//       ...new Set(
//         Object.keys(monthlySums).map((monthYear) => monthYear.split("-")[0])
//       ),
//     ];
//     setYears(uniqueYears);
//   }, [monthlySums]);

//   useEffect(() => {
//     // Draw chart once data is available
//     if (Object.keys(monthlySums).length > 0 && selectedYear !== "") {
//       drawChart(selectedYear);
//     }
//   }, [monthlySums, selectedYear]);

//   const processData = (data) => {
//     const monthlySums = {};

//     data.forEach((entry) => {
//       const date = new Date(entry.Date);
//       const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1)
//         .toString()
//         .padStart(2, "0")}`;
//       if (!monthlySums[monthYear]) {
//         monthlySums[monthYear] = 0;
//       }
//       monthlySums[monthYear] += entry["Power Generation at 05:30pm"];
//     });

//     return monthlySums;
//   };

//   const drawChart = (year) => {
//     const ctx = chartRef.current.getContext("2d");

//     // Clear previous chart
//     if (chartRef.current.chart) {
//       chartRef.current.chart.destroy();
//     }

//     const filteredData = Object.entries(monthlySums).filter(([key]) =>
//       key.startsWith(year)
//     );

//     const chartData = {
//       labels: filteredData.map(([monthYear]) => monthYear),
//       datasets: [
//         {
//           label: "Power Generation by Month",
//           data: filteredData.map(([, sum]) => sum),
//           backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue color for bars
//           borderColor: "rgba(54, 162, 235, 1)", // Border color
//           borderWidth: 1,
//         },
//       ],
//     };

//     chartRef.current.chart = new Chart(ctx, {
//       type: "bar",
//       data: chartData,
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             title: {
//               display: true,
//               text: "Power Generation",
//             },
//           },
//           x: {
//             title: {
//               display: true,
//               text: "Year-Month",
//             },
//           },
//         },
//       },
//     });
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Power Generation by Month</h1>
//       <div className="display flex justify-center border border-spacing-2 ">
//         <label htmlFor="year">Select Year: </label>
//         <select id="year" onChange={handleYearChange}>
//           <option value="">--Select Year--</option>
//           {years.map((year) => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>
//       <canvas ref={chartRef} width="400" height="400"></canvas>
//     </div>
//   );
// };

// export default Analytics;

// import React, { useEffect, useState, useRef } from 'react';
// import Chart from 'chart.js/auto'; // Import Chart.js

// import jsonData from './DemoGraphs.json';

// const Analytics = () => {
//   const [monthlySums, setMonthlySums] = useState({});
//   const [years, setYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState('');
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // If you're using local JSON data
//         const monthlySumsFromJson = processData(jsonData);
//         setMonthlySums(monthlySumsFromJson);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     // Extract unique years
//     const uniqueYears = [...new Set(Object.keys(monthlySums).map((monthYear) => monthYear.split('-')[0]))];
//     setYears(uniqueYears);
//   }, [monthlySums]);

//   useEffect(() => {
//     // Draw chart once data is available
//     if (Object.keys(monthlySums).length > 0 && selectedYear !== '') {
//       drawChart(selectedYear);
//     }
//   }, [monthlySums, selectedYear]);

//   const processData = (data) => {
//     const monthlySums = {};

//     data.forEach((entry) => {
//       const date = new Date(entry.Date);
//       const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1)
//         .toString()
//         .padStart(2, '0')}`;
//       if (!monthlySums[monthYear]) {
//         monthlySums[monthYear] = 0;
//       }
//       monthlySums[monthYear] += entry['Power Generation at 11:00pm'];
//     });

//     return monthlySums;
//   };

//   const drawChart = (year) => {
//     const ctx = chartRef.current.getContext('2d');

//     // Clear previous chart
//     if (chartRef.current.chart) {
//       chartRef.current.chart.destroy();
//     }

//     const filteredData = Object.entries(monthlySums).filter(([key]) =>
//       key.startsWith(year)
//     );

//     const chartData = {
//       labels: filteredData.map(([monthYear]) => monthYear),
//       datasets: [
//         {
//           label: 'Power Generation by Month',
//           data: filteredData.map(([, sum]) => sum),
//           backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue color for bars
//           borderColor: 'rgba(54, 162, 235, 1)', // Border color
//           borderWidth: 1,
//         },
//       ],
//     };

//     chartRef.current.chart = new Chart(ctx, {
//       type: 'bar',
//       data: chartData,
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             title: {
//               display: true,
//               text: 'Power Generation',
//             },
//           },
//           x: {
//             title: {
//               display: true,
//               text: 'Year-Month',
//             },
//           },
//         },
//       },
//     });
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Power Generation by Month</h1>
//       <div className='display flex justify-center border border-spacing-2 '>
//         <label htmlFor="year">Select Year: </label>
//         <select id="year" onChange={handleYearChange}>
//           <option value="">--Select Year--</option>
//           {years.map((year) => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>
//       <canvas ref={chartRef} width="400" height="400"></canvas>
//     </div>
//   );
// };

// export default Analytics;

// import React, { useState, useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import jsonData from './DemoGraphs.json'; // Import sample data

// const Analytics = ({ userData }) => {
//   const [monthlySums, setMonthlySums] = useState({});
//   const [years, setYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState('');
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const monthlySumsFromJson = processData(userData);
//         setMonthlySums(monthlySumsFromJson);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [userData]);

//   useEffect(() => {
//     const uniqueYears = [
//       ...new Set(
//         Object.keys(monthlySums).map((monthYear) => monthYear.split('-')[0])
//       ),
//     ];
//     setYears(uniqueYears);
//   }, [monthlySums]);

//   useEffect(() => {
//     if (Object.keys(monthlySums).length > 0 && selectedYear !== '') {
//       drawChart(selectedYear);
//     }
//   }, [monthlySums, selectedYear]);

//   const processData = (data) => {
//     const monthlySums = {};

//     data.forEach((entry) => {
//       const date = new Date(entry.date);
//       const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1)
//         .toString()
//         .padStart(2, '0')}`;
//       if (!monthlySums[monthYear]) {
//         monthlySums[monthYear] = 0;
//       }
//       monthlySums[monthYear] += entry.powergeneration;
//     });

//     return monthlySums;
//   };

//   const drawChart = (year) => {
//     const ctx = chartRef.current.getContext('2d');

//     if (chartRef.current.chart) {
//       chartRef.current.chart.destroy();
//     }

//     const filteredData = Object.entries(monthlySums).filter(([key]) =>
//       key.startsWith(year)
//     );

//     const chartData = {
//       labels: filteredData.map(([monthYear]) => monthYear),
//       datasets: [
//         {
//           label: 'Power Generation by Month',
//           data: filteredData.map(([, sum]) => sum),
//           backgroundColor: 'rgba(54, 162, 235, 0.6)',
//           borderColor: 'rgba(54, 162, 235, 1)',
//           borderWidth: 1,
//         },
//       ],
//     };

//     chartRef.current.chart = new Chart(ctx, {
//       type: 'bar',
//       data: chartData,
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             title: {
//               display: true,
//               text: 'Power Generation',
//             },
//           },
//           x: {
//             title: {
//               display: true,
//               text: 'Year-Month',
//             },
//           },
//         },
//       },
//     });
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Power Generation by Month</h1>
//       <div className="display flex justify-center border border-spacing-2 ">
//         <label htmlFor="year">Select Year: </label>
//         <select id="year" onChange={handleYearChange}>
//           <option value="">--Select Year--</option>
//           {years.map((year) => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>
//       <canvas ref={chartRef} width="400" height="400"></canvas>
//     </div>
//   );
// };

// export default Analytics;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Chart from "chart.js/auto"; // Import Chart.js

// const EnterData = ({ userid }) => {
//   const [date, setDate] = useState(""); // State for date input
//   const [powerGeneration, setPowerGeneration] = useState(""); // State for power generation input
//   const [dataEntries, setDataEntries] = useState([]); // State for storing data entries
//   let chartRef = null; // Reference to the chart canvas element

//   useEffect(() => {
//     fetchData(); // Fetch data on component mount
//   }, []);

//   useEffect(() => {
//     if (chartRef) {
//       renderChart(); // Render chart when dataEntries change
//     }
//   }, [dataEntries]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/user/data/${userid}`);
//       setDataEntries(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send data to the backend API
//       const response = await axios.post("http://localhost:3000/api/admin/daily-update", {
//         date,
//         powergeneration: powerGeneration,
//         userRef: userid,
//       });

//       console.log("Response from backend:", response.data);

//       // Refetch data after submission
//       fetchData();

//       // Reset the form after submission
//       setDate("");
//       setPowerGeneration("");
//     } catch (error) {
//       console.error("Error submitting data:", error);
//     }
//   };

//   const renderChart = () => {
//     const ctx = chartRef.getContext("2d");
//     new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: dataEntries.map(entry => entry.date),
//         datasets: [
//           {
//             label: "Power Generation (KWH)",
//             data: dataEntries.map(entry => entry.powerGeneration),
//             fill: false,
//             borderColor: "rgb(75, 192, 192)",
//             tension: 0.1,
//           },
//         ],
//       },
//     });
//   };

//   return (
//     <div className=" justify-center items-center h-screen mt-5">
//       <div className="card w-96 glass">
//         <div className="card-body">
//           <div className="flex justify-center">
//             <h2 className="card-title mb-4"> Power generation</h2>
//           </div>
//           <form onSubmit={handleSubmit}>
//             {/* Form inputs */}
//           </form>
//         </div>
//       </div>
//       {/* Chart canvas */}
//       <div className="mt-4">
//         <canvas ref={(ref) => (chartRef = ref)}></canvas>
//       </div>
//     </div>
//   );
// };

// export default EnterData;

// import React, { useEffect, useState, useRef } from "react";
// import Chart from "chart.js/auto"; // Import Chart.js
// import { useSelector } from "react-redux";

// const Analytics = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const userid = currentUser?._id; // Accessing the id property correctly
//   console.log(userid);
//   const [monthlySums, setMonthlySums] = useState({});
//   const [years, setYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState("");
//   const chartRef = useRef(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/admin/getdaily-update/${userid}`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         console.log(data);
//         const userMonthlySums = processData(data);
//         setMonthlySums(userMonthlySums);
//         console.log("Monthly sum: ", monthlySums);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, [userid]);

//   useEffect(() => {
//     const uniqueYears = [
//       ...new Set(
//         Object.keys(monthlySums).map((monthYear) => monthYear.split("-")[0])
//       ),
//     ];
//     setYears(uniqueYears);
//   }, [monthlySums]);

//   useEffect(() => {
//     if (Object.keys(monthlySums).length > 0 && selectedYear !== "") {
//       drawChart(selectedYear);
//     }
//   }, [monthlySums, selectedYear]);

//   const processData = (data) => {
//     const monthlySums = {};

//     data.forEach((entry) => {
//       const date = new Date(entry.Date);
//       const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1)
//         .toString()
//         .padStart(2, "0")}`;
//       if (!monthlySums[monthYear]) {
//         monthlySums[monthYear] = 0;
//       }
//       monthlySums[monthYear] += entry["Power Generation at 05:30pm"];
//     });

//     return monthlySums;
//   };

//   const drawChart = (year) => {
//     const ctx = chartRef.current.getContext("2d");

//     if (chartRef.current.chart) {
//       chartRef.current.chart.destroy();
//     }

//     const filteredData = Object.entries(monthlySums).filter(([key]) =>
//       key.startsWith(year)
//     );

//     const chartData = {
//       labels: filteredData.map(([monthYear]) => monthYear),
//       datasets: [
//         {
//           label: "Power Generation by Month",
//           data: filteredData.map(([, sum]) => sum),
//           backgroundColor: "rgba(54, 162, 235, 0.6)",
//           borderColor: "rgba(54, 162, 235, 1)",
//           borderWidth: 1,
//         },
//       ],
//     };

//     chartRef.current.chart = new Chart(ctx, {
//       type: "bar",
//       data: chartData,
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             title: {
//               display: true,
//               text: "Power Generation",
//             },
//           },
//           x: {
//             title: {
//               display: true,
//               text: "Year-Month",
//             },
//           },
//         },
//       },
//     });
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Power Generation by Month</h1>
//       <div className="display flex justify-center border border-spacing-2 ">
//         <label htmlFor="year">Select Year: </label>
//         <select id="year" onChange={handleYearChange} value={selectedYear}>
//           <option value="">--Select Year--</option>
//           {years.map((year) => (
//             <option key={year} value={year}>
//               {year}
//             </option>
//           ))}
//         </select>
//       </div>
//       <canvas ref={chartRef} width="400" height="400"></canvas>
//     </div>
//   );
// };

// export default Analytics;



import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart.js
import { useSelector } from "react-redux";

const Analytics = () => {
  const { currentUser } = useSelector((state) => state.user);
  const userid = currentUser?._id;
  const [monthlySums, setMonthlySums] = useState({});
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sustainfy-application.onrender.com/api/admin/getdaily-update/${userid}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const userMonthlySums = processData(data);
        setMonthlySums(userMonthlySums);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [userid]);

  useEffect(() => {
    const uniqueYears = [
      ...new Set(
        Object.keys(monthlySums).map((monthYear) => monthYear.split("-")[0])
      ),
    ];
    setYears(uniqueYears);
  }, [monthlySums]);

  useEffect(() => {
    if (Object.keys(monthlySums).length > 0 && selectedYear !== "") {
      drawChart(selectedYear);
    }
  }, [monthlySums, selectedYear]);

  const processData = (data) => {
    const monthlySums = {};

    data.forEach((entry) => {
      const date = new Date(entry.date);
      const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}`;
      if (!monthlySums[monthYear]) {
        monthlySums[monthYear] = 0;
      }
      monthlySums[monthYear] += entry.powergeneration;
    });

    return monthlySums;
  };

  const drawChart = (year) => {
    const ctx = chartRef.current.getContext("2d");

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
          label: "Power Generation by Month",
          data: filteredData.map(([, sum]) => sum),
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };

    chartRef.current.chart = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Power Generation",
            },
          },
          x: {
            title: {
              display: true,
              text: "Year-Month",
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
      <div className="display flex justify-center border border-spacing-2 ">
        <label htmlFor="year">Select Year: </label>
        <select id="year" onChange={handleYearChange} value={selectedYear}>
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

export default Analytics;
