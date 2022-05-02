import React from "react";
import { createContext } from "react";
const contex1 = createContext();
const provider = contex1.Provider;
const consumer = contex1.Consumer;

export { provider, consumer, contex1 };
