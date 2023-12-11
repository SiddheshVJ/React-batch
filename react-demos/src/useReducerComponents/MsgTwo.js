import React, { useState } from "react";

export let MsgTwo = () => {

    let [msg, setMsg] = useState('Hello')

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-info text-white">
                                <p className="h3">Functional with useState</p>
                            </div>
                            <div className="card-body">
                                <p className="h3">{msg}</p>
                                <button onClick={e => setMsg('Good Morning')} className="btn btn-sm btn-success">Good Morning</button>
                                <button onClick={e => setMsg('Good Afternoon')} className="btn btn-sm btn-warning">Good Afternoon</button>
                                <button onClick={e => setMsg('Good Evening')} className="btn btn-sm btn-danger">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}