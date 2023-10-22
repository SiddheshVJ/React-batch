import React from "react";


class Customer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: null
        }
    }

    activity = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    render() {

        return (
            <>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container m-5 ">
                    <div className="row ">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    <form >
                                        <div class="form-check">
                                            <input value="Eating" onClick={this.activity} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Eating
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input value="Coding" onClick={this.activity} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Coding
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input value="Sleeping" onClick={this.activity} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Sleeping
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    {
                                        this.state.task === 'Eating' ? <div className=" display-4  text-primary" >Eating</div> : this.state.task === 'Coding' ? <div className=" display-4 text-primary">Coding</div> : this.state.task === 'Sleeping' ? <div className=" display-4 text-primary">Sleeping</div> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Customer