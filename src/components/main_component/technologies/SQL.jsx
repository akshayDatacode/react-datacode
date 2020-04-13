import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PostCard from "../PostCard";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";

class SQL extends Component {
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
            <h1 className="text-center mb-4 display-4">SQL Learning RoaMap</h1>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_technologies" className="badge badge-warning mr-1">
              Technologies >
            </Link>
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="SQLBolt"
              source="(sqlbolt.com)"
              tag1="Free"
              link="https://sqlbolt.com/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="A beginners guide to thinking in SQL"
              source="(sohamkamani.com)"
              tag1="Free"
              link="https://www.sohamkamani.com/blog/2016/07/07/a-beginners-guide-to-sql/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="SQL basics by Khan Academy"
              source="(khanacademy.org)"
              tag1="Free"
              tag2="Video"
              link="https://www.khanacademy.org/computing/computer-programming/sql#sql-basics"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="The SQL Tutorial for Data Analysis"
              source="(community.modeanalytics.com)"
              tag1="Free"
              tag2="Beginner"
              link="https://community.modeanalytics.com/sql/tutorial/introduction-to-sql"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="SQL Tutorial by Tutorials Point"
              source="(tutorialspoint.com)"
              tag1="Free"
              link="https://www.tutorialspoint.com/sql/sql_tutorial.pdf"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Intro to SQL for Data Science"
              source="(datacamp.com)"
              tag1="Free"
              tag2="Advanced"
              tag3="Exercises/Practice-programs"
              link="https://www.datacamp.com/courses/introduction-to-sql/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="A Visual Explanation of SQL Joins"
              source="(blog.codinghorror.com)"
              tag1="Free"
              link="https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="PL/SQL Tutorial"
              source="(oracletutorial.com)"
              tag1="Free"
              tag2="Beginner"
              tag3="PL/SQL"
              link="http://oracletutorial.com/plsql-tutorial"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="PL/SQL Tutorial"
              source="(javatpoint.com)"
              tag1="Free"
              tag2="Advanced"
              tag3="PL/SQL"
              link="https://www.javatpoint.com/pl-sql-tutorial"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="SQL - Full Course for Beginners"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.youtube.com/watch?v=HXV3zeQKqGY&t=12839s"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="The Complete SQL Bootcamp"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/the-complete-sql-bootcamp/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn SQL from Scratch"
              source="(codecademy.com)"
              tag1="Paid"
              tag2="Beginner"
              tag3="Exercises/Practice-programs"
              link="https://www.codecademy.com/learn/paths/analyze-data-with-sql"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="SQL Essential Training"
              source="(linkedin.com)"
              tag1="Paid"
              tag2="Beginner"
              link="https://www.linkedin.com/learning/sql-essential-training-2?src=aff-lilpar&veh=aff_src.aff-lilpar_c.partners_pkw.1419154_plc.Hackr.io_pcrid.449670_learning&trk=aff_src.aff-lilpar_c.partners_pkw.1419154_plc.Hackr.io_pcrid.449670_learning&clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixoL3YKSFq1Y0&irgwc=1"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="SQL for Newbies: Data Analysis for Beginners"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/sql-for-newbs/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Introduction to SQL"
              source="(pluralsight.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.pluralsight.com/courses/introduction-to-sql?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixoLQoKSFq1Y0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="SQL for Data Science"
              source="(coursera.org)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=40328&murl=https://www.coursera.org/learn/sql-for-data-science"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="SQL for Data Science"
              source="(coursera.org)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=40328&murl=https://www.coursera.org/learn/sql-for-data-science"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn SQL the Hard Way"
              source="(learncodethehardway.org)"
              tag1="Paid"
              tag2="Book"
              link="https://learncodethehardway.org/sql/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="The Complete MySQL Bootcamp: From SQL Beginner to Expert"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/course/the-complete-mysql-bootcamp-from-sql-beginner-to-expert"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="SQL & PostgreSQL for Beginners"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/sql-and-postgresql-for-beginners/?ranMID=39197&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-HjlVl0AU7OLeRs9igAeeHQ&LSNPUBID=jU79Zysihs4"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="SQL QuickStart Guide"
              source="(clydebankmedia.com)"
              tag1="Paid"
              tag2="Book"
              tag3="Beginner"
              link="https://www.clydebankmedia.com/product/sql-quickstart-guide"
            />

<h1>Android</h1>
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="CardView & RecyclerView Complete Course"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Advanced"
              link="https://www.youtube.com/watch?v=kTno2oBN24E&t=8812s"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Android App Development by Stanford"
              source="(web.stanford.edu)"
              tag1="Free"
              tag2="Video"
              link="http://web.stanford.edu/class/cs193a/videos.shtml"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Android Development for Beginners"
              source="(udacity.com)"
              tag1="Free"
              link="https://www.udacity.com/course/android-basics-user-interface--ud834"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Android Material Design Tutorial"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/playlist?list=PLonJJ3BVjZW6CtAMbJz1XD8ELUs1KXaTD"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Training for Android developers"
              source="(developer.android.com)"
              tag1="Free"
              link="https://developer.android.com/guide"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Android Tutorial for Beginners"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"

              link="https://www.youtube.com/playlist?list=PLonJJ3BVjZW6hYgvtkaWvwAVvOFB7fkLa"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Tutorials about development for Android"
              source="(vogella.com)"
              tag1="Free"
              link="https://www.vogella.com/tutorials/android.html"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Advanced Android App Development"
              source="(udacity.com)"
              tag1="Free"
              tag1="Video"
              tag1="Advanced"
               link="https://www.udacity.com/course/advanced-android-app-development--ud855"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Android Development Tutorials"
              source="(codinginflow.com)"
              tag1="Free"
              tag2="Advanced"
              link="https://codinginflow.com/tutorials/android"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learning Simplified: Android"
              source="(why-android.com)"
              tag1="Free"
              tag2="Beginner"
              link="https://why-android.com/android-app-development-tutorial/"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="The Complete Android N Developer Course"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/complete-android-n-developer-course/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-rBcQP2pWGvHYzARj1fmPBg"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Google: Associate Android Developer (AAD) Learning Path"
              source="(pluralsight.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.pluralsight.com/paths/google-android-associate-developer-aad?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixr50oKSCjWA0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="The Complete Android Oreo Developer Course - Build 23 Apps"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/the-complete-android-oreo-developer-course/?ranMID=39197&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-VQzAwjocpWOPFRnxrl6ekg&LSNPUBID=jU79Zysihs4"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Android Nougat App Masterclass"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/master-android-7-nougat-java-app-development-step-by-step/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-peRRkhXetKcxOZfC4I8W9Q"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Android Foundation Nanodegree"
              source="(udacity.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udacity.com/course/android-basics-nanodegree-by-google--nd803"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="RxJava for Android Developers"
              source="(manning.com)"
              tag1="Paid"
              tag2="Book"
              tag3="Beginner"
              link="https://www.manning.com/books/rxjava-for-android-developers"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Become an Android Mobile App Developer"
              source="(linkedin.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.linkedin.com/learning/paths/become-an-android-mobile-app-developer?src=aff-lilpar&veh=aff_src.aff-lilpar_c.partners_pkw.1419154_plc.Hackr.io_pcrid.449670_learning&trk=aff_src.aff-lilpar_c.partners_pkw.1419154_plc.Hackr.io_pcrid.449670_learning&clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixr%3AwgKSCjWA0&irgwc=1"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn Android Development From Scratch"
              source="(eduonix.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.eduonix.com/courses/Mobile-Development/Learn-Android-Development-From-Scratch"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Android Application Development"
              source="(software-skills-training.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Advanced"
              link="https://www.software-skills-training.com/Courses/android-programming-course.htm"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="The Complete Android Material Design Course"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              link="https://www.udemy.com/course/android-material-design-course-tutorial/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-NBnGUeb39Og2WEuT.7m3Fg"
            />
            


          </div>
          <div className="col-md-4 mt-md-5 ">
            <h2 className="text-center text-secondary mt-2 mb-3">
              Python Learning
            </h2>
            <RecommendPost
              imgsource="python_mcqs.jpeg"
              RecPostHading="Python MCQs Questions"
              link="/index_python_mcqs"
            />
            <RecommendPost
              imgsource="python_mcqs.jpeg"
              RecPostHading="Python MCQs Questions"
              link="/index_python_mcqs"
            />
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default SQL;
