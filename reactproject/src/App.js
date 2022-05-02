import React, { useState } from "react";
import { About1 as About } from "./routing";
import Aboutcompound from "./component/about/About";
import { Contac } from "./routing";
import { provider as Po } from "./component/Context/Context";
import Contact from "./component/Contact/Contact";

export default function App() {
  let [value1] = useState("passed from parent");

  return (
    <div>
      <h1>app.js</h1>
      <About />
      <Aboutcompound sample={value1} />
      <Contac />
    </div>
  );
}

// export function testApp() {
//   return (
//     <div>
//       <Po>
//         <Contact name={value} />
//       </Po>
//     </div>
//   );
// }
