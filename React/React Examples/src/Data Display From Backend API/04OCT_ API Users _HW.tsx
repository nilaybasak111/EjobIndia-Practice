import { useState, useEffect, useRef } from "react";
import axios from "axios";
const OCT04APIUsersHW = () => {
  const [info, setInfo] = useState<any[]>([]);
  const [status, setStatus] = useState<boolean>(false);
  const statecodeRef = useRef<HTMLSelectElement>(null);
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://dummyjson.com/users")
        .then((res) => {
          console.log(res.data.users);
          setInfo(res.data.users);
          setStatus(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
  }, []);

  const displayValue = () => {
    const valueUpdate = statecodeRef.current?.value;
    setMsg(valueUpdate as string);
  };

  return (
    <>
      <h3>Select the State :</h3>
      {status ? (
        <select ref={statecodeRef} onChange={displayValue}>
          {info.map((value) => {
            return (
              <option value={value?.address?.stateCode}>
                {value?.address?.state}
              </option>
            );
          })}
        </select>
      ) : (
        <h4>Loading, Please Wait...</h4>
      )}

      {msg.length > 0 ? <h3>Selected Statecode : {msg}</h3> : null}
    </>
  );
};
export default OCT04APIUsersHW;
