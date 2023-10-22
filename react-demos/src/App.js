import React from "react";
import Navbar from "./components/Navbar";
import ContactApp from "./components/ContactApp";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <ContactApp />

      </>
    )
  }
}

export default App;