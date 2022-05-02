import React, { Component } from "react";

class list extends Component {
  constructor(props) {
    super(props);
    this.addvalue = React.createRef();
    this.state = {
      db: ["apple", "orange", "grape", "test1", "test"],
      input: false,
    };
    this.style = { "padding-left": "40%" };
  }
  deletElement() {
    this.state.db.pop();
    this.setState(() => {
      return this.state.db;
    });
  }
  inputField() {
    this.setState(() => {
      return (this.state.input = true);
    });
  }
  addElement() {
    //console.log(this.addvalue.current.value);
    this.state.db.push(this.addvalue.current.value);
    console.log(this.state.db);

    this.setState(() => {
      return this.state.db;
    });
  }
  render() {
    return (
      <div style={this.style}>
        <h1>LIST</h1>
        <ul>
          {this.state.db.map((value, index) => {
            return (
              <li key={index}>
                <h3>{value}</h3>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => {
            this.deletElement();
          }}
        >
          DELETE
        </button>
        <br></br>
        <button onClick={this.inputField.bind(this)}>ADD</button>
        {this.state.input ? (
          <div>
            <input type="text" ref={this.addvalue} name="test"></input>
            <button onClick={this.addElement.bind(this)}>Click ADD</button>
          </div>
        ) : (
          <br />
        )}
      </div>
    );
  }
}

export default list;
