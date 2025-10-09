import React from "react";

// Context in React is a built-in feature that enables the efficient and convenient sharing of data across multiple components without manual prop passing.
// It provides a way to pass data from a parent component to multiple child components without the need for explicit prop drilling.
// Using Context API we can do State Management.

// createContext is used to create a context object. It takes an initial value as an argument and returns a context object.
const SEP07ContextEx1 = React.createContext({
  msg: "",
  empdata: [{ nm: "", dept: "" }],
});

export default SEP07ContextEx1;
