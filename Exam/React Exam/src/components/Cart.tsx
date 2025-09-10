import { Component } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  cartItems: CartItem[];
}

export default class Cart extends Component<Props> {
  render() {
    const { cartItems } = this.props;

    return (
      <div style={{ marginTop: "20px" }}>
        <h3>Cart</h3>
        <table
          border={1}
          cellPadding={5}
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>SL. NO</th>
              <th>ITEM NAME</th>
              <th>QUANTITY ORDER</th>
              <th>TOTAL PRICE</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
