import './App.css';
import React from 'react';
import { ExpandableCardDemo } from './pages/events/competitions.jsx';
import Team from './pages/team.jsx';

function App() {
  return (
    <div className= "App" >
      <ExpandableCardDemo />
      <Team />
    </div>
  );
}

export default App;
