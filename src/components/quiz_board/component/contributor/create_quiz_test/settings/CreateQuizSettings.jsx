import React from 'react';
import LayoutCreateQuizTest from '../LayoutCreateQuizTest';
import { Field, reduxForm } from 'redux-form'
import { renderInputField } from '../../../../../../shared_components/ReduxFormFields'
import {
  required,
} from '../../../../../../utils/validators'

const CreateQuizSettings = ({
  handleSubmit, submitting, reset, createQuizTest, userName,
}) => {
  const onSubmit = (values) => {
    const formValues = { ...values }
    let quizTest = formValues
    quizTest['userName'] = userName
    let quizTestId = Math.random().toString(36).substr(4, 9)
    quizTest['quizId'] = quizTestId
    console.log("Quiz Test", quizTest)
    createQuizTest(quizTest)
    reset('createQuizTest')
  }

  return (
    <>
      <LayoutCreateQuizTest>
        <h1>Settings</h1>
        <div className="row">
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
      </LayoutCreateQuizTest>
    </>
  );
}

export default reduxForm({
  form: 'createQuizTest',
})(CreateQuizSettings)