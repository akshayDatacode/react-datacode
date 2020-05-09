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

class Cpp extends Component {
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
              Find the Best C++ Programming Courses & Tutorials
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
                imgsource="c_tutorial.jpeg"
                title="LearnCpp"
                source="(learncpp.com)"
                tag1="Free"
                link="https://www.learncpp.com/"
              />
              <RoadMapCard
                imgsource="youtube.jpeg"
                title="Buckys C++ Programming Tutorials"
                source="(youtube.com)"
                tag1="Free"
                tag2="Video"
                link="https://www.youtube.com/playlist?list=PLAE85DE8440AA6B83"
              />
              <RoadMapCard
                imgsource="c_tutorial.jpeg"
                title="C++ Tutorial"
                source="(sololearn.com)"
                tag1="Free"
                tag2="Beginner"
                link="https://www.sololearn.com/Course/CPlusPlus/"
              />
              <RoadMapCard
                imgsource="youtube.jpeg"
                title="C++ Tutorial"
                source="(youtube.com)"
                tag1="Free"
                tag2="Video"
                tag3="Beginner"
                link="https://www.youtube.com/playlist?list=PLGLfVvz_LVvQ9S8YSV0iDsuEU8v11yP9M"
              />
              <RoadMapCard
                imgsource="youtube.jpeg"
                title="C++/Game Tutorials"
                source="(youtube.com)"
                tag1="Free"
                tag2="Video"
                tag3="Beginner"
                link="https://www.youtube.com/playlist?list=PLSPw4ASQYyynKPY0I-QFHK0iJTjnvNUys"
              />
              <RoadMapCard
                imgsource="coursera.jpeg"
                title="C++ For C Programmers"
                source="(coursera.org)"
                tag1="Free"
                tag2="Video"
                link="https://www.coursera.org/learn/c-plus-plus-a?ranMID=40328&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-mOZIN.E.Fr4mLyGypMbyAg&siteID=jU79Zysihs4-mOZIN.E.Fr4mLyGypMbyAg&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=jU79Zysihs4"
              />
              <RoadMapCard
                imgsource="udacity.jpeg"
                title="C++ For Programmers"
                source="(udacity.com)"
                tag1="Free"
                tag2="Video"
                tag3="Beginner"
                link="https://www.udacity.com/course/c-for-programmers--ud210"
              />
              <RoadMapCard
                imgsource="youtube.jpeg"
                title="Entire C++ language in one video"
                source="(youtube.com)"
                tag1="Free"
                tag2="Video"
                link="https://www.youtube.com/watch?v=Rub-JsjMhWY&hd=1"
              />{" "}
              <RoadMapCard
                imgsource="c_tutorial.jpeg"
                title="C++ Annotations"
                source="(icce.rug.nl)"
                tag1="Free"
                link="http://www.icce.rug.nl/documents/cplusplus/"
              />
              <RoadMapCard
                imgsource="udemy.jpeg"
                title="Beginning C++ Programming - From Beginner to Beyond"
                source="(udemy.com)"
                tag1="Paid"
                tag2="Video"
                tag3="Beginner"
                link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/beginning-c-plus-plus-programming"
              />
              <RoadMapCard
                imgsource="udemy.jpeg"
                title="Learn Advanced C++ Programming"
                source="(udemy.com)"
                tag1="Paid"
                tag2="Video"
                tag3="Advanced"
                link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/learn-advanced-c-programming/"
              />
              <RoadMapCard
                imgsource="udemy.jpeg"
                title="C++: From Beginner to Expert"
                source="(udemy.com)"
                tag1="Paid"
                tag2="Video"
                tag3="Beginner"
                link="https://www.udemy.com/course/video-course-c-from-beginner-to-expert/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-ZA2i.SGJOZUGuX7WMxkVTg"
              />
              <RoadMapCard
                imgsource="pluralsight.jpeg"
                title="Learn C++"
                source="(pluralsight.com)"
                tag1="Paid"
                link="https://www.pluralsight.com/paths/c-plus-plus?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixoVSYKSCjWA0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
              />{" "}
              <RoadMapCard
                imgsource="pluralsight.jpeg"
                title="C++ Advanced Topics"
                source="(pluralsight.com)"
                tag1="Paid"
                tag2="Video"
                tag3="Advanced"
                link="https://www.pluralsight.com/courses/adv-cpp?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixoXzwKSCjWA0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
              />
              <RoadMapCard
                imgsource="udemy.jpeg"
                title="Learn C++ Programming -Beginner to Advance- Deep Dive in C++"
                source="(udemy.com)"
                tag1="Paid"
                tag2="Video"
                tag3="Beginner"
                link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/cpp-deep-dive"
              />
              <RoadMapCard
                imgsource="c_tutorial.jpeg"
                title="C++ Concurrency in Action, Second Edition"
                source="(manning.com)"
                tag1="Paid"
                tag2="Book"
                tag3="Advanced"
                link="https://www.manning.com/books/c-plus-plus-concurrency-in-action-second-edition"
              />
              <RoadMapCard
                imgsource="c_tutorial.jpeg"
                title="C++ Programming for Non-C Programmers"
                source="(software-skills-training.com)"
                tag1="Paid"
                tag2="Advanced"
                link="http://software-skills-training.com/Courses/c++-programming.htm"
              />
              <RoadMapCard
                imgsource="c_tutorial.jpeg"
                title="Nicolai M. Josuttis: The C++ Standard Library, 2nd edition"
                source="(cppstdlib.com)"
                tag1="Paid"
                tag2="Book"
                tag3="Advanced"
                link="http://www.cppstdlib.com/"
              />
              <RoadMapCard
                imgsource="c_tutorial.jpeg"
                title="C++ for Programmers"
                source="(educative.io)"
                tag1="Paid"
                tag2="Video"
                tag3="Beginner"
                link="https://www.educative.io/track/c-plus-plus-for-programmers"
              />
              <h4 className="text-secondary mt-5">For More Technologies</h4>
            <TechnologiesCardCarousel />
            </div>

            <div className="col-md-4 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>
            <LearningSideSection language="cpp" />
            <Technologies />
            <RightSideSection />
            </div>
          </div>
        </>
      );
    }
  }
  
  export default Cpp;