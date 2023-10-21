import React from "react";


class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar bg-light">
                    <a href="/" className="navbar-brand text-danger"><h4>Parent to child Communication</h4></a>
                </nav>
            </>
        )
    }
}


export default Navbar;