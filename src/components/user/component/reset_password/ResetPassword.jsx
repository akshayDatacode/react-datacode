import React from "react"
import { Field, reduxForm } from 'redux-form'
import { Redirect, Link } from 'react-router-dom';

import { renderInputField } from '../../../../shared_components/ReduxFormFields'
import { required, matchPassword } from '../../../../utils/validators'
import { ReactComponent as Reset } from '../../../../assets/images/svg/reset-password.svg'

const ResetPassword = ({
  reset,
  handleSubmit,
  submitting
}) => {

  const onSubmit = (values) => {
    const user = { ...values }
    console.log("values ()()", user)
    reset('resetForm')
  }

  return (
    <>
      <div className="row m-0 login">
        <div className="col-12 col-md-8 img-section p-5">
          <div className="p-4">
            <Reset width="500px" height="500px" />
          </div>
        </div>
        <div className="col-12 col-md-4 login-section">
          <div className="pt-md-3 mt-5 px-4 login-card">
            <h1 className="text-center login-text">Reset Password</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Field
                  type="password"
                  name="password"
                  label="New Password"
                  placeholder="********"
                  component={renderInputField}
                  validate={[required]}
                />
                <Field
                  type="password"
                  name="confirmPassword"
                  label="Re-Type New Password"
                  placeholder="********"
                  component={renderInputField}
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
  form: 'resetForm',
  validate: matchPassword,
})(ResetPassword);