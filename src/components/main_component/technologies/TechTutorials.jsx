import React, { useEffect, useState } from 'react'

import { techData } from './helpers'
import TutorialCard from './TutorialCard'

const TechTutorials = ({
  match: { params: { technology } }
}) => {

  const [techDetails, setTechDetails] = useState({})

  useEffect(() => {
    techData.find((item) => {
      if (item.technology === technology) {
        return setTechDetails(item)
      }
    })
  })

  return (
    <>
      <div className="row m-0 category-page">
        <div className="col-12 p-md-5 p-2">
          <div className="row m-0 category-header ">
            <div className="col-12 col-md-6 pt-4 left-header-section px-md-5 px-2">
              <h2>{techDetails && techDetails.title}</h2>
              <h1>Tutorials & Courses</h1>
              <p>From building websites to analyzing data, the choice is yours. Find the best of the best courses to learn from...</p>
            </div>
            <div className="col-12 col-md-6 text-center d-flex justify-content-right right-header-section">
              {techData.map((item) => (
                (item.technology === technology) &&
                <img
                  height="400px"
                  width="400px"
                  src={require(`../../../assets/images/svg/${item.svgSource}`)}
                  alt="avatar"
                  className="text-right img-fluid img-circle d-block"
                />
              ))
              }
            </div>
          </div>
          <h2 className="my-5 text-center">{`Find Best ${techDetails.title} Tutorials and Courses`}</h2>
          <div className="row m-0">
            <div className="col-12 col-md-3 pt-2">
              <div className="filter">
                <h5 className="text-center p-2">Filter</h5>
                <hr />
                <div className="p-4">


                  <h6>Type of course</h6>
                  <div className="align-items-center d-flex mb-2">
                    <input type="checkbox" className="mr-3" /><p>Free</p>
                  </div>
                  <div className="align-items-center d-flex mb-2">
                    <input type="checkbox" className="mr-3" /><p>Paid</p>
                  </div>
                  <h6>Type of Medium</h6>
                  <div className="align-items-center d-flex mb-2">
                    <input type="checkbox" className="mr-3" /><p>Video</p>
                  </div>
                  <div className="align-items-center d-flex mb-2">
                    <input type="checkbox" className="mr-3" /><p>Book</p>
                  </div>
                  <div className="align-items-center d-flex mb-2">
                    <input type="checkbox" className="mr-3" /><p>PDF Notes</p>
                  </div>
                  <h6>Type of Levels</h6>
                  <div className="align-items-center d-flex mb-2">
                    <input type="checkbox" className="mr-3" /><p>Beginner</p>
                  </div>
                  <div className="align-items-center d-flex mb-2">
                    <input type="checkbox" className="mr-3" /><p>Intermediate</p>
                  </div>
                  <div className="align-items-center d-flex mb-2">
                    <input type="checkbox" className="mr-3" /><p>Advanced</p>
                  </div>
                </div>
              </div>
              <div className="add-tutorial mt-3 p-4 align-items-center">
                <i className="fad fa-plus-circle green" />
                <h5>Add your Tutorial and contribute in communtiy</h5>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="row m-0 d-flex justify-content-center tutorial-card-section">

                <TutorialCard id="asder12" />
                <TutorialCard id="asder13" />
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
                <TutorialCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechTutorials