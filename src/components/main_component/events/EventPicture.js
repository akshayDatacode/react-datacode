import React, { Component } from "react";
class EventPicture extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card text-center border-0">
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block"
            src={require("../../../assets/images/" + this.props.imgsource)}
            alt="datacode.in"
          />
        </div>
      </>
    );
  }
}

export default EventPicture;
