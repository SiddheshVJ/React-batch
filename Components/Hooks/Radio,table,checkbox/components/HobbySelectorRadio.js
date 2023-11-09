import React, { useState } from "react";

export let HobbySelectorRadio = () => {

    let [hobby, setHobby] = useState(null)

    let updateRadio = (e) => {
        setHobby(e.target.value)
    }

    return (
        <>
            <pre>{JSON.stringify(hobby)}</pre>
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
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" value="eating" name="flexRadioDefault"
                                                    onChange={updateRadio}
                                                    id="flexRadioDefault1" />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    eating
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" value="sleeping" name="flexRadioDefault"
                                                    onChange={updateRadio}
                                                    id="flexRadioDefault2" />
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    sleeping
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" value="coding" name="flexRadioDefault"
                                                    onChange={updateRadio}
                                                    id="flexRadioDefault2" />
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    coding
                                                </label>
                                            </div>
                                        </form>
                                        {
                                            hobby === 'sleeping' ?
                                                <>
                                                    <div className="card mt-2 animated jello">
                                                        <div className="card-body bg-success text-white">
                                                            <p className="h3">
                                                                Sleeping
                                                            </p>
                                                        </div>
                                                    </div>
                                                </> :
                                                null
                                        }
                                        {
                                            hobby === 'coding' ?
                                                <>
                                                    <div className="card mt-2 animated jello">
                                                        <div className="card-body bg-success text-white">
                                                            <p className="h3">
                                                                Coding
                                                            </p>
                                                        </div>
                                                    </div>
                                                </> :
                                                null
                                        }
                                        {
                                            hobby === 'eating' ?
                                                <>
                                                    <div className="card mt-2 animated jello">
                                                        <div className="card-body bg-success text-white">
                                                            <p className="h3">
                                                                Eating
                                                            </p>
                                                        </div>
                                                    </div>
                                                </> :
                                                null
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