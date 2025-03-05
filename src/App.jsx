import './App.css';
import React from 'react';
import { ExpandableCardDemo } from './pages/events/competitions.jsx';
import Team from './pages/team.jsx';
import Header from './layouts/Header.jsx';
import Footer from './layouts/Footer.jsx';
import StickyScrollRevealDemo from './components/home/about.jsx';
import VideoScroll from './components/home/VideoScroll.jsx';
import SignupFormDemo from './pages/Register.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <div className= "App" >
      <Header />
      <ExpandableCardDemo />
      <Team />
      <StickyScrollRevealDemo />
      <VideoScroll />
      {/* <ExpandableCardDemo /> */}
      {/* <Team /> */}
      <SignupFormDemo/>
      {/* <Login/> */}
      <Footer />
      
      
    </div>
  );
}

export default App;
