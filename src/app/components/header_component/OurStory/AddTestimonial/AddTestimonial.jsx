import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";
import { Field, reduxForm } from 'redux-form'
import Loader from 'react-loader-spinner'

import { renderInputField } from '../../../../../shared_components/ReduxFormFields'
import { required } from '../../../../../utils/validators'


const AddTestimonial = ({
  reset,
  handleSubmit,
  submitting,
  initialize,
  userProfile,
  setUserImgDetails,
  open,
  showAddTestimonial,
  addTestimonial,
  showTestimonial,
  submitButtonName,
  submitButtonColor,
  title,
  message,
  addTestimonialLoading,
  userProfileLoading,
}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [imgUrl, setImgUrl] = useState("")
  const [image, setImage] = useState("")

  useEffect(() => {
    setImgUrl(userProfile && userProfile.imgUrl)
    initialize(userProfile)
  }, [userProfile])

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
    const testimonial = { ...values }
    testimonial["imgUrl"] = imgUrl
    if (isEdit) {
      // editTutorial(tutorial).then((res) => {
      //   if (res && res.success) {
      //     reset('testimonial')
      //     initialize({})
      //     setIsEdit(!isEdit)
      //   }
      // })
    } else {
      console.log("testimonial", testimonial)
      // addTestimonial(testimonial).then((res) => {
      //   if (res && res.success) {
      //     // setTags([])
      //     reset('testimonial')
      //   }
      // })
    }
    console.log("values ()()", testimonial)
  }

  return (
    <>
      <Modal isOpen={showTestimonial} toggle={showAddTestimonial} className="delete-tutorial-modal">
        <ModalHeader toggle={showAddTestimonial} className="modal-header">
          Please write your love to community
        </ModalHeader>
        <div className="testimonial-form">
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
                src={imgUrl !== "" ? imgUrl : userProfile && userProfile.imgUrl}
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
                  Add New Profile Picture<i className="fad fa-user-edit ml-2" />
                </label>
              </>
            }
          </div>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Field
                name="firstName"
                type="text"
                component={renderInputField}
                label='Enter Your Name'
                placeholder=""
                validate={[required]}
              />
            </div>
            <div>
              <Field
                name="testimonial"
                type="textarea"
                component={renderInputField}
                label='Enter Tutorial Link'
                placeholder=""
                validate={[required]}
              />
            </div>

            <div className="row mt-4">

              <div className="col-12 text-right">
                {addTestimonialLoading
                  ?
                  <Loader
                    type="ThreeDots"
                    color="#30006d"
                    height={100}
                    width={100}
                    timeout={19000} //8 secs
                  /> :
                  <>
                    {isEdit &&
                      <div className="btn cancel-button mr-3">
                        Cancel
                        </div>
                    }
                    <button type="submit" className={`btn ${isEdit ? 'edit-button' : 'add-button'} login-button`} disabled={submitting}>
                      {
                        isEdit ?
                          <>
                            <i className="far fa-edit voilet mr-2" /> <span>Edit Tutorial</span>
                          </>
                          :
                          <>
                            <i className="fad fa-plus-circle voilet mr-2" /> <span>Add Testimonial</span>
                          </>
                      }
                    </button>
                  </>
                }
              </div>
            </div>
          </form>
        </div>
        <ModalFooter>
          <div className="display-flex">
            <Button color={submitButtonColor} onClick={() => onSubmit()}>
              {submitButtonName}
            </Button>
            <Button color="secondary" onClick={showAddTestimonial}>
              Cancel
        </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  )
}

AddTestimonial.defaultProps = {
  message: "",
  title: "",
  submitButtonName: "Okay",
  onSubmit: () => { },
  submitButtonColor: "danger",
};

AddTestimonial.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
  submitButtonName: PropTypes.string,
  submitButtonColor: PropTypes.string,
  onSubmit: PropTypes.func,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'testimonial' // a unique name for this form
})(AddTestimonial)