// Implementation of Css in React using Bootstrap
// Added Bootstrap CDN Links in index.html

import { Component } from "react";

export default class AUG3BootstrapEx3 extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h3 className="text-danger bg-warning">
            Welcome to Bootstrap in React
          </h3>
          <p className="text-danger bg-dark">Hello1</p>
          <br />
          <button className="btn btn-primary">Test</button>
          <br />
          <br />
          <table className="table">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Roll</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Avishek</td>
              <td>30</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sourav</td>
              <td>25</td>
            </tr>
          </table>
          <br></br>
          <p className="text-center bg-warning">hello</p>
        </div>
      </>
    );
  }
}
