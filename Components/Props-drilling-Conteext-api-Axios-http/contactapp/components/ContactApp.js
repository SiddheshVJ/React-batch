import React from "react";
import ContactTable from "./ContactTable";
import ContactCard from "./ContactCard";


class ContactApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedContact: {}
        }
    }

    receiveContact = (user) => {
        this.setState({
            selectedContact: user
        })
    }

    render() {
        return (
            <>
                <div className="container mt-3">
                    <div className="row">
                        <p className="h3 text-primary">Contact App </p>
                        <p className="lead"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iusto eaque voluptatibus itaque ut assumenda necessitatibus aliquid doloremque rerum, culpa sequi numquam consequuntur quo dolor explicabo velit? Porro, iure! Fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, officia!</p>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-9">
                            <ContactTable sendContact={this.receiveContact} />
                        </div>
                        <div className="col-md-3">
                            <ContactCard sendContact={this.state.selectedContact} />
                        </div>
                    </div>

                </div>
            </>
        )
    }

}

export default ContactApp;
