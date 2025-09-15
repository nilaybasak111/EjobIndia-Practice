import React, { useState } from "react";

const AUG30HooksEx1 = () => {
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<string[]>([]);

  const valueUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const addname = () => {
    setInfo([...info, name]);
    setName("");
  };

  const deleteName = (index: number) => {
    info.splice(index, 1);
    setInfo([...info]);
  };

  return (
    <>
      Enter Name:
      <input type="text" name="name" value={name} onChange={valueUpdate} />
      <br />
      <button onClick={addname}>ADD</button>
      <br />
      <br />
      {info.length > 0 ? (
        <ol>
          {info.map((value, index) => {
            return (
              <li key={index}>
                {value}{" "}
                <button
                  onClick={() => {
                    deleteName(index);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      ) : (
        <h3>No Names are Added Yet....</h3>
      )}
    </>
  );
};

export default AUG30HooksEx1;
