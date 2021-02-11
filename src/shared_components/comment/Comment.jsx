import React from 'react';

import { Field, reduxForm } from 'redux-form'
import { Redirect, Link } from 'react-router-dom';

import { renderInputField } from '../ReduxFormFields'
import { required, email } from '../../utils/validators'

const Comment = ({
  reset,
  handleSubmit,
  submitting,
}) => {

  const onSubmit = (values) => {
    const user = { ...values }
    console.log("values ()()", user)
    reset('commentForm')
  }

  return (
    <>
      <div className="row m-0 login">
        <div className="login-section text-center">
          <div className="pt-md-3 mt-5 px-4 login-card">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Field
                  name="comment"
                  type="textarea"
                  component={renderInputField}
                  placeholder="review"
                  validate={[required]}
                />
              </div>
              <div className="row mt-4">
                <div className="col-12 text-right">
                  <button type="submit" className="btn btn-primary login-button" disabled={submitting}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default reduxForm({
  form: 'commentForm' // a unique name for this form
})(Comment);
