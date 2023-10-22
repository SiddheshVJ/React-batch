import React from "react";
import Navbar from "./components/axios/Navbar";
import ContactTable from "./components/axios/ContactTable";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <ContactTable />
      </>
    )
  }
}

export default App;