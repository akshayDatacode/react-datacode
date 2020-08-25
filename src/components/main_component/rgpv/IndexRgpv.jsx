import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import {
  faHome,
  faNetworkWired,
  faChalkboardTeacher,
  faLaptop,
  faUniversity,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../right_section/RightSideSection";
import TechnologiesCardCarousel from "./TechnologiesCardCarousel";
import Technologies from "../../right_section/Technologies";
class IndexTechnologies extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Datacode | RGPV Online Exam MCQs Resources</title>
          <meta property="og:title" content="RGPV Online Exam MCQs Resources" />
          <meta
            property="og:image"
            content="https://drive.google.com/file/d/1C11W0Go_LU2HGzEbxpwcSs-KO25Aa5jr/view?usp=sharing"
          />
        </Helmet>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <h1
              className="text-center mb-4 rounded p-2"
              style={{ backgroundColor: "#06CB6C", color: "#072C71" }}
            >
              <FontAwesomeIcon icon={faUniversity} /> RGPV Online Exam MCQs
              Resources
            </h1>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>
            <br />
            <div
              className="text-center badge  mt-4 mb-4 rounded p-2"
              style={{ backgroundColor: "#06CB6C", color: "#072C71" }}
            >
              Computer Science Engineering
            </div>
            <div className="card-deck mt-4">
              <div className="card text-center p-2">
                <Link to="/rgpv_cloud_computing">
                  <center>
                    <FontAwesomeIcon
                      icon={faLaptop}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  <h6 className="mt-3">Cloud Computing</h6>
                </Link>
              </div>
              <div className="card text-center p-2">
                <Link to="/rgpv_machine_learning">
                  <center>
                    <FontAwesomeIcon
                      icon={faLaptop}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  <h6 className="mt-3">Machine Learning</h6>
                </Link>
              </div>

              <div className="card text-center p-2">
                <Link to="/rgpv_ar_vr">
                  <center>
                    <FontAwesomeIcon
                      icon={faNetworkWired}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  <h6 className="mt-3">AR/VR</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexTechnologies;
