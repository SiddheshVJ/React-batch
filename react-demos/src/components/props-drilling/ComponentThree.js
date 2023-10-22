import React from "react";
import userContext from "./contextAPI/contextApi";
class ComponentThree extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.msgThree
    }

    render() {
        return (
            <>
                <div className="row text-center">
                    <div className="col-10 m-auto">
                        <div className="card">
                            <div className="card-header bg-warning">
                                <p className="h3">Components Three</p>
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
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ComponentThree;