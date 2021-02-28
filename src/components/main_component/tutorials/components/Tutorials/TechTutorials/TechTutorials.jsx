import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

import { techData, techCategory } from '../helpers'
import TutorialCard from '../TutorialCard'
import Filter from '../Filter'
import { Helmet } from 'react-helmet'
import Loader from 'react-loader-spinner'


const TechTutorials = ({
  getTutorialsList,
  match: { params: { technology } },
  tutorialsList,
  tutorialListLoading,
}) => {

  const [techDetails, setTechDetails] = useState({})

  const [pageNumber, setPageNumber] = useState(0)

  const handleTutorialList = () => {
    getTutorialsList(technology)
  }

  useEffect(() => {
    handleTutorialList()
    techData.find((item) => {
      if (item.technology === technology) {
        return setTechDetails(item)
      }
    })
    window.scrollTo(0, 0);
  }, [])

  const tutorialsPerPage = 3
  const pagesVisited = pageNumber * tutorialsPerPage
  console.log("tutorialsList", tutorialsList)
  const displayTutorials = tutorialsList
    .slice(pagesVisited, pagesVisited + tutorialsPerPage)
    .map((item) => {
      return <TutorialCard
        handleTutorialList={handleTutorialList}
        tutorial={item}
        id={item.id}
        tags={item.tags}
        title={item.title}
        likesCount={item.likes.length}
      />
    })

  const pageCount = Math.ceil(tutorialsList.length / tutorialsPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <>
      <Helmet><title>{`Find the Best ${techDetails && techDetails.title} Courses & Tutorials | Datacode.in`}</title></Helmet>
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
              {tutorialListLoading ?
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
                  {tutorialsList && tutorialsList.length ?
                    <>
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
                    </>
                    :
                    <img
                      height="350px"
                      width="350px"
                      src={require(`../../../../../../assets/images/svg/noitem.png`)}
                      alt="avatar"
                      className="mx-auto img-fluid img-circle"
                    />}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TechTutorials