import React, { useState, useRef } from "react";
import axios from "axios";

interface Idata {
  firstName: string;
  lastName: string;
  age: number;
}

const OCT05APIPOSTEx2 = () => {
  const [info, setInfo] = useState<Idata>({
    firstName: "",
    lastName: "",
    age: 0,
  });
  const displayRef = useRef<HTMLHeadingElement>(null);

  const valueUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const insertData = () => {
    axios
      .post("https://dummyjson.com/users/add", {
        firstName: info.firstName,
        lastName: info.lastName,
        age: info.age,
      })
      .then((res) => {
        console.log(res.data);
        displayRef.current!.innerText = "Data Inserted Successfully";
      })
      .catch((err) => {
        console.log(err);
        displayRef.current!.innerText = "Data Insertion Failed";
      });
  };

  return (
    <>
      FirstName :
      <input type="text" name="firstName" onChange={valueUpdate} />
      <br></br>
      LastName :
      <input type="text" name="lastName" onChange={valueUpdate} />
      <br></br>
      Age :
      <input type="number" name="age" onChange={valueUpdate} />
      <br />
      <br />
      <button onClick={insertData}>INSERT</button>
      <br />
      <br />
      <h3 ref={displayRef}></h3>
    </>
  );
};

export default OCT05APIPOSTEx2;
