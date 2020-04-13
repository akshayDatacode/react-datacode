import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";

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
            <h1 className="text-center mb-4 display-4">C Learning RoaMap</h1>
            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>
            <Link to="/index_technologies" className="badge badge-warning mr-1">
              Technologies >
            </Link>
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Introduction to pointers in C/C++"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.youtube.com/playlist?list=PL2_aWCzGMAwLZp6LMUKI3cc7pgGsasm2_"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="LearnCpp"
              source="(learncpp.com)"
              tag1="Free"
              link="https://www.learncpp.com/"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Buckys C++ Programming Tutorials"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/playlist?list=PLAE85DE8440AA6B83"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="C++ Tutorial"
              source="(sololearn.com)"
              tag1="Free"
              tag2="Beginner"
              link="https://www.sololearn.com/Course/CPlusPlus/"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="C++ Tutorial"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.youtube.com/playlist?list=PLGLfVvz_LVvQ9S8YSV0iDsuEU8v11yP9M"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="C++/Game Tutorials"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.youtube.com/playlist?list=PLSPw4ASQYyynKPY0I-QFHK0iJTjnvNUys"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="C++ For C Programmers"
              source="(coursera.org)"
              tag1="Free"
              tag2="Video"
              link="https://www.coursera.org/learn/c-plus-plus-a?ranMID=40328&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-mOZIN.E.Fr4mLyGypMbyAg&siteID=jU79Zysihs4-mOZIN.E.Fr4mLyGypMbyAg&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=jU79Zysihs4"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="C++ For Programmers"
              source="(udacity.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udacity.com/course/c-for-programmers--ud210"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Entire C++ language in one video"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/watch?v=Rub-JsjMhWY&hd=1"
            /> <RoadMapCard
            imgsource="programming_blog.jpeg"
            title="C++ Annotations"
            source="(icce.rug.nl)"
            tag1="Free"
            link="http://www.icce.rug.nl/documents/cplusplus/"
          />
           <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Beginning C++ Programming - From Beginner to Beyond"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/beginning-c-plus-plus-programming"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn Advanced C++ Programming"
              source="(udemy.com)"
              tag1="Paid"              
              tag2="Video"
              tag3="Advanced"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/learn-advanced-c-programming/"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="C++: From Beginner to Expert"
              source="(udemy.com)"
              tag1="Paid"              
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/video-course-c-from-beginner-to-expert/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-ZA2i.SGJOZUGuX7WMxkVTg"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn C++"
              source="(pluralsight.com)"
              tag1="Paid"             
              link="https://www.pluralsight.com/paths/c-plus-plus?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixoVSYKSCjWA0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            /> <RoadMapCard
            imgsource="programming_blog.jpeg"
            title="C++ Advanced Topics"
            source="(pluralsight.com)"
            tag1="Paid"            
            tag2="Video"
            tag3="Advanced"
            link="https://www.pluralsight.com/courses/adv-cpp?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixoXzwKSCjWA0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
          />
           <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn C++ Programming -Beginner to Advance- Deep Dive in C++"
              source="(udemy.com)"
              tag1="Paid"              
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/cpp-deep-dive"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="C++ Concurrency in Action, Second Edition"
              source="(manning.com)"
              tag1="Paid"              
              tag2="Book"
              tag3="Advanced"
              link="https://www.manning.com/books/c-plus-plus-concurrency-in-action-second-edition"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="C++ Programming for Non-C Programmers"
              source="(software-skills-training.com)"
              tag1="Paid"              
              tag2="Advanced"
              link="http://software-skills-training.com/Courses/c++-programming.htm"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Nicolai M. Josuttis: The C++ Standard Library, 2nd edition"
              source="(cppstdlib.com)"
              tag1="Paid"              
              tag2="Book"
              tag3="Advanced"
              link="http://www.cppstdlib.com/"
            />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="C++ for Programmers"
              source="(educative.io)"
              tag1="Paid"              
              tag2="Video"
              tag3="Beginner"
              link="https://www.educative.io/track/c-plus-plus-for-programmers"
            />

         <h1>Angular</h1>
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="AngularJS Fundamentals In 60-ish Minutes"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="AngularJS"
              link="https://www.youtube.com/watch?v=i9MHigUZKEM"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn AngularJS"
              source="(egghead.io)"
              tag1="Free"
              tag2="AngularJS"
              link="https://egghead.io/articles/new-to-angularjs-start-learning-here"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Introduction to Angular.js in 50 Examples"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/watch?v=TRrL5j3MIvo"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="AngularJS Tutorial by W3Schools"
              source="(w3schools.com)"
              tag1="Free"
              link="https://www.w3schools.com/angular/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn Angular Step-by-step"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.youtube.com/playlist?list=PLq5m66kIJ5Z-KNR-xdK2GMiDlLLcpXLLB"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="A Better Way to Learn AngularJS"
              source="(thinkster.io)"
              tag1="Free"
              
              link="https://thinkster.io/a-better-way-to-learn-angularjs/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn AngularJS"
              source="(learn-angular.org)"
              tag1="Free"
              tag2="AngularJS"
              link="http://www.learn-angular.org/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="PhoneCat Tutorial App"
              source="(docs.angularjs.org)"
              tag1="Free"
              link="https://docs.angularjs.org/tutorial"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn Angular7 Tutorial"
              source="(javatpoint.com)"
              tag1="Free"
              tag2="Advanced"
              tag3="Angular7"
              link="https://www.javatpoint.com/angular-7-tutorial"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Step by Step Guide to Your First Angular 5 App"
              source="(toptal.com)"
              tag1="Free"
              tag2="Beginner"
              tag3="Angular 5"
              link="https://www.toptal.com/angular/angular-5-tutorial"
            />

            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Angular & NodeJS - The MEAN Stack Guide"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-EvZD9vG2X4Ex8rnFOxR2hg"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Angular 8 - The Complete Guide"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/the-complete-guide-to-angular-2/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-kaioRsmwniIXQ1muiCviLw"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Shaping up with AngularJS"
              source="(pluralsight.com)"
              tag1="Paid"
              tag2="Video"
              tag3="AngularJS"
              link="https://www.pluralsight.com/courses/angularjs-get-started?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixorWUKSAxyQ0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="The Complete Angular Course: Beginner to Advanced"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/the-complete-angular-master-class/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-x85LOnlwJ7eQ1zWwZx7MdA"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Angular Fundamentals"
              source="(ultimatecourses.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://ultimatecourses.com/learn/angular-fundamentals"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Angular Crash Course"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/angular-crash-course/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-Ub8MANA6N5lkpI08BpG1YQ"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn and Understand AngularJS"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/learn-angularjs/"
            />   
            <RoadMapCard
            imgsource="programming_blog.jpeg"
            title="Angular Fundamentals"
            source="(pluralsight.com)"
            tag1="Paid"
            tag2="Video"
            tag3="Beginner"
            link="https://www.pluralsight.com/courses/angular-fundamentals?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixotwUKSFq1Y0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
          />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="ng-book 2"
              source="(ng-book.com)"
              tag1="Paid"
              tag2="Book"
              link="https://www.newline.co/ng-book/2/"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Developing Web Applications Using Angular"
              source="(software-skills-training.com)"
              tag1="Paid"
              tag2="Advanced"
              tag3="Angular 5"
              link="http://software-skills-training.com/Courses/angular-training-course.htm"
            />

          <h1>React</h1>
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="React Crash Course 2018 - React Tutorial with Examples"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.youtube.com/watch?v=Ke90Tje7VS0"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Awesome React"
              source="(github.com)"
              tag1="Free"
              tag2="Resources"
              link="https://github.com/enaqx/awesome-react"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Survive JavaScript - Webpack and React"
              source="(survivejs.com)"
              tag1="Free"
              tag2="Advanced"
              link="https://survivejs.com/react/introduction/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="The Beginner's Guide to ReactJS"
              source="(egghead.io)"
              tag1="Free"
              tag2="Beginner"
              tag3="Video"
              link="https://egghead.io/courses/the-beginner-s-guide-to-reactjs"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="React.Js Projects for Beginners"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              tag3="Exercises/Practice-programs"
              link="https://www.youtube.com/playlist?list=PLD9SRxG6ST3HoJhkYdj0w4WEzUM_RBTKt"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Building a Chat App with React.js and Chatkit"
              source="(scrimba.com)"
              tag1="Free"
              tag2="xVideo"
              tag3="Exercises/Practice-programs"
              link="https://scrimba.com/g/greactchatkit"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn React for Free"
              source="(scrimba.com)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://scrimba.com/g/glearnreact"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Getting Started with React – An Overview and Walkthrough"
              source="(taniarascia.com)"
              tag1="Free"
              tag2="Beginner"
              link="https://www.taniarascia.com/getting-started-with-react"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn React by Building a WebApp"
              source="(udilia.com)"
              tag1="Free"
              tag2="Beginner"
              link="https://www.udemy.com/course/learn-react-by-building-and-deploying-production-ready-app/"
            />
            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="The React Handbook"
              source="(medium.freecodecamp.org)"
              tag1="Free"
              link="https://medium.freecodecamp.org/the-react-handbook-b71c27b0a795"
            />

            <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="React - The Complete Guide (incl Hooks, React Router, Redux)"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/react-the-complete-guide-incl-redux/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-_9tTsVxjY6_ok7utAvqWzw"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Complete Next.js with React & Node"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/awesome-nextjs-with-react-and-node-amazing-portfolio-app/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-sbYhN0xyrHVvHUagchhWVw"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="React for Beginners"
              source="(reactforbeginners.com)"
              tag1="Paid"
              tag2="Video"
              link="https://reactforbeginners.com/"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Become a Professional React Developer"
              source="(udacity.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="http://udacity.com/course/react-nanodegree--nd019"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Fullstack Advanced React and GraphQL"
              source="(advancedreact.com)"
              tag1="Paid"
              tag2="Advanced"
              tag3="GraphQL"
              link="https://advancedreact.com/"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Learn ReactJS by Codecademy"
              source="(codecademy.com)"
              tag1="Paid"
              tag2="Exercises/Practice-programs"
              link="https://www.codecademy.com/learn/react-101?utm_source=rakuten&utm_medium=affiliate&utm_campaign=Hackr.io&utm_content=10-1&ranMID=44188&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-c_iQju1gNQM_vfroIe4dJA"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="React in Action"
              source="(manning.com)"
              tag1="Paid"
              tag2="Book"
              link="https://www.manning.com/books/react-in-action"
            />   <RoadMapCard
            imgsource="programming_blog.jpeg"
            title="React in Motion"
            source="(manning.com)"
            tag1="Paid"
            tag2="Video"
            tag3="Beginner"
            link="https://www.manning.com/livevideo/react-in-motion"
          />
             <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="Advanced React and Redux"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Advanced"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=39197&murl=https://www.udemy.com/react-redux-tutorial/"
            />
               <RoadMapCard
              imgsource="programming_blog.jpeg"
              title="React Fundamentals"
              source="(tylermcginnis.com)"
              tag1="Paid"
              link="https://tylermcginnis.com/courses/react/"
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

export default C;
