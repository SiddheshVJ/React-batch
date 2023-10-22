import React from "react";


class Watch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentDate: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.value = setInterval(() => {
            this.setState({
                currentDate: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.value)
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col m-auto">
                        <div className="card">
                            <div className="card-body">
                                <p className="h2">
                                    {this.state.currentDate}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default Watch;