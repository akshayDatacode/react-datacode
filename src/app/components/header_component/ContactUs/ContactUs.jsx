import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Redirect, Link } from 'react-router-dom';

import { renderInputField } from '../../../../shared_components/ReduxFormFields'
import { required, email } from '../../../../utils/validators'
import Loader from 'react-loader-spinner';

const ContactUs = ({
  reset,
  handleSubmit,
  submitting,
  addContactMessage,
  addContactMessageLoading,
}) => {
  const [isContacted, setContacted] = useState(false)

  const onSubmit = (values) => {
    const contactMessage = { ...values }
    console.log("values Contact form", contactMessage)
    addContactMessage(contactMessage).then((res) => {
      if (res && res.success) {
        setContacted(true)
        reset('speakerForm')
      }
    })
  }

  return (
    <>
      <div className="row m-0 mt-4 contact-us align-items-center">
        <div className="col-12 col-md-6 text-center ">
          <img
            height="250px"
            width="500px"
            src={require(`../../../../assets/images/svg/contactus.svg`)}
            alt="avatar"
            className="contactus-img mt-md-4 mt-0"
          />
        </div>
        <div className="col-12 col-md-6 text-center">
          {addContactMessageLoading && addContactMessageLoading ?
            <Loader
              type="ThreeDots"
              color="#30006d"
              height={100}
              width={100}
              timeout={19000} //8 secs
            /> :
            <>
              {isContacted ?
                <div className="text-center">
                  <h1>Thank you!</h1>
                  <p>for contacting us, we will get back to you very soon</p>
                </div>
                :
                <>
                  <h1>Contact us</h1>
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
                        name="phone"
                        label="Enter Phone Number"
                        placeholder=""
                        component={renderInputField}
                        validate={[required]}
                      />
                      <Field
                        type="textarea"
                        name="message"
                        label="Please share your message"
                        placeholder=""
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
                </>
              }
            </>
          }
        </div>
      </div>
    </>
  )
}

export default reduxForm({
  form: 'contactus',
})(ContactUs) 