import React, { Component } from "react";
import { Link } from "react-router-dom";
class McqsShowCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card border-secondary shadow">
          <div className="card-body text-center">
            <h4>{this.props.title}</h4>
          </div>
          <Link to={this.props.link}>
            <div className=" btn btn-block btn-primary"> Start Quize</div>
          </Link>
        </div>
      </>
    );
  }
}

export default McqsShowCard;
