import React, { useEffect, useState } from 'react'
import { techData } from './helpers'
import { Link } from 'react-router-dom'
import Comment from "../../../../../shared_components/comment"

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
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <div className="row m-0 tutorial-page justify-content-center">
        <div className="col-12 p-md-5 p-2">
          <div className="row m-0 category-header text-center">
            <div className="col-12 col-md-6 pt-4 left-header-section px-md-5 px-2">
              <p className="text-left nav-link px-0"><Link to="/index_technologies">Tutorials</Link> / <Link to={`/tutorials/${techDetails && techDetails.technology}`}>{`${techDetails && techDetails.title} Tutorial`}</Link> / <Link to={`/tutorials/${techDetails && techDetails.technology}`}>{`${techDetails.title} Course Name`}</Link></p>
              <h2>{techDetails && techDetails.title}</h2>
              <h1>Recomment Tutorial | Best Promotional Course</h1>
              <p>From building websites to analyzing data, the choice is yours. Find the best of the best courses to learn from...</p>
              <button className="text-center btn start-learning-btn">
                Start Learning
              </button>
            </div>
            <div className="col-12 col-md-6 text-center d-flex justify-content-right right-header-section">
              {techData.map((item) => (
                (item.id === id) &&
                <img
                  height="300px"
                  width="300px"
                  src={require(`../../../../../assets/images/svg/${item.svgSource}`)}
                  alt="avatar"
                  className="text-right img-fluid img-circle d-block"
                />
              ))
              }
            </div>
          </div>
          <div className="row m-0 mt-5 align-items-center">
            <div className="col-12 p-3 col-md-6 submitter-card">
              <h6>Tutorial Submitted By:-</h6>
              <div className="row m-0 mt-3">
                <div className="col-3">
                  <img
                    height="100px"
                    width="100px"
                    src={require(`../../../../../assets/images/svg/React.png`)}
                    alt="avatar"
                    className="text-right img-fluid img-circle d-block"
                  />
                </div>
                <div className="col-9">
                  <h6>Akshay Mandliya</h6>
                  <p>A Compluter Science Student of IPS academy, Love to contribute in community</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center justify-content-space-between">
              <div className="row m-0 mt-5 mt-md-0">
                <div className="col-4 ">
                  <i className="fad fa-heart-circle red mx-2" />
                  <h1 className="mt-md-4 mt-2 mb-0">58</h1>
                </div>
                <div className="col-4">
                  <i className="fad fa-bookmark orange mx-2" />
                  <p className="mt-md-4 mt-2 mb-0">save into your library</p>
                </div>
                <div className="col-4">
                  <Link to={`/tutorial/${id}`}>
                    <i className="fad fa-comment-smile blue mx-2" />
                  </Link>
                  <h1 className="mt-md-4 mt-2 mb-0">8</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="m-0 mt-5 comment-section justify-content-center">

            <h6 className="text-center">Write your reviews and comments of this tutorial</h6>
            <p>ask question and provide information that might be helpful to the people taking this course</p>
            <Comment />
            <div className="mt-5 user-comment p-3">
              <div className="d-flex p-0 mb-2 align-items-center">
                <img
                  height="35px"
                  width="35px"
                  src={require(`../../../../../assets/images/svg/React.png`)}
                  alt="avatar"
                  className="mr-2 text-right img-fluid img-circle d-block"
                />
                <h6 className="mb-0">Akshay Mandliya</h6>
              </div>
              <p className="text-left">A Compluter Science Student of IPS academy, Love to contribute in community. A Compluter Science Student of IPS academy, Love to contribute in community</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutorialPage