// Using Toggle to Show / Hide a Message

import React, { Component } from "react";

interface AUG2Ex3Type {
  nm: string;
  dpt: string;
  msg: string;
  load: boolean;
}

export default class AUG2Ex3 extends Component {
  state: AUG2Ex3Type = {
    nm: "",
    dpt: "",
    msg: "",
    load: false,
  };

  valUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  disp = () => {
    let m = `Name : ${this.state.nm} & Dept : ${this.state.dpt}`;
    this.setState({ msg: m, load: !this.state.load });
  };

  render() {
    return (
      <>
        Enter Name :
        <input
          type="text"
          name="nm"
          value={this.state.nm}
          onChange={this.valUpdate}
        />
        <br />
        Enter Dept :
        <input
          type="text"
          name="dpt"
          value={this.state.dpt}
          onChange={this.valUpdate}
        />
        <br />
        <input
          type="button"
          value={this.state.load ? "HIDE" : "SHOW"}
          onClick={this.disp}
        />
        {this.state.load ? <h3>{this.state.msg}</h3> : null}
      </>
    );
  }
}
