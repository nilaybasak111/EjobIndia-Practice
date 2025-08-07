import { Component } from "react";

interface AUG3DisplayEx5Type {
  nm: string;
  depart: string;
  mail: string;
}

export default class AUG3DisplayEx5 extends Component<AUG3DisplayEx5Type> {
  constructor(props: AUG3DisplayEx5Type) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Display - </h1>
        <h2>Name: {this.props.nm}</h2>
        <h2>Department: {this.props.depart}</h2>
        <h2>Email: {this.props.mail}</h2>
      </div>
    );
  }
}
