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

class Angular extends Component {
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
              Find the Best Angular Courses & Tutorials
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
              imgsource="angular_tutorial.jpeg"
              title="AngularJS Fundamentals In 60-ish Minutes"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="AngularJS"
              link="https://www.youtube.com/watch?v=i9MHigUZKEM"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Learn AngularJS"
              source="(egghead.io)"
              tag1="Free"
              tag2="AngularJS"
              link="https://egghead.io/articles/new-to-angularjs-start-learning-here"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Introduction to Angular.js in 50 Examples"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/watch?v=TRrL5j3MIvo"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="AngularJS Tutorial by W3Schools"
              source="(w3schools.com)"
              tag1="Free"
              link="https://www.w3schools.com/angular/"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Learn Angular Step-by-step"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.youtube.com/playlist?list=PLq5m66kIJ5Z-KNR-xdK2GMiDlLLcpXLLB"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="A Better Way to Learn AngularJS"
              source="(thinkster.io)"
              tag1="Free"
              link="https://thinkster.io/a-better-way-to-learn-angularjs/"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Learn AngularJS"
              source="(learn-angular.org)"
              tag1="Free"
              tag2="AngularJS"
              link="http://www.learn-angular.org/"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="PhoneCat Tutorial App"
              source="(docs.angularjs.org)"
              tag1="Free"
              link="https://docs.angularjs.org/tutorial"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Learn Angular7 Tutorial"
              source="(javatpoint.com)"
              tag1="Free"
              tag2="Advanced"
              tag3="Angular7"
              link="https://www.javatpoint.com/angular-7-tutorial"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Step by Step Guide to Your First Angular 5 App"
              source="(toptal.com)"
              tag1="Free"
              tag2="Beginner"
              tag3="Angular 5"
              link="https://www.toptal.com/angular/angular-5-tutorial"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Angular & NodeJS - The MEAN Stack Guide"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-EvZD9vG2X4Ex8rnFOxR2hg"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Angular 8 - The Complete Guide"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/the-complete-guide-to-angular-2/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-kaioRsmwniIXQ1muiCviLw"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Shaping up with AngularJS"
              source="(pluralsight.com)"
              tag1="Paid"
              tag2="Video"
              tag3="AngularJS"
              link="https://www.pluralsight.com/courses/angularjs-get-started?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixorWUKSAxyQ0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="The Complete Angular Course: Beginner to Advanced"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/the-complete-angular-master-class/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-x85LOnlwJ7eQ1zWwZx7MdA"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Angular Fundamentals"
              source="(ultimatecourses.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://ultimatecourses.com/learn/angular-fundamentals"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Angular Crash Course"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/angular-crash-course/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-Ub8MANA6N5lkpI08BpG1YQ"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Learn and Understand AngularJS"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/learn-angularjs/"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Angular Fundamentals"
              source="(pluralsight.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.pluralsight.com/courses/angular-fundamentals?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixotwUKSFq1Y0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="ng-book 2"
              source="(ng-book.com)"
              tag1="Paid"
              tag2="Book"
              link="https://www.newline.co/ng-book/2/"
            />
            <RoadMapCard
              imgsource="angular_tutorial.jpeg"
              title="Developing Web Applications Using Angular"
              source="(software-skills-training.com)"
              tag1="Paid"
              tag2="Advanced"
              tag3="Angular 5"
              link="http://software-skills-training.com/Courses/angular-training-course.htm"
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
              imgsource="angular_interview_questions.jpeg"
              RecPostHading="Angular Interview Questions"
              link="/angular_interview_question"
            />
  
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="Angular Programming Blogs"
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
                  Angular Programming Practice
                </h5>
              </div>
            </div>
            
            <RecommendPost
              imgsource="angular_mcq.jpeg"
              RecPostHading="Angular MCQs"
              link="/index_angular_mcqs"
            />
            <RecommendPost
              imgsource="angular_quize.jpeg"
              RecPostHading="Angular Quize Test"
              link="/angular_quize_tests"
            />
           

            <Technologies />
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default Angular;
