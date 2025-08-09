import { Component } from "react";

interface AUG9FunctionPassingChildEx2Type {
  c: number;
  funcInc: () => void;
  funcDec: () => void;
}

export default class AUG9FunctionPassingChildEx2 extends Component<AUG9FunctionPassingChildEx2Type> {
  constructor(props: AUG9FunctionPassingChildEx2Type) {
    super(props);
  }
  render() {
    return (
      <>
        <h3>Counter: {this.props.c}</h3>
        <button onClick={this.props.funcInc}>Increment (+)</button>
        <br />
        <button onClick={this.props.funcDec}>Decrement (-)</button>
      </>
    );
  }
}
