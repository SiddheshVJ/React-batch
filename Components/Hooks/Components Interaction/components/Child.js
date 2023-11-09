import React from "react";
import { useState } from "react";

export let Child = (props) => {


    let [child, setChild] = useState({
        message: "Hello i'm from child",
        wishMessage: ''
    })

    let clickBtn = () => {
        props.sendData(child.message)
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-dark text-danger">
                                <p className="h3">Child Component</p>
                                <span>{props.message}</span>

                                <button className="btn btn-sm btn-info" onClick={clickBtn}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}