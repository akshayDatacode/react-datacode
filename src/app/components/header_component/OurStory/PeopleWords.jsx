import React from 'react'
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
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const PeopleWords = ({
  item,
}) => {
  return (
    <>
      <div className="people-card">
        <div className="quote">
          <i className="fas fa-quote-left text-left" />
        </div>
        <div className="row m-0">
          <div className="col-12 text-center people-card-body">
            <img
              className="rounded-circle"
              height="140"
              width="140"
              src={item.imgUrl}
              alt="avatar"
            />
            <h2>{item.name}</h2>
            <span>
              <a href={item.linkedin} target="_blank"><FontAwesomeIcon color="#30006d" icon={faLinkedinIn} size="1x" /></a>
              <a href={item.github} target="_blank"><FontAwesomeIcon color="#30006d" className="ml-2" icon={faGithub} size="1x" /></a>
            </span>
            <p>{item.testimonial}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default PeopleWords