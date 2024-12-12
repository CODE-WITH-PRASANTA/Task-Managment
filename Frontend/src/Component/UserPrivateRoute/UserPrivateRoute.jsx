import { Navigate } from 'react-router-dom';

const UserPrivateRoute = ({ children }) => {
  const isUserAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; 
  return isUserAuthenticated ? children : <Navigate to="/signin" />; 
};

export default UserPrivateRoute;