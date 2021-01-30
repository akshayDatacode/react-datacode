import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";
import CreateQuiz from "./createQuiz";

const CreateQuizModal = ({
  open,
  toggle,
  onSubmit,
  submitButtonName,
  submitButtonColor,
  title,
  message,
}) => (
  <Modal isOpen={open} toggle={toggle}>
    <ModalHeader toggle={toggle} className="custom-modal-header">
      {title}
    </ModalHeader>
    <ModalBody>
      <h6>
        Hey! You are going to create a new Quiz Test! Please read all
        instruction very clearly
      </h6>
      <CreateQuiz />
    </ModalBody>
    <ModalFooter>
      <div className="display-flex">
        <Button color={submitButtonColor} onClick={onSubmit}>
          {submitButtonName}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </div>
    </ModalFooter>
  </Modal>
);

CreateQuizModal.defaultProps = {
  message: "",
  title: "",
  submitButtonName: "Okay",
  onSubmit: () => {},
  submitButtonColor: "primary",
};

CreateQuizModal.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
  submitButtonName: PropTypes.string,
  submitButtonColor: PropTypes.string,
  onSubmit: PropTypes.func,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default CreateQuizModal;
