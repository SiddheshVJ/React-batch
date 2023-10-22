import React from "react";

import userContext from "./contextAPI/contextApi";
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
                <p className="h3">
                  <userContext.Consumer>
                    {
                      (value) => {
                        return (
                          <h1>{JSON.stringify(value)}</h1>
                        )
                      }
                    }
                  </userContext.Consumer>
                </p>
              </div>
              <ComponentThree />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ComponentTwo;