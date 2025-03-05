import './App.css';
import React from 'react';
import { ExpandableCardDemo } from './pages/events/competitions.jsx';
import Team from './pages/team.jsx';
import Header from './layouts/Header.jsx';
import Footer from './layouts/Footer.jsx';
import StickyScrollRevealDemo from './components/home/about.jsx';
import VideoScroll from './components/home/VideoScroll.jsx';

function App() {
  return (
    <div className= "App" >
      <Header />
      <ExpandableCardDemo />
      <Team />
      <StickyScrollRevealDemo />
      <VideoScroll />
      <Footer />
      
      
    </div>
  );
}

export default App;
