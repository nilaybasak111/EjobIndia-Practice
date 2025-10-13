import { useLayoutEffect, useEffect } from "react";

const SEP13RoutingHomeEx1 = () => {
  // useLayoutEffect - It will run after render.
  useLayoutEffect(() => {
    alert("Welcome, My Component is Loading Now...!");
  }, []);

  // useEffect - It will run before render.
  useEffect(() => {
    return () => {
      alert("Goodbye, My Component is Unloading Now...!");
    };
  });

  return (
    <>
      <h3>Welcome to My Home Component</h3>
    </>
  );
};

export default SEP13RoutingHomeEx1;
