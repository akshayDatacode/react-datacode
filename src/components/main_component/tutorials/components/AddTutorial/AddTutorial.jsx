import React, { useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

import { renderInputField } from '../../../../../shared_components/ReduxFormFields'
import { required } from '../../../../../utils/validators'
import TutorialCard from '../../../tutorials/components/Tutorials/TutorialCard'
import { useState } from 'react'

const AddTutorial = ({
  reset,
  handleSubmit,
  submitting,
  addTutorial,
  getTutorialByUserName,
  userProfile,
  userProfile: { userName },
}) => {
  const [tutorialsList, setTutorialsList] = useState()
  useEffect(() => {
    console.log("qqqq", userProfile)
    // const userName = currentUser
    if (userName) {
      getTutorialByUserName(userName).then((res) => {
        if (res.data) {
          console.log("aa", res.data)
          setTutorialsList(res.data)
        }
      })
    }
    window.scrollTo(0, 0);
  }, [userProfile])

  const onSubmit = (values) => {
    const tutorial = { ...values }
    tutorial['userName'] = userName
    tutorial['id'] = Math.random().toString(36).substr(4, 9)
    addTutorial(tutorial).then((res) => {
      if (res && res.success) {
        getTutorialByUserName(userName).then((res) => {
          if (res.data) {
            console.log("aa", res.data)
            setTutorialsList(res.data)
          }
        })
        reset('tutorial')
      }
    })
    console.log("values ()()", tutorial)

  }

  return (
    <>
      <div className="row m-0 mt-4 add-totorial">
        <div className="col-12 col-md-4">
          <div className="pt-md-3 px-4 add-form">
            <h1 className="text-center">Add Tutorial</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Field
                  name="title"
                  type="text"
                  component={renderInputField}
                  label='Enter Tutorial Title'
                  placeholder=""
                  validate={[required]}
                />
              </div>
              <div>
                <Field
                  name="link"
                  type="text"
                  component={renderInputField}
                  label='Enter Tutorial Link'
                  placeholder=""
                  validate={[required]}
                />
              </div>
              <div>
                <Field
                  name="technology"
                  type="text"
                  component={renderInputField}
                  label='Enter Tutorial Technology'
                  placeholder=""
                  validate={[required]}
                />
              </div>
              <div className="row mt-4">
                <div className="col-12 text-right">
                  <button type="submit" className="btn button login-button" disabled={submitting}>
                    <i className="fad fa-plus-circle green" /> Add Tutorial
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-8 mt-md-0 mt-5">
          <h2 className="text-center">List of your submitted tutorials</h2>
          <div className="row m-0 d-flex justify-content-center tutorial-card-section">
            {tutorialsList && tutorialsList.map((item, i) => (
              <TutorialCard key={i} tutorial={item} id={item.id} title={item.title} likesCount={item.likes.length} />
            ))}
          </div>
        </div>
      </div>
    </>
  )

}

AddTutorial.defaultProps = {
  userName: '',
  tutorialsList: [],
}

AddTutorial.propTypes = {
  userName: PropTypes.string,
  tutorialsList: PropTypes.array,
}

export default reduxForm({
  form: 'tutorial' // a unique name for this form
})(AddTutorial) 