import './App.css';
import React from 'react';
import MessageCard from './components/MessageCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <MessageCard />
    </React.Fragment>
  );
}

export default App;
