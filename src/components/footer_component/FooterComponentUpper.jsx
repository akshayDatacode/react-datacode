import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll as scroll } from "react-scroll";
import {
  faPython,
  faJava,
  faPhp,
  faJsSquare,
  faHtml5,
  faCss3,
  faReact,
  faAngular,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class FooterComponentUpper extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluid p-0">
          <div className="row border border-primary">
            <div className=" border border-primary col-sm col-md-8 ">
              <div className="card mt-2 p-2 text-left bg-warning">
                <h4>Trending Technology</h4>
              </div>
              <div className="card-deck mt-2">
                <div className="card">
                  <Link to="python" activeClass="active" smooth={true}>
                    <div className="row">
                      <div className="col-4 ml-4 p-1">
                        <FontAwesomeIcon
                          icon={faPython}
                          color="blue"
                          size="2x"
                        />
                      </div>
                      <div className="col-6 mt-1 pt-1">
                        <span className="">Python</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-4 ml-4 p-1">
                      <FontAwesomeIcon icon={faReact} size="2x" />
                    </div>
                    <div className="col-6 mt-1 pt-1">
                      <span className="">React</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-4 ml-4 p-1">
                      <FontAwesomeIcon icon={faAngular} size="2x" />
                    </div>
                    <div className="col-6 mt-1 pt-1">
                      <span className="">Angular</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-4 ml-4 p-1">
                      <FontAwesomeIcon icon={faNodeJs} size="2x" />
                    </div>
                    <div className="col-6 mt-1 pt-1">
                      <span className="">NodeJS</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <Link to="sql">
                    <div className="row">
                      <div className="col-4 ml-4 p-1">
                        <FontAwesomeIcon
                          icon={faDatabase}
                          color="red"
                          size="2x"
                        />
                      </div>
                      <div className="col-6 mt-1 pt-1">
                        <span className="">SQL</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Card Deck Row 2  */}
              <div className="card-deck mt-2 mb-2">
                <div className="card">
                  <Link to="java">
                    <div className="row">
                      <div className="col-4 ml-4 p-1">
                        <FontAwesomeIcon icon={faJava} color="blue" size="2x" />
                      </div>
                      <div className="col-6 mt-1 pt-1">
                        <span className="">Java</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-4 ml-4 p-1">
                      <FontAwesomeIcon icon={faPhp} size="2x" />
                    </div>
                    <div className="col-6 mt-1 pt-1">
                      <span className="">PHP</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <Link to="js">
                    <div className="row">
                      <div className="col-4 ml-4 p-1">
                        <FontAwesomeIcon
                          icon={faJsSquare}
                          color="magenta"
                          size="2x"
                        />
                      </div>
                      <div className="col-6 mt-1 pt-1">
                        <span className="">JS</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card">
                  <Link to="html">
                    <div className="row">
                      <div className="col-4 ml-4 p-1">
                        <FontAwesomeIcon
                          icon={faHtml5}
                          color="orange"
                          size="2x"
                        />
                      </div>
                      <div className="col-6 mt-1 pt-1">
                        <span className="">HTML</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="card">
                  <div className="row">
                    <div className="col-4 ml-4 p-1">
                      <FontAwesomeIcon icon={faCss3} size="2x" />
                    </div>
                    <div className="col-6 mt-1 pt-1">
                      <span className="">CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" border border-danger col-sm col-md-4 p-0">
              <h6> Daily posts</h6>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FooterComponentUpper;
