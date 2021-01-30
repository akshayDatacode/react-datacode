import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderInputField } from '../../../../../../../shared_components/ReduxFormFields'
import {
  required,
} from '../../../../../../../utils/validators'
import { Redirect } from 'react-router-dom';

const CreateQuiz = ({
  handleSubmit, submitting, reset, createQuizTest, userName, currentQuizTest,
}) => {
  const [createdQuizId, setCreatedQuizId] = useState(null)

  const onSubmit = (values) => {
    const formValues = { ...values }
    let quizTest = formValues
    quizTest['userName'] = userName
    let quizTestId = Math.random().toString(36).substr(4, 9)
    quizTest['quizId'] = quizTestId
    console.log("Quiz Test", quizTest)
    createQuizTest(quizTest).then((res) => {
      if (res) {
        setCreatedQuizId(res.data.quizTest.quizId)
      }
    })
    reset('createQuizTest')
  }

  return (
    <>
      {createdQuizId &&
        <Redirect to={`/create_quiz_test_overview/${createdQuizId}`} />
      }
      <div className="row p-3">
        <div className="col">
          <form className="justify-content-center w-50" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row justify-content-center">
              <div className="form-group">
                <Field
                  name="quizTitle"
                  type="text"
                  component={renderInputField}
                  label='Enter Quiz Test Name'
                  placeholder="system123"
                  validate={[required]}
                />
              </div>
              <div className="form-group">
                <Field
                  name="quizTime"
                  type="text"
                  component={renderInputField}
                  label='Quiz Time'
                  placeholder="1hr"
                  validate={[required]}
                />
              </div>
            </div>
            <div className="form-group row mt-4">
              <div className="col text-center">
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  Create Quiz Test
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default reduxForm({
  form: 'createQuizTest',
})(CreateQuiz)