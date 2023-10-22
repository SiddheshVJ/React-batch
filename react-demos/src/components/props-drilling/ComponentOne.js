import React from "react";
import ComponentTwo from "./ComponentTwo";

import userContext from "./contextAPI/contextApi";


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
                                <p className="h3">
                                    <userContext.Consumer>
                                        {
                                            (value) => {
                                                return (
                                                    <h1>{JSON.stringify(value)}</h1>
                                                )
                                            }
                                        }
                                    </userContext.Consumer>
                                </p>
                            </div>
                            <ComponentTwo />
                        </div>
                    </div>
                </div>
            </>
        )

    }
}



export default ComponentOne;