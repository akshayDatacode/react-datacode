import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import EventPicture from "./EventPicture";
// import MCQCardCarousel from "../posts/mcqQuestions/MCQCardCarousel";

const EventDetailCard = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        size="lg"
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ backgroundColor: "#06CB6C", color: "#072C71" }}
          closeButton
        >
          <Modal.Title className="text-center">{props.eventName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Event Banner IMage */}
          <EventPicture imgsource={props.imgheader} />
          <p>{props.detail}</p>
          {props.status == "Closed" && (
            <Link to="/events_gallary">
              <center>
                <button
                  className="btn text-weight-bold"
                  style={{ backgroundColor: "#072C71", color: "#06CB6C" }}
                >
                  Event Gallary
                </button>
              </center>
            </Link>
          )}
          {props.status == "Upcoming" && (
            <a href={props.reglink} target="_blank">
              <center>
                <button
                  className="btn"
                  style={{ backgroundColor: "#072C71", color: "#06CB6C" }}
                >
                  Register Now
                </button>
              </center>
            </a>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EventDetailCard;
