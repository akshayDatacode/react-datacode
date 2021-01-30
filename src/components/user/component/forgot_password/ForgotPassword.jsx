import React from "react"
import { Field, reduxForm } from 'redux-form'
import { Redirect, Link } from 'react-router-dom';

import { renderInputField } from '../../../../shared_components/ReduxFormFields'
import { required, email } from '../../../../utils/validators'
import { ReactComponent as Forgot } from '../../../../assets/images/svg/forgot-password.svg'

const ForgotPassword = ({
  reset,
  handleSubmit,
  submitting,
  forgotPassword
}) => {

  const onSubmit = (values) => {
    const user = { ...values }
    forgotPassword(user)
    console.log("values ()()", user)
    reset('signupForm')
  }

  return (
    <>
      <div className="row m-0 login">
        <div className="col-12 col-md-8 img-section p-md-5">
          <div className="p-md-4">
            <Forgot width="auto" height="auto" className="m-2 m-md-0" />
          </div>
        </div>
        <div className="col-12 col-md-4 login-section">
          <div className="pt-md-3 mt-5 px-4 login-card">
            <h1 className="text-center login-text">Forgot Password</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Field
                  name="email"
                  type="email"
                  component={renderInputField}
                  label='Enter Your Email'
                  placeholder="member_name@joe.com"
                  validate={[required, email]}
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
  form: 'loginForm' // a unique name for this form
})(ForgotPassword);