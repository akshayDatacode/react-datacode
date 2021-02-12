import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faChalkboardTeacher,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";
import FbShare from "../FbShare";
import FbLikeShare from "../../FbLikeShare";
import Technologies from "../../right_section/Technologies";
import LearningSideSection from "../../right_section/learning_sidesection/LearningSideSection";
import TechnologiesCardCarousel from "./TechnologiesCardCarousel";

class Python extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
          <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7 mt-4">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              Find the Best Python Programming Courses & Tutorials
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>
            <Link
              to="/index_technologies"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="2x"
                color="#06CB6C"
              />
            </Link>
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(google.com)"
              title="Google Python Class For Beginners"
              tag1="Free"
              link="https://developers.google.com/edu/python/"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(mva.microsoft.com)"
              title="Introduction to Programming with Python"
              tag1="Free"
              tag2="Video"
              link="https://docs.microsoft.com/en-in/learn/"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(pymbook.readthedocs.io)"
              title="Python for You and Me"
              tag1="Free"
              tag2="Beginner"
              tag3="Book"
              link="https://pymbook.readthedocs.io/en/latest/index.html"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(python.swroopch.com)"
              title="A Byte of Python"
              tag1="Free"
              link="https://python.swaroopch.com/"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(freecodecamp.org)"
              title="Learning Python: From Zero to Hero"
              tag1="Free"
              tag2="Python3"
              tag3="Beginner"
              link="https://www.freecodecamp.org/news/learning-python-from-zero-to-hero-120ea540b567/"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(automatetheboringstuff.com)"
              title="Automate the Boring Stuff with Python"
              tag1="Free"
              tag2="Book"
              link="http://automatetheboringstuff.com/"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(greenteapress.com)"
              title="Think Python"
              tag1="Free"
              tag2="Book"
              tag3="Beginners"
              link="https://greenteapress.com/wp/think-python-2e/?ref=hackr.io"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(simplilearn.com)"
              title="Python Programming | Python Programming For Beginners | Python Programming Tutorial | Simplilearn"
              tag1="video"
              tag2="Free"
              tag3="Beginners"
              link="https://www.youtube.com/watch?v=-mr-gtL1-n0&"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(practicepython.org)"
              title="Practice Python"
              tag1="Free"
              tag2="Beginner"
              tag3="Practice-Program"
              link="http://www.practicepython.org/"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(labex.io)"
              title="Intro to Python"
              tag1="Free"
              tag2="Beginner"
              tag3="Python3"
              link="https://labex.io/courses/10"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(eduonix.com)"
              title="Learn Python Programming From Scratch"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.eduonix.com/courses/Software-Development/Learn-Python-programming-From-Scratch"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(diveintopython3.net)"
              title="Dive Into Python 3"
              tag1="Free"
              tag2="Book"
              link="https://diveintopython3.net/"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(udemy.com)"
              title="Introduction To Python Programming"
              tag1="Free"
              tag2="Beginner"
              tag3="Vedio"
              link="https://www.udemy.com/course/pythonforbeginnersintro/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-W1g_hz76sE9f0HFReMbHJg0"
            />
            <RoadMapCard
              imgsource="python_tutorial.jpeg"
              source="(thepythonguru.com)"
              title="Python tutorials for beginners"
              tag1="Free"
              tag2="Read"
              tag3="Beginner"
              link="https://thepythonguru.com/"
            />
              <h4 className="text-secondary mt-5">For More Technologies</h4>
            <TechnologiesCardCarousel />
          </div>

          <div className="col-md-4 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>
            <LearningSideSection language="python" />
            <Technologies />
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default Python;
