import React, { useState, useEffect } from "react";
import axios from "axios";

const GetAllAdmins = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get("https://sustainfy-application.onrender.com/api/admin/getAllAdmin");
        setAdmins(response.data);
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    };

    fetchAdmins();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="flex justify-center items-center min-w-full">
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mb-2 text-center">All Admin Information</h2>
        <table className="w-full bg-white shadow-md rounded my-3">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-2 px-6">S.No</th>
              <th className="py-2 px-6">Username</th>
              <th className="py-2 px-6">Email</th>
              <th className="py-2 px-6">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 px-6">{index + 1}</td>
                <td className="py-2 px-6">{admin.username}</td>
                <td className="py-2 px-6">{admin.email}</td>
                <td className="py-2 px-6">{admin.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllAdmins;
