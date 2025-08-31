import React, { Component } from "react";
import AUG10EmpProfile2 from "./10AUG_ Profile _HW2";
interface AUG10EmpDetails2Type {
  nm: string;
  em: string;
  gen: string;
  loc: string;
  flag: boolean;
}

export default class AUG10EmpDetails2 extends Component {
  state: AUG10EmpDetails2Type = {
    nm: "",
    em: "",
    gen: "",
    loc: "",
    flag: false,
  };

  valupdate = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: [value] });
  };

  render() {
    return (
      <>
        Name :{" "}
        <input
          type="text"
          name="nm"
          onChange={this.valupdate}
          value={this.state.nm}
        />
        <br></br>
        Email:{" "}
        <input
          type="email"
          name="em"
          onChange={this.valupdate}
          value={this.state.em}
        />
        <br></br>
        Select Gender :
        <input
          type="radio"
          name="gen"
          value="male"
          onChange={this.valupdate}
        />{" "}
        Male
        <input
          type="radio"
          name="gen"
          value="female"
          onChange={this.valupdate}
        />{" "}
        Female
        <br></br>
        Enter Location :
        <input
          type="text"
          name="loc"
          onChange={this.valupdate}
          value={this.state.loc}
        />
        <br></br>
        <input
          type="button"
          value={this.state.flag ? "HIDE" : "SHOW"}
          onClick={() => {
            this.setState({ flag: !this.state.flag });
          }}
        />
        {this.state.flag ? (
          <AUG10EmpProfile2
            n={this.state.nm}
            e={this.state.em}
            g={this.state.gen}
            l={this.state.loc}
          />
        ) : null}
      </>
    );
  }
}
