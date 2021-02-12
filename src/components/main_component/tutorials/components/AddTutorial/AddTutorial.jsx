import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { renderInputField } from '../../../../../shared_components/ReduxFormFields'
import { required } from '../../../../../utils/validators'

const AddTutorial = ({
  reset,
  handleSubmit,
  submitting,
  addTutorial,
  userName,
}) => {

  const onSubmit = (values) => {
    const tutorial = { ...values }
    tutorial['userName'] = userName
    tutorial['id'] = Math.random().toString(36).substr(4, 9)
    addTutorial(tutorial).then((res) => {
      if (res.success) {
        reset('tutorial')
      }
    })
    console.log("values ()()", tutorial)
  }

  return (
    <>
      <h1>Add Tutorial</h1>
      <div className="row m-0 login">
        <div className="col-12 login-section">
          <div className="pt-md-3 mt-5 px-4 login-card">
            <h1 className="text-center login-text">Add Tutorial</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Field
                  name="title"
                  type="text"
                  component={renderInputField}
                  label='Enter Tutorial Title'
                  placeholder=""
                  validate={[required]}
                />
              </div>
              <div>
                <Field
                  name="link"
                  type="text"
                  component={renderInputField}
                  label='Enter Tutorial Link'
                  placeholder=""
                  validate={[required]}
                />
              </div>
              <div>
                <Field
                  name="technology"
                  type="text"
                  component={renderInputField}
                  label='Enter Tutorial Technology'
                  placeholder=""
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
  form: 'tutorial' // a unique name for this form
})(AddTutorial) 