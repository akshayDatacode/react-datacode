import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Gallery from 'react-grid-gallery';

import { IMAGES } from './helpers'
import PeopleWords from './PeopleWords'
import AddTestimonial from './AddTestimonial'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faFacebookSquare,
  faLinkedinIn,
  faYoutube,
  faInstagram,
  faWhatsapp,
  faTwitter,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";


const OurStory = ({
  showAddTestimonial,
  testimonials,
  addTestimonialLoading,
  fetchTestimonials,
  currentUser,
  setEditTestimonial,
  deleteTestimonial,
}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTestimonials({}).then((res) => {
      if (res) {
        console.log("done")
      }
    })
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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

  const handleTestimonialEdit = (testimonial) => {
    setEditTestimonial(testimonial)
  }

  const handleTestimonialDelete = (testimonial) => {
    deleteTestimonial(testimonial).then((res) => {
      if (res && res.success) {
        fetchTestimonials()
      }
    })
  }

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
                height="500px"
                width="500px"
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
            <div className="col-md-3 social-card col-12 align-items-center">
              <Link
                to="/signup"
              >
                <img
                  height="200px"
                  width="200px"
                  src={require(`../../../../assets/images/svg/community.svg`)}
                  alt="avatar"
                  className="ourstory-img mt-md-4 mt-0"
                />
              </Link>
              <h1>27K ++</h1>
              <h2>Beginners Community</h2>
              <p>Follow Datacode.in on Instagram for Tech news, code snippets</p>
              <Link to="/signup"><div className="btn social-follow-btn">Join Community</div></Link>
            </div>
            <div className="col-md-3 social-card col-12 align-items-center">
              <Link
                to="/index_technologies"
              >
                <img
                  height="200px"
                  width="200px"
                  src={require(`../../../../assets/images/svg/reach.svg`)}
                  alt="avatar"
                  className="ourstory-img mt-md-4 mt-0"
                />
              </Link>
              <h1>10K ++</h1>
              <h2>Active Learners</h2>
              <p>Follow Datacode.in on Instagram for Tech news, code snippets</p>
              <Link to="/index_technologies"><div className="btn social-follow-btn">Start Learning</div></Link>
            </div>
            <div className="col-md-3 social-card col-12 align-items-center">
              <a
                href="https://www.linkedin.com/company/datacode_in/"
                target="_blank"
              >
                <img
                  height="200px"
                  width="200px"
                  src={require(`../../../../assets/images/svg/tech_mentor.svg`)}
                  alt="avatar"
                  className="ourstory-img mt-md-4 mt-0"
                />
              </a>
              <h1>300 ++</h1>
              <h2>Tech Mentors</h2>
              <p>Follow Datacode.in on Instagram for Tech news, code snippets</p>
              <a href="https://www.facebook.com/Datacode.in/" target="_blank"><div className="btn social-follow-btn">Let's connect with mentors</div></a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-5 text-center">Our Community Moments</h1>
      <div className="row m-0 mt-3 px-0 px-md-3">
        <div className="col-12 px-md-5 px-2">
          <Gallery images={IMAGES} />
        </div>
      </div>
      <h1 className="mt-5 text-center">What our community says to us!</h1>
      <div className="m-0 px-md-5 " style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
          {testimonials && testimonials.map((item) => (
            <PeopleWords
              item={item}
              currentUser={currentUser}
              handleTestimonialEdit={handleTestimonialEdit}
              handleTestimonialDelete={handleTestimonialDelete}
            />
          ))}
        </Carousel>
      </div>
      <div className="row m-0 ">
        <div className="col-12 text-center">
          {!(testimonials && testimonials.find((item) => item.email === currentUser.email)) &&
            <div onClick={() => showAddTestimonial()} className="btn add-testimomnial-btn">What do you say for us?</div>
          }
        </div>
      </div>
      <AddTestimonial />
    </>
  )
}

export default OurStory