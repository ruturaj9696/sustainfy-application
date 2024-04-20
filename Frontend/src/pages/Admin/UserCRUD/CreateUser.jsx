import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CrateListing from "../ListingCRUD/CrateListing";

const CreateUser = () => {
  const [userCreated, setUserCreated] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
    plantname: "",
    address: "",
  });

  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://sustainfy-application.onrender.com/api/auth/createuser",
        formData
      );
      console.log(response.data);
      // Success message
      setSuccessMessage("User created successfully!");
      setUserCreated(true);
      // Clear form data after successful submission
      setFormData({
        username: "",
        mobile: "",
        email: "",
        password: "",
        plantname: "",
        address: "",
      });

      // You can add any additional handling after successful user creation
    } catch (error) {
      console.error("Error creating user:", error);
      // You can add error handling here if needed
    }
  };

  return (
    <>
      {userCreated ? (
        <CrateListing email={formData.email} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="card w-96 glass">
            <div className="card-body">
              <div className="flex justify-center">
                <h2 className="card-title mb-4">Create User</h2>
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
                  {/* Username */}
                  <label className="input input-bordered flex items-center gap-2">
                    {/* Add your SVG icon here */}
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="grow"
                      placeholder="Username"
                    />
                  </label>

                  {/* Mobile Number */}
                  <label className="input input-bordered flex items-center gap-2">
                    {/* Add your SVG icon here */}
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="grow"
                      placeholder="Mobile Number"
                    />
                  </label>

                  {/* Email */}
                  <label className="input input-bordered flex items-center gap-2">
                    {/* Add your SVG icon here */}
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="grow"
                      placeholder="Email"
                    />
                  </label>

                  {/* Password */}
                  <label className="input input-bordered flex items-center gap-2">
                    {/* Add your SVG icon here */}
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="grow"
                      placeholder="Password"
                    />
                  </label>

                  {/* Plant Information */}
                  <label className="input input-bordered flex items-center gap-2">
                    {/* Add your SVG icon here */}
                    <input
                      type="text"
                      name="plantname"
                      value={formData.plantname}
                      onChange={handleChange}
                      className="grow"
                      placeholder="Plant Information"
                    />
                  </label>

                  {/* Address */}
                  <label className="input input-bordered flex items-center gap-2">
                    {/* Add your SVG icon here */}
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="grow"
                      placeholder="Address"
                    />
                  </label>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="btn border bg-white border-blue-500 hover:btn-primary"
                  >
                    Create User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateUser;
