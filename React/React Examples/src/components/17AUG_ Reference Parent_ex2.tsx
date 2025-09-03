import React, { Component } from "react";
import AUG17ReferenceChildEx2 from "./17AUG_ Reference Child_ex2";

interface AUG17RefParentEx2Type {
  name: string;
  dept: string;
  dispMsg: { name: string; dept: string }[];
}

export default class AUG17RefParentEx2 extends Component<
  {},
  AUG17RefParentEx2Type
> {
  state: AUG17RefParentEx2Type = {
    name: "",
    dept: "",
    dispMsg: [],
  };

  ref1 = React.createRef<HTMLInputElement>();
  ref2 = React.createRef<HTMLInputElement>();

  displayValue = () => {
    const name = this.ref1.current?.value || "";
    const dept = this.ref2.current?.value || "";
    this.setState((prevState) => ({
      dispMsg: [...prevState.dispMsg, { name, dept }],
      name: "",
      dept: "",
    }));
    if (this.ref1.current) this.ref1.current.value = "";
    if (this.ref2.current) this.ref2.current.value = "";
  };

  render() {
    return (
      <>
        Enter Name :
        <input type="text" ref={this.ref1} />
        <br />
        Enter Department :
        <input type="text" ref={this.ref2} />
        <br />
        <button onClick={this.displayValue}>ADD</button>
        <br />
        <br />
        {console.log("This.state.dispMsg ",this.state.dispMsg)}
        {this.state.dispMsg.length > 0 && (
          <AUG17ReferenceChildEx2 data={this.state.dispMsg} />
        )}
      </>
    );
  }
}
