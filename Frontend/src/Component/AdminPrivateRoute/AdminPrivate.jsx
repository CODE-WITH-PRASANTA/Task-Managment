import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const adminUsername = localStorage.getItem('adminUsername');
  
    if (!isAuthenticated || adminUsername !== 'prasanta') {
      console.log('Unauthorized access - redirecting to /adminlogin'); // Debugging
      return <Navigate to="/adminlogin" />;
    }
  
    return children;
  };
  
export default AdminPrivateRoute;
