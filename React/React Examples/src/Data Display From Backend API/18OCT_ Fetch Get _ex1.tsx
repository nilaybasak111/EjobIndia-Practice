import { useState, useEffect } from "react";

const OCT18FetchGetEx1 = () => {
  const [items, setItems] = useState<any>([]);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          if (res.status >= 400) {
            throw new Error("Server is not Responding");
          }
          return res.json(); // Here we mantion that we want the data in the json format
        })
        .then((data) => {
          // This Data is the data we got from the server / API
          setItems(data);
        })
        .catch((error) => {
          // In Fetch if we get any error then we can catch it here in .catch()
          console.log("Error : " + error);
        });
    }, 2000);
  }, []);
  return (
    <>
      <h3>Details</h3>
      {items.map((value: any, index: any) => {
        return (
          <ul>
            <li>{value.id}</li>
            <li>{value.email}</li>
          </ul>
        );
      })}
    </>
  );
};

export default OCT18FetchGetEx1;
