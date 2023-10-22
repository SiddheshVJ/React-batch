import React from "react";
import ComponentThree from "./ComponentThree";

class ComponentTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.msgTwo
  }

  render() {
    return (
      <>
        <div className="row text-center">
          <div className="col-10 m-auto">
            <div className="card">
              <div className="card-header bg-warning">
                <p className="h3">Components Two</p>
              </div>
              <div className="card-body ">
                <p className="h3">{JSON.stringify(this.state)}</p>
              </div>
              {/* <ComponentThree msgThree={this.state}/> */}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ComponentTwo;