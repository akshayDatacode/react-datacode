import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

import { techData, techCategory } from '../helpers'
import TutorialCard from '../TutorialCard'
import Filter from '../Filter'


const TechTutorials = ({
  getTutorialsList,
  match: { params: { technology } },
  tutorialsList,
}) => {

  const [techDetails, setTechDetails] = useState({})

  const [pageNumber, setPageNumber] = useState(0)

  const tutorialsPerPage = 2
  const pagesVisited = pageNumber * tutorialsPerPage
  console.log("tutorialsList", tutorialsList)
  const displayTutorials = tutorialsList
    .slice(pagesVisited, pagesVisited + tutorialsPerPage)
    .map((item) => {
      return <TutorialCard id="asder12" title={item.title} />
    })

  const pageCount = Math.ceil(tutorialsList.length / tutorialsPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  useEffect(() => {
    getTutorialsList(technology)

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
                  src={require(`../../../../../../assets/images/svg/${item.svgSource}`)}
                  alt="avatar"
                  className="text-right img-fluid img-circle d-block"
                />
              ))
              }
            </div>
          </div>
          <h2 className="my-5 text-center">{`Find Best ${techDetails.title} Tutorials and Courses`}</h2>
          <div className="row m-0">
            <div className="col-12 col-sm-12 col-md-3 pt-2 main">
              <Filter />
              <div className="add-tutorial mt-3 mb-md-0 mb-4 p-4 align-items-center">
                <Link to="/add_tutorial"><i className="fad fa-plus-circle green" /></Link>
                <h5>Add your Tutorial and contribute in communtiy</h5>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="row m-0 d-flex justify-content-center tutorial-card-section">
                {displayTutorials}
                <ReactPaginate
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"pagination"}
                  pageLinkClassName={"page"}
                  previousLinkClassName={"previousBtn"}
                  nextLinkClassName={"nextBtn"}
                  disabledClassName={"disabled"}
                  activeClassName={"activePage"}
                  activeLinkClassName={"activeClassLink"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechTutorials