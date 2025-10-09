import { useContext } from "react";
import SEP7ContextSubChildEx1 from "./07SEP_ SubChild CreateContext _ex1";
import SEP07ContextEx1 from "./07SEP_ CreateContext _ex1";
// In Child(SEP7ContextChildEx1) Component we import useContext hook & the Context(SEP07ContextEx1).

const SEP07ContextChildEx1 = () => {
  // We need only the empdata property from the Context
  // So we destructure the empdata property from the Context
  const { empdata } = useContext(SEP07ContextEx1);
  return (
    <>
      <h3>Child Component</h3>
      <ul>
        {empdata.map((value, index) => (
          <li key={index}>
            <h3>Name : {value.nm}</h3>
            <h3>Dept : {value.dept}</h3>
          </li>
        ))}
      </ul>
      {/* Here we render the Subchild Component(SEP7ContextSubChildEx1) */}
      <SEP7ContextSubChildEx1 />
    </>
  );
};

export default SEP07ContextChildEx1;
