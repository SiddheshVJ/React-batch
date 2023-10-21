import React from "react";
import Child from "./Child";




class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pMessage: '',
            cText: ''
        }
    }

    update = (e) => {
        this.setState({
            pMessage: e.target.value
        })

    }

    receiveData = (data) => {
        this.setState({
            ...this.state,
            cText: data
        })
    }

    render() {
        return (
            <>
                <div className="row mt-5">
                    <div className="col-5 mx-5">
                        <div className="card">
                            <div className="card-header text-center">
                                <p className="h4">Parent Component</p>
                            </div>
                            <div className="card-body">
                                <form className="form-inline">
                                    <input type="text" onChange={this.update}
                                        value={this.state.pMessage} placeholder="Enter Here..." className="form-control" />
                                </form>
                                <p className="h5 text-center">
                                    From Child :{this.state.cText}
                                </p>
                                <Child cMessage={this.state.pMessage} sendData={this.receiveData} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Parent;