import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Redirect, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'

import { renderInputField } from '../../../../shared_components/ReduxFormFields'
import { required } from '../../../../utils/validators'
import { ReactComponent as Code } from '../../../../assets/images/svg/code_1.svg'
import { ReactComponent as GoogleLogo } from "../../../../assets/images/svg/google.svg"

const Login = ({
  reset, handleSubmit, submitting, loginUser, loginUserLoading,
}) => {
  const [userDetails, setUserDetails] = useState()

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const onSubmit = (values) => {
    const user = { ...values }
    console.log("values ()()", user)
    loginUser(user).then((res) => {
      if (res) {
        setUserDetails(res.data)
        console.log("Loged IN")
        reset('signupForm')
      }
    })
  }

  return (
    <>
      {userDetails && <Redirect to={`/contributor_home`} />}
      <div className="row m-0 login">
        <div className="col-12 col-md-8 img-section p-md-5 text-center">
          <div className="p-md-4">
            {loginUserLoading ?
              <Loader
                type="Grids"
                color="#30006d"
                height={100}
                width={100}
                timeout={3000} //3 secs
              /> :
              <Code width="auto" height="auto" className="m-2 m-md-0" />
            }
          </div>
        </div>
        <div className="col-12 col-md-4 login-section">
          <h1 className="text-center login-text">Log in To Get Inside</h1>
          <div className="pt-md-3 px-4 login-card">
            <button type="button" className="google-button">
              <GoogleLogo width="40" height="40" className="bg-white p-1 mr-5" />
              <div class="google-login-string">
                Log in with Google
              </div>
            </button>
            <div class="or-line">
              <span>or</span>
            </div>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Field
                  name="email"
                  type="text"
                  component={renderInputField}
                  label='Username or Email'
                  placeholder="system123"
                  validate={[required]}
                />
                <Field
                  name="password"
                  type="password"
                  component={renderInputField}
                  label='Password'
                  placeholder="******"
                  validate={[required]}
                />
              </div>
              <div className="row mt-4">
                <div className="col-7 text-left">
                  <div>
                    <p className="signup-string p-0">Don't have an account,</p>
                    <Link to="/signup" className="signup-string ml-2 link">Sign Up</Link>
                  </div>
                  <div className="text-left">
                    <Link to="/forgot_password" className="signup-string">Forgot Password?</Link>
                  </div>
                </div>
                <div className="col-5 text-right">
                  <button type="submit" className="btn btn-primary login-button" disabled={submitting}>
                    Login
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default reduxForm({
  form: 'loginForm' // a unique name for this form
})(Login);
