// Take inputs from the User from 9AUG_ Items _HW1.tsx
// Pass the details to 9AUG_ Bill _HW1.tsx using props and display the details in table format

import React, { Component } from "react";
import AUG9BillHW1 from "./9AUG_ Bill _HW1";

export interface Items {
  itemName: string;
  price: number;
  qty: number;
  totalPrice: number;
}

interface AUG9ItemsHW1Type {
  itemName: string;
  price: number;
  qty: number;
  info: [];
}

export default class AUG9ItemsHW1 extends Component {
  state: AUG9ItemsHW1Type = {
    itemName: "",
    price: 0,
    qty: 0,
    info: [],
  };

  valUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  passValue = () => {
    const { itemName, price, qty } = this.state;
    if (!itemName || !price || !qty) {
      alert("Fill All Details");
      return;
    }
    const newItem: Items = {
      itemName,
      price,
      qty,
      totalPrice: price * qty,
    };
    this.setState({
      info: [...this.state.info, newItem],
      itemName: "",
      price: 0,
      qty: 0,
    });
  };

  render() {
    return (
      <>
        Itemname :
        <input
          type="text"
          name="itemName"
          value={this.state.itemName}
          onChange={this.valUpdate}
        />
        <br />
        <br />
        Price :
        <input
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.valUpdate}
        />
        <br />
        <br />
        Quantity :
        <select name="qty" value={this.state.qty} onChange={this.valUpdate}>
          <option value="">Select Quantity</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <br />
        <button type="button" onClick={this.passValue}>
          Generate Invoice
        </button>
        <br />
        <br />
        <AUG9BillHW1 info={this.state.info} />
      </>
    );
  }
}
