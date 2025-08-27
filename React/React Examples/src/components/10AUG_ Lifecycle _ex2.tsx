import { Component } from "react";

interface State {
  name: string;
  age: number;
  dept: string;
  showDetails: boolean;
}

export default class AUG10LifecycleEx2 extends Component<{}, State> {
  state: State = {
    name: "Nilay",
    age: 24,
    dept: "IT",
    showDetails: false,
  };

  componentDidMount(): void {
    setTimeout(() => {
      this.setState({ showDetails: true });
    }, 5000);
  }

  render() {
    const { name, age, dept, showDetails } = this.state;

    return (
      <>
        {showDetails ? (
          <>
            <div>
              Name: {name}
              <br />
              Age: {age}
              <br />
              Dept: {dept}
            </div>
            <h3>Magic is Here</h3>
          </>
        ) : (
          <h3>Please Wait 5 Seconds To See The Magic</h3>
        )}
      </>
    );
  }
}