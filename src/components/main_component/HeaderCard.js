import React, { Component } from "react";
class HeaderCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row mb-3">
          <div className="col">
            <div className="card bg-warning">
              <div className="card-body p-2">
                <h1 className="card-title text-dark m-0 p-0">
                  {this.props.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderCard;
