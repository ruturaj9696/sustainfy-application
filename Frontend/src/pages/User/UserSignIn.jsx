import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/UserSlice";

const UserSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const response = await axios.post(
        "https://sustainfy-application.onrender.com/api/auth/signinuser",
        {
          email,
          password,
        }
      );

      console.log("Logged in successfully:", response.data);
      dispatch(signInSuccess(response.data));
      setWrongCredentials(false);

      // Here we have to redirect the user to the dashboard after successful login now we are redirecting it to home page
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      dispatch(signInFailure(error.response.data.message));
      setWrongCredentials(true);
      // Set state to indicate login error
    }
  };

  return (
    <div className="flex justify-center items-center h-screen"
    // style={{backgroundImage: "url('https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
    >
      <div className="card w-96 glass">
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="card-title mb-4">Sign In for User</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
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
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="flex justify-center mt-4">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
            <div>
              {wrongCredentials && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 mt-6"
                  role="alert"
                >
                  <span className="block sm:inline">Wrong Credentials !!</span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignIn;
