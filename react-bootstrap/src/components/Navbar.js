import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='navbar bg-light  bg-gradient text-dark'>
                    <a href='/' className='navbar-brand'><h3 className=' navbar-brand'>Sample Website</h3></a>
                </div>
            </React.Fragment>
        )
    }
}

export default Navbar;