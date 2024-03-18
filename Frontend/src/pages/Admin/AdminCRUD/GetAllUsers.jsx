// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const GetAllUsers = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/user/getAllUser"
//         );
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-w-full">
//       <div className="overflow-x-auto">
//         <h2 className="text-xl font-bold mb-2 text-center">
//           All User Information
//         </h2>
//         <table className="w-full bg-white shadow-md rounded my-3">
//           <thead>
//             <tr className="bg-gray-800 text-white text-left">
//               <th className="py-2 px-6">S.No</th>
//               <th className="py-2 px-6">Username</th>
//               <th className="py-2 px-6">Email</th>
//               <th className="py-2 px-6">Plant Information</th>
//               <th className="py-2 px-6">Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index} className="border-b border-gray-200">
//                 <td className="py-2 px-6">{index + 1}</td>
//                 <td className="py-2 px-6">{user.username}</td>
//                 <td className="py-2 px-6">{user.email}</td>
//                 <td className="py-2 px-6">{user.plantInformation}</td>
//                 <td className="py-2 px-6">{user.address}</td>
//                 <td className="py-2 ">
//                   <button className="border-b-4 border  bg-slate-800 text-white p-2  rounded-md mx-6"
//                     onClick={() => {
//                       console.log(user.email);

//                     }}
//                   >
//                     Update user
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GetAllUsers;

import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom"; // Import useHistory from react-router-dom
import { useNavigate } from "react-router-dom";

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);
  // const history = useHistory(); // Get access to the history object
  const navigate = useNavigate(); // Initialize navigate function

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
  }, []);

  const handleUpdateUser = (email) => {
    // Navigate to the new component with the email as a parameter
    // history.push(`/update-user/${email}`);
    // <Navigate to="/admin/signin" replace={true} />
    // return <Navigate to="/user/signin" email={email} replace={true} />;
    console.log("user directed")
    navigate("/admin/userdata");
  };

  return (
    <div className="flex justify-center items-center min-w-full">
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mb-2 text-center">
          All User Information
        </h2>
        <table className="w-full bg-white shadow-md rounded my-3">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-2 px-6">S.No</th>
              <th className="py-2 px-6">Username</th>
              <th className="py-2 px-6">Email</th>
              <th className="py-2 px-6">Plant Information</th>
              <th className="py-2 px-6">Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 px-6">{index + 1}</td>
                <td className="py-2 px-6">{user.username}</td>
                <td className="py-2 px-6">{user.email}</td>
                <td className="py-2 px-6">{user.plantInformation}</td>
                <td className="py-2 px-6">{user.address}</td>
                <td className="py-2 ">
                  <button
                    className="border-b-4 border  bg-slate-800 text-white p-2  rounded-md mx-6"
                    onClick={() => handleUpdateUser(user.email)} // Pass email to handleUpdateUser function
                  >
                    Update user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllUsers;
