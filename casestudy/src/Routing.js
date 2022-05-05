import React from "react";
import { BrowserRouter as Br, Link, Route, Routes } from "react-router-dom";
import Personaldetails from "./component/Personaldetails";
import { useState } from "react";
import EducationalDetails from "./component/EducationalDetails";
import Statecontainer from "./component/Statecontainer";

function Routing() {
  const [value, setValue] = useState({});
  return (
    <div>
      <Br>
        <div>
          <Route
            path="/"
            component={() => {
              return <Personaldetails stateContainer={[value, setValue]} />;
            }}
          ></Route>
          <Route
            path="/education"
            component={() => {
              return <EducationalDetails stateContainer={[value, setValue]} />;
            }}
          ></Route>
        </div>
      </Br>
    </div>
  );
}

export default Routing;
