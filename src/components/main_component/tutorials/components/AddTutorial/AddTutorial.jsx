import React, { useEffect, useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'

import { renderInputField, renderCheckboxField, renderRadioField } from '../../../../../shared_components/ReduxFormFields'
import { required } from '../../../../../utils/validators'

import TutorialListCard from '../TutorialListCard'
import TagsInput from './TagsInput'

const AddTutorial = ({
  reset,
  handleSubmit,
  submitting,
  initialize,
  addTutorial,
  getTutorialByUserName,
  currentUser,
  currentUser: { userName },
  addTutorialLoading,
  tutorialListLoading,
  tutorialByUser,
  editTutorial,
  linkPreview,
}) => {
  // const [tutorialsList, setTutorialsList] = useState()
  const [pageNumber, setPageNumber] = useState(0)
  const [isEdit, setIsEdit] = useState(false)
  const [tags, setTags] = useState([])

  useEffect(() => {
    console.log("qqqq", currentUser)
    // const userName = currentUser
    if (userName) {
      handleGetTutorialByUserName()
    }
    window.scrollTo(0, 0);
  }, [userName])

  const handleGetTutorialByUserName = () => {
    getTutorialByUserName(userName).then((res) => {
      if (res.data) {
        console.log("aa", res.data)
        //setTutorialsList(res.data)
      }
    })
  }

  const onSubmit = (values) => {
    const tutorial = { ...values }
    linkPreview(tutorial.link)

    if (isEdit) {
      editTutorial(tutorial).then((res) => {
        if (res && res.success) {
          reset('tutorial')
          initialize({})
          setIsEdit(!isEdit)
        }
      })
    } else {
      tutorial['userName'] = userName
      tutorial['id'] = Math.random().toString(36).substr(4, 9)
      const tags = [tutorial.cost, tutorial.type, tutorial.level]
      tutorial['tags'] = tags
      console.log("tutorial", tutorial)
      addTutorial(tutorial).then((res) => {
        if (res && res.success) {
          handleGetTutorialByUserName()
          // setTags([])
          reset('tutorial')
        }
      })
    }
    console.log("values ()()", tutorial)
  }

  const handleEditTutorial = (id) => {
    window.scrollTo(0, 0);
    console.log("edit id", id)
    const editTutotial = tutorialByUser.find((item) => item.id === id)
    initialize(editTutotial)
    setIsEdit(!isEdit)
  }

  const handleCancelEdit = () => {
    initialize({})
    setIsEdit(!isEdit)
  }


  // const tutorialsPerPage = 6
  // const pagesVisited = pageNumber * tutorialsPerPage
  // console.log("tutorialsList", tutorialsList)
  // const displayTutorials = tutorialsList
  //   .slice(pagesVisited, pagesVisited + tutorialsPerPage)
  //   .map((item) => {
  //     return <TutorialListCard tutorial={item} id={item.id} title={item.title} likesCount={item.likes.length} />
  //   })

  // const pageCount = Math.ceil(tutorialsList.length / tutorialsPerPage)

  // const changePage = ({ selected }) => {
  //   setPageNumber(selected)
  // }

  return (
    <>
      <div className="row m-0 mt-4 add-totorial">
        <div className="col-12 col-md-4">
          <div className="pt-md-3 mb-md-5 px-4 add-form">
            <h1 className="text-center align-items-center">{isEdit ? 'Edit Tutorial' : 'Add Tutorial'}</h1>

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
              <div className="mt-3">
                <label className="form-label">This tutorial is:</label>
                <div className="type-tag">
                  <div className="px-1 type-checkbox">
                    <Field
                      name='cost'
                      component={renderRadioField}
                      value="Free"
                      label='Free'
                      type="radio"
                    />
                  </div>
                  <div className="px-1 mx-1 type-checkbox">
                    <Field
                      name='cost'
                      component={renderRadioField}
                      value="Paid"
                      label='Paid'
                      type="radio"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <label className="form-label">Tutorial Level</label>
                <div className="type-tag">
                  <div className="px-1 type-checkbox">
                    <Field
                      name='level'
                      component={renderRadioField}
                      value="Beginner"
                      label='Beginner'
                      type="radio"
                    />
                  </div>
                  <div className="px-1 mx-1 type-checkbox">
                    <Field
                      name='level'
                      component={renderRadioField}
                      value="Intermediate"
                      label='Intermediate'
                      type="radio"
                    />
                  </div>
                  <div className="px-1 mx-1 type-checkbox">
                    <Field
                      name='level'
                      component={renderRadioField}
                      value="Advance"
                      label='Advance'
                      type="radio"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <label className="form-label">Tutorial Type</label>
                <div className="type-tag">
                  <div className="px-1 type-checkbox">
                    <Field
                      name='type'
                      component={renderRadioField}
                      value="Video"
                      label='Video'
                      type="radio"
                    />
                  </div>
                  <div className="px-1 mx-1 type-checkbox">
                    <Field
                      name='type'
                      component={renderRadioField}
                      value="Book"
                      label='Book'
                      type="radio"
                    />
                  </div>
                  <div className="px-1 mx-1 type-checkbox">
                    <Field
                      name='type'
                      component={renderRadioField}
                      value="pdf"
                      label='PDF Notes'
                      type="radio"
                    />
                  </div>
                </div>
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
                  {addTutorialLoading
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
                        <div className="btn cancel-button mr-3" onClick={() => handleCancelEdit()}>
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
                              <i className="fad fa-plus-circle green mr-2" /> <span>Add Tutorial</span>
                            </>
                        }
                      </button>
                    </>
                  }
                </div>
              </div>
            </form>

          </div>
        </div>
        <div className="col-12 col-md-8 mt-md-0 mt-5">
          <h2 className="text-center">List of your submitted tutorials</h2>
          {tutorialListLoading
            ?
            <div className="d-flex text-center justify-content-center">
              <Loader
                type="ThreeDots"
                color="#30006d"
                height={100}
                width={100}
                timeout={11000} //8 secs
              />
            </div>
            :
            <div className="row m-0 d-flex justify-content-center tutorial-card-section">
              {tutorialByUser.length ? tutorialByUser.map((item, i) => (
                <TutorialListCard
                  key={i}
                  tutorial={item}
                  id={item.id}
                  title={item.title}
                  tags={item.tags}
                  likesCount={item.likes.length}
                  handleEditTutorial={handleEditTutorial}
                  handleGetTutorialByUserName={handleGetTutorialByUserName}
                />
              )) :
                <img
                  height="350px"
                  width="350px"
                  src={require(`../../../../../assets/images/svg/noitem.png`)}
                  alt="avatar"
                  className="mx-auto img-fluid img-circle"
                />}
            </div>
          }
        </div>
      </div>
    </>
  )

}

AddTutorial.defaultProps = {
  userName: '',
  tutorialsList: [],
  addTutorialLoading: false,
  tutorialListLoading: false,
  currentUser: {},
}

AddTutorial.propTypes = {
  userName: PropTypes.string,
  tutorialsList: PropTypes.array,
  currentUser: PropTypes.object,
}

export default reduxForm({
  form: 'tutorial' // a unique name for this form
})(AddTutorial) 