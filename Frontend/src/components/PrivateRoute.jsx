// import { useSelector } from 'react-redux';
// import { Outlet, Navigate } from 'react-router-dom';

// export default function PrivateRoute() {
//   const { currentUser } = useSelector((state) => state.user);
//   return currentUser ? <Outlet /> : <Navigate to='/signin' />;
// }

import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { useMemo } from 'react'; // Import useMemo hook

export default function PrivateRoute() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentAdmin = useSelector((state) => state.admin.currentAdmin);

  // Memoize the selector
  const authData = useMemo(() => ({ currentUser, currentAdmin }), [currentUser, currentAdmin]);

  // Check if either user or admin is logged in, redirect to respective login page if not
  if (!authData.currentUser && !authData.currentAdmin) {
    return <Navigate to='/user/signin' />;
  }

  // Render the outlet if either user or admin is logged in
  return <Outlet />;
}
