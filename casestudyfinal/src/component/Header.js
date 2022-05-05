import React from "react";
import "./Common.css";

function Header() {
  return (
    <div>
      <div class="topnav" id="myTopnav">
        <div>
          <a href="#home">
            <h5>
              <b>Login</b>
            </h5>
          </a>
        </div>

        <div id="headertitle">
          <a href="#news">
            <h5>
              <b>Resume Builder</b>
            </h5>
          </a>
        </div>
        <div id="logina">
          <a href="#contact">
            <h5>
              <b>Menu</b>
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
