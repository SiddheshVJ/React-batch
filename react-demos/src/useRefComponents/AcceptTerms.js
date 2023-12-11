import React, { useRef, useState } from "react";
import { useActionData } from "react-router-dom";

export let AcceptTerms = () => {

    let submitEle = useRef(null)

    let updateCheck = (e) => {
        submitEle.current.disabled = !e.target.checked
    }

    return (
        <>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                Accept TnC
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-check">
                                        <input
                                            onChange={updateCheck}
                                            className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label htmlFor="defaultCheck1" className="form-check-label">Accept Terms</label>
                                    </div>
                                    <input ref={submitEle} disabled type="submit" value="submit" className="btn btn-sm btn-success" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}