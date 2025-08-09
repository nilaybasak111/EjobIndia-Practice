import { Component } from "react";
import type { Items } from "./9AUG_ Items _HW1";

interface AUG9BillHW1Type {
  info: Items[];
}

export default class AUG9BillHW1 extends Component<AUG9BillHW1Type> {
  state: AUG9BillHW1Type = {
    info: [],
  };

  render() {
    const grandTotal = this.props.info.reduce(
      (sum, items) => sum + items.totalPrice,
      0
    );
    return (
      <>
        <h3 style={{ textAlign: "center" }}>Your Bill</h3>
        <table
          border={1}
          cellPadding={10}
          cellSpacing="0"
          width="50%"
          align="center"
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          <thead style={{ border: "1px solid black" }}>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.info.length > 0 ? (
              <>
                {this.props.info.map((items, index) => (
                  <tr key={index} style={{ border: "1px solid black" }}>
                    <td>{items.itemName}</td>
                    <td>{items.price}</td>
                    <td>{items.qty}</td>
                    <td>{items.totalPrice}</td>
                  </tr>
                ))}
                <tr
                  style={{
                    border: "1px solid black",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <td colSpan={3}>Grand Total</td>
                  <td>{grandTotal}</td>
                </tr>
              </>
            ) : (
              <tr>
                <td colSpan={4} align="center">
                  No items added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    );
  }
}
