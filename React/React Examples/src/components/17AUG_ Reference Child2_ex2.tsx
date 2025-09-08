import React, { Component } from "react";

interface AUG17ReferenceChild2Ex2Type {
  data: { nm: string; dp: string }[];
}

export default class Infochild extends Component<AUG17ReferenceChild2Ex2Type> {
  constructor(props: AUG17ReferenceChild2Ex2Type ) {
    super(props);
  }
  ref1 = React.createRef<HTMLDivElement>();

  componentDidMount(): void {
    setTimeout(() => {
      let res = "<ol>";
      this.props.data.forEach((val, i) => {
        res = res + `<li>Name: ${val.nm}  Dept: ${val.dp}</li>`;
      });
      res = res + "</ol>";
      this.ref1.current!.innerHTML = res;
    }, 5000);
  }

  componentWillUpdate() {
    this.ref1.current!.innerHTML = `<h3>Plz wait for 5 sec...!</h3>`;
  }

  componentDidUpdate(): void {
    setTimeout(() => {
      let res = "<ol>";
      this.props.data.forEach((val, i) => {
        res = res + `<li>Name: ${val.nm}  Dept: ${val.dp}</li>`;
      });
      res = res + "</ol>";
      this.ref1.current!.innerHTML = res;
    }, 5000);
  }

  render() {
    return (
      <>
        <div ref={this.ref1}>
          <h3>Plz wait for 5 sec...!</h3>
        </div>
      </>
    );
  }
}
