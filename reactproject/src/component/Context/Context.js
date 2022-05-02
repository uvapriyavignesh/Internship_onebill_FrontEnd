import React from "react";
const contex1 = React.createContext();
const provider = contex1.Provider;
const consumer = contex1.Consumer;

export default contex1;
export { provider, consumer };
