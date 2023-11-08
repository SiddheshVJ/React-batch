import React from "react";
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm  navbar-dark bg-dark ">
                    <div className="container">
                        <Link to="/" className="navbar-brand ">React Routing</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link px-2">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/employees/list" className="nav-link px-2">Employees</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/stocks" className="nav-link px-2">Stocks</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}



export default Navbar