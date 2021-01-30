import React from 'react';

import LayoutCreateQuizTest from '../LayoutCreateQuizTest';
// import CreateQuestionForm from './create_question_form/CreateQuestionForm'
import CreatedQuestionsList from './created_questions_list/CreatedQuestionsList';

const CreateQuestion = ({
  quizQuestions,
}) => {
  return (
    <>
      <LayoutCreateQuizTest>
        <div className="row">
          {/* <div className="col-8 border border-primary">
            <CreateQuestionForm
              addQuestion={addQuestion}
              currentQuizTest={currentQuizTest}
            />
          </div> */}
          <div className="col-12 border">
            <CreatedQuestionsList
              quizQuestions={quizQuestions}
            />
          </div>
        </div>
      </LayoutCreateQuizTest>
    </>
  );
}

export default CreateQuestion;