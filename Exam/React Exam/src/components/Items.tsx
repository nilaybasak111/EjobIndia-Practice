import { Component } from "react";
import Cart from "./Cart";

interface Item {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Item {
  quantity: number;
}

interface StateType {
  items: Item[];
  selectedQuantities: { [key: number]: number };
  cart: CartItem[];
}

export default class Items extends Component<{}, StateType> {
  state: StateType = {
    items: [
      { id: 1, name: "tshirt", price: 1000 },
      { id: 2, name: "jeans", price: 500 },
    ],
    selectedQuantities: {},
    cart: [],
  };

  handleQuantityChange = (id: number, value: number) => {
    this.setState((prevState) => ({
      selectedQuantities: {
        ...prevState.selectedQuantities,
        [id]: value,
      },
    }));
  };

  handleAddToCart = (item: Item) => {
    const quantity = this.state.selectedQuantities[item.id] || 1;

    const newCartItem: CartItem = {
      ...item,
      quantity,
    };

    this.setState((prevState) => ({
      cart: [...prevState.cart, newCartItem],
    }));
  };

  render() {
    const { items, selectedQuantities, cart } = this.state;

    return (
      <div>
        <h3>Items</h3>
        <table
          border={1}
          cellPadding={5}
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>SL NO</th>
              <th>ITEM NAME</th>
              <th>Item Price (per item)</th>
              <th>ITEM QUANTITY</th>
              <th>ACTION BUTTON</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name.toUpperCase()}</td>
                <td>{item.price}</td>
                <td>
                  <select
                    value={selectedQuantities[item.id] || 1}
                    onChange={(e) =>
                      this.handleQuantityChange(item.id, Number(e.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <button
                    style={{ backgroundColor: "lime" }}
                    onClick={() => this.handleAddToCart(item)}
                  >
                    ADD TO CART
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Cart cartItems={cart} />
      </div>
    );
  }
}
