import { useContext } from "react";
import SEP07ContextHW from "./07SEP_ CreateContext _HW";

const SEP07DetailsHW = () => {
  const { nm, age, loc } = useContext(SEP07ContextHW);
  //console.log(name, age, location);

  return (
    <>
      <h3>Name : {nm}</h3>
      <h3>Age : {age}</h3>
      <h3>Location : {loc}</h3>
    </>
  );
};

export default SEP07DetailsHW;
