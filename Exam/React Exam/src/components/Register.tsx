import { Component } from "react";
import Details from "./Details";

interface State {
  name: string;
  email: string;
  dept: string;
  location: string;
  showDetails: boolean;
}

export default class Register extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      dept: "",
      location: "",
      showDetails: false,
    };
  }

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  Show = () => {
    this.setState({ showDetails: true });
  };

  Hide = () => {
    this.setState({ showDetails: false });
  };

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  };

  render() {
    const { name, email, dept, location, showDetails } = this.state;

    return (
      <>
        <div>
          <label>NAME: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>EMAIL: </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>DEPT: </label>
          <input
            type="text"
            name="dept"
            value={dept}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>LOCATION: </label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button onClick={this.toggleDetails}>
            {showDetails ? "HIDE" : "SHOW"}
          </button>
        </div>

        {showDetails && (
          <Details name={name} email={email} dept={dept} location={location} />
        )}
      </>
    );
  }
}
