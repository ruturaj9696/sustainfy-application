import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import CreateAdmin from "./AdminCRUD/CreateAdmin";
import GetAllAdmins from "./AdminCRUD/GetAllAdmins";
import GetAllUsers from "./AdminCRUD/GetAllUsers";
import AdminProfile from "./AdminCRUD/AdminProfile";
import CreateUser from "./UserCRUD/CreateUser";
import AdminSignout from "./AdminSignout";
import AccessUser from "./AccessUser";
import AdminSignIn from "./AdminSignIn";

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("");

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="min-h-screen flex">
      <AdminSidebar onComponentChange={handleComponentChange} />
      <div className="main-content flex-grow m-5 flex justify-center items-center">
        {activeComponent === "adminprofile" && <AdminProfile />}
        {activeComponent === "CreateAdmin" && <CreateAdmin />}
        {activeComponent === "GetAllAdmins" && <GetAllAdmins />}
        {activeComponent === "GetAllUsers" && <GetAllUsers />}
        {activeComponent === "CreateUser" && <CreateUser />}
        {activeComponent === "AdminSignout" && <AdminSignout />}
        {activeComponent === "userdashboard" && <AccessUser />}
      </div>
    </div>
  );
};

export default AdminDashboard;
