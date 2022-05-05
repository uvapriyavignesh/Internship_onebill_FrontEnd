import React from "react";
import "./Common.css";

function Header() {
  return (
    <div>
      <div class="topnav" id="myTopnav">
        <div>
          <a href="#home">Home</a>
        </div>

        <div id="headertitle">
          <a href="#news">News</a>
        </div>
        <div id="logina">
          <a href="#contact">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
