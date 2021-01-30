import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderInputField, renderRadioField } from '../../../../../../../shared_components/ReduxFormFields'
import {
  required,
} from '../../../../../../../utils/validators'

const CreateQuestionForm = ({
  handleSubmit, submitting, reset, addQuestion, currentQuizTest
}) => {
  const onSubmit = (values) => {
    const questionData = { ...values }
    questionData['quizId'] = currentQuizTest.quizId
    questionData['userName'] = currentQuizTest.userName
    const data = {
      quizId: currentQuizTest.quizId,
      quizQuestion: questionData,
    }
    addQuestion(data, questionData)
    console.log("values", data)
    reset('createQuestion')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="question"
          type="text"
          component={renderInputField}
          label='Question ?..'
          placeholder="What is Datacode?"
          validate={[required]}
        />
        <div className="row">
          <div className="col-6 text-right">
            <Field
              name='correctChoice'
              component={renderRadioField}
              value='choice1'
              type="radio"
            />
          </div>
          <div className="col-6 text-left">
            <Field
              name="choice1"
              type="text"
              component={renderInputField}
              placeholder="What is Datacode?"
              validate={[required]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-right">
            <Field
              name='correctChoice'
              component={renderRadioField}
              value='choice2'
              type="radio"
            />
          </div>
          <div className="col-6 text-left">
            <Field
              name="choice2"
              type="text"
              component={renderInputField}
              placeholder="What is Datacode?"
              validate={[required]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-right">
            <Field
              name='correctChoice'
              component={renderRadioField}
              value='choice3'
              type="radio"
            />
          </div>
          <div className="col-6 text-left">
            <Field
              name="choice3"
              type="text"
              component={renderInputField}
              placeholder="What is Datacode?"
              validate={[required]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-right">
            <Field
              name='correctChoice'
              component={renderRadioField}
              value='choice4'
              type="radio"
            />
          </div>
          <div className="col-6 text-left">
            <Field
              name="choice4"
              type="text"
              component={renderInputField}
              placeholder="What is Datacode?"
              validate={[required]}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          Save Test
        </button>
      </form>
    </>
  );
}

export default reduxForm({
  form: 'createQuestion',
})(CreateQuestionForm)