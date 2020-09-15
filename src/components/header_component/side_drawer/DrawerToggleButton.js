import React, { Component } from "react";
import "../../../assets/css/DrawerToggleButton.css";

class DrawerToggleButton extends Component {
  state = {};
  render() {
    return (
      <>
        <button className="toggle-button" onClick={this.props.clickButton}>
          <div className="toggle-button_line"></div>
          <div className="toggle-button_line"></div>
          <div className="toggle-button_line"></div>
        </button>
      </>
    );
  }
}

export default DrawerToggleButton;
