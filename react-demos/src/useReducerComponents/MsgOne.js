import React from "react";


export class MsgOne extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "hello"
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-info text-white">
                                    <p className="h3">Class Based Components</p>
                                </div>
                                <div className="card-body">
                                    <p className="h3">{this.state.msg}</p>
                                    <button onClick={e => this.setState({ msg: "Good Morning" })} className="btn btn-sm btn-success">Good Morning</button>
                                    <button onClick={e => this.setState({ msg: "Good Afternoon" })} className="btn btn-sm btn-warning">Good Afternoon</button>
                                    <button onClick={e => this.setState({ msg: "Good Evening" })} className="btn btn-sm btn-danger">Good Evening</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}