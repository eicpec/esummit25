import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Route, Routes } from "react-router-dom";
import ExpandableCardDemo from "./pages/events/competitions.jsx";
import Team from "./pages/team.jsx";
import SignupFormDemo from "./pages/Register.jsx";
import TimelineDemo from "./pages/TimeLine.jsx";
import LogoAnimationPage from "./pages/LogoAnimationPage.jsx";
import Home from "./pages/Home.jsx";
import { ImageGallery } from "./pages/ImageGallery.jsx";
import ContactUsPage from "./pages/contactus.jsx";
import { TricolorEffect } from "./components/general/tricoloreffect.jsx";
import Passes from "./pages/Passes.jsx";
import Speakers from "./pages/Speakers.jsx";
import Layout from "./layouts/Layout.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTimeout(() => setLoading(false), 3000); // Simulate loading time
    }
  }, []);

  return (
    <>
      {
        loading ? (
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
              <Route path='/passes' element={<Passes />} />
            </Routes>
            <TricolorEffect />
          </div>
        )
      }</>

  );
}

export default App;
