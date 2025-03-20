import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { auth, getCurrentUser } from "./utils/firebaseConfig.js"
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpandableCardDemo from "./pages/events/competitions.jsx";
import Team from "./pages/team.jsx";
import Register from "./pages/Register.jsx";
import TimelineDemo from "./pages/TimeLine.jsx";
import LogoAnimationPage from "./pages/home/LogoAnimationPage.jsx";
import Home from "./pages/home/Home.jsx";
import { ImageGallery } from "./pages/ImageGallery.jsx";
import ContactUsPage from "./pages/contactus.jsx";
import Passes from "./pages/Passes.jsx";
import Speakers from "./pages/Speakers.jsx";
import Layout from "./layouts/Layout.jsx";
import Profile from "./pages/Profile.jsx";
import PassRegistration from "./pages/PassRegistration.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Display from "./components/IPL AUCTION/display.jsx";

function App() {
  const [loading, setLoading] = useState(false);
  const [animationLoading, setAnimationLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem('isAdminAuthenticated');
    const authExpiryTime = localStorage.getItem('authExpiryTime');

    if (isAdminLoggedIn && authExpiryTime) {
      const currentTime = Date.now();

      if (currentTime > Number(authExpiryTime)) {
        localStorage.removeItem('isAdminAuthenticated');
        localStorage.removeItem('authExpiryTime');
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    }
  }, []);


  useEffect(() => {
    const lastSeenAnimation = localStorage.getItem("lastSeenAnimation");
    const currentTime = new Date().getTime(); // Current timestamp

    if (!lastSeenAnimation || currentTime - parseInt(lastSeenAnimation) > 30 * 60 * 1000) {
      // Show animation if it's the first time OR 30 minutes have passed
      setAnimationLoading(true);
      const timer = setTimeout(() => {
        setAnimationLoading(false);
        localStorage.setItem("lastSeenAnimation", currentTime.toString()); // Store new timestamp
      }, 4000);
      return () => clearTimeout(timer);
    } else {
      setAnimationLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
  //     if (currentUser) {
  //       const userData = await getCurrentUser();
  //       setUser(userData);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  // return () => unsubscribe();
  // }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path="/" element={animationLoading ? <LogoAnimationPage /> : <Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/dignitaries" element={<Speakers />} />
          <Route path="/events" element={<Layout><ExpandableCardDemo /></Layout>} />
          <Route path="/timeline" element={<TimelineDemo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:eventType" element={<RegistrationForm />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/passes" element={<Passes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin-login" element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/eicadmin" element={<ProtectedRoute element={<AdminPage />} isAuthenticated={isAuthenticated} />} />
          <Route path="/iplauction" element ={<Layout><Display /></Layout>} />
          <Route path="/pass/:passName" element={<PassRegistration />} />
          <Route path='*' element={<Home />}/>
          
          
        </Routes>
       
        
      )}
    </>
  );
}

export default App;