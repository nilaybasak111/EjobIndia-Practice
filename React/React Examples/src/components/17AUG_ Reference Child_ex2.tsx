import React, { Component } from "react";

interface AUG17ReferenceChildEx2Type {
  data: { name: string; dept: string }[];
}

export default class AUG17ReferenceChildEx2 extends Component<AUG17ReferenceChildEx2Type> {
  ref1 = React.createRef<HTMLDivElement>();

  updateList = () => {
    if (this.ref1.current) {
      let result = `<ol>`;
      this.props.data.forEach((val) => {
        result += `<li>Name : ${val.name} & Dept : ${val.dept}</li>`;
      });
      result += `</ol>`;
      this.ref1.current.innerHTML = result;
    }
  };

  componentDidMount() {
    setTimeout(this.updateList, 5000);
  }

  componentWillUpdate() {
    this.ref1.current!.innerHTML = `<h3>Plz wait for 5 sec...!</h3>`;
  }

  componentDidUpdate() {
    setTimeout(this.updateList, 5000);
  }

  render() {
    return (
      <div ref={this.ref1}>
        <h3>Please Wait for 5 Seconds...</h3>
      </div>
    );
  }
}
