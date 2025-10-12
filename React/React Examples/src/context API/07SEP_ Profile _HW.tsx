import { useState } from "react";
import SEP07ContextHW from "./07SEP_ CreateContext _HW";
import SEP07DetailsHW from "./07SEP_ Details _HW";
import SEP07Details2HW from "./07SEP_ Details2 _HW";

interface SEP07ProfileHWType {
  nm: string;
  age: number;
  loc: string;
}

const SEP07ProfileHW = () => {
  const [info, setInfo] = useState<SEP07ProfileHWType>({
    nm: "",
    age: 0,
    loc: "",
  });
  const [display, setDisplay] = useState<SEP07ProfileHWType>({
    nm: "",
    age: 0,
    loc: "",
  });

  const valueUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const displayInfo = () => {
    setDisplay(info);
    setInfo({ nm: "", age: 0, loc: "" });
  };

  return (
    <>
      Name :
      <input type="text" name="nm" value={info.nm} onChange={valueUpdate} />
      <br />
      Age :
      <input type="number" name="age" value={info.age} onChange={valueUpdate} />
      <br />
      Location :
      <input type="text" name="loc" value={info.loc} onChange={valueUpdate} />
      <br />
      <br />
      <input type="button" value="Display" onClick={displayInfo} />
      <br />
      <br />
      <SEP07ContextHW.Provider
        value={{ nm: display.nm, age: display.age, loc: display.loc }}
      >
        {/* We can pass the value to the multiple child components from here */}
        <SEP07DetailsHW />
        <SEP07Details2HW />
      </SEP07ContextHW.Provider>
    </>
  );
};

export default SEP07ProfileHW;
