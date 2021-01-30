import React, { useState } from 'react';
import { ReactComponent as NoData } from '../../../../../../../assets/images/svg/No_data_re_kwbl.svg'
import CreateQuestionModal from './CreateQuestionModal';

const CreatedQuestionsList = ({
  quizQuestions,
}) => {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <div className="row">
        <div className="col">
          {quizQuestions.length === 0 ?
            <>
              <NoData className="no-data" />
              <h2>No Questions Available</h2>
            </> :
            quizQuestions && quizQuestions.map((item, i) => (
              <div className="row border border-primary p-3 m-2" key={i}>
                <div className="col text-left">
                  <h5>{item.question}</h5>
                </div>
              </div>
            ))
          }
          <div onClick={() => setOpenModal(!openModal)} className="btn btn-primary">Create New Question</div>
        </div>
      </div>
      <CreateQuestionModal
        open={openModal}
        toggle={toggleModal}
      />
    </>
  );
}

export default CreatedQuestionsList;