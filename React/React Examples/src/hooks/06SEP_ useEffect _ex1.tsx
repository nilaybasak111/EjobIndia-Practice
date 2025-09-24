// Loading & Unloading SEP01HooksRefCricketEx2 component using SEP06HooksUseEffectEx1 component

import { useState } from "react";
import SEP01HooksRefCricketEx2 from "./01SEP_ hooks useRef _ Cricket _ex2";

const SEP06HooksUseEffectEx1 = () => {
  const [load, setLoad] = useState<boolean>(false);
  return (
    <>
      <input
        type="button"
        value={load ? "Hide" : "Show"}
        onClick={() => setLoad(!load)}
      />
      {load && <SEP01HooksRefCricketEx2 />}
    </>
  );
};

export default SEP06HooksUseEffectEx1;
