import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'

const TutorialCard = ({
  id,
  title,
  likeTutorial,
  unlikeTutorial,
  likesCount,
  userData: { userName, email },
  saveToLibrary,
  unsaveFromLibrary,
  tutorial
}) => {

  const [isLiked, setLiked] = useState()
  const [isSaved, setSaved] = useState(false)
  const [likeCount, setLikeCount] = useState(likesCount)

  const handleUnlike = () => {
    unlikeTutorial({ id, userName }).then((res) => {
      if (res) {
        setLiked(false)
        setLikeCount(likesCount)
      }
    })
  }

  const handleLink = () => {
    likeTutorial({ id, userName }).then((res) => {
      if (res) {
        setLiked(true)
        setLikeCount(likesCount + 1)
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

  return (
    <>
      <div className="col-12 col-md-3 tutorial-card mx-4 mt-md-3 mt-4">
        <Link to={`/tutorial/${id}`}>
          <img
            height="150px"
            width="150px"
            src={require(`../../../../../../assets/images/svg/Python.png`)}
            alt="avatar"
          // className="card-img-top mx-auto img-fluid img-circle d-block"
          />
        </Link>
        <div className="row m-0 mt-3 mb-2 text-right p-0">
          <div className="col-12 p-0 text-right">
            {likeCount}
            {isLiked ? <i onClick={() => handleUnlike()} className="fad fa-heart-circle red mx-2" /> :
              <i onClick={() => handleLink()} className="far fa-heart-circle red mx-2" />}
            {
              isSaved ?
                <i onClick={() => handleUnsaveFromLibrary()} className="fad fa-bookmark orange mx-2" />
                :
                <i onClick={() => handleSaveToLibrary()} className="far fa-bookmark orange mx-2" />
            }
            <Link to={`/tutorial/${id}`}>
              <i className="fad fa-comment-smile blue mx-2" />
            </Link>
          </div>
        </div>
        <div className="row m-0 mb-2">
          <span className="tag">{title}</span>
        </div>

        <Link to={`/tutorial/${id}`}><h6>{title}</h6></Link>
        <p>
          A little bit discription about the course and also
              </p>
      </div>
    </>
  )
}

TutorialCard.defaultProps = {
  userName: '',
  email: '',
  id: "",
  likesCount: 0,
  userData: {},
  tutorial: {},
}

TutorialCard.propTypes = {
  userName: PropTypes.string,
  userName: PropTypes.string,
  id: PropTypes.string,
  likesCount: PropTypes.number,
  userData: PropTypes.object,
  tutorial: PropTypes.object,
}

export default TutorialCard