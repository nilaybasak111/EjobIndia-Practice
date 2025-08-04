import { Component } from "react";

interface July27Ex1Type {
  name: string;
  info: string[];
}

class July27Ex1 extends Component {
  state: July27Ex1Type = {
    name: "",
    info: [],
  };

  addname = () => {
    if (this.state.name.trim() === "") {
      alert("Please Enter Name");
      return;
    }
    this.setState({
      info: [...this.state.info, this.state.name],
      name: "",
    });
  };

  delname = (id: number): void => {
    console.log("id", id);
    console.log("this.state.info", this.state.info);
    this.state.info.splice(id, 1);
    console.log("After this.state.info.splice", this.state.info);
    this.setState({ info: [...this.state.info] });
  };

  render() {
    return (
      <>
        Enter Name :
        <input
          type="text"
          name="name"
          value={this.state.name}
          // If you define the event handler as a separate named function outside the JSX, then you need to specify the type of "e" as "React.ChangeEvent<HTMLInputElement>".
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button onClick={this.addname}>ADD</button>
        <br />
        <br />
        {this.state.info.length > 0 ? (
          <ol>
            {this.state.info.map((value, index) => {
              return (
                <li key={index}>
                  {value}{" "}
                  {/* If you are calling function in map. Then You should use arrow function instead of normal function to call the function */}
                  <button
                    onClick={() => {
                      this.delname(index);
                    }}
                  >
                    DELETE
                  </button>
                </li>
              );
            })}
          </ol>
        ) : (
          <h3>No Names Added Yet.....!</h3>
        )}
      </>
    );
  }
}

export default July27Ex1;
