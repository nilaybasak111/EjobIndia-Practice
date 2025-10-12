import { useContext } from "react";
import SEP07ContextHW from "./07SEP_ CreateContext _HW";

const SEP07Details2HW = () => {
  const { loc } = useContext(SEP07ContextHW);
  //console.log(loc);

  return (
    <>
      <h3>This is Details2</h3>
      <h4>Welcome to My Location: {loc} </h4>
    </>
  );
};

export default SEP07Details2HW;
