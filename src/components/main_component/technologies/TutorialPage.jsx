import React, { useEffect, useState } from 'react'
import { techData } from './helpers'
import { Link } from 'react-router-dom'
import Comment from "../../../shared_components/comment"

const TutorialPage = ({
  match: { params: { id } }
}) => {

  const [techDetails, setTechDetails] = useState({})

  useEffect(() => {
    techData.find((item) => {
      if (item.id === id) {
        return setTechDetails(item)
      }
    })
  })

  return (
    <>
      <div className="row m-0 tutorial-page justify-content-center">
        <div className="col-12 p-md-5 p-2">
          <div className="row m-0 category-header ">
            <div className="col-12 col-md-6 pt-4 left-header-section px-md-5 px-2">
              <h2>{techDetails && techDetails.title}</h2>
              <h1>Recomment Tutorial | Best Promotional Course</h1>
              <p>From building websites to analyzing data, the choice is yours. Find the best of the best courses to learn from...</p>
            </div>
            <div className="col-12 col-md-6 text-center d-flex justify-content-right right-header-section">
              {techData.map((item) => (
                (item.id === id) &&
                <img
                  height="300px"
                  width="300px"
                  src={require(`../../../assets/images/svg/${item.svgSource}`)}
                  alt="avatar"
                  className="text-right img-fluid img-circle d-block"
                />
              ))
              }
            </div>
          </div>
          <div className="row m-0 mt-5">
            <div className="col-12 col-md-6 d-flex justify-content-center ">
              <img
                height="30px"
                width="30px"
                src={require(`../../../assets/images/svg/React.png`)}
                alt="avatar"
                className="text-right img-fluid img-circle d-block"
              />
              <h6>Submitted BY: Akshay Mandliya</h6>
            </div>
            <div className="col-12 col-md-6 text-center justify-content-space-between">
              <i className="fad fa-heart-circle red mx-2" />
              <i className="fad fa-bookmark orange mx-2" />
              <Link to={`/tutorial/${id}`}>
                <i className="fad fa-comment-smile blue mx-2" />
              </Link>
            </div>
          </div>
          <div className="row m-0">
            <h6 className="text-center">Write your reviews and comments of this tutorial</h6>
            <p>ask question and provide information that might be helpful to the people taking this course</p>
            <Comment />
          </div>
        </div>
      </div>
    </>
  )
}

export default TutorialPage