import { useRef } from "react";

const SEP01HooksRefEx1 = () => {
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLHeadingElement>(null);

  const checkAge = () => {
    let age = Number(ref1.current!.value);
    if (age < 18) {
      ref2.current!.innerText = "You Are Not Eligible to Vote";
      ref1.current!.value = "";
    } else {
      ref2.current!.innerText = "You Are Eligible to Vote";
      ref1.current!.value = "";
    }
  };

  return (
    <>
      Enter Age :
      <input type="number" ref={ref1} />
      <br />
      <button onClick={checkAge}>CHECK</button>
      <br />
      <br />
      <h3 ref={ref2}></h3>
    </>
  );
};

export default SEP01HooksRefEx1;
