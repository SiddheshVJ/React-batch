import React, { useState } from "react";

export let EmployeeCard = () => {
    let [emp, setEmp] = useState([
        {
            sno: 'AAA123',
            name: 'Siddhesh',
            age: 45,
            designation: 'Coder',
            location: "pune"
        },
        {
            sno: 'BBB123',
            name: 'Srushti',
            age: 45,
            designation: 'Banker',
            location: "mumbai"
        },
        {
            sno: 'CCC123',
            name: 'Tushar',
            age: 45,
            designation: 'Falty businessman',
            location: "shirur"
        },
        {
            sno: 'DDD123',
            name: 'Harshal',
            age: 45,
            designation: 'Panoti',
            location: "Jalgaon"
        }
    ])

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped table-danger table-hover">
                            <thead>
                                <th>S.No.</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Designation</th>
                                <th>Loction</th>
                            </thead>
                            <tbody>

                                {
                                    emp.map((employee) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{employee.sno}</td>
                                                    <td>{employee.name}</td>
                                                    <td>{employee.age}</td>
                                                    <td>{employee.designation}</td>
                                                    <td>{employee.location}</td>

                                                </tr>
                                            </>)
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}