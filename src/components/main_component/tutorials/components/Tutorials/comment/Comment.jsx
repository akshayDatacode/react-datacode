import React from 'react';

import { Field, reduxForm } from 'redux-form'
import { Redirect, Link } from 'react-router-dom';

import { renderInputField } from '../../../../../../shared_components/ReduxFormFields'
import { required, email } from '../../../../../../utils/validators'

const Comment = ({
  reset,
  handleSubmit,
  submitting,
  id,
  userName,
  commentTutorial,
}) => {

  const onSubmit = (values) => {
    const value = { ...values }
    const text = value.comment
    console.log("values ()()", text)
    if (id && text && userName) {
      commentTutorial({ id, text, userName }).then((res) => {
        if (res) {
          console.log("comm", res.data)
        }
      })
    }

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
