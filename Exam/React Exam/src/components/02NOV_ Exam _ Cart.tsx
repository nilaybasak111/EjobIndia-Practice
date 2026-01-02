import { useContext } from "react";
import { CartContext } from "./02NOV_ Exam _ CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const totalBill = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart Details</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart yet.</p>
      ) : (
        <>
          <table border={1} cellPadding={10} width="100%">
            <thead>
              <tr>
                <th>ITEM NAME</th>
                <th>QUANTITY ORDERED</th>
                <th>PRICE (per item)</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan={3}
                  style={{ textAlign: "right", fontWeight: "bold" }}
                >
                  TOTAL BILL:
                </td>
                <td style={{ fontWeight: "bold" }}>{totalBill}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Cart;
