import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook } from "@fortawesome/free-solid-svg-icons";
import PostCard from "../PostCard";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";

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
            <h1 className="text-center mb-4 display-5">
              Find the Best React Courses & Tutorials
            </h1>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_technologies" className="badge badge-warning mr-1">
              Technologies >
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
          </div>
          <div className="col-md-4 mt-md-5 ">
            <h2 className="text-center text-secondary mt-2 mb-3">
              <FontAwesomeIcon icon={faBook} size="1x" className="mr-2" />
              React Learning
            </h2>
            <RecommendPost
              imgsource="python_mcqs.jpeg"
              RecPostHading="React MCQs"
              link="/index_react_mcqs"
            />
            <RecommendPost
              imgsource="python_interview_question.jpeg"
              RecPostHading="React Interview Questions"
              link="/index_interview_questioins"
            />
            <RecommendPost
              imgsource="python_programming_question.jpeg"
              RecPostHading="React Programming Questions"
              link="/index_programming_questions"
            />
            <RecommendPost
              imgsource="python_programming_question.jpeg"
              RecPostHading="React Quize Test"
              link="/index_quize_tests"
            />
            <RecommendPost
              imgsource="python_learning_blog.jpeg"
              RecPostHading="React Programming Blogs"
              link="/webdesign_blog"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default ReactJS;
