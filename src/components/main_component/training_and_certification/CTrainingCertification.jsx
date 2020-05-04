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

class C extends Component {
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
              Find the Best C Programming Training & Certification
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
              imgsource="youtube.jpeg"
              title="Introduction to pointers in C/C++"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.youtube.com/playlist?list=PL2_aWCzGMAwLZp6LMUKI3cc7pgGsasm2_"
            />
            <RoadMapCard
              imgsource="youtube.jpeg"
              title="C Programming Tutorial | Programming Knowledge"
              source="(youtube.com)"
              tag1="Free"
              tag2="Beginner"
              tag3="Video"
              link="https://www.youtube.com/watch?v=-CpG3oATGIs"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="A to Z of C "
              source="(guideme.itgo.com)"
              tag1="Free"
              tag2="Book"
              tag3="Advanced"
              link="http://guideme.itgo.com/atozofc/"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="C - Geeks for Geeks "
              source="(geeksforgeeks.org)"
              tag1="Free"
              link="http://www.geeksforgeeks.org/c/"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="Essential C "
              source="(cslibrary.stanford.edu)"
              tag1="Free"
              tag2="Beginner
              "
              tag3="Book"
              link="http://cslibrary.stanford.edu/101/"
            />
            <RoadMapCard
              imgsource="youtube.jpeg"
              title="Learning to Program in C by Jonathan Engelsma "
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/playlist?list=PLkB3phqR3X40reMCBYSoNUPbDvM4kybMs"
            />
            <RoadMapCard
              imgsource="youtube.jpeg"
              title="Programming in C "
              source="(youtube.com)"
              tag1="Free"
              tag2="Video
              "
              tag3="Beginner"
              link="https://www.youtube.com/playlist?list=PLttVir45Xxf6hncJ-wFvZuDzkTAj6k6vZ"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="Learn C & Build Your Own Lisp 
              "
              source="(buildyourownlisp.com)"
              tag1="Free"
              tag2="Book"
              link="http://www.buildyourownlisp.com/contents"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="Pointers and Memory "
              source="(cslibrary.stanford.edu)"
              tag1="Free"
              tag2="Beginner"
              link="http://cslibrary.stanford.edu/102/"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="Learn the Basics of C Programming Language"
              source="(eduonix.com)"
              tag1="Free"
              tag2="Beginner
              "
              tag3="Video"
              link="https://www.eduonix.com/courses/Software-Development/Learn-the-Basics-of-C-Programming-Language"
            />
            <RoadMapCard
              imgsource="udemy.jpeg"
              title="Advanced C Programming: Pointers "
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video
              "
              tag3="Advanced"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/advanced-c-programming-pointers/"
            />
            <RoadMapCard
              imgsource="udemy.jpeg"
              title="C Programming For Beginners "
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video
              "
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/c-programming-for-beginners/"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="Learn C The Hard Way "
              source="(learncodethehardway.org)"
              tag1="Paid"
              tag2="Book"
              link="https://learncodethehardway.org/c/"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="C Programming with Linux "
              source="(edx.org)"
              tag1="Paid"
              tag2="Beginner"
              link="http://www.awin1.com/cread.php?awinmid=6798&awinaffid=428263&p=https://www.edx.org/professional-certificate/dartmouth-imtx-c-programming-with-linux"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="C Primer Plus "
              source="(amazon)"
              tag1="Paid"
              tag2="Book
              "
              tag3="Beginner"
              link="https://geni.us/WGP6h"
            />
            <RoadMapCard
              imgsource="coursera.jpeg"
              title="Introduction to Programming in C "
              source="(coursera.org)"
              tag1="Paid"
              tag2="Video
              "
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=40328&murl=https://www.coursera.org/specializations/c-programming"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="C Programming 101 "
              source="(crashcourse.io)"
              tag1="Paid"
              tag2="Book
              "
              tag3="Beginner"
              link="https://crashcourse.io/courses/c-programming-101"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="C Tutorials "
              source="(software-skills-training.com)"
              tag1="Paid"
              tag2="Video
              "
              tag3="Beginner"
              link="http://www.software-skills-training.com/courses.htm"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="Let Us C "
              source="(amazon.in)"
              tag1="Paid"
              tag2="Book
              "
              tag3="Beginner"
              link="https://www.amazon.in/Let-Us-C-Yashavant-Kanetkar/dp/8183331637/"
            />
            <RoadMapCard
              imgsource="c_tutorial.jpeg"
              title="C Programming Language "
              source="(amazon.com)"
              tag1="Paid"
              tag2="Book
              "
              tag3="Beginner"
              link="https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628/"
            />
          </div>
          <div className="col-md-4 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>
            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faBook}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  C Programming Learning
                </h5>
              </div>
            </div>

            <RecommendPost
              imgsource="c_interview_questions.jpeg"
              RecPostHading="C Interview Questions"
              link="/c_interview_question"
            />
            <RecommendPost
              imgsource="c_programming_question.jpeg"
              RecPostHading="C Programming Questions"
              link="/c_programming_questions"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="C Programming Blogs"
              link="/prog_lan_blog"
            />

            <div className="row text-center mt-5">
              <div className="col">
                {" "}
                <FontAwesomeIcon
                  icon={faPuzzlePiece}
                  color="#133658"
                  size="4x"
                  className="text-center"
                />
                <h5
                  className="text-center mt-2 mb-md-4 mb-3"
                  style={{ color: "#133658" }}
                >
                  C Programming Practice
                </h5>
              </div>
            </div>
            <RecommendPost
              imgsource="c_practice_questions_beginner.jpeg"
              RecPostHading="C Programming Practice Problems"
              link="/index_practice_questions"
            />
            <RecommendPost
              imgsource="c_mcq.jpeg"
              RecPostHading="C MCQs"
              link="/index_c_mcqs"
            />
            <RecommendPost
              imgsource="c_quize_test.jpeg"
              RecPostHading="C Quize Test"
              link="/c_quizes_tests"
            />
            <RecommendPost
              imgsource="code_challange.jpeg"
              RecPostHading="Weekly Code Challanges"
              link="/index_code_challange"
            />

            <Technologies />
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default C;
