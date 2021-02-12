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
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              Find the Best SQL Programming Courses & Tutorials
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
              imgsource="sql_tutorial.jpeg"
              title="SQLBolt"
              source="(sqlbolt.com)"
              tag1="Free"
              link="https://sqlbolt.com/"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="A beginners guide to thinking in SQL"
              source="(sohamkamani.com)"
              tag1="Free"
              link="https://www.sohamkamani.com/blog/2016/07/07/a-beginners-guide-to-sql/"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="SQL basics by Khan Academy"
              source="(khanacademy.org)"
              tag1="Free"
              tag2="Video"
              link="https://www.khanacademy.org/computing/computer-programming/sql#sql-basics"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="The SQL Tutorial for Data Analysis"
              source="(community.modeanalytics.com)"
              tag1="Free"
              tag2="Beginner"
              link="https://community.modeanalytics.com/sql/tutorial/introduction-to-sql"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="SQL Tutorial by Tutorials Point"
              source="(tutorialspoint.com)"
              tag1="Free"
              link="https://www.tutorialspoint.com/sql/sql_tutorial.pdf"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="Intro to SQL for Data Science"
              source="(datacamp.com)"
              tag1="Free"
              tag2="Advanced"
              tag3="Exercises/Practice-programs"
              link="https://www.datacamp.com/courses/introduction-to-sql/"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="A Visual Explanation of SQL Joins"
              source="(blog.codinghorror.com)"
              tag1="Free"
              link="https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="PL/SQL Tutorial"
              source="(oracletutorial.com)"
              tag1="Free"
              tag2="Beginner"
              tag3="PL/SQL"
              link="http://oracletutorial.com/plsql-tutorial"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="PL/SQL Tutorial"
              source="(javatpoint.com)"
              tag1="Free"
              tag2="Advanced"
              tag3="PL/SQL"
              link="https://www.javatpoint.com/pl-sql-tutorial"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="SQL - Full Course for Beginners"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.youtube.com/watch?v=HXV3zeQKqGY&t=12839s"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="The Complete SQL Bootcamp"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/the-complete-sql-bootcamp/"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="Learn SQL from Scratch"
              source="(codecademy.com)"
              tag1="Paid"
              tag2="Beginner"
              tag3="Exercises/Practice-programs"
              link="https://www.codecademy.com/learn/paths/analyze-data-with-sql"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="SQL Essential Training"
              source="(linkedin.com)"
              tag1="Paid"
              tag2="Beginner"
              link="https://www.linkedin.com/learning/sql-essential-training-2?src=aff-lilpar&veh=aff_src.aff-lilpar_c.partners_pkw.1419154_plc.Hackr.io_pcrid.449670_learning&trk=aff_src.aff-lilpar_c.partners_pkw.1419154_plc.Hackr.io_pcrid.449670_learning&clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixoL3YKSFq1Y0&irgwc=1"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="SQL for Newbies: Data Analysis for Beginners"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/sql-for-newbs/"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="Introduction to SQL"
              source="(pluralsight.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.pluralsight.com/courses/introduction-to-sql?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixoLQoKSFq1Y0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="SQL for Data Science"
              source="(coursera.org)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=40328&murl=https://www.coursera.org/learn/sql-for-data-science"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="SQL for Data Science"
              source="(coursera.org)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=40328&murl=https://www.coursera.org/learn/sql-for-data-science"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="Learn SQL the Hard Way"
              source="(learncodethehardway.org)"
              tag1="Paid"
              tag2="Book"
              link="https://learncodethehardway.org/sql/"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="The Complete MySQL Bootcamp: From SQL Beginner to Expert"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/course/the-complete-mysql-bootcamp-from-sql-beginner-to-expert"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="SQL & PostgreSQL for Beginners"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/sql-and-postgresql-for-beginners/?ranMID=39197&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-HjlVl0AU7OLeRs9igAeeHQ&LSNPUBID=jU79Zysihs4"
            />
            <RoadMapCard
              imgsource="sql_tutorial.jpeg"
              title="SQL QuickStart Guide"
              source="(clydebankmedia.com)"
              tag1="Paid"
              tag2="Book"
              tag3="Beginner"
              link="https://www.clydebankmedia.com/product/sql-quickstart-guide"
            />
              <h4 className="text-secondary mt-5">For More Technologies</h4>
            <TechnologiesCardCarousel />
          </div>
          <div className="col-md-4 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>
            <LearningSideSection language="sql" />
            <Technologies />
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default SQL;
