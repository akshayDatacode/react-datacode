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
      <form className="d-flex justify-content-center" onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="comment"
          type="textarea"
          component={renderInputField}
          placeholder="review"
          validate={[required]}
        />
        <div className="row mt-4 ml-4">
          <div className="col-12 text-right">
            <button type="submit" className="btn btn-primary login-button" disabled={submitting}>
              Submit
              </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default reduxForm({
  form: 'commentForm' // a unique name for this form
})(Comment);
