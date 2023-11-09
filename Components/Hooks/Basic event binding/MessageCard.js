import { useState } from "react"

export let MessageCard = () => {



    let [msg, setMsg] = useState('')

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h2>{msg}</h2>
                                <button onClick={() => setMsg('Good Evening')} className="btn btn-success btn-sm">Good Evening</button>
                                <button onClick={() => setMsg('Good Morning')} className="btn btn-success btn-sm">Good Morning</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}