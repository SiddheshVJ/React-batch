import React, { useState } from "react"


export let AuthUser = () => {
    let [loggedIn, setLoggedIn] = useState(false)

    let accountLogin = () => {
        !loggedIn ? setLoggedIn(true) : setLoggedIn(false)
    }


    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                {
                                    loggedIn ? <p className="h3">Hello Welcome User</p> : <p className="h3">Welcome Guest</p>
                                }
                                {
                                    !loggedIn ? <button onClick={accountLogin} className="btn btn-sm btn-success">Log In</button> : <button onClick={accountLogin} className="btn btn-sm btn-danger">Log Out</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}