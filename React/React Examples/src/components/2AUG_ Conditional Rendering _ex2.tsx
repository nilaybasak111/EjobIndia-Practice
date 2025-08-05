// Find The Factorial Of A Number

import React, { Component } from "react";

interface AUG2Ex2Type {
  num: number;
  info: number[];
}

export default class AUG2Ex2 extends Component<{}, AUG2Ex2Type> {
  state: AUG2Ex2Type = {
    num: 0,
    info: [],
  };

  valUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    this.setState({ num: value, info: [] });
  };

  calculateFactorial = () => {
    const { num } = this.state;
    if (num <= 0) {
      this.setState({ info: [] });
      return;
    }
    let factorial = 1;
    let steps: number[] = [];
    for (let i = 1; i <= num; i++) {
      factorial = factorial * i;
      steps.push(factorial);
    }
    this.setState({ info: steps });
  };

  render() {
    return (
      <>
        Select Number:
        <select name="num" onChange={this.valUpdate} value={this.state.num}>
          <option value="">Select Number</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <br />
        <input type="button" value="Calc" onClick={this.calculateFactorial} />
        <br />
        <br />
        {this.state.info.length > 0 ? (
          <>
            <h3>Factorial Calculation Steps:</h3>
            <ul>
              {this.state.info.map((val, idx) => (
                <li key={idx}>
                  {idx + 1}! = {val}
                </li>
              ))}
            </ul>
            <h2>Result: {this.state.info[this.state.info.length - 1]}</h2>
          </>
        ) : (
          <h3>Sorry no number is selected</h3>
        )}
      </>
    );
  }
}

// Another Solution

// export default class AUG2Ex2 extends Component {
//   state: { num: number; msg: string; show: boolean } = {
//     num: 0,
//     msg: "",
//     show: false,
//   };

//   valUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     this.setState({ num: e.target.value });
//   };

//   findValue = () => {
//     let f = 1;
//     for (let i = 1; i <= this.state.num; i++) {
//       f = f * i;
//     }
//     this.setState({ msg: `Factorial is ${f}`, show: true });
//   };

//   render() {
//     return (
//       <>
//         Select Number :
//         <select name="num" onChange={this.valUpdate}>
//           <option value="">select number</option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//         </select>
//         <br></br>
//         <button onClick={this.findValue}>CALC</button>
//         {this.state.show ? (
//           <h3>{this.state.msg}</h3>
//         ) : (
//           <h3>No Value Selected Yet</h3>
//         )}
//       </>
//     );
//   }
// }
