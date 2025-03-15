import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  console.log("isau: ", isAuthenticated);
  return isAuthenticated ? element : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
