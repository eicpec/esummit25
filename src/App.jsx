import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpandableCardDemo from "./pages/events/competitions.jsx";
import Team from "./pages/team.jsx";
import SignupFormDemo from "./pages/Register.jsx";
import TimelineDemo from "./pages/TimeLine.jsx";
import LogoAnimationPage from "./pages/LogoAnimationPage.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./layouts/Header.jsx"; // Assuming Navbar is in Header.jsx
import { ImageGallery } from "./pages/ImageGallery.jsx";
import { ContactUsPage } from "./pages/contactus.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3200); // Simulate loading time
  }, []);

  return (

    <>
      {
        loading ? (
          <LogoAnimationPage />
        ) : (
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/events" element={<ExpandableCardDemo />} />
              <Route path="/timeline" element={<TimelineDemo />} />
              <Route path="/register" element={<SignupFormDemo />} />
              <Route path='/gallery' element={<ImageGallery />} />
              <Route path='/contact' element={<ContactUsPage />} />
            </Routes>
          </div>
        )
      }</>

  );
}

export default App;
