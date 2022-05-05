import "./App.css";
import Header from "./component/Header";
import Personaldetails from "./component/Personaldetails";
import EducationalDetails from "./component/EducationalDetails";
import { useState } from "react";
import ProjectDetails from "./component/ProjectDetails";
import ExperienceDetails from "./component/ExperienceDetails";
import ExtraDetail from "./component/ExtraDetail";
import Routing from "./Routing";
function App() {
  // const [value, setValue] = useState({});
  return (
    <div>
      <Header />
      <Routing />
      {/* <Personaldetails stateContainer={[value, setValue]} /> */}
      {/*<EducationalDetails stateContainer={[value, setValue]} /> */}
      {/* <ProjectDetails stateContainer={[value, setValue]} /> */}
      {/* <ExperienceDetails stateContainer={[value, setValue]} /> */}
      {/* <ExtraDetail stateContainer={[value, setValue]} /> */}
    </div>
  );
}

export default App;
