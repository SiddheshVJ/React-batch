import React, { useRef } from "react";
import img1 from './assets/images/background.jpg'

export let BtnExample = () => {

    let mgElement = useRef(null)

    let getImage = () => {
        console.log(mgElement.current)
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img ref={mgElement} src={img1} className="img-fluid" alt="" />
                            <div className="card-body">
                                <button onClick={getImage} className="btn btn-secondary btn-sm ">ClickMe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}