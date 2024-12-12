import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Pages/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Loader from './Component/Loader/Loader';
import SignUp from './Component/Signup/SignUp';
import SignIn from './Component/SignIn/SignIn';
import ContactUs from './Pages/ContactUs/ContactUs';
import Pricing from './Pages/Pricing/Pricing';
import AdminNav from './Adminpannel/AdminNavbar/AdminNav';
import AdminLogin from './Component/AdminLogin/AdminLogin';
import UserView from './Pages/UserViewPage/UserView';
import UserPrivateRoute from './Component/UserPrivateRoute/UserPrivateRoute';
import AdminPrivateRoute from './Component/AdminPrivateRoute/AdminPrivate';
import MakePayment from './Component/MakePayment/MakePayment';
import About from './Pages/AboutUsPage/AbouUsPage';

function App() {
  const [loading, setLoading] = useState(true);
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isAuthRoute = location.pathname === '/signup' || location.pathname === '/signin'; // Check for SignUp or SignIn routes

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <>
      {loading || isRouteLoading ? (
        <Loader />
      ) : (
        <>
          {!isAdminRoute && <Navbar />} {/* Hide Navbar on admin and auth routes */}
          <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path='/about' element={<About />}/>
              <Route 
                path='/payment'
                element={
                  <UserPrivateRoute>
                    <MakePayment />
                  </UserPrivateRoute>
                }
              />

              {/* User Private Route */}
              <Route
                path="/dashboard"
                element={
                  <UserPrivateRoute>
                    <UserView />
                  </UserPrivateRoute>
                }
              />

              {/* Admin Panel Route */}
              <Route
                path="/admin"
                element={
                  <AdminPrivateRoute>
                    <AdminNav />
                  </AdminPrivateRoute>
                }
              />
          </Routes>
          {!isAdminRoute && !isAuthRoute && <Footer />} {/* Hide Footer on admin and auth routes */}
        </>
      )}
    </>
  );
}


export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
