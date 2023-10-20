import React from "react";

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            course: '',
            tnc: false

        }
    }

    updateForm = (event) => {
        if (event.target.type === 'checkbox') {
            this.setState({
                [event.target.name]: event.target.checked
            })

        } else {

            this.setState({
                [event.target.name]: event.target.value
            })
        }

    }

    registerUser = (event) => {
        event.preventDefault()
        console.log(this.state)
    }


    render() {
        return (
            <>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <div className="row m-5">
                    <div className="col-4">
                        <div className="card text-center">
                            <div className="card-header bg-light ">Contact Form</div>
                            <div className="card-body">
                                <form onSubmit={this.registerUser}>
                                    <div className="form-group">
                                        <input className="form-control" value={this.state.name} type="text" placeholder="Enter Name" name="name" onChange={this.updateForm} id="" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" onChange={this.updateForm} value={this.state.email} type="email" placeholder="Enter email" name="email" id="" />
                                    </div>
                                    <div className="form-group">
                                        <select class="form-control" value={this.state.course} name="course" onChange={this.updateForm} >
                                            <option selected>Choose Course</option>
                                            <option value="MCA">MCA</option>
                                            <option value="MBA">MBA</option>
                                            <option value="Engineering">Engineering</option>
                                        </select>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" onClick={this.updateForm} value={this.state.tnc} type="checkbox" placeholder="Enter Name" name="tnc" id="" /> Accept terms & conditions
                                    </div>
                                    <button className="btn btn-success btn-sm">SUBMIT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="card ">
                            <div className="card-header bg-light">Display Data</div>
                            <div className="card-body">
                                <h3>Name : {this.state.name}</h3>
                                <h3>Email : {this.state.email}</h3>
                                <h3>Course : {this.state.course}</h3>
                                <h3>T&C : {(this.state.tnc) === true ? "true" : "false"}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactForm;