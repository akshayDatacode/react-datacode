import React, { Component } from "react";
import CarouselComponent from "../CarouselComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ReactComponent as Question } from '../../../assets/images/svg/question.svg'
import { ReactComponent as Aboutus } from '../../../assets/images/svg/aboutus.svg'
import CategoryCard from './CategoryCard'
import { data, techData } from './helper'
import {
  faFileCode,
  faTools,
  faNewspaper,
  faUserClock,
  faLaptopCode,
  faBookDead,
  faAddressBook,
  faSwatchbook,
  faBook,
  faPuzzlePiece,
  faChalkboardTeacher,
  faTerminal,
  faSearchMinus,
  faPlus,
  faCartPlus,
  faSlash,
  faArrowRight,
  faUserTie,
  faTasks,
  faCodeBranch,
  faCode,
  faSearch,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import FooterComponentUpper from "../../footer_component/FooterComponentUpper";
import {
  faConnectdevelop,
  faSearchengin,
  faResearchgate,
  faCreativeCommonsSa,
  faDAndD,
  faDAndDBeyond,
} from "@fortawesome/free-brands-svg-icons";
import TechnologyCard from "./TechnologyCard";

class LandingPage extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Datacode | Computer Science Learning Community</title>
        </Helmet>
        <CarouselComponent />
        <div className="row m-0 community-section">
          <div className="col-12 col-md-6 text-center">
            <Question width="500px" height="500px" />
          </div>
          <div className="col-12 col-md-6 pt-5 pr-4">
            <h3>Are you a Computer Science Beginner?</h3>
            <h5 className="mt-1 text-left"><b>And not sure where to start from?</b></h5>
            <p className="mt-3 pr-4 text-left">
            We at Datacode.in aims in creating a platform for beginners' communities where they will get the best online technical content like the latest technical blogs, tutorials and courses, practice questions, quizzes, training and certification, and lot more on a single platform. 
Learning has never been this easy, then what are you waiting for? Join Datacode.in and Learn with Community
            </p>
            <button className="btn join-us-button shadow-lg text-center">
              Join Us
            </button>
          </div>
        </div>
        <div className="row m-0 aboutus-section">
          <div className="col-12 col-md-6 pt-5 pl-5">
            <h3>What we do!</h3>
            <div className="tag-lines">
              <span>Find</span><span>Learn</span><span>Connect</span><span>Grow</span>
            </div>
            <p className="mt-3 pr-4 text-left">
            Datacode Provides you the Best free Learning Content from all over the world to Improve your Skills and Make your Learning Easy and Quick.
Either one is at Beginners or at the Advance level you find your track and learn from it.
            </p>
            <div className="find-out-more shadow-lg p-3">
              <p>We aim at creating a better learning experience by dividing Datacode.in in  the various categories to make it easier for you</p>
              <span className="find-out-more">Find out more <i className="fal fa-long-arrow-right" /></span>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            <Aboutus width="500px" height="500px" />
          </div>
        </div>
        <div className="row m-0 category-section text-center px-5">
          <div className="col-12 text-center">
            <h2 className="text-center">What you will find here?</h2>
          </div>
          <div className="row mt-3 text-center d-flex justify-content-center">
            {data.map((item) => (
              <CategoryCard 
                categoryName={item.categoryName} 
                svgSource={item.svgSource}
                categoryDiscription={item.categoryDiscription}
                link={item.link}
              />  
            ))}
          </div>
        </div>

        <div className="row m-0 category-section text-center px-5">
          <div className="col-12 text-center">
            <h2 className="text-center">What technology do you want to learn today?</h2>
          </div>
          <div className="row mt-5 text-left d-flex justify-content-center">
            {techData.map((item) => (
              <TechnologyCard 
                technologyName={item.technologyName} 
                svgSource={item.svgSource}
                technologyDiscription={item.technologyDiscription}
                link={item.link}
              />  
            ))}
          </div>
        </div>
        
        <div className="p-0">
          <div className="row m-0">
            <div className="col-12 p-0">
              <h2 className="text-center mt-5" style={{ color: "#072C71" }}>
                What you will Find on Learning Community
        
              </h2>
              <div class="card-deck mt-5 ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                <div class="card border border-white ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                  <Link to="/home">
                    <center>
                      <FontAwesomeIcon
                        icon={faSearch}
                        color="#072C71"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title ">Find Tutorials</h5>
                    <p class="card-text text-secondary">
                      From building websites to analyzing data, the choice is
                      yours. Find the best of the best courses to learn.
                    </p>
                  </div>
                  {/* <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_quize_tests">
                      <h6 className="btn border border-secondary ">
                        Read More
                      </h6>
                    </Link>
                  </div> */}
                </div>
                <div class="card border border-white ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                  <Link to="/home" activeClass="active">
                    <center>
                      <FontAwesomeIcon
                        icon={faBook}
                        color="#072C71"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title">Learn from Courses</h5>
                    <p class="card-text text-secondary">
                      Learn How to Code; Coding skills have never been more
                      in-demand. Learn everything you need to take your career
                      to the next level.
                    </p>
                  </div>
                  {/* <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_interview_questioins">
                      <h6 className="btn border border-secondary">Read More</h6>
                    </Link>
                  </div> */}
                </div>
              </div>

              {/* Second Row of intro */}

              <div class="card-deck mt-5 ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                <div class="card border border-white ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                  <Link to="/home">
                    <center>
                      <FontAwesomeIcon
                        icon={faPuzzlePiece}
                        color="#072C71"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title">Practice</h5>
                    <p class="card-text text-secondary">
                      Apply your learning with real-world projects and test your
                      knowledge with tailor-made quizzes & MCQ's.{" "}
                    </p>
                  </div>
                  {/* <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_mcqs">
                      <h6 className="btn border border-secondary text-weight-bold">
                        Read More
                      </h6>
                    </Link>
                  </div> */}
                </div>
                <div class="card border border-white ml-md-5 mr-md-5 pr-md-5 pl-md-5">
                  <Link to="/home">
                    <center>
                      <FontAwesomeIcon
                        icon={faTerminal}
                        color="#072C71"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title">Code</h5>
                    <p class="card-text text-secondary">
                      Show your Practice with Code and Join the Contests and
                      Hackathons to Sharpen your Skills
                    </p>
                  </div>
                  {/* <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_mcqs">
                      <h6 className="btn border border-secondary text-weight-bold">
                        Read More
                      </h6>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {/* First Row of Find and Learn */}

        <div className="p-0 mt-5">
          <div className="row m-0">
            <div className="col">
              <h4 className="text-center text-dark">
                {" "}
                <FontAwesomeIcon
                  icon={faSearchengin}
                  color="#072C71"
                /> Find{" "}
                <FontAwesomeIcon
                  icon={faDAndD}
                  color="#072C71"
                  className="mr-4 ml-3"
                />
                <FontAwesomeIcon icon={faBook} color="#072C71" /> Learn
              </h4>
              <div class="card-deck mt-5">
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      size="3x"
                      color="#072C71"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title"> Tutorials & Courses </h5>
                    <p class="card-text text-secondary">
                      Learn your favorite technology from various articles,
                      programming questions and more Collected for you
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_technologies">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      size="3x"
                      color="#072C71"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Communnity Blogs</h5>
                    <p class="card-text text-secondary">
                      Various Blogs on various Technologies
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_articles">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white">
                  <Link to="/index_interview_questioins" activeClass="active">
                    <center>
                      <FontAwesomeIcon
                        icon={faUserTie}
                        color="#072C71"
                        size="3x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title">Interview Preparation</h5>
                    <p class="card-text text-secondary">
                      {" "}
                      Read example questions you'll be asked in a technical
                      interview, and read tips on the best ways to answer.
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_interview_questioins">
                      <h6 className="btn border border-dark">Read More</h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white">
                  <center>
                    <FontAwesomeIcon
                      icon={faFileCode}
                      size="3x"
                      color="#072C71"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title"> Programming Example Questions</h5>
                    <p class="card-text text-secondary">
                      Sharpen your coding skills by finding the best programming
                      questions meant only for you.
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_programming_questions">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>First -3  Cards Ending  ...............*/}
        {/* ... starting Lower Cards -5  .........................................*/}
        <div
          className="mt-5 rounded pt-4 ml-0 mr-0"
          style={{ backgroundColor: "#072C71" }}
        >
          <div className="row m-0">
            <div className="col p-0">
              <h4 className="text-center text-light">
                {" "}
                <FontAwesomeIcon icon={faPuzzlePiece} color="#06CB6C" />{" "}
                Practice{" "}
                <FontAwesomeIcon
                  icon={faPlus}
                  color="#06CB6C"
                  className="mr-4 ml-3"
                />
                Code
                <FontAwesomeIcon
                  icon={faCode}
                  color="#06CB6C"
                  className="ml-2"
                />
              </h4>
              <div class="card-deck mt-3 p-4 ml-0 mr-0">
                <div class="card border border-white pt-3">
                  <Link to="/index_mcqs">
                    <center>
                      <FontAwesomeIcon
                        icon={faTasks}
                        color="#072C71"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title"> Programming MCQs Practice</h5>
                    <p class="card-text text-secondary">
                      Multiple choice questions of Multiple Technologies are
                      useful for the campus placement & tests
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_mcqs">
                      <h6 className="btn border border-secondary text-weight-bold">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
                <div class="card border border-white pt-3">
                  <Link to="/index_quize_tests">
                    <center>
                      <FontAwesomeIcon
                        icon={faFlask}
                        color="#072C71"
                        size="4x"
                      />
                    </center>
                  </Link>
                  <div class="card-body text-left">
                    <h5 class="card-title ">Technical Quizz Tests</h5>
                    <p class="card-text text-secondary">
                      Find the best Technical quizzes to test your Technical
                      knowledge
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_quize_tests">
                      <h6 className="btn border border-secondary ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>

                <div class="card border border-white pt-3">
                  <center>
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      size="4x"
                      color="#072C71"
                    />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Weekly Code Challange</h5>
                    <p class="card-text text-secondary">
                      Challange your coding skills with Weekly Code Challanges
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_code_challange">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>

                <div class="card border border-white pt-3">
                  <center>
                    <FontAwesomeIcon icon={faCode} size="4x" color="#072C71" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Programming Practice Problems</h5>
                    <p class="card-text text-secondary">
                      find the events and Contests hosted by us and be a part of
                      it.
                    </p>
                  </div>
                  <div class="card-footer border border-white bg-white text-center">
                    <Link to="/index_practice_questions">
                      <h6 className="btn btn-default border border-dark ">
                        Read More
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
