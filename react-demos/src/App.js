import React, { useState } from "react";
import { ComponentB } from "./component/CoponenetB";

let App = () => {

  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <a href="/" className="navbar-brand">Component Interaction</a>
        </div>
      </nav>
      <p className="h4">App Component</p>
      {/* <ComponentB /> */}
    </>
  )
}

export default App;