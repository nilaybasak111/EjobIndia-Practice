import React, { useState, useRef } from "react";

const OCT18FetchPostEx1 = () => {
  const [info, setInfo] = useState<any>({
    firstName: "",
    lastName: "",
    age: "",
  });
  const ref1 = useRef<HTMLHeadingElement>(null);

  const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const checkLogin = () => {
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify({
        firstName: info.firstName,
        lastName: info.lastName,
        age: info.age,
      }),
    })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("Api call failed!");
        }
        return res.json();
      })
      .then((data) => {
        setInfo(data);
        console.log(data);
        ref1.current!.innerText = "LOGIN SUCCESS...!";
      })
      .catch((err) => {
        console.log(err);
        ref1.current!.innerText = "LOGIN FAILED...!";
      });
  };

  return (
    <>
      <h3>Login Here</h3>
      <br></br>
      ENTER FIRST NAME:
      <input type="text" name="firstName" onChange={valueChange} />
      <br></br>
      ENTER LAST NAME:
      <input type="text" name="lastName" onChange={valueChange} />
      <br></br>
      ENTER AGE:
      <input type="number" name="age" onChange={valueChange} />
      <br></br>
      <button onClick={checkLogin}>LOGIN</button>
      <br></br>
      <h3 ref={ref1}></h3>
    </>
  );
};
export default OCT18FetchPostEx1;
