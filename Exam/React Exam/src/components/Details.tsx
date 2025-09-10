import { Component } from "react";

interface Props {
  name: string;
  email: string;
  dept: string;
  location: string;
}

export default class Details extends Component<Props> {
  render() {
    const { name, email, dept, location } = this.props;

    return (
      <>
        <p>NAME IS: {name}</p>
        <p>EMAIL IS: {email}</p>
        <p>DEPT IS: {dept}</p>
        <p>LOCATION IS: {location}</p>
      </>
    );
  }
}
