import { Component } from "react";
import type { AUG10EmpDetailsType } from "./10AUG_ EmpDetails _HW1";

export default class AUG10EmpProfile extends Component<AUG10EmpDetailsType> {
  constructor(props: AUG10EmpDetailsType) {
    super(props);
  }

  render() {
    return (
      <>
        <ul>
          <li>Name: {this.props.empName}</li>
          <li>Email: {this.props.empEmail}</li>
          <li>Gender: {this.props.empGender}</li>
          <li>Location: {this.props.empLocation}</li>
        </ul>
      </>
    );
  }
}
