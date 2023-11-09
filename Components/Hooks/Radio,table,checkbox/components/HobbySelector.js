import React, { useState } from "react";

export let HobbySelector = () => {

    let [hobby, setHobby] = useState({
        eating: false,
        sleeping: false,
        coding: false
    })

    let updateCheck = (e) => {
        setHobby({
            ...hobby,
            [e.target.name]: e.target.checked
        })
    }

    return (
        <>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Hobby Selector</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <form>
                                            <div className="form-check">
                                                <input type="checkbox"
                                                    value=""
                                                    onChange={updateCheck}
                                                    name="eating"
                                                    className="form-check-input" />
                                                <label className="form-check-label">Eating</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox"
                                                    value=""
                                                    onChange={updateCheck}
                                                    name="coding"
                                                    className="form-check-input" />
                                                <label className="form-check-label">Coding</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox"
                                                    value=""
                                                    onChange={updateCheck}
                                                    name="sleeping"
                                                    className="form-check-input" />
                                                <label className="form-check-label">Sleeping</label>
                                            </div>

                                        </form>
                                    </div>
                                    <div className="col">
                                        {
                                            hobby.coding ? <div className="mt-3 card">Coding</div> : null
                                        }
                                        {
                                            hobby.sleeping ? <div className="mt-3 card">Sleeping</div> : null
                                        }
                                        {
                                            hobby.eating ? <div className="mt-3 card">Eating</div> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}