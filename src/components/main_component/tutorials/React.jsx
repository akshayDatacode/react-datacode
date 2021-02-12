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

class ReactJS extends Component {
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
              Find the Best React Programming Courses & Tutorials
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
              imgsource="react_tutorial.jpeg"
              title="React Crash Course 2018 - React Tutorial with Examples"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.youtube.com/watch?v=Ke90Tje7VS0"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="Awesome React"
              source="(github.com)"
              tag1="Free"
              tag2="Resources"
              link="https://github.com/enaqx/awesome-react"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="Survive JavaScript - Webpack and React"
              source="(survivejs.com)"
              tag1="Free"
              tag2="Advanced"
              link="https://survivejs.com/react/introduction/"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="The Beginner's Guide to ReactJS"
              source="(egghead.io)"
              tag1="Free"
              tag2="Beginner"
              tag3="Video"
              link="https://egghead.io/courses/the-beginner-s-guide-to-reactjs"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="React.Js Projects for Beginners"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Exercises/Practice-programs"
              link="https://www.youtube.com/playlist?list=PLD9SRxG6ST3HoJhkYdj0w4WEzUM_RBTKt"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="Building a Chat App with React.js and Chatkit"
              source="(scrimba.com)"
              tag1="Free"
              tag2="xVideo"
              tag3="Exercises/Practice-programs"
              link="https://scrimba.com/g/greactchatkit"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="Learn React for Free"
              source="(scrimba.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://scrimba.com/g/glearnreact"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="Getting Started with React – An Overview and Walkthrough"
              source="(taniarascia.com)"
              tag1="Free"
              tag2="Beginner"
              link="https://www.taniarascia.com/getting-started-with-react"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="Learn React by Building a WebApp"
              source="(udilia.com)"
              tag1="Free"
              tag2="Beginner"
              link="https://www.udemy.com/course/learn-react-by-building-and-deploying-production-ready-app/"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="The React Handbook"
              source="(medium.freecodecamp.org)"
              tag1="Free"
              link="https://medium.freecodecamp.org/the-react-handbook-b71c27b0a795"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="React - The Complete Guide (incl Hooks, React Router, Redux)"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-_9tTsVxjY6_ok7utAvqWzw"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="Complete Next.js with React & Node"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/awesome-nextjs-with-react-and-node-amazing-portfolio-app/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-sbYhN0xyrHVvHUagchhWVw"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="React for Beginners"
              source="(reactforbeginners.com)"
              tag1="Paid"
              tag2="Video"
              link="https://reactforbeginners.com/"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="Become a Professional React Developer"
              source="(udacity.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="http://udacity.com/course/react-nanodegree--nd019"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="Fullstack Advanced React and GraphQL"
              source="(advancedreact.com)"
              tag1="Paid"
              tag2="Advanced"
              tag3="GraphQL"
              link="https://advancedreact.com/"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="Learn ReactJS by Codecademy"
              source="(codecademy.com)"
              tag1="Paid"
              tag2="Exercises/Practice-programs"
              link="https://www.codecademy.com/learn/react-101?utm_source=rakuten&utm_medium=affiliate&utm_campaign=Hackr.io&utm_content=10-1&ranMID=44188&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-c_iQju1gNQM_vfroIe4dJA"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="React in Action"
              source="(manning.com)"
              tag1="Paid"
              tag2="Book"
              link="https://www.manning.com/books/react-in-action"
            />{" "}
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="React in Motion"
              source="(manning.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.manning.com/livevideo/react-in-motion"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="Advanced React and Redux"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Advanced"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/react-redux-tutorial/"
            />
            <RoadMapCard
              imgsource="react_tutorial.jpeg"
              title="React Fundamentals"
              source="(tylermcginnis.com)"
              tag1="Paid"
              link="https://tylermcginnis.com/courses/react/"
            />
             <h4 className="text-secondary mt-5">For More Technologies</h4>
            <TechnologiesCardCarousel />
          </div>
          <div className="col-md-4 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>
            <LearningSideSection language="react" />
            <Technologies />
            <RightSideSection />
            
          </div>
        </div>
      </>
    );
  }
}

export default ReactJS;
