import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const EventDetailCard = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        size="sm"
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.eventName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>{props.detail}</h6>
          {props.status == "Closed" && (
            <Link to="/events_gallary">
              <button className="btn btn-info text-white">Event Gallary</button>
            </Link>
          )}
          {props.status == "Upcoming" && (
            <Link to="/events_gallary">
              <button className="btn btn-primary text-white ">
                Register Now
              </button>
            </Link>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EventDetailCard;
