import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import PrismCode from "../../../PrismCode";
const SolutionCard = (props) => {
  let code = props.code;
  return (
    <>
      <Modal
        show={props.show}
        size="lg"
        onHide={props.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="m-1 p-1">
          <Modal.Title style={{ color: "#072C71" }}>
            <h4 className="text-center ml-3">{props.heading}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="text-center">
            <PrismCode
              code={code}
              language={props.language}
              plugins={["line-numbers"]}
            />
          </h6>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SolutionCard;
