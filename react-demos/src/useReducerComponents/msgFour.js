import React, { useState, useReducer } from "react";

export let MsgFour = () => {

    let initialState = {
        message: 'Hello'
    }

    let reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'gm':
                return {
                    message: 'Good Morning'
                };
            case 'ga':
                return {
                    message: 'Good Afternoon'
                };
            case 'ge':
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
                                <p className="h3">Functional with useReducer with action object </p>
                            </div>
                            <div className="card-body">
                                <p className="h3">{state.message}</p>
                                <button onClick={e => dispatch({ type: 'gm' })} className="btn btn-sm btn-success">Good Morning</button>
                                <button onClick={e => dispatch({ type: 'ga' })} className="btn btn-sm btn-warning">Good Afternoon</button>
                                <button onClick={e => dispatch({ type: 'ge' })} className="btn btn-sm btn-danger">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}