// Showing Marks, Name of a Single Student

import React, { Component } from "react";

interface July27Ex2Type {
  name: string;
  math: number;
  physics: number;
  bio: number;
  msg: string;
}

class July27Ex2 extends Component {
  state: July27Ex2Type = {
    name: "",
    math: 0,
    physics: 0,
    bio: 0,
    msg: "",
  };

  valupdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: [value] });
  };

  updatedValue = () => {
    let stName = this.state.name;
    let total = Number(this.state.math) + Number(this.state.physics) + Number(this.state.bio);
   this.setState({msg: `Student Name : ${stName} & Total Marks : ${total}`});
  };

  render() {
    return (
      <>
        Enter Student Name :
        <input type="text" name="name" onChange={this.valupdate} />
        <br />
        Math Marks :
        <input type="number" name="math" onChange={this.valupdate} />
        <br />
        Physics Marks :
        <input type="number" name="physics" onChange={this.valupdate} />
        <br />
        Biology Marks :
        <input type="number" name="bio" onChange={this.valupdate} />
        <br />
        <br />
        <input type="button" value="Show" onClick={this.updatedValue} />
        <h3>{this.state.msg}</h3>
      </>
    );
  }
}

export default July27Ex2;
