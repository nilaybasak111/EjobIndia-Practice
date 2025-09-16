import { useState, useRef, useEffect } from "react";

const SEP01HooksRefCricketEx2 = () => {
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);
  const valueRef = useRef<HTMLSelectElement>(null);
  const displayRef = useRef<HTMLParagraphElement>(null);

  const scoreUpdate = () => {
    let val = valueRef.current!.value;
    if (val === "wd" || val === "nb") {
      setRuns(runs + 1);
    } else {
      setRuns(runs + Number(val));
      setBalls(balls + 1);
    }
  };

  // useEffect Hook is calls after every render
  // In dependency array we can pass the state variable or props
  useEffect(() => {
    setTimeout(() => {
      displayRef.current!.innerText = `Runs : ${runs} Balls : ${balls}`;
    }, 2000);
  }, [runs, balls]);

  return (
    <>
      <h2>Batting Runs :</h2>
      {/* Taking Value using Ref from Select */}
      <select ref={valueRef} onChange={scoreUpdate}>
        <option value="">Select Runs</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="wd">Wd Ball</option>
        <option value="nb">No Ball</option>
      </select>
      <br />
      <br />
      <h3>Scoreboard :</h3>
      <br />
      {/* Putting Runs and Balls Using Ref */}
      <p ref={displayRef}></p>
    </>
  );
};

export default SEP01HooksRefCricketEx2;
