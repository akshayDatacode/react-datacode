import React, { useEffect } from "react";
import { Field, reduxForm } from 'redux-form'
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner'

import { renderInputField } from '../../../../../shared_components/ReduxFormFields'
import { required, email } from '../../../../../utils/validators'

const EditProfile = ({
  reset, handleSubmit, submitting, signupUserLoading,
}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const onSubmit = (values) => {
    const user = { ...values }
    console.log("values ()()", user)
    // signupUser(user).then((res) => {
    //   if (res) {
    //     setUserDetails(res.data)
    //     console.log("Loged IN")
    //     reset('signupForm')
    //   } else {
    //     console.log("Error", res)
    //     reset('editForm')
    //   }
    // })
  }

  return (
    <>
      <div className="row m-0 edit-profile">
        <div className="col-md-4 col-12 text-center left-profile-section">
          <div className="mt-4">
            <img
              className="rounded-circle header-profile-img"
              height="140"
              width="140"
              src={require(`../../../../../assets/images/svg/profile.jpg`)}
              alt="avatar"
            />
          </div>
          <div>
            <Link to="/edit_profile" >
              <div className="btn edit-profile-btn my-3">Add Profile Picture<i className="fad fa-user-edit ml-2" /></div>
            </Link>
          </div>
          <div>
            <Link to="/reset_password" >
              <div className="btn edit-profile-btn mt-0 mb-3">Reset Password<i className="fad fa-user-edit ml-2" /></div>
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-8 px-3 px-md-5">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-3 mb-5">
              <h6>Personal Details</h6>
              <Field
                name="name"
                type="text"
                component={renderInputField}
                label='Name'
                placeholder=""
                validate={[required]}
              />
              <Field
                name="userName"
                type="text"
                component={renderInputField}
                label='Username'
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
            <div className="mt-3 mb-5">
              <h6>Acadmics Details</h6>
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
              <Field
                name="password"
                type="password"
                component={renderInputField}
                label='Password'
                placeholder="******"
                validate={[required]}
              />
            </div>
            <div className="mt-3 mb-5">
              <h6>Your Achivements</h6>
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
              <Field
                name="password"
                type="password"
                component={renderInputField}
                label='Password'
                placeholder="******"
                validate={[required]}
              />
            </div>
            <div className="mt-3 mb-5">
              <h6>Social Media Links</h6>
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
              <div className="col-12 text-center">
                <button type="submit" className="btn edit-submit-btn" disabled={submitting}>
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default reduxForm({
  form: 'editForm' // a unique name for this form
})(EditProfile);
