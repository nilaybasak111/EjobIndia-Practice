import { Component } from "react";

interface AUG3PropsChildEx4Type {
  l: number;
  b: number;
  h: number;
}

// You have to Pass the Props in Component Class Also
export default class AUG3PropsChildEx4 extends Component<AUG3PropsChildEx4Type> {
  // Initializing Props in Constructor
  constructor(props: AUG3PropsChildEx4Type) {
    // Super is used to call the parent class constructor
    // Props are passed to the parent class constructor
    super(props);
  }
  render() {
    return (
      <div>
        <h3>This is Child Component Props</h3>
        <h1>Area : {this.props.l * this.props.b}</h1>
        <h1>Volume : {this.props.l * this.props.b * this.props.h}</h1>
      </div>
    );
  }
}
