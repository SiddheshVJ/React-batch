import React from "react";




class Child extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "I'm From child"
        }
    }

    clickBtn = ()=>{
        this.props.sendData(this.state.message)
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    <div className="col mx-5">
                        <div className="card">
                            <div className="card-body">
                                <p className="h3">
                                    Child : {this.props.message}
                                </p>
                                <button className="btn btn-success btn-sm" onClick={this.clickBtn}>Send Data</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Child;