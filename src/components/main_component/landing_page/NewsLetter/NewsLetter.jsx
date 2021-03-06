import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Redirect, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'

import { renderInputField } from '../../../../shared_components/ReduxFormFields'
import { required, email } from '../../../../utils/validators'

const NewsLetter = ({
  reset, handleSubmit, submitting, newsLetterSubscribe, addSubscribeLoading,
}) => {

  const [subscribed, setSubscribed] = useState(false)

  const onSubmit = (values) => {
    const user = { ...values }
    console.log("values ()()", user)
    newsLetterSubscribe(user).then((res) => {
      if (res && res.success) {
        setSubscribed(true)
        reset('subscribeForm')
      }
    })
  }

  return (
    <>
      <div className="row m-0 mt-md-0 mt-5 news-letter-section">
        <div className="col-md-6 col-12 px-md-5 px-4 text-md-left text-center">
          <div className="row m-0 subscribe-text">
            <div className="col-12">
              <h2>Subscribe to our weekly notes</h2>
              <p>Subscribe to our notes mail to receive weekly updates on latest Tutorials and Courses, Training and certification, the latest technical blogs, practice questions, quizzes, and a lot more to make better your learning</p>
              <img
                height="50px"
                width="180px"
                src={require(`../../../../assets/images/svg/logo.svg`)}
                alt="avatar"
                className="mb-2"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 subscribe-form">
          {addSubscribeLoading ?
            <Loader
              type="Grids"
              color="#ffffff"
              height={100}
              width={100}
              timeout={12000} //8 secs
              className="text-center py-5"
            />
            :
            <div className="">
              {subscribed ?
                <div className="py-md-5 py-0 ">
                  <div className="row pb-4 mb-3 thanks-for-subscribing align-itmes-center">
                    <div className="col-12 text-center">
                      <h2>Thanks for Subscribing</h2>
                      <Link to="/signup">
                        <button type="submit" className={`btn subscribe-button`} disabled={submitting}>
                          <span>Start your learning</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                :
                <form className="py-md-5 py-0" onSubmit={handleSubmit(onSubmit)}>
                  <div className="justify-content-center mb-3">
                    <Field
                      name="email"
                      type="text"
                      component={renderInputField}
                      placeholder="Enter your email"
                      validate={[required, email]}
                    />
                  </div>
                  <div className="row pb-4 mb-3">
                    <div className="col-12 text-center">
                      <button type="submit" className={`btn subscribe-button`} disabled={submitting}>
                        <span><i className="fas fa-mail-bulk mr-2" />Get this notes mail</span>
                      </button>
                    </div>
                  </div>
                </form>
              }
            </div>}
        </div>
      </div>
    </>
  )
}

export default reduxForm({
  form: 'subscribeForm' // a unique name for this form
})(NewsLetter);  