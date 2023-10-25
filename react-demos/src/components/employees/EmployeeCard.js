import React from "react";
import Axios from "axios";

class EmployeeCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            selectedEmployee: {},
            errMsg: ''
        })
    }


    componentDidMount = () => {
        let url = 'https://jsonplaceholder.typicode.com/users'
        Axios.get(url)
            .then((response) => {
                let employees = response.data
                let empId = this.props.match.params.id
                let selectEmp = employees.find(emp => emp.id === empId)

                this.setState({
                    ...this.state,
                    selectedEmployee: selectEmp
                })
                console.log("siddhesh")
            })
            .catch((error) => {
                this.setState({
                    ...this.state,
                    errMsg: error.message
                })
            })
    }

    render() {
        return (
            <>
                <div className="row  mt-5 align-content-center justify-content-center ">
                    <div className="col-5">
                        <div className="card">
                            <div className="text-center card-header">Employee Card</div>
                            <div className="card-body">
                                {JSON.stringify(this.state.selectedEmployee.name)}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default EmployeeCard;