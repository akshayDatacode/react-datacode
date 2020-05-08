import React, { Component } from "react";
import RoadMapCard from "../../technologies/RoadMapCard";
import {
  faChalkboardTeacher,
  faBook,
  faPuzzlePiece,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import Technologies from "../../../right_section/Technologies";
import FbLikeShare from "../../../FbLikeShare";
import LearningPlatformCard from "./LearningPlatformCard";
class CertificaionPlatforms extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8">
            <div className="row ">
              <h2
                className=" mb-4 display-5 text-center"
                style={{ color: "#072C71" }}
              >
                Find Free and Paid Online Certificaion Platforms
              </h2>
            </div>
            <div className="row">
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
            </div>
            <div className="row mt-4 p-2">
              <div className="col">
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="udemey.jpeg"
                    tag1="certification"
                    title="Udemy"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="https://www.udemy.com/"
                  />
                  <LearningPlatformCard
                    imgsource="udacity.jpeg"
                    tag1="certification"
                    title="Udacity"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="https://www.udacity.com/"
                  />
                  <LearningPlatformCard
                    imgsource="coursera1.jpeg"
                    tag1="certification"
                    title="Coursera"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="https://www.coursera.org/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="edx.jpeg"
                    tag1="certification"
                    title="edX"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="http://www.edx.org/"
                  />
                  <LearningPlatformCard
                    imgsource="codecademy1.jpeg"
                    tag1="certification"
                    title="Codecademy"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="http://www.codecademy.com/"
                  />
                  <LearningPlatformCard
                    imgsource="pluralsight1.jpeg"
                    tag1="certification"
                    title="Pluralsight"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="http://www.pluralsight.com/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="skillshare.jpeg"
                    tag1="certification"
                    title="SkillShare"
                    paragraph="Skillshare is an American online learning community for people who want to learn from educational videos. The courses, which are not accredited, are available through subscription"
                    link="http://www.skillshare.com/"
                  />
                  <LearningPlatformCard
                    imgsource="linkedlist.jpeg"
                    tag1="certification"
                    title="LinkedIn Learning"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="https://www.linkedin.com/learning/"
                  />
                  <LearningPlatformCard
                    imgsource="datacamp.jpeg"
                    tag1="certification"
                    title="DataCamp"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="http://www.datacamp.com/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="futurelearn.jpeg"
                    tag1="certification"
                    title="FutureLearn"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="http://www.futurelearn.com/"
                  />
                  <LearningPlatformCard
                    imgsource="khanacademy.jpeg"
                    tag1="certification"
                    title="khan Academy"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="https://www.khanacademy.org/"
                  />
                  <LearningPlatformCard
                    imgsource="simplilearn.jpeg"
                    tag1="certification"
                    title="Simplilearn"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="https://www.simplilearn.com/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="openclassrooms.jpeg"
                    tag1="certification"
                    title="OpenClassrooms"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="https://openclassrooms.com/en/"
                  />
                  <LearningPlatformCard
                    imgsource="freecodecamp1.jpeg"
                    tag1="certification"
                    title="freeCodeCamp"
                    paragraph=" Udemy Provides Learning Courses with Free and paid Certification"
                    link="https://www.freecodecamp.org/"
                  />
                  <LearningPlatformCard
                    imgsource="iversity.jpeg"
                    tag1="certification"
                    title="iversity"
                    paragraph="iversity.org is an online learning platform for higher education and professional development courses provided by experts from all over Europe."
                    link="https://iversity.org/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="academicearth.jpeg"
                    tag1="certification"
                    title="Academic Earth"
                    paragraph="Find free online courses, lectures, and videos from the best colleges in the country. Take online classes from schools like Yale, MIT and Stanford."
                    link="http://academicearth.org/"
                  />
                  <LearningPlatformCard
                    imgsource="sololearn1.jpeg"
                    tag1="certification"
                    tag2="free learning"
                    title="SoloLearn"
                    paragraph="SoloLearn has the largest collection of FREE code learning content, from beginner to pro! Choose from thousands of programming topics to learn coding"
                    link="https://www.sololearn.com/"
                  />
                  <LearningPlatformCard
                    imgsource="platzi.jpeg"
                    tag1="Web Development"
                    tag2="Free"
                    title="Platzi"
                    paragraph="Learn from zero to create the future of the web. Courses on programming, design, marketing, web development, Frontend, Backend, mobile dev, UX, usability."
                    link="http://courses.platzi.com/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="treehouse.jpeg"
                    tag1="Paid"
                    title="Treehouse"
                    paragraph="Learn web design, coding and much more with Treehouse. You can learn at your own pace and become job ready within months. Start your free trial!"
                    link="http://teamtreehouse.com/"
                  />
                  <LearningPlatformCard
                    imgsource="alison.jpeg"
                    tag1="certification"
                    title="Alison"
                    paragraph="Free online courses with LearningPlatformCards. Join 2 million graduates and empower your career. Study, learn, certify, upskill with free online learning and training."
                    link="https://alison.com/en?"
                  />
                  <LearningPlatformCard
                    imgsource="classcentral.jpeg"
                    tag1="certification"
                    tag3="paid"
                    title="Class Central"
                    paragraph="Discover thousands of FREE online courses and MOOCs from top universities and companies on Class Central."
                    link="https://www.classcentral.com/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="harvardextentionschool.jpeg"
                    tag1="certification"
                    title="Harvard Extension School"
                    paragraph="Harvard Extension School is the extension school and one of the twelve degree-granting schools that compose Harvard University in Cambridge, Massachusetts"
                    link="https://www.extension.harvard.edu/"
                  />
                  <LearningPlatformCard
                    imgsource="saylor.jpeg"
                    tag1="certification"
                    title="Saylor Academy"
                    paragraph="Free online courses available across the world. Build new skills or work towards a degree at your own pace with free Saylor Academy courses!"
                    link="https://www.saylor.org/"
                  />
                  <LearningPlatformCard
                    imgsource="educause.jpeg"
                    tag1="certification"
                    title="Educause"
                    paragraph="Educause is a nonprofit association in the United States whose mission is to advance higher education through the use of information technology"
                    link="https://www.educause.edu/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="hackerrank.jpeg"
                    tag1="certification"
                    title="HackerRank"
                    paragraph="HackerRank is a tech company that focuses on competitive programming challenges for both consumers and businesses, where developers compete by trying to program according to provided specifications."
                    link="https://www.hackerrank.com/"
                  />
                  <LearningPlatformCard
                    imgsource="w3schools.jpeg"
                    tag1="certification"
                    tag2="Learning"
                    title="W3Schools"
                    paragraph="W3Schools is an educational website for learning web technologies online. Content includes tutorials and references relating to HTML, CSS, JavaScript, JSON, PHP, Python, AngularJS, React.js, SQL, Bootstrap, Sass, Node.js, jQuery, XQuery, AJAX, XML, Raspberry Pi, C++, C# and Java"
                    link="https://www.w3schools.com/"
                  />
                  <LearningPlatformCard
                    imgsource="codechef.jpeg"
                    tag1="certification"
                    tag2="Coding"
                    title="CodeChef"
                    paragraph="CodeChef is a competitive programming website. It is a non-profit educational initiative"
                    link="https://www.codechef.com/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="codewars.jpeg"
                    tag1="certification"
                    title="Codewars"
                    paragraph="Codewars is an educational community for computer programming. On the platform, software developers train on programming challenges known as kata. These discrete programming exercises train a range of skills in a variety of programming languages, and are completed within an online integrated development environment"
                    link="https://www.codewars.com/"
                  />
                  <LearningPlatformCard
                    imgsource="codinggame.jpeg"
                    tag1="certification"
                    tag2="Learning"
                    title="CodinGame"
                    paragraph="CodinGame is a technology company editing an online platform for developers, allowing them to play with programming with increasingly difficult puzzles, to learn to code better with an online programming"
                    link="https://www.codingame.com/"
                  />
                  <LearningPlatformCard
                    imgsource="sitepoint.jpeg"
                    tag1="certification"
                    tag2="Web Development"
                    title="SitePoint"
                    paragraph="SitePoint is a Melbourne-based website, and publisher of books, courses and articles for web developers"
                    link="https://www.sitepoint.com/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="topcoder.jpeg"
                    tag1="certification"
                    tag2="coding"
                    title="Topcoder"
                    paragraph="Topcoder is a crowdsourcing company with an open global community of designers, developers, data scientists, and competitive programmers. "
                    link="https://www.topcoder.com/"
                  />
                  <LearningPlatformCard
                    imgsource="mitocw.jpeg"
                    tag1="certification"
                    tag2="Learning"
                    title="MIT OpenCourseWare"
                    paragraph="MIT OpenCourseWare is an initiative of the Massachusetts Institute of Technology to publish all of the educational materials from its undergraduate- and graduate-level courses online, freely and openly available to anyone, anywhere"
                    link="https://ocw.mit.edu/index.htm"
                  />
                  <LearningPlatformCard
                    imgsource="codeforces.jpeg"
                    tag1="certification"
                    tag2="Coding"
                    title="Codeforces"
                    paragraph="Codeforces is a website that hosts competitive programming contests. It is maintained by a group of competitive programmers"
                    link="https://codeforces.com/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="codesignal.jpeg"
                    tag1="certification"
                    title="CodeSignal"
                    paragraph="CodeSignal is a skills-based assessment platform operated by American company BrainFights"
                    link="https://codesignal.com/"
                  />
                  <LearningPlatformCard
                    imgsource="coderbyte.jpeg"
                    tag1="certification"
                    tag2="Learning"
                    title="Coderbyte"
                    paragraph="Improve your coding skills with our library of 300+ challenges and prepare for coding interviews with content from leading technology companies."
                    link="https://coderbyte.com/"
                  />
                  <LearningPlatformCard
                    imgsource="exercism.jpeg"
                    tag1="Compitative"
                    tag2="Coding"
                    title="Exercism"
                    paragraph="Exercism is an online, open-source, free coding platform that offers code practice and mentorship on 50 different programming languages"
                    link="https://exercism.io/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="codeeval.jpeg"
                    tag1="coding Challange"
                    title="CodeEval"
                    paragraph="CodeEval is a technical screening platform that hosts coding challenges to source and screen developers. San Francisco, California, United States."
                    link="https://www.crunchbase.com/organization/codeeval"
                  />
                  <LearningPlatformCard
                    imgsource="codecombat.jpeg"
                    tag1="code"
                    tag2="Learning"
                    title="CodeCombat"
                    paragraph="Learn typed code through a programming game. Learn Python, JavaScript, and HTML as you solve puzzles and learn to make your own coding games."
                    link="https://codecombat.com/"
                  />
                  <LearningPlatformCard
                    imgsource="ageoflearning.jpeg"
                    tag1="Compitative"
                    tag2="Coding"
                    title="Age of Learning"
                    paragraph="Age of Learning blends education best practices, innovative technology, and insightful creativity to bring learning to life for children across the U.S"
                    link="https://www.ageoflearning.com/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="dzone.jpeg"
                    tag1="Programming"
                    tag2="Webdevelpment"
                    title="Dzone"
                    paragraph="Programming, Web Development, and DevOps news, tutorials and tools for beginners to experts"
                    link="https://dzone.com/"
                  />
                  <LearningPlatformCard
                    imgsource="datasciencedojo.jpeg"
                    tag1="code"
                    tag2="Learning"
                    title="Data Science Dojo"
                    paragraph="Learn data science with our short-duration, in-person, hands-on data science training that will get you started with practical skills in just one week."
                    link="https://datasciencedojo.com/"
                  />
                  <LearningPlatformCard
                    imgsource="geeksforgeeks.jpeg"
                    tag1="Computer Science"
                    tag2="Learning"
                    title="GeeksforGeeks"
                    paragraph="A Computer Science portal for geeks. It contains well written, well thought and well explained computer science and programming articles"
                    link="https://www.geeksforgeeks.org/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="progate.jpeg"
                    tag1="Free"
                    tag2="Learning"
                    title="Progate"
                    paragraph="Progate is an online platform to learn programming. Learn to build your own apps and services."
                    link="https://progate.com/"
                  />
                  <LearningPlatformCard
                    imgsource="tutorialspoint.jpeg"
                    tag1="code"
                    tag2="Learning"
                    title="Tutorials Point"
                    paragraph="Tutorials Point originated from the idea that there exists a class of readers who respond better to online content and prefer to learn new skills at their ow"
                    link="https://www.tutorialspoint.com/"
                  />
                  <LearningPlatformCard
                    imgsource="codingninjas.jpeg"
                    tag1="Programming"
                    tag2="Learning"
                    title="Coding Ninjas"
                    paragraph="Practice Coding Online at Coding Ninjas which is India's best Programming and software training institute that offers courses in Java, C++, Android"
                    link="https://www.codingninjas.com/"
                  />
                </div>
                <div className="card-deck">
                  <LearningPlatformCard
                    imgsource="opencourser.jpeg"
                    tag1="Free"
                    tag2="Learning"
                    title="OpenCourser"
                    paragraph="Learn to build your skills, advance your career, or ace a test. There are thousands of high quality online courses for you"
                    link="https://progate.com/"
                  />
                  <LearningPlatformCard
                    imgsource="openlearning.jpeg"
                    tag1="code"
                    tag2="Learning"
                    title="OpenLearning"
                    paragraph="OpenLearning is a social online learning and MOOC platform that allows universities, colleges and educators to create, design, deliver, market online"
                    link="https://www.openlearning.com/"
                  />
                  <LearningPlatformCard
                    imgsource="codingninjas.jpeg"
                    tag1="Programming"
                    tag2="Learning"
                    title="Coding Ninjas"
                    paragraph="Practice Coding Online at Coding Ninjas which is India's best Programming and software training institute that offers courses in Java, C++, Android"
                    link="https://www.codingninjas.com/"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>

            <Technologies />
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default CertificaionPlatforms;
