import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import DeleteTutorialModal from './DeleteTutorialModal'

const TutorialListCard = ({
  id,
  title,
  tags,
  likeTutorial,
  unlikeTutorial,
  likesCount,
  userData: { userName, email },
  saveToLibrary,
  unsaveFromLibrary,
  tutorial,
  userProfile,
  removeTutorial,
  userProfile: { myTutorialsLibrary },
  handleEditTutorial,
  handleGetTutorialByUserName,
}) => {
  const [isLiked, setLiked] = useState()
  const [isSaved, setSaved] = useState()
  // const [likeCount, setLikeCount] = useState(likesCount)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (tutorial && tutorial.likes) {
      tutorial.likes.find((item) => {
        if (item === userName) {
          return setLiked(true)
        }
      })
    }

    if (userProfile && userProfile.myTutorialsLibrary) {
      myTutorialsLibrary.map((item) => {
        if (item.id === tutorial.id) {
          return setSaved(true)
        }
      })
    }
  }, [tutorial, likesCount])

  const handleLike = () => {
    likeTutorial({ id, userName }).then((res) => {
      if (res) {
        setLiked(true)
        handleGetTutorialByUserName()
      }
    })
  }

  const handleUnLike = () => {
    unlikeTutorial({ id, userName }).then((res) => {
      if (res) {
        setLiked(false)
        handleGetTutorialByUserName()
      }
    })
  }

  const handleSaveToLibrary = () => {
    const saveItem = tutorial
    saveToLibrary({ saveItem, email }).then((res) => {
      if (res) {
        setSaved(true)
      }
    })
  }

  const handleUnsaveFromLibrary = () => {
    const saveItem = tutorial
    unsaveFromLibrary({ saveItem, email }).then((res) => {
      if (res) {
        setSaved(false)
      }
    })
  }

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const handleRemoveTutorial = () => {
    removeTutorial(id).then((res) => {
      if (res) {
        console.log(res, "res")
      }
    })
  }


  return (
    <>
      <div className="row m-0 tutorial-list-card">
        <div className="col-3 align-items-center">
          <Link to={`/tutorial/${id}`}>
            <img
              // height="150px"
              // width="150px"
              src={require(`../../../../../assets/images/svg/Python.png`)}
              alt="avatar"
              className="card-img-top mx-auto mt-3 img-fluid img-circle d-block"
            />
          </Link>
        </div>
        <div className="col-9">
          <div className="row m-0 mt-3 mb-2 text-right p-0">
            <div className="col-12 p-0 text-right">
              {likesCount}
              {isLiked ? <i onClick={() => handleUnLike()} className="fad fa-heart red mx-2" /> :
                <i onClick={() => handleLike()} className="far fa-heart red mx-2" />}
              {
                isSaved ?
                  <i onClick={() => handleUnsaveFromLibrary()} className="fad fa-bookmark voilet mx-2" />
                  :
                  <i onClick={() => handleSaveToLibrary()} className="far fa-bookmark voilet mx-2" />
              }
              <Link to={`/tutorial/${id}`}>
                <i className="fad fa-comments-alt voilet mx-2" />
              </Link>
              <i onClick={() => handleEditTutorial(id)} className="far fa-edit voilet mx-2" />
              <i onClick={() => setOpenModal(!openModal)} className="far fa-trash voilet mx-2" />
            </div>
          </div>
          <div className="tags-input row m-0">
            <div className="col-12 p-0">
              <div className="tags-area border-0">
                {tags.map((tag, index) => (
                  <div className="tag" key={index}>
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
          <Link to={`/tutorial/${id}`}><h6>{title}</h6></Link>
          <p>
            A little bit discription about the course and also
          </p>
        </div>
      </div>
      <DeleteTutorialModal
        open={openModal}
        toggle={toggleModal}
        onSubmit={handleRemoveTutorial}
        submitButtonName={"Delete Tutorial"}
      />
    </>
  )
}

TutorialListCard.defaultProps = {
  userName: '',
  email: '',
  id: "",
  likesCount: 0,
  userData: {},
  tutorial: {},
  myTutorialsLibrary: [],
  userProfile: {},
}

TutorialListCard.propTypes = {
  userName: PropTypes.string,
  id: PropTypes.string,
  likesCount: PropTypes.number,
  userData: PropTypes.object,
  tutorial: PropTypes.object,
  myTutorialsLibrary: PropTypes.array,
  userProfile: PropTypes.object,
}

export default TutorialListCard