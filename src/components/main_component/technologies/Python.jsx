import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookDead, faBook } from "@fortawesome/free-solid-svg-icons";
import PostCard from "../PostCard";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";

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
            <h1 className="text-center mb-4 display-5">
              Find the Best Python Courses & Tutorials
            </h1>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_technologies" className="badge badge-warning mr-1">
              Technologies >
            </Link>
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(google.com)"
              title="Google Python Class For Beginners"
              tag1="Free"
              link="https://developers.google.com/edu/python/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(mva.microsoft.com)"
              title="Introduction to Programming with Python"
              tag1="Free"
              tag2="Video"
              link="https://docs.microsoft.com/en-in/learn/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(pymbook.readthedocs.io)"
              title="Python for You and Me"
              tag1="Free"
              tag2="Beginner"
              tag3="Book"
              link="https://pymbook.readthedocs.io/en/latest/index.html"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(python.swroopch.com)"
              title="A Byte of Python"
              tag1="Free"
              link="https://python.swaroopch.com/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(freecodecamp.org)"
              title="Learning Python: From Zero to Hero"
              tag1="Free"
              tag2="Python3"
              tag3="Beginner"
              link="https://www.freecodecamp.org/news/learning-python-from-zero-to-hero-120ea540b567/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(automatetheboringstuff.com)"
              title="Automate the Boring Stuff with Python"
              tag1="Free"
              tag2="Book"
              link="http://automatetheboringstuff.com/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(greenteapress.com)"
              title="Think Python"
              tag1="Free"
              tag2="Book"
              tag3="Beginners"
              link="https://greenteapress.com/wp/think-python-2e/?ref=hackr.io"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(simplilearn.com)"
              title="Python Programming | Python Programming For Beginners | Python Programming Tutorial | Simplilearn"
              tag1="video"
              tag2="Free"
              tag3="Beginners"
              link="https://www.youtube.com/watch?v=-mr-gtL1-n0&"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(practicepython.org)"
              title="Practice Python"
              tag1="Free"
              tag2="Beginner"
              tag3="Practice-Program"
              link="http://www.practicepython.org/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(labex.io)"
              title="Intro to Python"
              tag1="Free"
              tag2="Beginner"
              tag3="Python3"
              link="https://labex.io/courses/10"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(eduonix.com)"
              title="Learn Python Programming From Scratch"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.eduonix.com/courses/Software-Development/Learn-Python-programming-From-Scratch"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(diveintopython3.net)"
              title="Dive Into Python 3"
              tag1="Free"
              tag2="Book"
              link="https://diveintopython3.net/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(udemy.com)"
              title="Introduction To Python Programming"
              tag1="Free"
              tag2="Beginner"
              tag3="Vedio"
              link="https://www.udemy.com/course/pythonforbeginnersintro/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-W1g_hz76sE9f0HFReMbHJg0"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(thepythonguru.com)"
              title="Python tutorials for beginners"
              tag1="Free"
              tag2="Read"
              tag3="Beginner"
              link="https://thepythonguru.com/"
            />
          </div>
          <div className="col-md-4 mt-md-5 ">
            <h3 className="text-center text-secondary mt-2 mb-3">
              <FontAwesomeIcon icon={faBook} size="1x" className="mr-2" />
              Python Learning
            </h3>
            <RecommendPost
              imgsource="python_mcqs.jpeg"
              RecPostHading="Python MCQs Questions"
              link="/index_python_mcqs"
            />
            <RecommendPost
              imgsource="python_interview_question.jpeg"
              RecPostHading="Python Interview Questions"
              link="/python_interview_question"
            />
            <RecommendPost
              imgsource="python_programming_question.jpeg"
              RecPostHading="Python Programming Questions"
              link="/python_programming_questions"
            />
            <RecommendPost
              imgsource="python_programming_question.jpeg"
              RecPostHading="Python Quize Test"
              link="/python_quize_tests"
            />
            <RecommendPost
              imgsource="python_learning_blog.jpeg"
              RecPostHading="Python Programming Blogs"
              link="/prog_lan_blog"
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

export default Python;
