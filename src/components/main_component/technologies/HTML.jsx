import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBook } from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";

class HTML extends Component {
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
              Find the Best HTML Courses & Tutorials
            </h1>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_technologies" className="badge badge-warning mr-1">
              Technologies >
            </Link>
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="30 Days To Learn HTML + CSS Course"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/playlist?list=PLgGbWId6zgaWZkPFI4Sc9QXDmmOWa1v5F"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="HTML/CSS: Making webpages"
              source="(khanacademy.org)"
              tag1="Free"
              tag2="Video"
              link="https://www.khanacademy.org/computing/computer-programming/html-css
              "
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Introduction to HTML5"
              source="(coursera.org)"
              tag1="Free"
              tag2="Video"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=40328&murl=https://www.coursera.org/learn/html"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn HTML & CSS in 14 days"
              source="(ilovecoding.org)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://ilovecoding.org/courses/htmlcss2"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="HTML Beginner Tutorial"
              source="(htmldog.com)"
              tag1="Free"
              link="http://htmldog.com/guides/html/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="HTML5 Tutorials Playlist"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/playlist?list=PL081AC329706B2953"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="HTML(5) Tutorial by W3Schools"
              source="(w3schools.com)"
              tag1="Free"
              link="https://www.w3schools.com/HTML/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="HTML Tutorial"
              source="(tutorialandexample.com)"
              tag1="Free"
              tag2="Beginner"
              link="https://www.tutorialandexample.com/html-tutorial"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Comprehensive HTML 5 Tutorial"
              source="(bitdegree.org)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="http://bitdegree.org/course/html5-tutorial"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Interactive Coding for Beginners: What is CSS, HTML & Web Development"
              source="(bitdegree.org)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.bitdegree.org/course/coding-for-beginners-space-doggos"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Build Responsive Real World Websites with HTML5 and CSS3"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-XIPta3zI2cl1bb8TJD9.fQ"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Introduction to HTML"
              source="(codecademy.com)"
              tag1="Paid"
              tag2="Exercises/Practice-programs"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=44188&murl=https://www.codecademy.com/learn/learn-html"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Projects in HTML5"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Exercises/Practice-programs"
              link="https://www.udemy.com/course/projects-in-html5/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-EHTZqyCvMrlODrJdORdTMg"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Real World Coding in HTML & CSS"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/web-design-for-beginners-real-world-coding-in-html-css/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-IHkT7RhWAN2hyRwayiKSEg"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="HTML Fundamentals"
              source="(pluralsight.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.pluralsight.com/courses/html-fundamentals?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixobQgKSFq1Y0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="A Nicer Way To Learn About HTML & CSS"
              source="(htmlandcssbook.com)"
              tag1="Paid"
              tag2="Book"
              tag3="Beginner"
              link="http://www.htmlandcssbook.com/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn HTML5"
              source="(pluralsight.com)"
              tag1="Paid"
              link="https://www.pluralsight.com/paths/html5?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixobXgKSFq1Y0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="HTML QuickStart Guide"
              source="(clydebankmedia.com)"
              tag1="Paid"
              tag2="Book"
              tag3="Beginner"
              link="https://www.clydebankmedia.com/product/html-quickstart-guide"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Front-end Training in Practicum"
              source="(practicum.yandex.com)"
              tag1="Paid"
              tag2="Beginner"
              link="https://practicum.yandex.com/web"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Web Development Essentials for Absolute Beginners"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/web-development-essentials-for-absolute-beginners/?ranMID=39197&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-G_HK7jmbJY4I2luGuXiGOg&LSNPUBID=jU79Zysihs4"
            />
          </div>
          <div className="col-md-4 mt-md-5 ">
            <h2 className="text-center text-secondary mt-2 mb-3">
              <FontAwesomeIcon icon={faBook} size="1x" className="mr-2" />
              HTML Learning
            </h2>
            <RecommendPost
              imgsource="python_mcqs.jpeg"
              RecPostHading="HTML MCQs"
              link="/index_html_mcqs"
            />
            <RecommendPost
              imgsource="python_interview_question.jpeg"
              RecPostHading="HTML Interview Questions"
              link="/python_interview_question"
            />
            <RecommendPost
              imgsource="python_programming_question.jpeg"
              RecPostHading="HTML Programming Questions"
              link="/python_programming_questions"
            />
            <RecommendPost
              imgsource="python_programming_question.jpeg"
              RecPostHading="Python Quize Test"
              link="/python_quize_tests"
            />
            <RecommendPost
              imgsource="python_learning_blog.jpeg"
              RecPostHading="HTML Programming Blogs"
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

export default HTML;
