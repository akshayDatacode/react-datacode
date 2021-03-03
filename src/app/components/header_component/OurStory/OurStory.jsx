import React from 'react'
import PeopleWords from './PeopleWords'
import AddTestimonial from './AddTestimonial'

const OurStory = ({
  showAddTestimonial,
}) => {
  return (
    <>
      <div className="row m-0 our-story-header">
        <div className="col-12 text-center">
          <img
            height="250px"
            width="580px"
            src={require(`../../../../assets/images/svg/logo_white.svg`)}
            alt="avatar"
            className="ourstory-img mt-md-4 mt-0"
          />
          <h1>Our Story</h1>
        </div>
      </div>
      <div className="row m-0 px-md-5">
        <div className="col-12 px-md-5 px-3">
          <div className="row m-0">
            <div className="col-md-6 col-12">
              <h2>Our vison</h2>
              <p>FUck Up ! thinks are going Fuck up2..2.2.22.</p>
            </div>
            <div className="col-md-6 col-12 text-center">
              <img
                height="600px"
                width="600px"
                src={require(`../../../../assets/images/svg/vision.svg`)}
                alt="avatar"
                className="vision-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 px-md-5 our-community">
        <div className="col-12 px-md-5 px-3">
          <div className="row m-0 d-flex justify-content-center">
            <div className="col-md-3 social-card col-12">
              <h2>Facebook</h2>
            </div>
            <div className="col-md-3 social-card col-12">
              <h2>Instagram</h2>
            </div>
            <div className="col-md-3 social-card col-12">
              <h2>LinkedIn</h2>
            </div>
            <div className="col-md-3 social-card col-12">
              <h2>Twitter</h2>
            </div>
            <div className="col-md-3 social-card col-12">
              <h2>Telegram</h2>
            </div>
            <div className="col-md-3 social-card col-12">
              <h2>Youtube</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 px-md-5 people-word">
        <PeopleWords />
        <PeopleWords />
        <PeopleWords />
        <PeopleWords />
        <PeopleWords />
      </div>
      <div className="row m-0 ">
        <div className="col-12 text-center">
          <div onClick={() => showAddTestimonial()} className="btn add-testimomnial-btn">What do you say for us?</div>
        </div>
      </div>
      <AddTestimonial />
    </>
  )
}

export default OurStory