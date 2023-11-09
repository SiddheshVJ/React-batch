import React, { useEffect, useState } from "react";


export let ComponentB = () => {
    // useEffect is replacement of componentsDidMount()

    let [currentTime, setTime] = useState(new Date().toLocaleTimeString())

    // all server calls
    useEffect(() => {
        let timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => {
            // componentWillUnmount
            clearInterval(timer)
        }
    })



    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <p className="h4">ComponentB</p>
                                {currentTime}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}