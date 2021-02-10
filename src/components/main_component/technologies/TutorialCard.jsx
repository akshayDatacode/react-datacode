import React from 'react'

const TutorialCard = () => {
  return (
    <>
      <div className="col-3 tutorial-card mx-4 mt-md-3 mt-4">
        <img
          height="150px"
          width="150px"
          src={require(`../../../assets/images/svg/Python.png`)}
          alt="avatar"
        // className="card-img-top mx-auto img-fluid img-circle d-block"
        />

        <div className="row m-0 mt-3 mb-2 text-right p-0">
          <div className="col-12 p-0 text-right">
            <i className="fad fa-heart-circle red mx-2" />
            <i className="fad fa-bookmark orange mx-2" />
            <i className="fad fa-comment-smile blue mx-2" />
          </div>
        </div>
        <div className="row m-0 mb-2">
          <span className="tag">Tags</span>
        </div>

        <h6>Recomment Tutorial | Best Promotional Course</h6>
        <p>
          A little bit discription about the course and also
              </p>
      </div>
    </>
  )
}

export default TutorialCard