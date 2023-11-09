import { useState } from "react"

let CounterComponent = () => {

    
    let [counter, setCounter] = useState(0)
    let incrementCounter = (e) => {
        setCounter(++counter)
    }





    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Counter Component</p>
                            </div>
                            <div className="card-body">
                                <p className="h2">counter : {counter}</p>
                                <button onClick={incrementCounter} className="btn btn-sm btn-amber text-dark">Increment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterComponent