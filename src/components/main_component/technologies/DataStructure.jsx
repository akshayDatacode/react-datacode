import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook } from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";

class DataStructure extends Component {
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
              Find the Best DataStructure Courses & Tutorials
            </h1>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_technologies" className="badge badge-warning mr-1">
              Technologies >
            </Link>
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(geeksforgeeks.org)"
              title="Fundamentals of Algorithms"
              tag1="Free"
              link="https://www.geeksforgeeks.org/fundamentals-of-algorithms/"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(coursera.org)"
              title="Algorithms by Princeton University"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.coursera.org/learn/algorithms-part1?ranMID=40328&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-ELqNJXxYMaSWGE3ZbVel0g&siteID=jU79Zysihs4-ELqNJXxYMaSWGE3ZbVel0g&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=jU79Zysihs4"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(geeksforgeeks.org)"
              title="Data Structures - Geeks for Geeks"
              tag1="Free"
              link="https://www.geeksforgeeks.org/data-structures/"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(ocw.mit.edu)"
              title="Introduction to Algorithms - MIT OpenCourseWare"
              tag1="Free"
              tag2="Video"
              link="https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(learneroo.com)"
              title="Learn Algorithms by Solving Challenges"
              tag1="Free"
              link="https://www.learneroo.com/subjects/8"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(archive.org)"
              title="Data Structures - UC Berkeley"
              tag1="Free"
              tag2="Video"
              link="https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iDD4nnsfVIqPFORTgZi9xRp"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(khanacademy.org)"
              title="Khan Academy: Algorithms"
              tag1="Free"
              link="https://www.khanacademy.org/computing/computer-science/algorithms"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(dataquest.io)"
              title="Algorithms And Data Structures Course"
              tag1="Free"
              tag2="Beginner"
              tag3="Python"
              link="https://www.dataquest.io/course/algorithms-and-data-structures"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(youtube.com)"
              title="C Language and Algorithms by Algorithm World"
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/playlist?list=PLkOtT2Jerafi0YaBaAWxq-rOwFcELXW_f"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(codesdope.com)"
              title="Introduction to Data Structures"
              tag1="Free"
              link="https://www.codesdope.com/course/data-structures-introduction/"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(udemy.com)"
              title="Master the Coding Interview: Data Structures and Algorithms"
              tag1="Paid"
              tag2="Beginner"
              tag3="Video"
              link="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-hacX68zY_95Xq9YIcfRcBA"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(coursera.org)"
              title="Data Structures and Algorithms Specialization"
              tag1="Paid"
              tag2="Beginner"
              tag3="Video"
              link="https://www.coursera.org/specializations/data-structures-algorithms?ranMID=40328&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-LlkWC_mQsSOrUn0BYhiPmQ&siteID=jU79Zysihs4-LlkWC_mQsSOrUn0BYhiPmQ&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=jU79Zysihs4"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(udemy.com)"
              title="Introduction to Data Structures & Algorithms in Java"
              tag1="Paid"
              tag2="Java"
              tag3="Video"
              link="https://www.udemy.com/course/introduction-to-data-structures-algorithms-in-java/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-kwNqqav_ajEStFwudjrtPg"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(udemy.com)"
              title="Introduction to Algorithms and Data structures in C++"
              tag1="Paid"
              tag2="C++"
              link="https://www.udemy.com/course/introduction-to-algorithms-and-data-structures-in-c/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-Cr8HntXGvGB24lCyaCmKbg"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(udemy.com)"
              title="JavaScript Algorithms and Data Structures Masterclass"
              tag1="Paid"
              tag2="JavaScript"
              tag3="BeginnerVideo"
              link="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-qD9UxAZ6APBxGMkeXWEqDA"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(manning.com)"
              title="Algorithms in Motion"
              tag1="Paid"
              tag2="Beginner"
              tag3="Video"
              link="https://www.manning.com/livevideo/algorithms-in-motion"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(manning.com)"
              title="Algorithms and Data Structures in Action"
              tag1="Paid"
              tag2="Book"
              tag3="Beginner"
              link="https://www.manning.com/books/algorithms-and-data-structures-in-action"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(codecademy.com)"
              title="Computer Science Basics: Algorithms"
              tag1="Beginner"
              tag2="Paid"
              link="https://www.codecademy.com/learn/paths/computer-science"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(udemy.com)"
              title="Master the Coding Interview: Data Structures + Algorithms"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-E2nEmkr6LFPiGbkvp1U8JQ"
            />
            <RoadMapCard
              imgsource="ds_tutorial.jpeg"
              source="(udemy.com)"
              title="Data Structures and Algorithms In Python"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/data-structures-algorithms-in-python"
            />
          </div>
          <div className="col-md-4 mt-md-5 ">
            <h3 className="text-center text-secondary mt-2 mb-3">
              <FontAwesomeIcon icon={faBook} size="1x" className="mr-2" />
              DataStructure Learning
            </h3>
            <RecommendPost
              imgsource="python_mcqs.jpeg"
              RecPostHading="DataStructure MCQs"
              link="/index_python_mcqs"
            />
            <RecommendPost
              imgsource="python_interview_question.jpeg"
              RecPostHading="Datastructure Interview Questions"
              link="/datastructre_interview_question"
            />
            <RecommendPost
              imgsource="python_programming_question.jpeg"
              RecPostHading=" Datastructure Programming Questions"
              link="/datastructure_programming_questions"
            />
            <RecommendPost
              imgsource="python_programming_question.jpeg"
              RecPostHading="Datastructure Quize Test"
              link="/python_quize_tests"
            />
            <RecommendPost
              imgsource="python_learning_blog.jpeg"
              RecPostHading="Datastructure Blogs"
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

export default DataStructure;
