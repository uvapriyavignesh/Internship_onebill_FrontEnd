import React, { Component } from "react";
import Routing from "./Routing";
import { provider as P } from "./Context";
import Lastchild from "./components/lastchild";

class App extends Component {
  render() {
    return (
      <div>
        <Routing />
        <P value="contex its working">
          <Lastchild />
        </P>
      </div>
    );
  }
}

export default App;
