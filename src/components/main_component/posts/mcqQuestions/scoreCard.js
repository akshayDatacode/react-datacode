import React, { Component } from "react";
import { Modal } from "react-bootstrap";
const ScoreCard = props => {
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
          <Modal.Title>Score Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center">Your Total Score</h4>
          <h1 className="display-1 text-center"> {props.count}</h1>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ScoreCard;
