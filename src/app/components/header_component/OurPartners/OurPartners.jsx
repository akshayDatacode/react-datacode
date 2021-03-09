import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const OurPartners = () => {
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

  return (
    <>
      <div className="row m-0 our-partners-header align-items-center">
        <div className="col-12 text-center">
          <h1>Our Partners</h1>
        </div>
      </div>
      <h1 className="px-md-5 px-0 mt-5 mb-4 text-md-left text-center">Our community partners</h1>
      <div className="row m-0 px-md-5 px-2">
        <div className="col-md-1 col-12">
          <img
            height="70px"
            width="70px"
            src={require(`../../../../assets/images/svg/Tutorial.png`)}
            alt="avatar"
            className="my-3"
          />
        </div>
        <div className="col-md-11 col-12">
          <h6>Facebook Developer Circle, Indore</h6>
          <p>Local Indore Region chapter for students and developer</p>
        </div>
      </div>
      <div className="row m-0 px-md-5 px-2">
        <div className="col-md-1 col-12">
          <img
            height="70px"
            width="70px"
            src={require(`../../../../assets/images/svg/Tutorial.png`)}
            alt="avatar"
            className="my-3"
          />
        </div>
        <div className="col-md-11 col-12">
          <h6>Facebook Developer Circle, Indore</h6>
          <p>Local Indore Region chapter for students and developer</p>
        </div>
      </div>
      <div className="row m-0 px-md-5 px-2">
        <div className="col-md-1 col-12">
          <img
            height="70px"
            width="70px"
            src={require(`../../../../assets/images/svg/Tutorial.png`)}
            alt="avatar"
            className="my-3"
          />
        </div>
        <div className="col-md-11 col-12">
          <h6>Facebook Developer Circle, Indore</h6>
          <p>Local Indore Region chapter for students and developer</p>
        </div>
      </div>
    </>
  )
}

export default OurPartners