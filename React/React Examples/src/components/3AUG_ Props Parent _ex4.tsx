import { Component } from "react";
// Importing Child Component & Passing Props
import AUG3PropsChildEx4 from "./3AUG_ Props Child _ex4";

interface AUG3PropsParentEx4Type {
  length: number;
  breadth: number;
  height: number;
}

export default class AUG3PropsParentEx4 extends Component {
  state: AUG3PropsParentEx4Type = {
    length: 30,
    breadth: 20,
    height: 35,
  };

  render() {
    return (
      <>
        <h3>This is Parent Component Props</h3>
        <h3>Props Passing Concept Example in React</h3>
        {/* Sending Props to Child */}
        <AUG3PropsChildEx4
          l={this.state.length}
          b={this.state.breadth}
          h={this.state.height}
        />
      </>
    );
  }
}
