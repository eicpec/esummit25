import './App.css';
import React from 'react';
import { ExpandableCardDemo } from './pages/events/competitions.jsx';
import Team from './pages/team.jsx';
import Header from './layouts/Header.jsx';
import Footer from './layouts/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LandingPage from './components/ui/Landing.jsx';
import Timeline from './components/ui/Timeline.jsx';
import TimelineDemo from './pages/TimeLine.jsx';
import StickyScrollRevealDemo from './components/home/about.jsx';
import VideoScroll from './components/home/VideoScroll.jsx';
import SignupFormDemo from './pages/Register.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<ExpandableCardDemo />} />
        <Route path="/timeline" element={<TimelineDemo />} />
        <Route path="/register" element={<SignupFormDemo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
