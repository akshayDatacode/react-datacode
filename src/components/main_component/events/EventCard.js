import React, { Component } from "react";
import EventDetailCard from "./EventDetailCard";
class EventCard extends Component {
  state = {
    show: false,
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        <div className="card border">
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block"
            src={require("../../../assets/images/" + this.props.imgsource)}
            alt="avatar"
          />
          <div className="card-body border border-white">
            {this.props.status == "Closed" && (
              <h6 className="text-danger text-right">{this.props.status}</h6>
            )}
            {this.props.status == "Upcoming" && (
              <h6 className="text-primary text-right">{this.props.status}</h6>
            )}
            {this.props.status == "Ongoing" && (
              <h6 className="text-success text-right">{this.props.status}</h6>
            )}

            <div className="card-title">
              <h3 className="text-secondary">{this.props.eventName}</h3>
            </div>
            <p>{this.props.detail}</p>
          </div>
          <div className="card-footer bg-white text-right border border-white">
            <button
              className="btn btn-default border border-secondary text-secondary"
              onClick={this.handleShow}
            >
              Show Details
            </button>
            <EventDetailCard
              handleShow={this.handleShow}
              handleClose={this.handleClose}
              eventName={this.props.eventName}
              show={this.state.show}
              detail={this.props.discription}
              status={this.props.status}
            />
          </div>
        </div>
      </>
    );
  }
}

export default EventCard;
