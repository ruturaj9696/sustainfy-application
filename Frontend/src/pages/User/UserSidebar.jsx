// UserSidebar.js
import React from "react";
import { HiOutlineInformationCircle, HiOutlineChartBar } from "react-icons/hi"; // Import Daisy UI icons
import { GoSignOut } from "react-icons/go";
import { CiUser } from "react-icons/ci";

const UserSidebar = ({ onComponentChange }) => {
  return (
    // <div className="sidebar fixed left-0 top-0 h-full bg-base-200 text-base-content">
    //   <ul className="menu p-4 m-2 w-40 min-h-full gap-5">
    <div className="sidebar fixed">
    <ul className="menu p-4 m-2 w-40 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <li>
          <button
            className="flex items-center space-x-2"
            onClick={() => onComponentChange("UserProfile")}
          >
            <CiUser className="w-6 h-6" />
            {/* Adjust size as needed */}
            <span>User Profile</span>
          </button>
        </li>
        <li>
          <button
            className="flex items-center space-x-2"
            onClick={() => onComponentChange("PlantInfo")}
          >
            <HiOutlineInformationCircle className="w-6 h-6" />

            {/* Adjust size as needed */}
            <span>Plant Information</span>
          </button>
        </li>
        <li>
          <button
            className="flex items-center space-x-2"
            onClick={() => onComponentChange("Analytics")}
          >
            <HiOutlineChartBar className="w-5 h-6 " />{" "}
            {/* Adjust size as needed */}
            <span>Plant Analytics</span>
          </button>
        </li>
        <li>
          <button
            className="flex items-center space-x-2"
            onClick={() => onComponentChange("UserSignOut")}
          >
            <GoSignOut className="w-5 h-6 " /> {/* Adjust size as needed */}
            <span>SignOut</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
