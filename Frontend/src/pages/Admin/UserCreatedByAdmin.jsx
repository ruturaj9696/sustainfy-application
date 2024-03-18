import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { Link, useNavigate } from "react-router-dom";

const UserCreatedByAdmin = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
    plantname: "", // Added plantname field
    address: ""   // Added address field
  });

  // State to manage the success message
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Function to handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to create admin
      const response = await axios.post(
        "/api/auth/createadmin",
        formData
      );
      console.log(response.data); // Log the response
      // Set success message
      setSuccessMessage("Admin created successfully!");

      // Clear form data
      setFormData({
        username: "",
        mobile: "",
        email: "",
        password: "",
        plantname: "",
        address: ""
      });
      // If everything is fine clear the error message 
      setError(null); 

      navigate('/admin/signin');

    } catch (error) {
      setError(error);
      console.error("Error creating admin:", error);
      // Handle error appropriately, e.g., show error message to user
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 glass">
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="card-title mb-4">Create Admin</h2>
          </div>
          {successMessage && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline">{successMessage}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="grow"
                  placeholder="Username"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="grow"
                  placeholder="Mobile Number"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="grow"
                  placeholder="Email"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="grow"
                  placeholder="Password"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="plantname"
                  value={formData.plantname}
                  onChange={handleInputChange}
                  className="grow"
                  placeholder="Plant Name"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="grow"
                  placeholder="Address"
                />
              </label>
            </div>
            <div className="flex justify-center mt-4">
              <button type="submit" className="btn btn-primary">
                Create Admin
              </button>
            </div>
            <div>
              {error && <p className="text-red-800">Error occurred</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserCreatedByAdmin;
