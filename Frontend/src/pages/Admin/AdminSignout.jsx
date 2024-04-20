import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  deleteAdminFailure,
  deleteAdminSuccess,
  signOutAdminStart,
} from "../redux/user/AdminSlice";
import { useDispatch } from "react-redux";

export default function AdminSignout() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignOut = async () => {
    try {
      dispatch(signOutAdminStart());
      const res = await fetch("https://sustainfy-application.onrender.com/api/auth/signoutadmin");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteAdminFailure(data.message));
        return;
      }
      dispatch(deleteAdminSuccess(data));
      navigate("/"); // Redirect to the home page after successful sign out using navigate
    } catch (error) {
      dispatch(deleteAdminFailure(data.message));
    }
  };

  return (
    <>
      <div className="flex flex-col items-center mt-5 border border-gray-300 rounded-lg p-4">
        <span className="mb-3">Do You really want to Sign out?</span>
        <button
          onClick={handleSignOut}
          className="btn border bg-white border-blue-500 hover:btn-primary "
        >
          Sign out
        </button>
      </div>
    </>
  );
}
