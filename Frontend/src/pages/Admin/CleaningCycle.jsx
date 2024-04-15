import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classnames from "classnames";

const CleaningCycle = ({ useremail }) => {
  const [date, setDate] = useState(""); // State for date input
  const [powerGeneration, setPowerGeneration] = useState(""); // State for power generation input
  const [dataEntries, setDataEntries] = useState({}); // State for storing data entries

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("dataEntries")) || {};
    setDataEntries(storedEntries);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission, like sending data to the server
    console.log("Date:", date);
    console.log("Power Generation:", powerGeneration);
    console.log(useremail);

    // Update data entries in state
    const updatedEntries = { ...dataEntries, [date]: powerGeneration };
    setDataEntries(updatedEntries);

    // Save data entries to localStorage
    localStorage.setItem("dataEntries", JSON.stringify(updatedEntries));

    // Reset the form after submission
    setDate("");
    setPowerGeneration("");
  };

  // Function to determine the color for a specific date
  const getColorForDate = (dateToCheck) => {
    // Add your logic here to determine the color based on dataEntries
    const powerGenerationForDate = dataEntries[dateToCheck];
    if (powerGenerationForDate >= 100) {
      return "bg-green-300"; // Green for high power generation
    } else if (powerGenerationForDate >= 50) {
      return "bg-yellow-300"; // Yellow for moderate power generation
    } else {
      return "bg-gray-300"; // Gray for low or no power generation
    }
  };

  return (
    <div className=" justify-center items-center h-screen mt-5">
      <div className="card w-96 glass">
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="card-title mb-4">Cleaning Cycle</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  placeholderText="Select Date"
                  dateFormat="yyyy-MM-dd"
                  className="input input-bordered grow"
                  // Custom date style
                  dayClassName={(dateToCheck) =>
                    classnames({
                      "rounded-full p-1": true,
                      [getColorForDate(dateToCheck)]:
                        dateToCheck in dataEntries,
                    })
                  }
                />
              </div>

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="number"
                  className="grow"
                  placeholder="Cleaning Cycle Number"
                  value={powerGeneration}
                  onChange={(e) => setPowerGeneration(e.target.value)}
                />
              </label>
            </div>
            <div className="flex justify-center mt-4">
              <button type="submit" className="btn btn-primary">
                Update Data
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Render highlighted dates based on stored data */}
      <div className="mt-4 w-96">
        <h3 className="text-lg font-semibold">Highlighted Dates:</h3>
        <table className="w-full mt-2 border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Power Generation (KWH)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.keys(dataEntries).map((entryDate) => (
              <tr key={entryDate}>
                <td className="px-6 py-4 whitespace-nowrap">{entryDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(entryDate).toLocaleTimeString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {dataEntries[entryDate]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CleaningCycle;