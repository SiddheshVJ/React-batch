import React from "react";
import axios from "axios";

class ContactTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            errMsg: ''
        }
    }

    componentDidMount() {
        let url = "https://fakestoreapi.com/users"
        axios.get(url)
            .then((response) => {
                this.setState({
                    ...this.state,
                    users: response.data
                })
                console.log(this.state.users)
            })
            .catch((err) => {
                this.setState({
                    ...this.state,
                    errMsg: err
                })
            })
    }

    clickData = (user) => {
        this.props.sendContact(user)
    }

    render() {
        return (
            <>

                <table className="table table-hover table-striped text-center table-warning">
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.length > 0 ?
                                <>
                                    {
                                        this.state.users.map(user => {
                                            return (
                                                <tr onClick={this.clickData.bind(this, user)} key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name.firstname}</td>
                                                    <td>{user.name.lastname}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.address.city}</td>
                                                    <td>{user.phone}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </> : null
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default ContactTable;