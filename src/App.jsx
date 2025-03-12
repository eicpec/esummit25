import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ExpandableCardDemo from "./pages/events/competitions.jsx";
import Team from "./pages/team.jsx";
import Register from "./pages/Register.jsx";
import TimelineDemo from "./pages/TimeLine.jsx";
import LogoAnimationPage from "./pages/home/LogoAnimationPage.jsx";
import Home from "./pages/home/Home.jsx";
import { ImageGallery } from "./pages/ImageGallery.jsx";
import ContactUsPage from "./pages/contactus.jsx";
import { TricolorEffect } from "./components/general/tricoloreffect.jsx";
import Passes from "./pages/Passes.jsx";
import Speakers from "./pages/Speakers.jsx";
import Layout from "./layouts/Layout.jsx";
import Profile from "./pages/Profile.jsx";
import PassRegistration from "./pages/PassRegistration.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";

function App() {
  const [loading, setLoading] = useState(false);
  const [animationloading, setAnimationLoading] = useState(false);

  React.useEffect(() => {
    setAnimationLoading(true);
    const timer = setTimeout(() => {
      setAnimationLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path="/" element={animationloading ? <LogoAnimationPage /> : <Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/dignitaries" element={<Speakers />} />
          <Route path="/events" element={<Layout><ExpandableCardDemo /></Layout>} />
          <Route path="/timeline" element={<TimelineDemo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/eventregister" element={<RegistrationForm />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/passes" element={<Passes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pass/:passName" element={<PassRegistration />} />
        </Routes>
      )}
    </>
  );
}

export default App;