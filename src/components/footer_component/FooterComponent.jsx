import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faFacebookSquare,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <footer
          style={{ backgroundColor: "#264767" }}
          className="text-white page-footer font-small blue-grey lighten-5"
        >
          <div className="">
            <div className="container">
              <div
                className="row py-4 d-flex align-items-center"
                style={{ backgroundColor: "#264767" }}
              >
                <div className="col-md-6 col-lg-5 text-center text-md-left mb-2 mb-md-0">
                  <h6 className="mb-0" style={{ color: "#04FFD5" }}>
                    Get connected with us on social networks!
                  </h6>
                </div>

                <div className="col-md-6 col-lg-6 text-center text-md-right">
                  <a
                    href="https://www.facebook.com/Datacode.in/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faFacebookSquare}
                      size="3x"
                      color="white"
                      className="m-3"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/datacode.in/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="3x"
                      color="white"
                      className="m-3"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/datacode_in/"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      size="3x"
                      color="white"
                      className="m-3"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCEnd8Limn06xmD6hLzaGxvA"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      size="3x"
                      color="white"
                      className="m-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container text-center text-md-left ">
            <div className="row mt-3 dark-grey-text">
              <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                <h6 className="text-uppercase font-weight-bold">Datacode.in</h6>
                <hr
                  class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 100, backgroundColor: "yellow" }}
                />

                <p style={{ color: "#7EC8F5" }}>
                  We present to you an Online Learning Community. Where you can
                  explore your learning path and also get the latest and Best
                  online learning Content over the internet.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  Community Partners
                </h6>
                <hr
                  className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "yellow" }}
                />
                <p>
                  <a
                    class="dark-grey-text"
                    href="https://www.facebook.com/groups/DevCIndore"
                    target="_blank"
                  >
                    <img
                      className=" card-img-top mx-auto img-fluid img-circle d-block"
                      src={require("../../assets/images/devcindore.jpeg")}
                      alt="avatar"
                    />
                    Facebook Developer Circle, Indore
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                  Useful links
                </h6>
                <hr
                  class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 108, backgroundColor: "yellow" }}
                />
                <p>
                  <Link className="dark-grey-text" to="/index_events">
                    Events
                  </Link>
                </p>
                <p>
                  <Link className="dark-grey-text" to="/index_quize_tests">
                    Quizz Test
                  </Link>
                </p>
                <p>
                  <Link className="dark-grey-text" to="/index_code_challange">
                    Weekly Code Challange
                  </Link>
                </p>

              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                <hr
                  class="teal accent-3 mb-3 mt-0 d-inline-block mx-auto"
                  style={{ width: 70, backgroundColor: "yellow" }}
                />
                <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color="white"
                    className="mr-2"
                  />
                  admin@datacode.in
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center text-black-50 py-3 bg-dark">
            <a class="text-light" href="https://datacode.in/">
              Made with <FontAwesomeIcon icon={faHeart} size="2x" color="red" />{" "}
              by Datacode Team
            </a>
          </div>
          {/* <div className="footer-copyright text-center text-black-50 py-3 bg-dark">
            © 2020 Copyright:
            <a class="text-light" href="https://datacode.in/">
              Datacode.in
            </a>
          </div> */}
        </footer>
      </>
    );
  }
}

export default FooterComponent;
