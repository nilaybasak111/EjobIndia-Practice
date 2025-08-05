import React, { Component } from "react";

interface AUG2Ex1Type {
  dob: string;
  gen: string;
  city: string;
}

export default class AUG2Ex1 extends Component {
  state: AUG2Ex1Type = {
    dob: "",
    gen: "",
    city: "",
  };

  // In Simple term HTMLInputElement refers to <input> tags in your JSX
  // And HTMLSelectElement refers to <select> tags in your JSX
  // So, HTMLInputElement is for input fields (text, radio, date, etc.), and HTMLSelectElement is for dropdown/select boxes.
  valUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        Select DOB :
        <input type="date" name="dob" onChange={this.valUpdate} />
        <br />
        <br />
        Select Gender :
        <input
          type="radio"
          name="gen"
          value="male"
          onChange={this.valUpdate}
          checked={this.state.gen === "male"}
        />{" "}
        Male
        <input
          type="radio"
          name="gen"
          value="female"
          onChange={this.valUpdate}
          checked={this.state.gen === "female"}
        />{" "}
        Female
        <br />
        <br />
        Select City :
        <select name="city" onChange={this.valUpdate} value={this.state.city}>
          <option value="">Select City</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
        </select>
        <br />
        <br />
        <ul>
          <li>DOB : {this.state.dob}</li>
          <li>Gender : {this.state.gen}</li>
          <li>City : {this.state.city}</li>
        </ul>
      </>
    );
  }
}
