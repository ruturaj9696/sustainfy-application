import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 glass">
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="card-title mb-4">User Profile</h2>
          </div>
          <div className="space-y-4">
            <label className="input input-bordered flex items-center gap-2">
              {/* Username icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              {/* Input field for Username */}
              {/* <input type="text" className="grow" placeholder={currentUser.username} /> */}
              <div>{currentUser.username}</div>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              {/* Mobile phone icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 9a3 3 0 0 0-3 3v7"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 15h4"
                />
              </svg>
              {/* Input field for Mobile Number */}
              {/* <input type="text" className="grow" placeholder={currentUser.mobile} /> */}
              <div>{currentUser.mobile}</div>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              {/* Email icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              {/* Input field for Email */}
              {/* <input type="text" className="grow" placeholder={currentUser.email} /> */}
              <div>{currentUser.email}</div>
            </label>

            <label className="input input-bordered flex items-center gap-2">
              {/* Password icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              {/* Input field for Password */}
              <input type="password" className="grow" placeholder="Password" />
            </label>
          </div>
          <div className="flex justify-center mt-4 gap-3">
            <button className="btn btn-primary">Update Password</button>
            {/* <button className="btn btn-error">Delete User</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
