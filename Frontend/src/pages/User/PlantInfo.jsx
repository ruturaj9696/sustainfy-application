import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const PlantInfo = () => {
  const [plantData, setPlantData] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const email = currentUser?.email;

  useEffect(() => {
    fetch(`https://sustainfy-application.onrender.com/api/listing/getonelist/${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Exclude unwanted fields (_id, userRef, createdAt, updatedAt, and __v)
        const { _id, userRef, createdAt, updatedAt, __v, ...filteredData } =
          data;
        setPlantData(filteredData); // Set the filtered data to state
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  if (!plantData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-w-full">
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mb-2 text-center">
          Plant Information
        </h2>
        <table className="w-full bg-white shadow-md rounded my-3">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-2 px-6">S.No</th>
              <th className="py-2 px-6">Attribute</th>
              <th className="py-2 px-6">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(plantData).map(([key, value], index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 px-6">{index + 1}</td>
                <td className="py-2 px-6">{key}</td>
                <td className="py-2 px-6">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlantInfo;
