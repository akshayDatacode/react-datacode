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
      <h1>Community Partners</h1>
      <h6>DevCIndore</h6>
      <h6>DevCPune</h6>
      <h1>Education Partners</h1>
      <h6>TYP</h6>
      <h6>Frontiaz</h6>
      <h1>IT Partner</h1>
      <h1>Blog Partner</h1>
    </>
  )
}

export default OurPartners