import React, { useState } from "react";

interface AUG23HooksUserInputEx2Type {
  name: string;
  age: number;
  location: string;
}

const AUG23HooksUserInputEx2 = () => {
  const [info, setInfo] = useState<AUG23HooksUserInputEx2Type>({
    name: "",
    age: 0,
    location: "",
  });

  const valUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <>
      Name : <input type="text" name="name" onChange={valUpdate} />
      <br />
      Age : <input type="number" name="age" onChange={valUpdate} />
      <br />
      Location : <input type="text" name="location" onChange={valUpdate} />
      <br />
      <br />
      <ul>
        <li>Name: {info.name}</li>
        <li>Age: {info.age}</li>
        <li>location: {info.location}</li>
      </ul>
    </>
  );
};

export default AUG23HooksUserInputEx2;
