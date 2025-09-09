import React, { useState } from "react";

const AUG23HooksEx1 = () => {
  const [name, setName] = useState<string>("Nilay");
  const [age, setAge] = useState<number>(24);
  const [location, setLocation] = useState<string>("Nabadwip");

  // In Functional Component Method is Define using const
  const valUpdate = () => {
    setTimeout(() => {
      setName("Nilay Basak");
      setAge(24);
      setLocation("Kolkata");
    }, 2000);
  };

  return (
    <>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Location: {location}</li>
      </ul>
      <br />
      <br />
      <button onClick={valUpdate}>Update</button>
    </>
  );
};

export default AUG23HooksEx1;
