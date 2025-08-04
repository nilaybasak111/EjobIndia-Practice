// Showing Marks, Name of Multiple Students

import React, { Component } from "react";

interface July27Ex3Type {
  nm: string;
  mth: number;
  phy: number;
  bio: number;
  data: { nm: string; total: number }[];
}

export default class July27Ex3 extends Component {
  state: July27Ex3Type = {
    nm: "",
    mth: 0,
    phy: 0,
    bio: 0,
    data: [],
  };

  valupdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: [value] });
  };

  addinfo = () => {
    let totmrks =
      Number(this.state.mth) + Number(this.state.phy) + Number(this.state.bio);
    let newdata = { nm: this.state.nm, total: totmrks };
    this.setState({
      data: [...this.state.data, newdata],
      mth: 0,
      phy: 0,
      bio: 0,
      nm: "",
    }); //Resetting the input fields after adding
  };
  render() {
    return (
      <>
        Enter Name :{" "}
        <input
          type="text"
          name="nm"
          onChange={this.valupdate}
          value={this.state.nm}
        />
        <br></br>
        Enter Mth Marks :{" "}
        <input
          type="number"
          name="mth"
          onChange={this.valupdate}
          value={this.state.mth}
        />
        <br></br>
        Enter Phy Marks :{" "}
        <input
          type="number"
          name="phy"
          onChange={this.valupdate}
          value={this.state.phy}
        />
        <br></br>
        Enter Bio Marks :{" "}
        <input
          type="number"
          name="bio"
          onChange={this.valupdate}
          value={this.state.bio}
        />
        <br></br>
        <button onClick={this.addinfo}>ADD</button>
        <br></br>
        {this.state.data.length > 0 ? (
          <ol>
            {this.state.data.map((item, index) => {
              return (
                <li key={index}>
                  Name : {item.nm} & Total marks : {item.total}
                </li>
              );
            })}
          </ol>
        ) : (
          <h3>No Students Are Added Yet..!</h3>
        )}
      </>
    );
  }
}
