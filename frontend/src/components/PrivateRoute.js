import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const isLoggedIn = localStorage.getItem('user'); // Assuming user data is stored in localStorage after login

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;

