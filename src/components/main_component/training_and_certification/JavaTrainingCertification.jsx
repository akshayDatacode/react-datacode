import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook } from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";
import { faJava } from "@fortawesome/free-brands-svg-icons";

class Java extends Component {
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
              Find the Best Java Courses & Tutorials
            </h1>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_technologies" className="badge badge-warning mr-1">
              Technologies >
            </Link>
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(youtube.com)"
              title="Java Video Tutorial by Derek Banas "
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/playlist?list=PLE7E8B7F4856C9B19"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(docs.oracle.com)"
              title="The Java Tutorials by Oracle"
              tag1="Free"
              link="https://docs.oracle.com/javase/tutorial/"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(youtube.com)"
              title="Java Course - The New Boston"
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/watch?v=Hl-zzrqQoSE&list=PLFE2CE09D83EE3E28"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(greenteapress.com)"
              title="Think Java"
              tag1="Free"
              link="https://greenteapress.com/wp/think-java/"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(javatpoint.com)"
              title="Java Tutorial"
              tag1="Free"
              tag2="Beginner"
              tag3="Book"
              link="https://www.javatpoint.com/java-tutorial"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(udacity.com)"
              title="Intro to Java Programming"
              tag1="Free"
              tag2="Video"
              link="https://www.udacity.com/course/java-programming-basics--ud282"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(moocfi.github.io)"
              title="Object-Oriented programming with Java"
              tag1="Free"
              link="https://moocfi.github.io/courses/2013/programming-part-1/"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(youtube.com)"
              title="Java JDBC Tutorial"
              tag1="Free"
              tag2=" Beginner"
              link="https://www.youtube.com/playlist?list=PLEAQNNR8IlB4R7NfqBY1frapYo97L6fOQ"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(eduonix.com)"
              title="Java Programming Course for Beginner From Scratch"
              tag1="Free"
              tag2="Video"
              link="https://www.eduonix.com/courses/Software-Development/Java-Programming-Course-for-Beginner-From-Scratch"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(ibm.com)"
              title="Java language basics"
              tag1="Free"
              link="https://developer.ibm.com/tutorials/j-introtojava1/"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(udemy.com)"
              title="Java Programming Masterclass for Software Developers"
              tag1="Paid"
              tag2="Video"
              link="https://www.udemy.com/course/java-the-complete-java-developer-course/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-_It8GbJqTRqWtie65i0C3g"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(manning.com)"
              title="Seriously Good Software"
              tag1="Paid"
              tag2="Book"
              link="https://www.manning.com/books/seriously-good-software"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(coursera.org)"
              title="Java Programming and Software Engineering Fundamentals"
              tag1="Paid"
              tag2="Beginner"
              link="https://www.coursera.org/specializations/java-programming?ranMID=40328&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-Wnlmve9Nu8Bq5W0IqQD0cw&siteID=jU79Zysihs4-Wnlmve9Nu8Bq5W0IqQD0cw&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=jU79Zysihs4"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(codecademy.com)"
              title="Learn Java with Codecademy"
              tag1="Paid"
              tag2="Exercises/Practice-programs"
              tag3="Beginner"
              link="https://www.codecademy.com/learn/learn-java?utm_source=rakuten&utm_medium=affiliate&utm_campaign=Hackr.io&utm_content=10-1&ranMID=44188&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-2F4HetFX_gT_DtUJE_8CkA"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(javawebscrapinghandbook.com)"
              title="A Step by Step Guide to Web Scraping"
              tag1="Paid"
              tag2="Book"
              link="https://www.javawebscrapinghandbook.com/"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(manning.com)"
              title="Modern Java in Action"
              tag1="Paid"
              tag2="Book"
              tag3="Advanced"
              link="https://www.manning.com/books/modern-java-in-action"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(codegym.cc)"
              title="CodeGym - Online Java Course"
              tag1="Paid"
              tag2="Exercises/Practice-programs"
              tag3="Beginner"
              link="https://codegym.cc/"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(coursera.org)"
              title="Object Oriented Java Programming: Data Structures and Beyond Specialization"
              tag1="Paid"
              tag2="Video"
              link="https://www.coursera.org/specializations/java-object-oriented?ranMID=40328&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-tzxJpzWwop0FntgoboWIqg&siteID=jU79Zysihs4-tzxJpzWwop0FntgoboWIqg&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=jU79Zysihs4"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(teamtreehouse.com)"
              title="Learn Java"
              tag1="Paid"
              tag2="Video"
              link="https://teamtreehouse.com/tracks/learn-java?irgwc=1&click_id=X6R3A1ylNxyOUDBwUx0Mo3QwUkixo2xwKSCjWA0&iradid=228915&ircid=3944&irpid=383034&iradname=Online%20Tracking%20Link&iradtype=ONLINE_TRACKING_LINK&iradsize=&irmpname=Hackr.io&irmptype=mediapartner&utm_source=ir&cid=4612"
            />
            <RoadMapCard
              imgsource="java_tutorial.jpeg"
              source="(packtpub.com)"
              title="Learn Java 12 Programming"
              tag1="Paid"
              tag2="Book"
              link="https://www.packtpub.com/in/application-development/learn-java-12-programming"
            />
          </div>
          <div className="col-md-4 mt-md-5 ">
            <h2 className="text-center text-primary mt-2 mb-3">
              <FontAwesomeIcon icon={faJava} size="1x" className="mr-2" />
              Java Learning
            </h2>
            <RecommendPost
              imgsource="java_mcq.jpeg"
              RecPostHading="Java MCQs"
              link="/index_java_mcqss"
            />
            <RecommendPost
              imgsource="java_interview_questions.jpeg"
              RecPostHading="Java Interview Questions"
              link="/java_interview_question"
            />
            <RecommendPost
              imgsource="java_programming_question.jpeg"
              RecPostHading="Java Programming Questions"
              link="/java_programming_questions"
            />
            <RecommendPost
              imgsource="java_quize.jpeg"
              RecPostHading="Java Quize Test"
              link="/java_quize_tests"
            />
            <RecommendPost
              imgsource="programming_blog.jpeg"
              RecPostHading="Java Programming Blogs"
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

export default Java;
