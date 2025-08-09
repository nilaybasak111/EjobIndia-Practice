// Display Name , Department, Email in 3AUG_ Display _ex5.tsx from 3AUG_ Information _ex5.tsx using props
// For Single Student

import React, { Component } from "react";
import AUG3DisplayEx5 from "./3AUG_ Display _ex5";

interface AUG3InformationEx5Type {
  stdName: string;
  dept: string;
  email: string;
  show: boolean;
  displayName: string;
  displayDept: string;
  displayEmail: string;
}

export default class AUG3InformationEx5 extends Component {
  state: AUG3InformationEx5Type = {
    stdName: "",
    dept: "",
    email: "",
    show: false,
    displayName: "",
    displayDept: "",
    displayEmail: "",
  };

  valUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  passValue = () => {
    this.setState({
      show: !this.state.show,
      displayName: this.state.stdName,
      displayDept: this.state.dept,
      displayEmail: this.state.email,
      stdName: "",
      dept: "",
      email: "",
    });
  };

  render() {
    return (
      <>
        Enter Your Name :
        <input
          type="text"
          name="stdName"
          value={this.state.stdName}
          onChange={this.valUpdate}
        />
        <br />
        Enter Your Department :
        <input
          type="text"
          name="dept"
          value={this.state.dept}
          onChange={this.valUpdate}
        />
        <br />
        Enter Your Email :
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.valUpdate}
        />
        <br />
        <br />
        <input
          type="button"
          value="SHOW / HIDE Data"
          onClick={this.passValue}
        />
        <br />
        <br />
        {/* Show child component only after SHOW button pressed */}
        {this.state.show ? (
          <AUG3DisplayEx5
            nm={this.state.displayName}
            depart={this.state.displayDept}
            mail={this.state.displayEmail}
          />
        ) : (
          <h3>No Data Found...</h3>
        )}
      </>
    );
  }
}
