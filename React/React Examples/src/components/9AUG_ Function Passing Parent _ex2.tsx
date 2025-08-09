import { Component } from "react";
import AUG9FunctionPassingChildEx2 from "./9AUG_ Function Passing Child _ex2";

export default class AUG9FunctionPassingParentEx2 extends Component {
  state: { count: number } = { count: 0 };
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <h3>Method Passing Concept in Props</h3>
        <AUG9FunctionPassingChildEx2
          c={this.state.count}
          funcInc={this.incrementCount}
          funcDec={this.decrementCount}
        />
      </>
    );
  }
}
