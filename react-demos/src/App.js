import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Employees from "./components/employees/Employees";
import Stocks from "./components/stocks/Stocks";
import EmployeeCard from "./components/employees/EmployeeCard";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/employees/list" Component={Employees} />
            <Route exact path="/employees/:id" Component={EmployeeCard} />
            <Route exact path="/stocks" Component={Stocks} />
          </Routes>
        </BrowserRouter>
      </>

    )
  }
}

export default App;