import React from "react";
import Axios from 'axios'
import { Link } from "react-router-dom";

class Employees extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response => {
                this.setState({
                    ...this.state,
                    employees: response.data
                })

                console.log(this.state.employees)

            }))
            .catch((error) => {
                this.setState({
                    ...this.state,
                    errorMsg: error
                })
            })
    }

    render() {
        return (
            <>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Welcome to Employees</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto dignissimos ut veritatis suscipit deleniti quibusdam impedit? Facere voluptate ex soluta, porro velit repellat. Alias voluptates odit eos cupiditate aliquam!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <table className="table text-center table-hover table-striped table-light">
                                <thead className="  bg-dark text-white">
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Company</th>
                                    <th>Address</th>
                                </thead>
                                <tbody>
                                    {
                                        this.state.employees.length > 0 ?
                                            <>
                                                {
                                                    this.state.employees.map((employee) => {
                                                        return (
                                                            <tr key={employee.id}>
                                                                <td>{employee.id}</td>
                                                                <td>

                                                                    <Link to={`/employees/${employee.id}`} className="nav-link px-2">{employee.name}</Link>
                                                                </td>
                                                                <td>{employee.email}</td>
                                                                <td>{employee.phone}</td>
                                                                <td>{employee.company.name}</td>
                                                                <td>{employee.address.city}</td>

                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </>
                                            : this.state.errorMsg
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



export default Employees