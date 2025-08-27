import { Component } from "react";

interface AUG10LifecycleEx1Type {
  name: string;
  age: number;
}

// Lifecycle Methods don't need any event to run. They are automatically called by React.

// When we are using constructor in class.
// Then we have to call Component like this extends Component<{}, AUG10LifecycleEx1Type>
// {} is used to pass props type
// AUG10LifecycleEx1Type is used to pass state type
export default class AUG10LifecycleEx1 extends Component<
  {},
  AUG10LifecycleEx1Type
> {
  // In initialization phase Constructor is called
  constructor(props: {}) {
    super(props);
    console.log("Constructor is called");
    this.state = { name: "Nilay", age: 24 };
  }

  componentWillMount() {
    console.log("componentWillMount is called");
    alert("componentWillMount is called, Component is Loading Now ....");
  }

  valUpdate = () => {
    this.setState({ name: "Nilay Basak", age: 24 });
  };

  render() {
    return (
      <>
        <h3>Name : {this.state.name}</h3>
        <h3>Age : {this.state.age}</h3>
        <br />
        <button onClick={this.valUpdate}>Update</button>
      </>
    );
  }

  componentDidMount() {
    console.log("componentDidMount is called");
    alert("componentDidMount is called, Component is Loaded Now ....");
  }

  shouldComponentUpdate(): boolean {
    console.log("shouldComponentUpdate is called");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate is called");
    alert("componentWillUpdate is called, Component is Updating Now ....");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called");
    alert("componentDidUpdate is called, Component is Updated Now ....");
  }
}
