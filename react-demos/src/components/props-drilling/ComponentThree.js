import React from "react";

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
                                <p className="h3">{JSON.stringify(this.state)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ComponentThree;