import React from "react";

function Display(props) {
  const [value, setValue] = props.stateContainer;
  return (
    <div>
      <table>
        <thead>
          <th>Field</th>
          <th>value</th>
        </thead>
        <tbody>
          <tr>
            <td>Firstname</td>
            <td>{value.firstname}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Display;
