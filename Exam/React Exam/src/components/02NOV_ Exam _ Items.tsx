import React, { useState, useContext } from "react";
import { CartContext } from "./02NOV_ Exam _ CartContext";

interface Item {
  id: number;
  name: string;
  price: number;
}

const Items: React.FC = () => {
  const items: Item[] = [
    { id: 1, name: "TSHIRT", price: 1000 },
    { id: 2, name: "JEANS", price: 500 },
  ];

  const { addToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleQuantityChange = (id: number, value: number) => {
    setQuantities({ ...quantities, [id]: value });
  };

  const handleBuyNow = (item: Item) => {
    const quantity = quantities[item.id] || 1;
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantity,
    });
    alert(`${item.name} added to cart!`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Items List</h2>
      <table border={1} cellPadding={10} width="100%">
        <thead>
          <tr>
            <th>SL NO.</th>
            <th>ITEM NAME</th>
            <th>ITEM PRICE (per item)</th>
            <th>ITEM QUANTITY</th>
            <th>ACTION BUTTON</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <select
                  value={quantities[item.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button
                  style={{
                    backgroundColor: "limegreen",
                    color: "white",
                    padding: "5px 10px",
                  }}
                  onClick={() => handleBuyNow(item)}
                >
                  BUY NOW
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
