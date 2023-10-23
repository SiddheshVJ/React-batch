import React from "react";


class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
// ""



    render() {
        return (
            <>
                <div className="navbar bg-warning ">
                    <a href="/" className="navbar-brand text-dark"><h5>Contact App</h5></a>
                </div>
            </>
        )
    }
}

export default Navbar;