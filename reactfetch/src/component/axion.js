import axios from "axios";
import React, { Component } from "react";

export class axion extends Component {
  getdate() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
    });
  }
  componentDidMount() {
    this.getdate();
  }
  render() {
    return <div>axion</div>;
  }
}

export default axion;
