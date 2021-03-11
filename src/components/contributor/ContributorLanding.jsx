import React from 'react'
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ContributorLanding = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className="row m-0 px-md-5 px-2 contributor-header-row">
        <div className="col-6 text-center">
          <h1>Become a Contributor</h1>
          <p>
            Now you can contribute to the Datacode community <br />
            Start Contributing by creating notes and uploading blogs and much more and become a contributor of the awesome learning community
          </p>
        </div>
        <div className="col-6 text-md-right text-center">
          <img
            height="300px"
            width="550px"
            src={require(`../../assets/images/svg/contributor.svg`)}
            alt="avatar"
            className="mt-md-4 mt-0 contributor-header-img"
          />
        </div>
      </div>

      <div className="row m-0 px-3 intro-section align-items-center">
        <div className="col-md-6 col-12 p-2 p-md-5">
          <h1>Why you should contribute in Learning Community?</h1>
          <p>Contribution in datacode means nothing but things done by your side to add various tutorials and course, training and certifications, blogs, practice questions, example question, etc to the datacode website, Your contributions will be available on the datacode website and will be seen by all the users of datacode and used by them.
           </p>
          <p className="mt-2">The users can Upvote your contribution Like it share it, can review it save it. The more likes reviews and shares your contribution gets it will slides to the top positions and  more contribution you make your name will top the leaderboard</p>
        </div>
        <div className="col-md-6 col-12 px-md-5 px-2 text-center">
          <div className="m-0 p-2" style={{ position: "relative" }}>
            <Carousel
              draggable={true}
              infinite={true}
              dotListClass="custom-dot-list-style"
              responsive={responsive}
              autoPlay={true}
            >
              <div className="row m-0 m-2 px-1 px-md-5 contirbute-flow-card">
                <div className="col-12 text-center">
                  <i className="fad fa-file-search blue" />
                  <h5 className="px-4">Find your tutorial and lean</h5>
                </div>
              </div>
              <div className="row m-0 m-2 px-1 px-md-5 contirbute-flow-card">
                <div className="col-12 text-center">
                  <i className="fad fa-plus-circle green" />
                  <h5>Add your Tutorial and contribute in communtiy</h5>
                </div>
              </div>
              <div className="row m-0 m-2 px-1 px-md-5 contirbute-flow-card">
                <div className="col-12 text-center">
                  <i className="fad fa-users-medical" />
                  <h5>Join Community learning group and learn with your peers and get all best tutorials notifiction</h5>
                </div>
              </div>
              <div className="row m-0 m-2 px-1 px-md-5 contirbute-flow-card">
                <div className="col-12 text-center">
                  <i className="fad fa-heart-circle red" />
                  <h5>Love your faourave one! from the list of tutorials</h5>
                </div>
              </div>
              <div className="row m-0 m-2 px-1 px-md-5 contirbute-flow-card">
                <div className="col-12 text-center">
                  <i className="fad fa-bookmark orange" />
                  <h5>Create your library save your favoirate tutorial</h5>
                </div>
              </div>
              <div className="row m-0 m-2 px-1 px-md-5 contirbute-flow-card">
                <div className="col-12 text-center">
                  <i className="fad fa-comment-smile" />
                  <h5>Comment and review your best tutorial to help other community members</h5>
                </div>
              </div>
              <div className="row m-0 m-2 px-1 px-md-5 contirbute-flow-card">
                <div className="col-12 text-center">
                  <i className="fad fa-chart-line" />
                  <h5>Help to make Best Tutorial at top</h5>
                </div>
              </div>
              <div className="row m-0 m-2 px-1 px-md-5 contirbute-flow-card">
                <div className="col-12 text-center">
                  <i className="fad fa-trophy-alt yellow" />
                  <h5>Earn Community Rewards from your contribution</h5>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <h2 className="text-center mb-5">Contribute as different ways</h2>
      <div className="row m-0 justify-content-center">
        <div className="col-md-3 m-0 my-3 col-12 text-center">
          <Link to="/add_tutorial">
            <div className="contribute-categ-card">
              <img
                height="50px"
                width="50px"
                src={require(`../../assets/images/svg/Tutorial.png`)}
                alt="avatar"
                className="mt-md-4 mt-0 contributor-header-img"
              />
              <h6 className="mt-3">Add Tutorial</h6>
            </div>
          </Link>
        </div>
        <div className="col-md-3 m-0 my-3 col-12 text-center">
          <Link to="/contact_us">
            <div className="contribute-categ-card">
              <img
                height="50px"
                width="50px"
                src={require(`../../assets/images/svg/Tutorial.png`)}
                alt="avatar"
                className="mt-md-4 mt-0 contributor-header-img"
              />
              <h6 className="mt-3">Report Bug and Improvement</h6>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ContributorLanding