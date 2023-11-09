import React, { useState } from "react";
import { Child } from "./Child";


export let Parent = () => {


    let [parent, setParent] = useState({
        message: "Hello i'm from parent",
        wishMessage: ''
    })

    let receiveData = (data) => {
        setParent({
            ...parent,
            wishMessage: data
        })
    }

    return (
        <>
            <div className="container mt-3" >
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body ">
                                <p className="h3">Parent Component</p>
                                <span className="animated zoom">From child : {parent.wishMessage}</span>
                                <Child message={parent.message} sendData={receiveData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}