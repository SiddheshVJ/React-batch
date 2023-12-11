import React from "react";
import './App.css'
import { BtnExample } from "./BtnExample";
import { AcceptTerms } from "./AcceptTerms";

let App = () => {

  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm ">
        <div className="container">
          <a href="#" className="navbar-brand">React Hooks useRef() & useReducer()</a>
        </div>
      </nav>
      {/* <BtnExample /> */}
      <AcceptTerms />
    </>
  )
}

export default App;