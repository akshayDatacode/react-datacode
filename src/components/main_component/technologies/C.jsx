import React, { Component } from "react";
class C extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <h1>C Programming Base Page</h1>
      </>
    );
  }
}

export default C;
