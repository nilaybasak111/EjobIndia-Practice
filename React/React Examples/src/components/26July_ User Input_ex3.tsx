import React, { Component } from "react";

interface Show {
  length: number;
  bredth: number;
  height: number;
  area: number;
  volume: number;
}

class UserInput1 extends Component {
  state: Show = {
    length: 0,
    bredth: 0,
    height: 0,
    area: 0,
    volume: 0,
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: [value] });
  };

  updatedValue = () => {
    const { length, bredth, height } = this.state;
    this.setState({
      area: length * bredth,
      volume: length * bredth * height,
    });
  };

  render() {
    return (
      <>
        Enter Length :
        <input
          type="number"
          name="length"
          value={this.state.length}
          onChange={this.handleChange}
        />
        <br />
        <br />
        Enter Breadth :
        <input
          type="number"
          name="bredth"
          value={this.state.bredth}
          onChange={this.handleChange}
        />
        <br />
        <br />
        Enter Height :
        <input
          type="number"
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <ul>
          <li>Area: {this.state.area}</li>
          <li>Volume: {this.state.volume}</li>
        </ul>
        <input type="button" value="Show" onClick={this.updatedValue} />
      </>
    );
  }
}

export default UserInput1;
