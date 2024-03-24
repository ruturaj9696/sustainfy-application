import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputForm from "../ListingCRUD/UserUpdatepageInUpdateUser";

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [activeComponent, setActiveComponent] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
    plantname: "",
    address: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/user/getAllUser"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [successMessage,activeComponent]);

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        username: selectedUser.username,
        mobile: selectedUser.mobile,
        email: selectedUser.email,
        password: "", // You can decide whether to keep this blank or populate it based on your requirements
        plantname: selectedUser.plantname,
        address: selectedUser.address,
      });
    }
  }, [selectedUser]);

  const onComponentChange = (user) => {
    setSelectedUser(user);
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
        `http://localhost:3000/api/user/updateuser/${selectedUser._id}`,
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
      {activeComponent === "updateUser" ? (
        <>
          {/* <InputForm formData={formData.email}/> */}
          {/* <InputForm email={formData.email} /> */}
          <InputForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        </>
      ) : (
        // <div className="flex justify-center items-center h-screen">
        //   <div className="card w-96 glass">
        //     <div className="card-body">
        //       <div className="flex justify-center">
        //         <h2 className="card-title mb-4">Update User</h2>
        //       </div>
        //       {successMessage && (
        //         <div
        //           className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
        //           role="alert"
        //         >
        //           <strong className="font-bold">Success!</strong>
        //           <span className="block sm:inline">{successMessage}</span>
        //           <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
        //         </div>
        //       )}
        //       <form onSubmit={handleSubmit}>
        //         <div className="space-y-4">
        //           <label className="input input-bordered flex items-center gap-2">
        //             <input
        //               type="text"
        //               name="username"
        //               value={formData.username}
        //               onChange={handleChange}
        //               className="grow"
        //               placeholder="Username"
        //             />
        //           </label>
        //           <label className="input input-bordered flex items-center gap-2">
        //             <input
        //               type="text"
        //               name="mobile"
        //               value={formData.mobile}
        //               onChange={handleChange}
        //               className="grow"
        //               placeholder="Mobile Number"
        //             />
        //           </label>
        //           <label className="input input-bordered flex items-center gap-2">
        //             <input
        //               type="text"
        //               name="email"
        //               value={formData.email}
        //               onChange={handleChange}
        //               className="grow"
        //               placeholder="Email"
        //             />
        //           </label>
        //           <label className="input input-bordered flex items-center gap-2">
        //             <input
        //               type="password"
        //               name="password"
        //               value={formData.password}
        //               onChange={handleChange}
        //               className="grow"
        //               placeholder="Password"
        //             />
        //           </label>
        //           <label className="input input-bordered flex items-center gap-2">
        //             <input
        //               type="text"
        //               name="plantname"
        //               value={formData.plantname}
        //               onChange={handleChange}
        //               className="grow"
        //               placeholder="Plant Information"
        //             />
        //           </label>
        //           <label className="input input-bordered flex items-center gap-2">
        //             <input
        //               type="text"
        //               name="address"
        //               value={formData.address}
        //               onChange={handleChange}
        //               className="grow"
        //               placeholder="Address"
        //             />
        //           </label>
        //         </div>
        //         <div className="flex justify-center mt-4">
        //           <button
        //             type="submit"
        //             className="btn border bg-white border-blue-500 hover:btn-primary"
        //           >
        //             Update User
        //           </button>
        //         </div>
        //       </form>
        //     </div>
        //   </div>
        // </div>
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
                      className="border-b-4 border bg-slate-800 text-white p-2 rounded-md mx-6"
                      onClick={() => onComponentChange(user)}
                    >
                      Update User
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
