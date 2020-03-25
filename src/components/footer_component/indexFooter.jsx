import React, { Component } from "react";
import FooterComponentUpper from "./FooterComponentUpper";
import FooterComponent from "./FooterComponent";
class IndexFooter extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <FooterComponentUpper />
          </div>
        </div>
        <div className="row">
          <div className="col p-0 m-0">
            <FooterComponent />
          </div>
        </div>
      </>
    );
  }
}

export default IndexFooter;
