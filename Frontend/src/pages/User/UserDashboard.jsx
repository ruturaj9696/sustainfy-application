import React, { useState } from "react";
import UserSidebar from "./UserSidebar";
import PlantInfo from "./PlantInfo";
import Analytics from "./Analytics";
import UserSignOut from "./UserSignOut";
import UserProfile from "./UserProfile";
import Welcome from "../Welcome";


const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("Welcome");

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <div className="min-h-screen flex">
        <UserSidebar onComponentChange={handleComponentChange} />
        <div className="main-content flex-grow m-5 flex  justify-center items-center  ">
          {activeComponent === "UserProfile" && <UserProfile />}
          {activeComponent === "PlantInfo" && <PlantInfo />}
          {activeComponent === "Analytics" && <Analytics />}
          {activeComponent === "UserSignOut" && <UserSignOut />}
          {activeComponent === "Welcome" && <Welcome />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
