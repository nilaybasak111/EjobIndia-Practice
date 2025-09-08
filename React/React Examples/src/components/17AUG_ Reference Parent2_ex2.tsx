import React, { Component } from "react";
import Infochild from "./17AUG_ Reference Child2_ex2";
interface AUG17RefParent2Ex2Type {
  nm: string;
  dp: string;
  info: { nm: string; dp: string }[];
  flag: boolean;
}

export default class AUG17RefParent2Ex2 extends Component {
  state: AUG17RefParent2Ex2Type = {
    nm: "",
    dp: "",
    info: [],
    flag: false,
  };

  valUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  addInfo = () => {
    if (this.state.flag == false) {
      let v = { nm: this.state.nm, dp: this.state.dp };
      this.setState({
        info: [...this.state.info, v],
        nm: "",
        dp: "",
        flag: true,
      });
    } else {
      this.setState({ flag: false });
    }
  };

  render() {
    return (
      <>
        Enter Name :
        <input
          type="text"
          name="nm"
          onChange={this.valUpdate}
          value={this.state.nm}
        />
        <br></br>
        Enter Dept :
        <input
          type="text"
          name="dp"
          onChange={this.valUpdate}
          value={this.state.dp}
        />
        <br></br>
        <input
          type="button"
          value={this.state.flag ? "RESET" : "ADD"}
          onClick={this.addInfo}
        />
        <br></br>
        {this.state.flag ? <Infochild data={this.state.info} /> : null}
      </>
    );
  }
}
