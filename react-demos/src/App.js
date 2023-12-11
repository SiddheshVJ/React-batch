import React from "react";
import './App.css'
import { MsgOne } from "./useReducerComponents/MsgOne";
import { MsgTwo } from "./useReducerComponents/MsgTwo";
import { MsgThree } from "./useReducerComponents/MsgThree";
import { MsgFour } from "./useReducerComponents/msgFour";
import { MsgFive } from "./useReducerComponents/msgFive";
// import { BtnExample } from "./BtnExample";
// import { AcceptTerms } from "./AcceptTerms";

let App = () => {

  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm ">
        <div className="container">
          <a href="#" className="navbar-brand">React Hooks useReducer()</a>
        </div>
      </nav>
      <MsgOne />
      <MsgTwo />
      <MsgThree />
      <MsgFour />
      <MsgFive />
    </>
  )
}

export default App;