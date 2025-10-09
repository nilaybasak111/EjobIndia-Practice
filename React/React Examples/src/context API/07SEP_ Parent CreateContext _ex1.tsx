import { useState, useEffect } from "react";
import SEP07ContextEx1 from "./07SEP_ CreateContext _ex1";
import SEP07ContextChildEx1 from "./07SEP_ Child CreateContext _ex1";

const SEP07ContextParentEx1 = () => {
  const [info, setInfo] = useState<string>("Welcome to My Context API");
  const [data, setdata] = useState<{ nm: string; dept: string }[]>([
    { nm: "Nilay", dept: "IT" },
    { nm: "Rajesh", dept: "CSE" },
    { nm: "Rahul", dept: "ECE" },
    { nm: "Ramesh", dept: "Maths" },
  ]);

  // Here we use useEffect Hook to display the message after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      setInfo("Thanks for Visiting.....!");
      setdata([...data, { nm: "Suresh", dept: "Physics" }]);
    }, 5000);
  }, []);
  return (
    <>
      <h3>Parent Component</h3>
      {/* 
        We added a message and empdata property in the SEP07ContextEx1 Context, so we need to pass them in the Provider's value. 
        Now, we can access them in the Child Component.

        Here we use .Provider to avail the Context to the Child Components and pass the values.
        value is a predefined property. Here we pass the object notation structure to the value property. So, we can access them in the Child Component using useContext hook(from CreateContext).
      */}
      <SEP07ContextEx1.Provider value={{ msg: info, empdata: data }}>
        <SEP07ContextChildEx1 />
      </SEP07ContextEx1.Provider>
    </>
  );
};

export default SEP07ContextParentEx1;
