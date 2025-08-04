import { Component } from "react";

interface Test {
  id: number;
  name: string;
  location: string;
  skills: string[];
}

class July26Ex1 extends Component {
  state: Test = {
    id: 10,
    name: "Nilay Basak",
    location: "Kolkata",
    skills: ["Java", "JS", "C++"],
  };

  disp = () => {
    this.setState({
      id: 1,
      name: "Nilay Basak",
      location: "Pune",
      skills: [...this.state.skills, "Python", "NodeJS"],
    });
  };

  // render() in React shows what should appear on the screen based on the component’s data
  render() {
    return (
      <>
        <ul>
          <li>id: {this.state.id}</li>
          <li>name: {this.state.name}</li>
          <li>location: {this.state.location}</li>
          <li>skills: {this.state.skills.join(",")}</li>
        </ul>
        <br />
        <br />
        <input type="button" value="Update" onClick={this.disp} />
      </>
    );
  }
}

export default July26Ex1;
