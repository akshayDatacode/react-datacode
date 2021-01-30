import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from "../../../../../user/actions"
import { connect } from "react-redux"
import CreateQuizModal from './CreateQuizModal';

const CreateQuizHeader = ({
  logoutUser
}) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <div className="row contributor-header">
        <div className="col-6 text-left">
          <h3 className="m-1">Create Quiz Test Dashboard</h3>
        </div>
        <div className="col-6 text-right">
          <div
            onClick={() => setOpenModal(!openModal)}
            className="btn btn-primary m-1"
          >
            <i className="fal fa-plus-circle mr-1"></i>
            <span>Create New Quiz Test</span>
          </div>
          <div className="btn btn-primary m-1">
            <i className="fal fa-open-door ml-1"></i>
            <Link to="/" onClick={() => logoutUser()}>
              Logout
            </Link>
          </div>
        </div>
        <CreateQuizModal
          open={openModal}
          toggle={toggleModal}
        />
      </div>
    </>
  );
}

const mapDispatchToProps = {
  logoutUser,
}

export default connect(
  null,
  mapDispatchToProps,
)(CreateQuizHeader)