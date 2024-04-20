import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EnterData from "./EnterData";

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [activeComponent, setActiveComponent] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://sustainfy-application.onrender.com/api/user/getAllUser"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [successMessage]);

  const handleRegisterData = (user) => {
    setSelectedUser(user);

    handleComponentChange("updateData");

    handleComponentChange("updateUser");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `/api/user/updateuser/${selectedUser._id}`,
        formData
      );
      setSuccessMessage(response.data.message);
      alert("Updated Successfully!");
      setActiveComponent("");
      setSuccessMessage("")
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-w-full">
      {activeComponent === "updateData" ? (
        <EnterData userid={selectedUser?._id} />
      ) : users.length === 0 ? (
        <p>No users present in the system.</p>
      ) : (
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mb-2 text-center">
            All User Information
          </h2>
          <table className="w-full bg-white shadow-md rounded my-3">
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-2 px-6">{index + 1}</td>
                  <td className="py-2 px-6">{user.username}</td>
                  <td className="py-2 px-6">{user.email}</td>
                  <td className="py-2 px-6">{user.plantInformation}</td>
                  <td className="py-2 px-6">{user.address}</td>
                  <td className="py-2">
                    <button
                      className="border-b-4 border bg-slate-800 text-white p-2 rounded-md mx-2"
                      onClick={() => handleRegisterData(user)}
                    >
                      Register Data
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GetAllUsers;
