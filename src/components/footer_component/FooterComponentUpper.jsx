import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJava,
  faPhp,
  faJsSquare,
  faHtml5,
  faCss3,
  faReact,
  faAngular,
  faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
class FooterComponentUpper extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row border border-primary">
          <div className=" border border-primary col-sm col-md-8 ">
            <div className="card mt-2 p-2 text-left bg-warning">
              <h4>Trending Technology</h4>
            </div>
            <div className="card-deck mt-2">
              <div className="card">
                <div className="row">
                  <div className="col-4 ml-4 p-1">
                    <FontAwesomeIcon icon={faPython} size="2x" />
                  </div>
                  <div className="col mt-1 pt-1">
                    <span className="">Python</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-4 ml-4 p-1">
                    <FontAwesomeIcon icon={faReact} size="2x" />
                  </div>
                  <div className="col mt-1 pt-1">
                    <span className="">React</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-4 ml-4 p-1">
                    <FontAwesomeIcon icon={faAngular} size="2x" />
                  </div>
                  <div className="col mt-1 pt-1">
                    <span className="">Angular</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-4 ml-4 p-1">
                    <FontAwesomeIcon icon={faNodeJs} size="2x" />
                  </div>
                  <div className="col mt-1 pt-1">
                    <span className="">NodeJS</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-4 ml-4 p-1">
                    <FontAwesomeIcon icon={faDatabase} size="2x" />
                  </div>
                  <div className="col mt-1 pt-1">
                    <span className="">SQL</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card Deck Row 2  */}
            <div className="card-deck mt-2 mb-2">
              <div className="card">
                <div className="row">
                  <div className="col-4 ml-4 p-1">
                    <FontAwesomeIcon icon={faJava} size="2x" />
                  </div>
                  <div className="col mt-1 pt-1">
                    <span className="">Java</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-4 ml-4 p-1">
                    <FontAwesomeIcon icon={faPhp} size="2x" />
                  </div>
                  <div className="col mt-1 pt-1">
                    <span className="">PHP</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-4 ml-4 p-1">
                    <FontAwesomeIcon icon={faJsSquare} size="2x" />
                  </div>
                  <div className="col mt-1 pt-1">
                    <span className="">JS</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-4 ml-4 p-1">
                    <FontAwesomeIcon icon={faHtml5} size="2x" />
                  </div>
                  <div className="col mt-1 pt-1">
                    <span className="">HTML</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="row">
                  <div className="col-2 ml-4 p-1">
                    <FontAwesomeIcon icon={faCss3} size="2x" />
                  </div>
                  <div className="col mt-1 pt-1">
                    <span className="">CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" border border-danger col-sm col-md-4 ">
            <h6> Daily posts</h6>
          </div>
        </div>
      </>
    );
  }
}

export default FooterComponentUpper;
