import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCopyright,
  faDatabase,
  faDigitalTachograph,
  faObjectGroup,
  faNetworkWired,
  faAmericanSignLanguageInterpreting,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../right_section/RightSideSection";
import {
  faPython,
  faJava,
  faJs,
  faHtml5,
  faCss3,
  faNodeJs,
  faAngular,
  faReact,
  faGit,
  faGithub,
  faPhp,
  faAppStoreIos,
  faSwift,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import TechnologiesCardCarousel from "./TechnologiesCardCarousel";
import Technologies from "../../right_section/Technologies";
import { techIcon, techCategory } from './helpers'
import TutorialCard from "./TutorialCard";

const IndexTechnologies = () => {
  const [showTechIcon, setShowTechIcon] = useState('programming')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <div className="row m-0 category-page">
        <div className="col-12 p-md-5 p-2">
          <div className="row m-0 category-header ">
            <div className="col-12 col-md-6 pt-4 left-header-section px-md-5 px-2">
              <h1>Tutorials & Courses</h1>
              <p>From building websites to analyzing data, the choice is yours. Find the best of the best courses to learn from...</p>
            </div>
            <div className="col-12 col-md-6 text-center d-flex justify-content-right right-header-section">
              <img
                height="600px"
                width="600px"
                src={require(`../../../assets/images/svg/tutorial.png`)}
                alt="avatar"
                className="text-center img-fluid img-circle d-block"
              />
            </div>
          </div>
          <div className="row m-0 mt-5 p-0 tutorial-community-card">
            <div className="col-12 col-md-4 text-center">
              <h2 className="text-center ">Let's start, learning with community</h2>
              <p className="text-center">How it works?</p>
            </div>
            <div className="col-12 col-md-8 p-0 m-0 text-center ">
              <div className="row m-0 p-2 d-flex justify-content-center">
                <div className="col-12 m-2 p-3 text-center col-md-3 flow-card">
                  <i className="fad fa-file-search blue" />
                  <h5>Find your tutorial and lean</h5>
                </div>
                <div className="col-12 m-2 p-3 col-md-3 text-center flow-card">
                  <i className="fad fa-plus-circle green" />
                  <h5>Add your Tutorial and contribute in communtiy</h5>
                </div>
                <div className="col-12 m-2 p-3 col-md-3 text-center flow-card">
                  <i className="fad fa-users-medical" />
                  <h5>Join Community learning group and learn with your peers and get all best tutorials notifiction</h5>
                </div>
                <div className="col-12 m-2 p-3  col-md-3 text-center flow-card">
                  <i className="fad fa-heart-circle red" />
                  <h5>Love your faourave one! fromthe list of tutorials</h5>
                </div>
                <div className="col-12 m-2 p-3 col-md-3 text-center flow-card">
                  <i className="fad fa-bookmark orange" />
                  <h5>Create your library save your favoirate tutorial</h5>
                </div>
                <div className="col-12 m-2 p-3 col-md-3 text-center flow-card">
                  <i className="fad fa-comment-smile" />
                  <h5>Comment and review your best tutorial to help other community members</h5>
                </div>
                <div className="col-12 m-2 p-3 col-md-3 text-center flow-card">
                  <i className="fad fa-chart-line" />
                  <h5>Help to make Best Tutorial at top</h5>
                </div>
                <div className="col-12 m-2 p-3 col-md-3 text-center flow-card">
                  <i className="fad fa-trophy-alt yellow" />
                  <h5>Earn Community Rewards from your contribution</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-12 text-center">
              <h2 className="text-center my-5">Find the Best Programming Courses & Tutorials</h2>
              <div className="d-flex mx-md-5 mx-2">
                <i className="fad fa-search search-icon" />
                <input type="text" className="search" />
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-12 col-md-4 tech-tag-col">
              <ul className="mt-5">
                {techCategory.map((item) => (
                  <li className="tech-tag" onClick={() => setShowTechIcon(item.techCategory)}>
                    <img
                      height="30px"
                      width="30px"
                      src={require(`../../../assets/images/svg/${item.svgSource}`)}
                      alt="avatar"
                      className="mr-2"
                    />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-md-8">
              <div className="row m-0 mt-4 px-5 d-flex justify-content-center">
                {techIcon.map((item) => (
                  item.techCategory === showTechIcon &&
                  <Link to={`/tutorials/${item.technology}`}>
                    <div className="col-12 col-md-3 d-flex tech-card">
                      <img
                        height="50px"
                        width="50px"
                        src={require(`../../../assets/images/svg/${item.svgSource}`)}
                        alt="avatar"
                      // className="card-img-top mx-auto img-fluid img-circle d-block"
                      />
                      <h6 className="ml-3">{item.title}</h6>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <h2 className="text-center my-4">Recommended Tutorial from Community</h2>
          <div className="row m-0 recommend-section d-flex justify-content-center">
            <TutorialCard />
            <TutorialCard />
            <TutorialCard />
          </div>
        </div>
      </div>
      {/* <div className="row m-0">
                <div className="col-1"></div>
                <div className="col-md-8 mt-4">
                  <h1
                    className="text-center mb-4 rounded p-2"
                    style={{ backgroundColor: "#06CB6C", color: "#072C71" }}
                  >
                    <FontAwesomeIcon icon={faChalkboardTeacher} /> Tutorials & Courses
            </h1>
                  <Link
                    to="/home"
                    className="badge mr-1"
                    style={{ backgroundColor: "#06CB6C" }}
                  >
                    <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
                  </Link>

                  <div className="card-deck mt-4">
                    <div className="card text-center p-2">
                      <Link to="/c">
                        <center>
                          <FontAwesomeIcon
                            icon={faCopyright}
                            size="4x"
                            color="#072C71"
                          />
                        </center>
                  C Programming
                </Link>
                    </div>
                    <div className="card text-center p-2">
                      <Link to="/python">
                        <center>
                          <FontAwesomeIcon
                            icon={faPython}
                            size="4x"
                            color="#072C71"
                          />
                        </center>
                  Python
                </Link>
                    </div>
                    <div className="card text-center p-2">
                      <Link to="/java">
                        <center>
                          <FontAwesomeIcon icon={faJava} size="4x" color="#072C71" />
                        </center>
                  Java
                </Link>
                    </div>

                  </div>

                  <div className="card-deck mt-4">
                    <div className="card text-center p-2">
                      <Link to="/cpp">
                        <center>
                          <FontAwesomeIcon
                            icon={faCopyright}
                            size="4x"
                            color="#072C71"
                          />
                        </center>
                  C++
                </Link>
                    </div>
                    <div className="card text-center p-2">
                      <Link to="/js">
                        <center>
                          <FontAwesomeIcon icon={faJs} size="4x" color="#072C71" />
                        </center>
                  JavaScript
                </Link>
                    </div>

                    <div className="card text-center p-2">
                      <Link to="/sql">
                        <center>
                          <FontAwesomeIcon
                            icon={faDatabase}
                            size="4x"
                            color="#072C71"
                          />
                        </center>
                  SQL
                </Link>
                    </div>

                  </div>

                  <div className="card-deck mt-4">
                    <div className="card text-center p-2">
                      <Link to="/html">
                        <center>
                          <FontAwesomeIcon icon={faHtml5} size="4x" color="#072C71" />
                        </center>
                  HTML
                </Link>
                    </div>
                    <div className="card text-center p-2">
                      <Link to="/datastructure">
                        <center>
                          <FontAwesomeIcon
                            icon={faDigitalTachograph}
                            size="4x"
                            color="#072C71"
                          />
                        </center>
                  Data Structure
                </Link>
                    </div>
                    <div className="card text-center p-2">
                      <Link to="/angular">
                        <center>
                          <FontAwesomeIcon
                            icon={faAngular}
                            size="4x"
                            color="#072C71"
                          />
                        </center>
                  Angular
                </Link>
                    </div>
                  </div>

                  <div className="card-deck mt-4">


                    <div className="card text-center p-2">
                      <Link to="/react">
                        <center>
                          <FontAwesomeIcon icon={faReact} size="4x" color="#072C71" />
                        </center>
                  React
                </Link>
                    </div>
                    <div className="card text-center p-2">
                      <Link to="/android">
                        <center>
                          <FontAwesomeIcon
                            icon={faAndroid}
                            size="4x"
                            color="#072C71"
                          />
                        </center>
                  Android
                </Link>
                    </div>
                  </div>



                  <div className="card-deck mt-4">
                    <div className="card text-center p-2">
                      <Link to="/c">
                        <center>
                          <FontAwesomeIcon
                            icon={faCopyright}
                            size="4x"
                            color="#072C71"
                          />
                        </center>
                  C Programming
                </Link>
                    </div>
                    <div className="card text-center p-2">
                      <Link to="/python">
                        <center>
                          <FontAwesomeIcon
                            icon={faPython}
                            size="4x"
                            color="#072C71"
                          />
                        </center>
                  Python
                </Link>
                    </div>
                    <div className="card text-center p-2">
                      <Link to="java">
                        <center>
                          <FontAwesomeIcon icon={faJava} size="4x" color="#072C71" />
                        </center>
                  Java
                </Link>
                    </div>
                    <div className="card text-center p-2">
                      <Link to="/cpp">
                        <center>
                          <FontAwesomeIcon
                            icon={faCopyright}
                            size="4x"
                            color="#072C71"
                          />
                        </center>
                  C++
                </Link>
                    </div>
                  </div>
                  <div className="card-deck mt-4">



                    <div className="card text-center p-2">
                      <Link to="/cpp">
                        <center>
                          <FontAwesomeIcon
                            icon={faCopyright}
                            size="4x"
                            color="#072C71"
                          />
                        </center>
                  OS
                </Link>
                    </div>
                  </div>
                  <h4 className="text-secondary mt-5">For More Technologies</h4>
                  <TechnologiesCardCarousel />
                </div>
                <div className="col-md-3">
                  <RightSideSection />
                  <Technologies />
                </div>
              </div> */}
    </>
  );
}


export default IndexTechnologies;
