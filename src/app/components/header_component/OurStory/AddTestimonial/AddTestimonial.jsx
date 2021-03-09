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
  currentUser,
  setUserImgDetails,
  fetchTestimonials,
  showAddTestimonial,
  addTestimonial,
  showTestimonial,
  addTestimonialLoading,
  userProfileLoading,
  isEditTestimonial,
  editTestimonialData,
  editTestimonial,
  setEditTestimonial,
}) => {
  const [imgUrl, setImgUrl] = useState("")
  const [image, setImage] = useState("")

  useEffect(() => {
    if (isEditTestimonial) {
      console.log("ddddin side edit", editTestimonialData)
      editTestimonialData['firstName'] = editTestimonialData.name
      setImgUrl(editTestimonialData && editTestimonialData.imgUrl)
      initialize(editTestimonialData)
    } else {
      setImgUrl(currentUser && currentUser.imgUrl)
      initialize(currentUser)
    }
  }, [currentUser, editTestimonialData])

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
    testimonial['name'] = testimonial.firstName
    if (isEditTestimonial) {
      editTestimonial(testimonial).then((res) => {
        if (res && res.success) {
          reset('testimonial')
          initialize({})
          setEditTestimonial({})
          fetchTestimonials()
        }
      })
    } else {
      console.log("testimonial", testimonial)
      addTestimonial(testimonial).then((res) => {
        if (res && res.success) {
          reset('testimonial')
          showAddTestimonial()
          fetchTestimonials()
        }
      })
    }
    console.log("values ()()", testimonial)
  }

  console.log("imgurl", imgUrl)
  return (
    <>
      <Modal isOpen={showTestimonial} toggle={showAddTestimonial} className="delete-tutorial-modal">
        <ModalHeader toggle={showAddTestimonial} className="modal-header text-center">
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
                src={imgUrl !== "" ? imgUrl : require(`../../../../../assets/images/svg/monolog.svg`)}
                alt="userprofile"
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
                  Add New Picture<i className="fad fa-user-edit ml-2" />
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
                label='Enter Your Words'
                placeholder=""
                validate={[required]}
              />
            </div>
            <h2 className="mt-3 mb-0">Add social media links</h2>
            <div>
              <Field
                name="linkedin"
                type="text"
                component={renderInputField}
                label='Linkedin'
                placeholder=""
              />
            </div>
            <div>
              <Field
                name="github"
                type="text"
                component={renderInputField}
                label='Github'
                placeholder=""
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
                    {isEditTestimonial &&
                      <div className="btn cancel-button mr-3">
                        Cancel
                        </div>
                    }
                    <button type="submit" className={`btn ${isEditTestimonial ? 'edit-button' : 'add-button'} login-button`} disabled={submitting}>
                      {
                        isEditTestimonial ?
                          <>
                            <i className="far fa-edit voilet mr-2" /> <span>Edit Testimonial</span>
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
  showAddTestimonial: PropTypes.func.isRequired,
  showTestimonial: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'testimonial' // a unique name for this form
})(AddTestimonial)