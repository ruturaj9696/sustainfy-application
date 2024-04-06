import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AdminProfile from "./pages/Admin//AdminCRUD/AdminProfile";
import AdminSignIn from "./pages/Admin/AdminSignIn";
import UserProfile from "./pages/User/UserProfile";
import UserSignIn from "./pages/User/UserSignIn";
import NoPage from "./components/NoPage"; // Assuming you have a NoPage component
import CreateAdmin from "./pages/Admin/AdminCRUD/CreateAdmin";
import UserDashboard from "./pages/User/UserDashboard";
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import GetAllUsers from "./pages/Admin/AdminCRUD/GetAllUsers";

const App = () => {
  // Initialize theme state, default to "light"
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light"; // Fallback to "light" if error accessing localStorage
    }
  });

  // Update theme in DOM and store in localStorage when theme changes
  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);   
    } catch {
      // Handle errors related to accessing localStorage
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="h-screen">
      <Router>
        <Navbar toggleTheme={toggleTheme} />

        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/user/signin" element={<UserSignIn />} />
          <Route path="*" element={<NoPage />} />

          {/* User private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/user/UserDashboard" element={<UserDashboard />} />
            <Route path="/user/profile" element={<UserProfile />} />
          </Route>

          {/* Admin Routes */}
          <Route path="admin/signin" element={<AdminSignIn />} />

          {/* Admin private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/admin/getallusers" element={<GetAllUsers />} />
            <Route path="/admin/admindashboard" element={<AdminDashboard />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// import React from "react";
// // import CreateUser from "./pages/Admin/UserCRUD/CreateUser";
// // import CrateAdmin from "./pages/Admin/AdminCRUD/CreateAdmin";
// // import UpdateAdmin from "./pages/Admin/AdminCRUD/AdminProfile";
// // import UserProfile from "./pages/Admin/UserCRUD/UserProfile";
// // import AdminProfile from "./pages/Admin/AdminCRUD/AdminProfile";
// // import AdminSignIn from "./pages/Admin/AdminSignIn";
// // import UserSignIn from "./pages/User/UserSignIn";
// // import GetAllUsers from "./pages/Admin/AdminCRUD/GetAllUsers";
// // import PlantInfo from "./pages/User/PlantInfo";
// // import GetAllAdmins from "./pages/Admin/AdminCRUD/GetAllAdmins";
// // import Carousel from "./components/Carousel";
// // import Home from "./pages/Home";
// // import AdminDashboard from "./pages/Admin/AdminDashboard";
// // import AdminSidebar from "./pages/Admin/AdminSidebar";
// // import PowerGeneration from "./pages/Graphs/PowerGeneration";
// import CreateListing from "./pages/Admin/ListingCRUD/CreateListing";

// const App = () => {
//   return (
//     <div>
//     {/* <Home /> */}
//       {/* <CrateAdmin /> */}
//       <CreateListing/>
//       {/* <AdminSignIn /> */}
//       {/* <CreateUser />
//       <UserSignIn />
//       <UpdateAdmin />
//       <UserProfile />
//       <AdminProfile />
//       <GetAllUsers />
//       <PlantInfo />
//       <GetAllAdmins />
//       <Carousel />
//       <CreateListing /> */}

//       {/* <PowerGeneration/> */}

//     </div>
//   );
// };
// export default App;
