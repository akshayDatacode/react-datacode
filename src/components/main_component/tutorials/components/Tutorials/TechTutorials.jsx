import React, { useEffect, useState } from 'react'

import { techData } from './helpers'
import TutorialCard from './TutorialCard'
import { Link } from 'react-router-dom'
import Filter from './Filter'

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
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <div className="row m-0 category-page">
        <div className="col-12 p-md-5 p-2">
          <div className="row m-0 category-header ">
            <div className="col-12 col-md-6 pt-4 left-header-section px-md-5 px-2">
              <div className="nav">
                <p className="nav-link px-0"><Link to="/home">Library</Link> / <Link to="/index_technologies">Tutorials</Link> / <Link to={`/tutorials/${techDetails && techDetails.technology}`}>{`${techDetails && techDetails.title} Tutorial`}</Link></p>
              </div>
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
                  src={require(`../../../../../assets/images/svg/${item.svgSource}`)}
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
              <Filter />
              <div className="add-tutorial mt-3 p-4 align-items-center">
                <Link to="/add_tutorial"><i className="fad fa-plus-circle green" /></Link>
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