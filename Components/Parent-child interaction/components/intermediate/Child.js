import React from "react";




class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cMessage: ""
        }
    }

    update = (e) => {
        this.setState({
            cMessage: e.target.value
        });
        this.props.sendData(e.target.value)

    }

    render() {
        return (
            <>
                <div className="row mt-5">
                    <div className="col mx-5">
                        <div className="card">
                            <div className="card-header text-center">
                                <p className="h4">Child Component</p>
                            </div>
                            <div className="card-body">
                                <form className="form-inline">
                                    <input type="text" value={this.state.cMessage} onChange={this.update} placeholder="Enter Here..." className="form-control" />
                                </form>
                                <p className="h5 text-center">
                                    From Parent : {this.props.cMessage}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Child;