import React from "react";

import Watch from "./components/lifeCycle/Watch";
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
        <Watch />
      </>
    )
  }
}

export default App;