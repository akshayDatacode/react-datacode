import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";

const DeleteTutorialModal = ({
  open,
  toggle,
  onSubmit,
  submitButtonName,
  submitButtonColor,
  title,
  message,
}) => (
  <Modal isOpen={open} toggle={toggle} className="delete-tutorial-modal">
    <ModalHeader toggle={toggle} className="modal-header">
      Are you sure want to delete tutorial
    </ModalHeader>
    {/* <ModalBody></ModalBody> */}
    <ModalFooter>
      <div className="display-flex">
        <Button color={submitButtonColor} onClick={() => onSubmit()}>
          {submitButtonName}
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </div>
    </ModalFooter>
  </Modal>
);

DeleteTutorialModal.defaultProps = {
  message: "",
  title: "",
  submitButtonName: "Okay",
  onSubmit: () => {},
  submitButtonColor: "danger",
};

DeleteTutorialModal.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
  submitButtonName: PropTypes.string,
  submitButtonColor: PropTypes.string,
  onSubmit: PropTypes.func,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default DeleteTutorialModal;
