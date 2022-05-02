import React from "react";
import Contact from "../Contact/Contact";

export default function about(props) {
  console.log(props.sample);
  return (
    <div>
      <h1>haiii iam about</h1>

      <Contact name={props.name} />
    </div>
  );
}
