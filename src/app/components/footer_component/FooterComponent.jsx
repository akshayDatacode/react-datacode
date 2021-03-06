import React from "react";
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
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FooterComponent = ({
  hideTopFooter,
}) => {

  return (
    <>
      <div className="mt-2 mt-md-0 pt-3 pt-md-0 mb-0 footer-section">
        {/* //</div><div className="col-12 "> */}
        {!hideTopFooter &&
          <div className="row m-0 pt-5 px-md-5 px-3">
            <div className="col-12 col-md-3 mt-md-0 mt-3">
              <h6>Learning Resources</h6>
              <Link to="/index_technologies"><span>Tutorial & Courses</span></Link>
            </div>
            <div className="col-12 col-md-3 mt-md-0 mt-3">
              <h6>Useful Links</h6>
              <Link to="/index_events"><span>Event</span></Link>
            </div>
            <div className="col-12 col-md-3 mt-md-0 mt-3">
              <h6>Our Partners</h6>
              <p>Community Partner</p>
              <Link to="https://www.facebook.com/groups/DevCIndore">
                <span>Facebook Developer Circle, Indore</span>
              </Link>
            </div>
            <div className="col-12 col-md-3 logo-section mt-md-0 mt-3">
              <h6 className="text-uppercase font-weight-bold">Datacode.in</h6>
              <hr
                class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
              />
              <p style={{ color: "#7EC8F5" }}>
                We present to you an Online Learning Community. Where you can
                explore your learning path and also get the latest and Best
                online learning Content over the internet.
            </p>
            </div>
          </div>
        }
        <div className="row m-0 mt-3 px-md-5 px-3 d-flex align-items-center">
          <div className="col-md-8 col-12">
            <div className="row m-0 align-items-center">
              <div className="col-12 col-md-2 p-md-0 align-items-center text-md-right text-left">
                <h6><span>Follow us on <i className="fal fa-long-arrow-right" /></span></h6>
              </div>
              <div className="col-12 col-md-10 text-left">
                <a
                  href="https://www.facebook.com/Datacode.in/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    size="2x"
                    color="#b89ddb"
                    className="m-3"
                  />
                </a>
                <a
                  href="https://www.instagram.com/datacode.in/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    color="#b89ddb"
                    className="m-3"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/datacode_in/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="2x"
                    color="#b89ddb"
                    className="m-3"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCEnd8Limn06xmD6hLzaGxvA"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="2x"
                    color="#b89ddb"
                    className="m-3"
                  />
                </a>
                <a
                  href="https://twitter.com/Datacode_in"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    color="#b89ddb"
                    className="m-3"
                  />
                </a>
                <a
                  href="https://t.me/joinchat/Fc4UnJ4PxbUT-O5m"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faTelegramPlane}
                    size="2x"
                    color="#b89ddb"
                    className="m-3"
                  />
                </a>
                <a
                  href="https://chat.whatsapp.com/DrJNupSO3Go5kiNaO17sgq"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    size="2x"
                    color="#b89ddb"
                    className="m-3"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-3 pb-md-0 col-12 d-flex justify-content-between">
            <Link to="/our_story"><span>Our Story</span></Link>
            <Link to="/our_partners"><span>Our Partners</span></Link>
            <Link to="/contact_us"><span>Become a partner</span></Link>
          </div>
        </div>
        <div className="row m-0 text-center d-flex justify-content-center bg-dark py-2">
          <h6 className="text-center" href="https://datacode.in/">
            Made with <FontAwesomeIcon icon={faHeart} size="2x" color="red" />{" "}
              by Datacode Team
            </h6>
        </div>
      </div>
    </>
  );
}

export default FooterComponent;
