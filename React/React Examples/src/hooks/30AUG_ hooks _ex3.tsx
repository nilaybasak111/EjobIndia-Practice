import React, { useState, useLayoutEffect } from "react";
// useLayoutEffect - It will run after render. 
// useLayoutEffect works like componentWillMount

interface AUG30HooksEx3Type {
  itemName: string;
  price: number;
}

const AUG30HooksEx3 = () => {
  const [item, setItem] = useState<AUG30HooksEx3Type>({
    itemName: "",
    price: 0,
  });
  const [total, setTotal] = useState<number>(0);

  const valueUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const findTotal = () => {
    console.log(item);
    setTotal(Number(total) + Number(item.price));
    setItem({ itemName: "", price: 0 });
  };

  useLayoutEffect(() => {
    alert("Welcome to My Component useLayoutEffect ...!");
  }, []);

  return (
    <>
      Item Name:
      <input
        type="text"
        name="itemName"
        onChange={valueUpdate}
        value={item.itemName}
      />
      <br />
      Price:
      <input
        type="number"
        name="price"
        onChange={valueUpdate}
        value={item.price}
      />
      <br/>
      <button onClick={findTotal}>ADD</button>
      <br />
      <br />
      <h3>Grand Total : {total}</h3>
    </>
  );
};

export default AUG30HooksEx3;
