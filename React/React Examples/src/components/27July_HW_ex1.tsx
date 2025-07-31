import React, { Component } from "react";

interface July27HWEx1Type {
  name: string;
  price: number;
  qty: number;
  totalItem: { name: string; total: number }[];
}

class July27HWEx1 extends Component {
  state: July27HWEx1Type = {
    name: "",
    price: 0,
    qty: 0,
    totalItem: [],
  };
  valUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("name ", name);
    console.log("value ", value);
    this.setState({ [name]: value });
  };

  updatedValue = () => {
    let itemName = this.state.name;
    let price = this.state.price;
    let qty = this.state.qty;
    let totalItem = this.state.totalItem;
    const total = price * qty;
    if (!itemName || price <= 0 || qty <= 0) {
      return;
    }
    this.setState({
      totalItem: [...totalItem, { name: itemName, total }],
      name: "",
      price: 0,
      qty: 0,
    });
  };
  render() {
    return (
      <>
        Enter Item Name :
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.valUpdate}
        />
        <br />
        <br />
        Enter Item Price :
        <input
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.valUpdate}
        />
        <br />
        <br />
        Enter Item Quantity :
        <input
          type="number"
          name="qty"
          value={this.state.qty}
          onChange={this.valUpdate}
        />
        <br />
        <br />
        <button onClick={this.updatedValue}>Generate Invoice</button>
        <br />
        <br />
        <div>
          <table
            border={1}
            cellPadding="10"
            cellSpacing="0"
            width="50%"
            align="center"
          >
            <thead>
              <tr>
                <th>ItemName</th>
                <th>Total Order Price</th>
              </tr>
            </thead>
            <caption>Table Listing : </caption>
            <tbody>
              {this.state.totalItem.map((item, idx) => (
                <tr key={idx}>
                  <td style={{ textAlign: "center" }}>{item.name}</td>
                  <td style={{ textAlign: "center" }}>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default July27HWEx1;
