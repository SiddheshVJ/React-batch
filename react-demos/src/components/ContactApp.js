import React from "react";
import axios from "axios";

class ContactApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            errMsg: ''
        }
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/users")
            .then(response => {
                this.setState({
                    ...this.state,
                    users: response.data,
                })

            }).catch(error => {
                this.setState({
                    ...this.state,
                    errMsg: error.message
                })
            })
    }

    render() {
        return (
            <>

                <div className="row mt-5">
                    <div className="col-10 m-auto">
                        <div className="card text-center">
                            <div className="card-header">
                                <p className="h1">Contact App</p>
                            </div>
                            <table className="table table-hover table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.length > 0 ?
                                            <>
                                                {
                                                    this.state.users.map((user) => {
                                                        return (
                                                            <tr key={user.id}>
                                                                <td>{user.id}</td>
                                                                <td>{user.name.firstname}</td>
                                                                <td>{user.name.lastname}</td>
                                                                <td>{user.phone}</td>
                                                                <td>{user.email}</td>
                                                                <td>{user.address.city}</td>

                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </> : this.state.errMsg
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactApp;