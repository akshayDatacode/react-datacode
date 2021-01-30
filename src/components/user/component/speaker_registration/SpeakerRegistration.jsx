import React from "react"
import { Field, reduxForm } from 'redux-form'
import { Redirect, Link } from 'react-router-dom';

import { renderInputField } from '../../../../shared_components/ReduxFormFields'
import { required, email } from '../../../../utils/validators'
import speaker from '../../../../assets/images/svg/speaker.png'

const SpeakerRegistration = ({
  reset,
  handleSubmit,
  submitting
}) => {

  const onSubmit = (values) => {
    const user = { ...values }
    console.log("values ()()", user)
    reset('speakerForm')
  }

  return (
    <>
      <div className="row m-0 login m-0">
        <div className="col-md-6 sticky">
          <img
            width='300'
            height='300'
            className="card-img-top d-block mb-0 img-fluid sticky"
            src={speaker}
            alt="avatar"
          />
        </div>
        <div className="col-12 col-md-6">
          <div className="pt-md-3 px-md-5 px-4 login-card">
            <h1 className="text-center login-text">Call For Speaker</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Field
                  type="text"
                  name="name"
                  label="Enter Name"
                  placeholder=""
                  component={renderInputField}
                  validate={[required]}
                />
                <Field
                  type="email"
                  name="email"
                  label="Enter Email"
                  placeholder="xyz@yui.com"
                  component={renderInputField}
                  validate={[required, email]}
                />
                <Field
                  type="text"
                  name="phoneNo"
                  label="Enter Phone Number"
                  placeholder=""
                  component={renderInputField}
                  validate={[required]}
                />
                <Field
                  type="text"
                  name="city"
                  label="Enter City"
                  //placeholder="xyz@yui.com"
                  component={renderInputField}
                  validate={[required]}
                />
                <Field
                  type="text"
                  name="college"
                  label="Enter University / College"
                  //placeholder="xyz@yui.com"
                  component={renderInputField}
                  validate={[required]}
                />
                <Field
                  type="text"
                  name="technology"
                  label="Enter Your Technology"
                  //placeholder="xyz@yui.com"
                  component={renderInputField}
                  validate={[required]}
                />
                <Field
                  type="textarea"
                  name="bio"
                  label="Please Introduce Yourself"
                  placeholder="xyz@yui.com"
                  component={renderInputField}
                  validate={[required]}
                />
              </div>
              <div className="row mt-4">
                <div className="col-12 text-center">
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
  form: 'speakerForm',
})(SpeakerRegistration);