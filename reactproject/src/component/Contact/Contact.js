import React from "react";
import { consumer as Con } from "../Context/Context";
export default function Contact(props) {
  function test(props) {
    console.log("chaeck");
    props.history.push("/home");
  }
  return (
    <div>
      <h1>Contact</h1>
      <h1>{props.name}</h1>
      {/* <form>
        <div>
          <lable>ENTER EMAIL ID</lable>
          <input type="text" name="email"></input>
        </div>
        <div>
          <lable>ENTER COMMAND</lable>
          <input type="text" name="command"></input>
        </div> */}
      <div>
        <button onClick={() => test(props)}> Send..</button>
      </div>
    </div>
  );
}
// function usercontex() {
//   <Con>
//     {(data) => {
//       return <p>{data}</p>;
//     }}
//   </Con>;
// }
