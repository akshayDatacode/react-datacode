import React, { Component } from "react";
import FooterComponentUpper from "./FooterComponentUpper";
import FooterComponent from "./FooterComponent";
class IndexFooter extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12 col-sm-6">
            <FooterComponentUpper />
          </div>

          <div className="row ">
            <div className="col-md-12 col-sm-6 ">
              <FooterComponent />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default IndexFooter;
