import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import list from "./components/list";
import forms from "./components/forms";
import lifecycle from "./components/lifecycle";
import Lastchild from "./components/lastchild";
import React from "react";
import Fd from "./components/fetchData";

function Routing() {
  return (
    <div>
      <Router>
        <div>
          <Link to="/list">List</Link>
          <br></br>
          <Link to="/form">Forms</Link>
          <br></br>
          <Link to="/life">LifeCycle</Link>
          <br />
          <Link to="/context">LifeCycle</Link>
        </div>
        <div>
          <Route path="/list" component={list}></Route>
          <Route path="/form" component={forms}></Route>
          <Route path="/life" component={lifecycle}></Route>
          <Route path="/context" component={Lastchild}></Route>
          <Route path="/data" component={Fd}></Route>
        </div>
      </Router>
    </div>
  );
}

export default Routing;
// export class Forms extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <div>
//             <Link to="/form">List</Link>
//           </div>
//           <div>
//             <Route path="/form" component={forms}></Route>
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }
