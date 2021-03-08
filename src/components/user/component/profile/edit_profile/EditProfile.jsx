import React, { useEffect, useState } from "react";
import { Field, reduxForm } from 'redux-form'
import { Link, useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner'

import { renderInputField } from '../../../../../shared_components/ReduxFormFields'
import { required, email } from '../../../../../utils/validators'

const EditProfile = ({
  initialize, reset, handleSubmit, submitting,
  signupUserLoading, userProfile, editUserProfile,
  setUserProfile, setUserImgDetails, userProfileLoading,
}) => {

  const [image, setImage] = useState("")
  const [imgUrl, setImgUrl] = useState("")


  useEffect(() => {
    window.scrollTo(0, 0);
    if (userProfile) {
      setImage(userProfile.imgUrl)
      initialize(userProfile)
    }
  }, [userProfile])

  const history = useHistory()

  const postUserImgDetails = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "user-profile-img")
    data.append("cloud_name", "datacode")
    setUserImgDetails(data).then((res) => {
      if (res.success) {
        setImgUrl(res.data)
        setImage("")
      }
    })
  }

  const onSubmit = (values) => {
    const user = { ...values }
    console.log("values ()()", user)
    user['imgUrl'] = imgUrl

    editUserProfile(user).then((res) => {
      if (res) {
        //  setUserProfile(res.data)
        console.log("Updated", userProfile && userProfile.email)
        history.push(`/my_profile/${userProfile && userProfile.email}`)
        reset('editForm')
      } else {
        console.log("Error", res)
        reset('editForm')
      }
    })
  }

  return (
    <>
      <div className="row m-0 edit-profile">
        <div className="col-md-4 col-12 text-center left-profile-section">
          <div className="mt-4">
            {userProfileLoading ? <Loader
              type="Puff"
              color="#30006d"
              height={100}
              width={100}
              timeout={3000} //3 secs
            /> :
              <img
                className="rounded-circle header-profile-img"
                height="140"
                width="140"
                src={imgUrl !== "" ? imgUrl : require(`../../../../../assets/images/svg/monolog.svg`)}
                alt="avatar"
              />}
          </div>
          <div>
            {image ?
              <div className="btn upload-img-btn mt-2 mb-3" onClick={() => postUserImgDetails()}>
                Upload Image<i className="fad fa-user-edit ml-2" />
              </div>
              :
              <>
                <input
                  type="file"
                  id="edit-profile-btn"
                  onChange={(e) => setImage(e.target.files[0])}
                  hidden
                />
                <label className="btn edit-profile-btn my-3" for="edit-profile-btn">
                  Add Profile Picture<i className="fad fa-user-edit ml-2" />
                </label>
              </>
            }
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
                name="userName"
                type="text"
                component={renderInputField}
                label='Username'
                placeholder="system123"
                validate={[required]}
                isDisabled={true}
              />
              <Field
                name="firstName"
                type="text"
                component={renderInputField}
                label='First Name'
                placeholder=""
                validate={[required]}
              />
              <Field
                name="lastName"
                type="text"
                component={renderInputField}
                label='Last Name'
                placeholder=""
                validate={[required]}
              />
              <Field
                name="email"
                type="email"
                component={renderInputField}
                label='Email'
                placeholder=""
                validate={[required]}
                isDisabled={true}
              />
              <Field
                name="phone"
                type="number"
                component={renderInputField}
                label='Phone No.'
              // placeholder=""
              // validate={[required]}
              // isDisabled={true}
              />
            </div>
            <div className="mt-3 mb-5">
              <h6>Acadmics Details</h6>
              <Field
                name="university"
                type="text"
                component={renderInputField}
                label='College / University'
              />
              <Field
                name="branch"
                type="text"
                component={renderInputField}
                label='Branch'
              />
              <Field
                name="graduationYear"
                type="text"
                component={renderInputField}
                label='Graduation Year'
              />
            </div>
            <div className="mt-3 mb-5">
              <h6>Your Achivements</h6>
              {/* <Field
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
              /> */}
            </div>
            <div className="mt-3 mb-5">
              <h6>Social Media Links</h6>
              <Field
                name="linkedin"
                type="text"
                component={renderInputField}
                label='Linkedin'
              />
              <Field
                name="twitter"
                type="text"
                component={renderInputField}
                label='Twitter'
              />
              <Field
                name="github"
                type="text"
                component={renderInputField}
                label='Github'
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
