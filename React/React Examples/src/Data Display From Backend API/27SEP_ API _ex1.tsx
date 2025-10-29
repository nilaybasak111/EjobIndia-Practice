import { useState } from "react";
import axios from "axios";

const SEP27ApiEx1 = () => {
  interface SEP27ApiEx1Type {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
  }

  const [data, setData] = useState<SEP27ApiEx1Type>({});

  const callapi = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(
        // If API call is successful then this function will be called & data will be printed here
        (res) => {
          console.log(res.data);
          setData(res.data);
          console.log(res.data.title);
          console.log(res.data.body);
          console.log(res.data.id);
        }
      )
      .catch(
        // If API call is not successful then this function will be called & error will be printed here
        (err) => {
          console.log(err);
        }
      );
  };

  return (
    <>
      <h3>API Testing</h3>
      <button onClick={callapi}>CHECK API</button>
      <br></br>
      {data && (
        <ul>
          <li>{data.title}</li>
          <li>{data.body}</li>
          <li>{data.id}</li>
        </ul>
      )}
    </>
  );
};

export default SEP27ApiEx1;
