import { Component } from "react";

export default class AUG3InlineCssEx1 extends Component {
  render() {
    const h4style: any = { color: "blue", backgroundColor: "lightblue" };
    const h4style2: any = {
      color: "red",
      textAlign: "center",
      fontSize: "25",
      fontStyle: "italic",
      border: "2px solid green",
    };
    return (
      <>
        <h3
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "25",
            fontStyle: "italic",
            backgroundColor: "green",
          }}
        >
          Welcome to Inline CSS in React
        </h3>
        <br />
        <h4 style={h4style}>
          Welcome to My Class Component. Reusing Style Code for h4 & p Tags
        </h4>
        <p style={h4style}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias veniam
          laboriosam totam, distinctio accusamus aperiam quae aut ullam
          voluptates doloremque debitis officiis in saepe iste natus. Error
          eveniet itaque in?
        </p>
      </>
    );
  }
}
