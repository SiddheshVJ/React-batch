import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

import CountryCards from './components/CountryCards';
import Contact from './components/Contact';
import Info from './components/Info';






function App() {
  return (
    <React.Fragment>
      <Navbar />
      <LandingPage />
      <CountryCards />
      <Info />
      <Contact />
    </React.Fragment>
  );
}

export default App;
