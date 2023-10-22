import axios from "axios";
import React from "react";

class ContactTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            errorMsg: ""
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((Response => {
                this.setState({
                    ...this.state,
                    users: Response.data
                })

            }))
            .catch((error) => {
                console.log(error.message)
            })
    }
    render() {
        return (
            <>
                <div className="row mt-5">
                    <div className="col-10 m-auto">
                        <div className="card m-auto text-center bg-dark">
                            <p className="h2 text-warning">Contact Table</p>
                            <p className="h5 text-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus nulla aut magnam sapiente architecto tenetur impedit corporis, laudantium, delectus, dolor tempora necessitatibus laborum obcaecati saepe dolores reiciendis quam! Ducimus, pariatur.</p>
                        </div>
                        <table className="table text-center text-capitalize table-bordered table-hover table-info">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                    <th>Company Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.length > 0 ?
                                        <>
                                            {
                                                this.state.users.map(user => {
                                                    return (
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.name}</td>
                                                            <td>{user.address.city}</td>
                                                            <td>{user.phone}</td>
                                                            <td>{user.website}</td>
                                                            <td>{user.company.name}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactTable