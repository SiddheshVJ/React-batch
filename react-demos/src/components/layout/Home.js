import React from "react";


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="landing-page">
                    <div className="wrapper">
                        <div className="justify-content-center text-center align-content-center d-flex flex-column h-100">
                            <h3 className="display-3">React Routing</h3>
                            <p className="lead px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas odit delectus distinctio necessitatibus fuga obcaecati dolor accusantium doloremque saepe, earum deserunt facere, asperiores, itaque deleniti recusandae maxime possimus est.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}



export default Home