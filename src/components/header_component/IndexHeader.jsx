import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
class IndexHeader extends Component {
  state = {};
  render() {
    return (
      <>
        <HeaderComponent isUserLogin={this.props.isUserLogin} />
      </>
    );
  }
}

export default IndexHeader;
