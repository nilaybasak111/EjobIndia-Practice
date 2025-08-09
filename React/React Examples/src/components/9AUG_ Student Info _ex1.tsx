// Display Name , Department in 9AUG_ Display Info _ex1.tsx from 9AUG_ Student Info _ex1.tsx using props
// For Multiple Students in Table Format

import React, { Component } from "react";
import AUG9DisplayInfoEx1 from "./9AUG_ Display Info _ex1";

interface AUG9StudentInfoEx1Type {
  info: { nm: string; depart: string }[];
  nm: string;
  depart: string;
}

export default class AUG9StudentInfoEx1 extends Component {
  state: AUG9StudentInfoEx1Type = {
    nm: "",
    depart: "",
    info: [],
  };

  valUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addInfo = () => {
    if (this.state.nm.trim() && this.state.depart) {
      let v = { nm: this.state.nm, depart: this.state.depart };
      this.setState({
        info: [...this.state.info, v],
        nm: "",
        depart: "",
      });
    }
  };

  render() {
    return (
      <div>
        Name :
        <input
          type="text"
          name="nm"
          value={this.state.nm}
          onChange={this.valUpdate}
        />
        Department :
        <select
          name="depart"
          value={this.state.depart}
          onChange={this.valUpdate}
        >
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="Maths">Maths</option>
        </select>
        <br />
        <br />
        <input type="button" value="Add" onClick={this.addInfo} />
        <br />
        <br />
        {this.state.info.length > 0 ? (
          <AUG9DisplayInfoEx1
            // convert {nm, depart} -> {name, dept}
            data={this.state.info.map((std) => ({
              name: std.nm,
              dept: std.depart,
            }))}
          />
        ) : (
          <h3>No Data Available</h3>
        )}
      </div>
    );
  }
}
