import React, { Component } from "react";
import Routing from "./Routing";
import List from "./components/list";
import { provider as P } from "./Context";

class App extends Component {
  render() {
    return (
      <div>
        <Routing />
        <P>
          <List />
        </P>
      </div>
    );
  }
}

export default App;
