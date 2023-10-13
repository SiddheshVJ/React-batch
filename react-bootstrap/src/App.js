import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

import CountryCards from './components/CountryCards';
import Contact from './components/Contact';






function App() {
  return (
    <React.Fragment>
      <Navbar />
      <LandingPage />
      <CountryCards />
      <Contact />
    </React.Fragment>
  );
}

export default App;
