import React from "react";


class ContactCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <>
                {
                    Object.keys(this.props.sendContact).length > 0 ?
                        <>
                            <div className="card">

                                <div className="card-header bg-primary">
                                    <p className="h4">Card</p>
                                </div>
                                <div className="card-body ">
                                    <p className="h5">Name : {this.props.sendContact.name.firstname}{" " + this.props.sendContact.name.lastname}</p>
                                    <p className="h5">Email : {this.props.sendContact.email}</p>
                                    <p className="h5">Address : {this.props.sendContact.address.city}</p>
                                    <p className="h5">Phone : {this.props.sendContact.phone}</p>

                                </div>
                            </div>
                        </> : null
                }

            </>
        )
    }
}


export default ContactCard;
