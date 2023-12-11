import React, { useState, useReducer } from "react";

// Action types
const GOOD_MORNING = "GOOD MORNING"
const GOOD_AFTERNOON = "GOOD AFTERNOON"
const GOOD_EVENING = "GOOD EVENING"

// Action function

let sayGoodMorning = () => {
    return {
        type: GOOD_MORNING
    }
}

let sayGoodAfternoon = () => {
    return {
        type: GOOD_AFTERNOON
    }
}

let sayGoodEvening = () => {
    return {
        type: GOOD_EVENING
    }
}

export let MsgFive = () => {

    let initialState = {
        message: 'Hello'
    }

    let reducer = (state = initialState, action) => {
        switch (action.type) {
            case GOOD_MORNING:
                return {
                    message: 'Good Morning'
                };
            case GOOD_AFTERNOON:
                return {
                    message: 'Good Afternoon'
                };
            case GOOD_EVENING:
                return {
                    message: 'Good Evening'
                };

            default: return state

        }
    }

    let [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-info text-white">
                                <p className="h3">Functional with useReducer with Redux way </p>
                            </div>
                            <div className="card-body">
                                <p className="h3">{state.message}</p>
                                <button onClick={e => dispatch(sayGoodMorning())} className="btn btn-sm btn-success">Good Morning</button>
                                <button onClick={e => dispatch(sayGoodAfternoon())} className="btn btn-sm btn-warning">Good Afternoon</button>
                                <button onClick={e => dispatch(sayGoodEvening())} className="btn btn-sm btn-danger">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}