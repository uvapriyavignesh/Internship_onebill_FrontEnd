import React, { Component } from "react";

export class lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txt: "mounting phase",
    };
    console.log("constructor executed");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Executed");
    console.log(state);
  }
  render() {
    return <div>lifecycle</div>;
  }
}

export default lifecycle;
