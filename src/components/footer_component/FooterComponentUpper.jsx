import React, { Component } from "react";
class FooterComponentUpper extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row border border-primary">
          <div className=" border border-primary col-sm col-md-8 ">
            <h6> popular cdddddddddddddddddddddddddddposts</h6>
          </div>
          <div className=" border border-danger col-sm col-md-4 ">
            <h6> Daily posts</h6>
          </div>
        </div>
      </>
    );
  }
}

export default FooterComponentUpper;
