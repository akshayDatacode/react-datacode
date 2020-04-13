import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook } from "@fortawesome/free-solid-svg-icons";
import PostCard from "../PostCard";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";

class JS extends Component {
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
              Find the Best JavaScript Programming Courses & Tutorials
            </h1>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_technologies" className="badge badge-warning mr-1">
              Technologies >
            </Link>
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(eloquentjavascript.net)"
              title="Eloquent JavaScript "
              tag1="Free "
              tag2="book"
              link="https://eloquentjavascript.net/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="javascript.info"
              title="The JavaScript Tutorial "
              tag1="Free"
              link="https://javascript.info/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="developer.mozilla.org)"
              title="Mozilla Developer Network Javascript Guide"
              tag1="Free"
              link="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(learn.freecodecamp.org)"
              title="Introduction to JavaScript"
              tag1="Free"
              tag2=" Beginner"
              tag3="Exercises/Practice-programs"
              link="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(javascript30.com)"
              title="Build 30 things in 30 days with 30 tutorials "
              tag1="Free"
              link="https://javascript30.com/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(addyosmani.com)"
              title="Learning JavaScript Design Patterns"
              tag1="Free"
              tag2="Advanced"
              link="https://addyosmani.com/resources/essentialjsdesignpatterns/book/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(youtube.com)"
              title="JavaScript Tutorial for Beginners"
              tag1="FreeVideo"
              tag2="Beginner"
              tag3="JavaScript"
              link="https://www.youtube.com/watch?v=W6NZfCO5SIk"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(scrimba.com)"
              title="Introduction to JavaScript"
              tag1="Free"
              tag2="Beginner"
              tag3="Video"
              link="https://scrimba.com/g/gintrotojavascript"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(learnjavascript.online)"
              title="Learn JavaScript"
              tag1="Free"
              link="https://learnjavascript.online/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(read.humanjavascript.com)"
              title="Human JavaScript"
              tag1="Book"
              tag2="Free"
              link="http://read.humanjavascript.com/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(udemy.com)"
              title="The Complete JavaScript Course 2019: Build Real Projects!"
              tag1="PaidVideo"
              tag2="Beginner"
              tag3="Exercises/Practice-programs"
              link="https://www.udemy.com/course/the-complete-javascript-course/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-e16r9DevJZS86cGg056RoA"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(manning.com)"
              title="Secrets of the JavaScript Ninja, Second Edition"
              tag1="Paid"
              tag2="Book"
              tag3="Beginner"
              link="https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(udemy.com)"
              title="JavaScript: Understanding the Weird Parts"
              tag1="Paid"
              tag2="Advanced"
              link="https://www.udemy.com/course/understand-javascript/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-cF65CwTU716CMXej.R7U8w"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(codecademy.com)"
              title="Learn JavaScript with Codecademy"
              tag1="Paid"
              tag2="Beginner"
              tag3="Exercises/Practice-programs"
              link="https://www.codecademy.com/learn/paths/web-development"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(udemy.com)"
              title="Modern JavaScript From The Beginning"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/modern-javascript-from-the-beginning/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-GqMzJzSo9vyaZJIXjC4HrQ"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(udemy.com)"
              title="Advanced JavaScript Concepts"
              tag1="Paid"
              tag3="Advanced"
              link="https://www.udemy.com/course/advanced-javascript-concepts/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-qKLxLOz0qrWaA9IgzwJ5Gw"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(pluralsight.com)"
              title="Explore and Master Chrome DevTools"
              tag1="Paid"
              tag2="Video"
              link="https://www.pluralsight.com/browse/software-development?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixrPTkKSFQRA0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(manning.com)"
              title="The Joy of JavaScript"
              tag1="Paid"
              tag2="Book"
              tag3="Beginner"
              link="https://www.manning.com/books/the-joy-of-javascript"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(pluralsight.com)"
              title="JavaScript From Scratch"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.pluralsight.com/courses/javascript-from-scratch?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixrKSgKSAPwo0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              source="(lynda.com)"
              title="Learning Full-Stack JavaScript Development: MongoDB, Node, and React"
              tag1="Paid"
              tag2="Video"
              tag3="Advanced"
              link="https://www.lynda.com/Express-js-tutorials/Learning-Full-Stack-JavaScript-Development-MongoDB-Node-React/533304-2.html"
            />
          </div>
          <div className="col-md-4 mt-md-5 ">
            <h2 className="text-center text-secondary mt-2 mb-3">
              <FontAwesomeIcon icon={faBook} size="1x" className="mr-2" />
              Javascript Learning
            </h2>
            <RecommendPost
              imgsource="python_mcqs.jpeg"
              RecPostHading="Javascript MCQs Questions"
              link="/index_javascript_mcqs"
            />
            <RecommendPost
              imgsource="python_mcqs.jpeg"
              RecPostHading="Javascript MCQs Questions"
              link="/index_javascript_mcqs"
            />
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default JS;
