import React, { useState, useEffect } from 'react';
import { Field, reduxForm, initialize } from 'redux-form'
import { Redirect, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'
import { GoogleLogin } from 'react-google-login'

import { renderInputField } from '../../../../shared_components/ReduxFormFields'
import { required, email } from '../../../../utils/validators'
import { ReactComponent as Code } from '../../../../assets/images/svg/signup.svg'
import { ReactComponent as GoogleLogo } from "../../../../assets/images/svg/google.svg"


const Signup = ({
  reset, handleSubmit, submitting, signupUser, signupUserLoading, initialize, googleLogin,
}) => {
  const [userDetails, setUserDetails] = useState()
  const [googleUser, setGoogleUSer] = useState()


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const onSubmit = (values) => {
    const user = { ...values }
    if (googleUser && googleUser.email) {
      user["email_verify"] = "verified"
    }
    console.log("values ()()", user)
    signupUser(user).then((res) => {
      if (res) {
        if (!googleUser) {
          setUserDetails(res.data)
        }
        console.log("Loged IN")
        reset('signupForm')
      } else {
        console.log("Error", res)
        reset('signupForm')
      }
    })
  }

  // const responseSuccessGoogle = (response) => {
  //   if (response && response.profileObj) {
  //     setGoogleUSer(response.profileObj)
  //     initialize(response.profileObj.email)
  //   }
  // }

  // const responseFailureGoogle = (response) => {

  // }

  console.log("signupUserLoading", signupUserLoading)

  return (
    <>
      {userDetails && <Redirect to={`/confirmation`} />}
      <div className="row m-0 login">
        <div className="col-12 col-md-8 img-section p-md-5 text-center">
          <div className="p-md-4">
            {signupUserLoading ?
              <Loader
                type="Puff"
                color="#30006d"
                height={100}
                width={100}
                timeout={8000} //3 secs
              /> :
              <Code width="auto" height="auto" className="m-2 m-md-0" />
            }
          </div>
        </div>
        <div className="col-12 col-md-4 login-section">
          <h1 className="text-center login-text">Sign Up To Get Inside</h1>
          <div className="pt-md-3 px-4 login-card">
            {/* <GoogleLogin
              clientId="135253032783-kmpa2k662qc8dkdqhlmml973l3c7khbt.apps.googleusercontent.com"
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} type="button" className="google-button">
                  <GoogleLogo width="40" height="40" className="bg-white p-1 mr-5" />
                  <div class="google-login-string">
                    Sign up in with Google
                  </div>
                </button>
              )}
              buttonText="Login"
              onSuccess={responseSuccessGoogle}
              onFailure={responseFailureGoogle}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            /> */}
            <button onClick={() => googleLogin()} type="button" className="google-button">
              <GoogleLogo width="40" height="40" className="bg-white p-1 mr-5" />
              <div class="google-login-string">
                Sign up in with Google
              </div>
            </button>

            <div class="or-line">
              <span>or</span>
            </div>
            {googleUser && googleUser.email &&
              <>
                <img
                  className="rounded-circle header-profile-img"
                  height="140"
                  width="140"
                  src={googleUser.image}
                  alt="avatar"
                />
                <h6>Complete your Profile</h6>
              </>
            }
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Field
                  name="email"
                  type="email"
                  component={renderInputField}
                  label='Email'
                  placeholder="member_name@joe.com"
                  validate={[required, email]}
                />
                <Field
                  name="userName"
                  type="text"
                  component={renderInputField}
                  label='Username'
                  placeholder="system123"
                  validate={[required]}
                />
                {!googleUser &&
                  <Field
                    name="password"
                    type="password"
                    component={renderInputField}
                    label='Password'
                    placeholder="******"
                    validate={[required]}
                  />
                }
              </div>
              <div className="row mt-4">
                <div className="col-7 text-left">
                  <Link to="/login" className="signup-string ml-2 link">
                    <p className="signup-string p-0">Already have an account,Log in</p>
                  </Link>
                </div>
                <div className="col-5 text-right">
                  <button type="submit" className="btn btn-primary login-button" disabled={submitting}>
                    Signup
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="row mt-4">
        <div className="col-12 col-md-3">
        </div>
        <div className="col-12 col-md-6">
          <div className="card mt-5">
            <h1 className="text-center mt-5">Signup</h1>
            <center>
              <form className="justify-content-center w-50" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row justify-content-center">
                  <div className="form-group">
                    <Field
                      name="userName"
                      type="text"
                      component={renderInputField}
                      label='Username'
                      placeholder="system123"
                      validate={[required]}
                    />
                  </div>
                  <div className="form-group">

                  </div>
                  <div className="form-group">
                    <Field
                      name="password"
                      type="password"
                      component={renderInputField}
                      label='Password'
                      placeholder="******"
                      validate={[required]}
                    />
                  </div>
                </div>
                <div className="form-group row mt-4">
                  <div className="col text-center">
                    <button type="submit" className="btn btn-primary" disabled={submitting}>
                      Signup
                    </button>
                  </div>
                </div>
              </form>
            </center>
          </div>
        </div>
        <div className="col-md-3">
        </div>
      </div> */}
    </>
  );
}


export default reduxForm({
  form: 'signupForm' // a unique name for this form
})(Signup);
