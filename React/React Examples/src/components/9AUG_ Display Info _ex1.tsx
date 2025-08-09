import { Component } from "react";

interface AUG9DisplayInfoEx1Type {
  data: { name: string; dept: string }[];
}

export default class AUG9DisplayInfoEx1 extends Component<AUG9DisplayInfoEx1Type> {
  render() {
    const tableStyle: React.CSSProperties = {
      borderCollapse: "collapse",
      width: "60%",
      margin: "auto",
      fontFamily: "Arial, sans-serif",
    };

    const thStyle: React.CSSProperties = {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px",
      textAlign: "left",
    };

    const tdStyle: React.CSSProperties = {
      border: "1px solid #ddd",
      padding: "8px",
    };

    const rowHover: React.CSSProperties = {
      backgroundColor: "#f2f2f2",
    };

    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Student List</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Department</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((info, index) => (
              <tr key={index} style={index % 2 === 0 ? rowHover : {}}>
                <td style={tdStyle}>{info.name}</td>
                <td style={tdStyle}>{info.dept}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
