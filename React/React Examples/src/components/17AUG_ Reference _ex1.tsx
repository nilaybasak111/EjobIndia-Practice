import React, { Component } from "react";

export class AUG17RefEx1 extends Component {
  ref1 = React.createRef<HTMLInputElement>();
  ref2 = React.createRef<HTMLInputElement>();
  ref3 = React.createRef<HTMLHeadingElement>();

  displayValue = () => {
    let name = this.ref1.current!.value;
    let dept = this.ref2.current!.value;
    this.ref3.current!.innerHTML = `Name : ${name} & Dept : ${dept}`;
  };

  render() {
    return (
      <>
        Name :
        <input type="text" ref={this.ref1} />
        <br />
        Department :
        <input type="text" ref={this.ref2} />
        <br />
        <button onClick={this.displayValue}>SHOW</button>
        <br />
        <br />
        <h3 ref={this.ref3}></h3>
      </>
    );
  }
}
