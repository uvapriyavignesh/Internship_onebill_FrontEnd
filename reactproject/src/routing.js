import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import About from "./component/about/About";
import React from "react";
import Contact from "./component/Contact/Contact";

export function About1() {
  return (
    <div>
      <Router>
        <div>
          <Link to="/home">About</Link>
        </div>
        <div>
          <Route path="/home" component={About}></Route>
        </div>
      </Router>
    </div>
  );
}
export function Contac() {
  return (
    <div>
      <Router>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Route exact path="/contact" component={Contact}></Route>
        </div>
      </Router>
    </div>
  );
}
