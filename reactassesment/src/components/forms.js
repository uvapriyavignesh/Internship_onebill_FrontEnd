import React, { Component } from "react";

class forms extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();

    // this.state = {
    //   first,
    // };
  }
  display() {
    alert(
      "NAME: " +
        this.name.current.value +
        " \n" +
        "EMAIL: " +
        this.email.current.value
    );
  }
  render() {
    return (
      <div>
        <h1>forms</h1>
        <table>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <forms>
            <tr>
              <td>
                <label for="name">Name:</label>
              </td>
              <td>
                <input type="text" ref={this.name} placeholder="Enter Name" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="email">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  ref={this.email}
                  placeholder="xyz@gmail.com"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="password">Password:</label>
              </td>
              <td>
                <input type="password" id="password" placeholder="Enter Name" />
              </td>
            </tr>
            <tr>
              <td colspan="2" id="button">
                <button onClick={this.display.bind(this)}> click me</button>
              </td>
            </tr>
          </forms>
        </table>
      </div>
    );
  }
}

export default forms;
