import React from "react";
import userContext from "./components/props-drilling/contextAPI/contextApi";
import ComponentOne from "./components/props-drilling/ComponentOne";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        name: "Siddhesh",
        city: "Pune"
      }
    }
  }

  render() {
    return (
      <>
        <div className="row text-center">
          <div className="col-10 m-auto">
            <div className="card">
              <div className="card-header bg-danger">
                <p className="h3">App Component</p>
              </div>
              <div className="card-body ">
                <p className="h3">{JSON.stringify(this.state.userInfo)}</p>
              </div>

              <userContext.Provider value={this.state.userInfo}>
                <ComponentOne />

              </userContext.Provider>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;