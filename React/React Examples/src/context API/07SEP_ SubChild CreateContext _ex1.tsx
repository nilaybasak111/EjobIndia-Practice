import { useContext } from "react";
import SEP07ContextEx1 from "./07SEP_ CreateContext _ex1";
// In subChild(SEP7ContextSubChildEx1) Component we import useContext hook & the Context(SEP07ContextEx1).

const SEP07ContextSubChildEx1 = () => {
  // Here we use useContext hook to access the Context(SEP07ContextEx1).
  // After getting the Context, we destructure the msg property from the Context.
  // And get the value of the msg property and display it in the h3 tag.
  const { msg } = useContext(SEP07ContextEx1);

  return (
    <>
      <h3>Subchild Component</h3>
      <h3>Msg : {msg}</h3>
    </>
  );
};

export default SEP07ContextSubChildEx1;
