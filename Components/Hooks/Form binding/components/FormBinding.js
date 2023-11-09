import { useState } from "react"

export let FormBinding = () => {

    let [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    let changeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    let displayData = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <pre>{JSON.stringify(formData)}</pre>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <p className="h3 text-info">Form Binding</p>
                                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam nulla illo ipsam incidunt praesentium, iure ratione qui consequuntur culpa necessitatibus, libero animi iusto, quod voluptates laborum voluptate aliquid. Eveniet, nihil.</p>
                            </div>
                            <div className="card-body">
                                <form onSubmit={displayData} >
                                    <div className="form-group form-inline">
                                        Name : <input onChange={changeInput} type="text" name="name" placeholder="Enter name"
                                            value={formData.name}
                                            className="form-control" />
                                    </div>
                                    <div className="form-inline form-group">
                                        Email : <input onChange={changeInput} type="email" name="email" placeholder="Enter email" className="form-inline form-control" />
                                    </div>
                                    <div className="form-inline form-group">
                                        Password : <input onChange={changeInput} type="text" name="password" placeholder="Enter password" className="form-control" />
                                    </div>
                                    <button className="btn btn-sm btn-success">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}