import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col md-6">
                            <div className="card">
                                <div className="card-body">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15137.031405879816!2d73.8536679!3d18.4719759!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1697373153064!5m2!1sen!2sin" width="500" height="350" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col md-6">
                            <div className="card">
                                <div className="card-header text-center bg-dark text-white">
                                    <p className="h4">Contact Us </p>
                                </div>
                                <div className="card-body ">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="" id="" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="" id="" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="number" className="form-control" name="" id="" placeholder="Mobile Number" />
                                        </div>
                                        <div className="form-group">
                                            <input type="button" className="btn btn-amber btn-sm text-dark" value="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact