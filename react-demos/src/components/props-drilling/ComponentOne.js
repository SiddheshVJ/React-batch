import React from "react";
import ComponentTwo from "./ComponentTwo";



class ComponentOne extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.msgOne
    }

    render() {
        return (
            <>
                <div className="row  text-center">
                    <div className="col-9 m-auto">
                        <div className="card">
                            <div className="card-header bg-success">
                                <p className="h3">Component One</p>
                            </div>
                            <div className="card-body ">
                                <p className="h3">{JSON.stringify(this.state)}</p>
                            </div>
                            <ComponentTwo msgTwo={this.state}/>
                        </div>
                    </div>
                </div>
            </>
        )

    }
}



export default ComponentOne;