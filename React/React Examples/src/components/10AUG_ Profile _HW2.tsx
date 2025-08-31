import React, { Component } from "react";

interface AUG10Profile2PropsType {
  n: string;
  e: string;
  g: string;
  l: string;
}

interface AUG10Profile2Type {
  msg: React.ReactNode;
}

export default class AUG10EmpProfile2 extends Component<
  AUG10Profile2PropsType,
  AUG10Profile2Type
> {
  constructor(props: AUG10Profile2PropsType) {
    super(props);
    this.state = { msg: "Plz Wait for 5 Sec to See the Profile..!" };
  }

  componentDidMount(): void {
    setTimeout(() => {
      let r = (
        <ul>
          <li>Name : {this.props.n}</li>
          <li>Email: {this.props.e}</li>
          <li>Gender: {this.props.g}</li>
          <li>Location: {this.props.l}</li>
        </ul>
      );
      this.setState({ msg: r });
    }, 5000);
  }

  componentDidUpdate(): void {
    setTimeout(() => {
      let r = (
        <ul>
          <li>Name : {this.props.n}</li>
          <li>Email: {this.props.e}</li>
          <li>Gender: {this.props.g}</li>
          <li>Location: {this.props.l}</li>
        </ul>
      );
      this.setState({ msg: r });
    }, 5000);
  }

  componentWillUnmount(): void {
    console.log("Component will Unmount");
    alert("Good Bye All Component is Getting Unloaded");
  }

  componentWillMount(): void {
    console.log("Component will Mount");
    alert("Welcome Component is Loading Now..!");
  }

  render() {
    return (
      <>
        <h3>{this.state.msg}</h3>
      </>
    );
  }
}
