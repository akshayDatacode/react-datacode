import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressBook,
  faQuestion,
  faCheckSquare,
  faUsers,
  faMap,
  faComments,
  faAddressCard,
  faClipboardCheck,
  faDoorOpen,
  faInfoCircle,
  faSplotch,
  faBookOpen,
  faChalkboardTeacher,
  faTasks,
  faLaptopCode,
  faUserTie,
  faCode,
  faFlask,
  faFileCode,
  faNewspaper,
  faClipboardList,
  faSignInAlt,
  faCalendar,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SideDrawer = ({ backDropClickHandler, show }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "row m-0 side-drawer open";
  }

  return (
    <>
      <div className={drawerClasses}>
        <div className="col-12 p-0">
          <div className="row d-none d-sm-block">
            <div className="col-12 text-right">
              <i
                className="nav-cross fal fa-times mx-md-3"
                onClick={() => backDropClickHandler()}
              />
            </div>
          </div>
          <div className="row m-0 p-2 side-header">
            <h2 className="mt-2">Hello! Learner</h2>
            <p>Start your learning with Community</p>
            <Link to="/signup" onClick={() => backDropClickHandler()}>
              <div className="btn join-us mb-3">Join Us</div>
            </Link>
          </div>
          <div className="row m-0 ul-list">
            <ul className="m-0 p-0">
              <Link to="/home" onClick={() => backDropClickHandler()}>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                  </span>
                </li>
              </Link>

              <Link
                to="/index_technologies"
                onClick={() => backDropClickHandler()}
              >
                <li>
                  <span>
                    <FontAwesomeIcon
                      icon={faChalkboardTeacher}
                      className="mr-2"
                    />{" "}
                    Tutorials/Courses
                  </span>
                </li>
              </Link>

              <Link
                to="/index_training_certification"
                onClick={() => backDropClickHandler()}
              >
                <li>
                  <span>
                    <FontAwesomeIcon icon={faAward} className="mr-2" />{" "}
                    Training/Certification
                  </span>
                </li>
              </Link>
              <Link
                to="/index_interview_questioins"
                onClick={() => backDropClickHandler()}
              >
                <li>
                  <span>
                    <FontAwesomeIcon icon={faUserTie} className="mr-2" />{" "}
                    Interview Preparation
                  </span>
                </li>
              </Link>
              <Link
                to="/index_quize_tests"
                onClick={() => backDropClickHandler()}
              >
                <li>
                  <span>
                    <FontAwesomeIcon icon={faFlask} className="mr-2" /> Quiz
                    Tests
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* <ul>
          <li>
            <a
              href="/react-datacode/#/home"
              onClick={() => backDropClickHandler()}
            >
              {" "}
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </a>
            <hr id="dividerline" />
          </li>
          <li>
            <a href="/react-datacode/#/index_technologies">
              {" "}
              <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />
              Tutorials/Courses
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_training_certification">
              {" "}
              <FontAwesomeIcon icon={faAward} className="mr-2" />
              Training/Certification
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_code_challange">
              <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
              Code Challange
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_interview_questioins">
              <FontAwesomeIcon icon={faUserTie} className="mr-2" />
              Interview Preparation
            </a>
            <hr id="dividerline" />
          </li>
          <li>
            <a href="/react-datacode/#/index_mcqs">
              <FontAwesomeIcon icon={faTasks} className="mr-2" />
              Programming MCQs
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_practice_questions">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              Practice Questions
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_quize_tests">
              <FontAwesomeIcon icon={faFlask} className="mr-2" />
              Quiz Tests
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_programming_questions">
              <FontAwesomeIcon icon={faFileCode} className="mr-2" />
              Example Questions
            </a>
            <hr id="dividerline" />
          </li>
          <li>
            <a href="/react-datacode/#/index_articles">
              <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
              Blogs
            </a>
            <hr id="dividerline" />
          </li>
          <li>
            <a href="/react-datacode/#/index_events">
              <FontAwesomeIcon icon={faCalendar} className="mr-2" />
              Events
            </a>
            <hr id="dividerline" />
          </li>

          <li>
            <a href="/react-datacode/#/index_events">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Login/Signup
            </a>
          </li>
          <li>
            <a href="#footer">Log Out</a>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default SideDrawer;
