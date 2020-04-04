import React, { Component } from "react";
class ProgramCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card border border-light mb-1">
          <div className="card-body p-1 ml-2 ">
            <a href={this.props.link}>
              <h6 className="text-primary text-weight-bold text-align-middle m-0">
                {this.props.heading}
              </h6>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default ProgramCard;
