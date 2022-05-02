import React from "react";
import { useContext } from "react";

import { contex1 as C1 } from "../Context";

export default function Lastchild() {
  let Con = useContext(C1);
  return (
    <div>
      <h1>last child</h1>
      <h1>haiii {Con}</h1>
    </div>
  );
}
