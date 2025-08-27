import React, { Component } from "react";
import AUG10EmpProfile from "./10AUG_ Profile _HW1";

export interface AUG10EmpDetailsType {
  empName: string;
  empEmail: string;
  empGender: string;
  empLocation: string;
  showProfile?: boolean; // Optional property, Not Mandatory Everytime
  waiting?: boolean;
}

export default class AUG10EmpDetails extends Component {
  state: AUG10EmpDetailsType = {
    empName: "",
    empEmail: "",
    empGender: "",
    empLocation: "",
    showProfile: false,
    waiting: false,
  };

  valUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleShow = () => {
    this.setState({ waiting: true, showProfile: false });
    // After 5 seconds show the profile
    setTimeout(() => {
      this.setState({ showProfile: true, waiting: false });
    }, 5000);
  };

  render() {
    return (
      <>
        <h1>Employee Details :</h1>
        <br />
        <h3>Employee Name :</h3>
        <input
          type="text"
          name="empName"
          value={this.state.empName}
          onChange={this.valUpdate}
        />
        <h3>Employee Email :</h3>
        <input
          type="text"
          name="empEmail"
          value={this.state.empEmail}
          onChange={this.valUpdate}
        />
        <h3>Employee Gender :</h3>
        <input
          type="radio"
          name="empGender"
          checked={this.state.empGender === "Male"}
          value="Male"
          onChange={this.valUpdate}
        />
        Male
        <input
          type="radio"
          name="empGender"
          checked={this.state.empGender === "Female"}
          value="Female"
          onChange={this.valUpdate}
        />
        Female
        <h3>Employee Location :</h3>
        <select
          name="empLocation"
          value={this.state.empLocation}
          onChange={this.valUpdate}
        >
          <option value="">Select Location</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Nabadwip">Nabadwip</option>
          <option value="Howrah">Howrah</option>
          <option value="Patna">Patna</option>
          <option value="Delhi">Delhi</option>
        </select>
        <br />
        <br />
        <input
          type="button"
          value={this.state.showProfile ? "HIDE" : "SHOW"}
          onClick={this.handleShow}
        />
        {this.state.waiting && <h3>Please Wait 5 Seconds...</h3>}
        {this.state.showProfile && !this.state.waiting && (
          <AUG10EmpProfile
            empName={this.state.empName}
            empEmail={this.state.empEmail}
            empGender={this.state.empGender}
            empLocation={this.state.empLocation}
          />
        )}
      </>
    );
  }
}
