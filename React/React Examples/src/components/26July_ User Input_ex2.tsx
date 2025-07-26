import React, { Component } from "react";

interface Exam {
  name: string;
  age: number;
  dept: string;
}

class UserInput extends Component {
  state: Exam = {
    name: "",
    age: 0,
    dept: "",
  };

  valUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: [value] });
  };

  // render() in React shows what should appear on the screen based on the component’s data
  render() {
    return (
      <>
        Enter Name :
        <input type="text" name="name" onChange={this.valUpdate} />
        <br />
        <br />
        Enter Age :
        <input type="number" name="age" onChange={this.valUpdate} />
        <br />
        <br />
        Enter Department :
        <input type="text" name="dept" onChange={this.valUpdate} />
        <br />
        <br />
        <ul>
          <li>id: {this.state.name}</li>
          <li>name: {this.state.age}</li>
          <li>location: {this.state.dept}</li>
        </ul>
      </>
    );
  }
}

export default UserInput;
