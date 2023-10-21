import React from "react";
import Child from "./Child";




class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "I'm From Parent",
            childMsg: ''
        }
    }

    receiveData = (data) => {
        this.setState({
            ...this.state,
            childMsg: data
        })
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    <div className="col mx-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h3">
                                    Parent : {this.state.childMsg}
                                    <Child message={this.state.message} sendData={this.receiveData} />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Parent;