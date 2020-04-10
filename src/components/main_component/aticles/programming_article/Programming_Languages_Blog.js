import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import ArticlePostCard from "../ArticlePostCard";
import { Link } from "react-router-dom";
class ProgrammingLanguagesBlog extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-1 p-0 m-0"></div>
            <div className="col-md-8 p-0 mt-4">
              <h2 className="text-center mb-4">Programming Community Blogs</h2>
              <Link to="/home" className="badge badge-primary mr-1">
                Home >
              </Link>
              <Link to="/index_articles" className="badge badge-warning mr-1">
                Blogs >
              </Link>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="JavaScript"
                  tag2="programming"
                  title="Learn JavaScript concepts by building a random quote generator"
                  paragraph="Learning JavaScript is fun. But What's the point if you are not building stuff with it. So in this article,"
                  link="https://thenextbigwriter.tech/learn-javascript-concepts-by-building-a-random-quote-generator-ck8fmvz6j014qyys1i204knru"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="JavaScript"
                  tag2="methods"
                  title="What is `this` inside foo.bar()?"
                  paragraph="Calling a method directly works as expected.
                  But when we pass a method as callback, it loses"
                  link="https://blog.bendtherul.es/what-is-this-inside-foobar-ck8dzlitm01atxjs1322jz9a2"
                />
                <ArticlePostCard
                  imgsource="python_learning_blog.jpeg"
                  tag1="python"
                  tag2="python 101"
                  title="Python 101 – Working with Strings"
                  paragraph="You will be using strings very often when you program. A string is a series of letters surrounded by single, double or triple quotes."
                  link="https://www.blog.pythonlibrary.org/2020/04/07/python-101-working-with-strings/"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="java"
                  tag2="datastructure"
                  title="Data structures and algorithms in Java: A beginner's guide"
                  paragraph="Learn all about array and list data structures in Java, and the algorithms you can use to search and sort the data they contain"
                  link="https://www.javaworld.com/article/3527188/data-structures-and-algorithms-in-java-a-beginners-guide.html"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="kubernets"
                  tag2="java"
                  title="Your own Kubernetes controller - Developing in Java"
                  paragraph="As a use-case, we will implement the sidecar pattern: every time a pod gets scheduled, a sidecar pod will be scheduled along it as well. If the former is removed, the latter needs to be as well."
                  link="https://blog.frankel.ch/your-own-kubernetes-controller/2/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Asynchronous Programming"
                  tag2="Java"
                  title="Asynchronous Programming in Java"
                  paragraph="With the growing demand for writing non-blocking code, we need ways to execute the code asynchronously."
                  link="https://www.baeldung.com/java-asynchronous-programming"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="python_learning_blog.jpeg"
                  tag1="python"
                  tag2="instagram"
                  tag3="chatbot"
                  title="How to Make an Instagram Bot With Python and InstaPy"
                  paragraph="How can an automation script gain you more followers and likes? Before answering this question..."
                  link="https://realpython.com/instagram-bot-python-instapy/"
                />
                <ArticlePostCard
                  imgsource="python_learning_blog.jpeg"
                  tag1="python"
                  tag2="maps"
                  title="Creating Beautiful Maps with Python Beyond the defaults"
                  paragraph="Making maps with geo pandas is very easy but I have to admit..."
                  link="https://towardsdatascience.com/creating-beautiful-maps-with-python-beyond-the-defaults-c92593ccf2cc"
                />
                <ArticlePostCard
                  imgsource="python_learning_blog.jpeg"
                  tag1="python"
                  tag2="clean code"
                  title="Nine simple steps for better-looking python code"
                  paragraph="Regularly I look at Code Suppliments academic papers, relased datasets or analyze the solution"
                  link="https://towardsdatascience.com/nine-simple-steps-for-better-looking-python-code-87e5d9d3b1cf"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="python_learning_blog.jpeg"
                  tag1="python"
                  tag2="developer"
                  title="8 must have Skills to be Successful Python Developer"
                  paragraph="With the rising popularity of Python programming language and expanding demand of a Python developer in the market,"
                  link="https://thepythonguru.com/8-must-have-skills-to-be-successful-python-developer/"
                />
                <ArticlePostCard
                  imgsource="python_learning_blog.jpeg"
                  tag1="python"
                  tag2="emails"
                  title="Sending Emails in Python - Tutorial with Code Examples"
                  paragraph="What do you need to send an email with Python? Some basic programming and web knowledge along with the elementary Python skills."
                  link="https://thepythonguru.com/sending-emails-in-python-tutorial-with-code-examples/What do you need to send an email with Python? Some basic programming and web knowledge along with the elementary Python skills."
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Programming Language "
                  tag2="Python"
                  title="Reasons to Use Python Over Other Programming Languages"
                  paragraph="The modern IT market provides various programming languages like C#, Java, Python, and more. "
                  link="https://thepythonguru.com/reasons-to-use-python-over-other-programming-languages/"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="browser"
                  tag2="python"
                  title="Running Python in the Browser"
                  paragraph="Running Python in the web browser has been getting a lot of attention lately. "
                  link="https://pythontips.com/2019/05/22/running-python-in-the-browser/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Django "
                  tag2="Database"
                  title="How to Create an Index in Django Without Downtime"
                  paragraph="Managing database migrations is a great challenge in any software project. Luckily, as of version 1.7, Django comes with a built-in migration framework."
                  link="http://www.pybloggers.com/2019/04/how-to-create-an-index-in-django-without-downtime/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Datastructure"
                  tag2="connectivity"
                  title="Dynamic Connectivity Problem"
                  paragraph="Pixels in a digital photo, Computers in a network, People on a social network are all connected objects."
                  link="https://medium.com/omarelgabrys-blog/dynamic-connectivity-problem-9460f3dff2c6"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Datastructure"
                  tag2="sets"
                  title="Partially Ordered Sets"
                  paragraph="This post is motivated by a problem I recently saw, Problem G of NCPC 2007. This is a standard problem that I'm sure many of you have seen before, but the general topic of partially ordered sets is not too well known."
                  link="https://codeforces.com/blog/entry/3781"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="datastructure"
                  tag2="Algorithms"
                  title="How you can change the world by learning Data Structures and Algorithms"
                  paragraph="As a developer, you have the power to change the world! You can write programs that enable new technologies. For instance, develop software to find an earlier diagnosis of diseases."
                  link="https://adrianmejia.com/how-you-can-change-the-world-learning-data-structures-algorithms-free-online-course-tutorial/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Flutter"
                  tag2="App"
                  title="Measuring Your Heart Rate Using Your Phone’s Camera and Flutter"
                  paragraph="IN this article, I'll explain how you can develop a simple app with flutter that measures heart rate... "
                  link="https://medium.com/better-programming/measuring-your-heart-rate-using-your-phones-camera-and-flutter-f444d3c4272a"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="android"
                  tag2="developer"
                  title="Customizable Delivery Options in Android"
                  paragraph="Android App bundles solve some previous problems in android development by providing.."
                  link="https://medium.com/kayvan-kaseb/customizable-delivery-options-in-android-582cc6f3e43a"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="cryptocurrency "
                  tag2="blockchain"
                  title="The Difference Between Cryptocurrency and Blockchain"
                  paragraph="You probably have heard the terms cryptocurrency and blockchain quite a bit, but maybe don't exactly...."
                  link="https://medium.com/illumination/the-difference-between-cryptocurrency-and-blockchain-1d8c27282943"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="VR"
                  tag2="lockdown"
                  title="VR Games to Play in Lockdown"
                  paragraph="Right now we all ar or should be on some sort of lockdown..."
                  link="https://medium.com/super-jump/vr-games-to-play-in-lockdown-3d11079b59c5"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="AR"
                  tag2="Design"
                  title="How the Fantastical, Futuristic Art of AR Face Filters Is Subverting Traditional Notions of Beauty"
                  paragraph="Reality-bending AR lenses imagined by a new generation of designers are redefining our relationships with our digital selves"
                  link="https://medium.com/aiga-eye-on-design/how-the-fantastical-futuristic-art-of-ar-face-filters-is-subverting-traditional-notions-of-beauty-b2ab1041ed68"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="  UIKit"
                  tag2="SwiftUI"
                  title="How to Access the UIKit Components Under SwiftUI Objects"
                  paragraph="How to disable scrolling in a list by accessing the UIScrollView and more
                  "
                  link="https://medium.com/better-programming/how-to-access-the-uikit-components-under-swiftui-objects-4a808568014a"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Swift"
                  tag2="array"
                  title="Sorting an Array in Swift"
                  paragraph="Arrays in swift are collection of data, but these can be sorted with both sort() and sorted()"
                  link="https://medium.com/swlh/sorting-an-array-in-swift-9f67b4a24c95"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="frontend"
                  tag2="backend"
                  title="What’s the Difference Between Front End, Back End, and Full Stack Developer?"
                  paragraph="You have heard of web developers – these are individuals who specialize in developing World Wide Web applications"
                  link="https://thepythonguru.com/whats-the-difference-between-front-end-back-end-and-full-stack-developer/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="email"
                  tag2="privacy"
                  title="Email Security and Privacy"
                  paragraph="I used and do some research of your own."
                  link="https://pythontips.com/2018/12/01/email-security-privacy/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="linux"
                  tag2="flask"
                  tag3="python"
                  title="Develop with Flask and Python 3 in a container on Red Hat Enterprise Linux"
                  paragraph="using Red Hat Enterprise Linux 8 application streams in containers is preferable to using software collections on RHEL 7. "
                  link="https://developers.redhat.com/blog/2019/09/12/develop-with-flask-and-python-3-in-a-container-on-red-hat-enterprise-linux/"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="raspberry pi"
                  tag2="python"
                  title="How to build a Raspberry Pi photo booth"
                  paragraph="that code creates a souvenir photo by superimposing the Coderland logo, a date stamp, and a message on top"
                  link="https://developers.redhat.com/blog/2019/06/03/how-to-build-a-raspberry-pi-photo-booth/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="python"
                  tag2="functions"
                  title="Python Functions Defaults Explained"
                  paragraph="And I have noticed that the interviewers like using the task as the following one.
                  "
                  link="https://medium.com/python4you/python-functions-defaults-explained-ee962c7c6f7a"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="talking cars"
                  tag2="python"
                  title="Talking to cars with Python"
                  paragraph="Modern cars have become mobile computer systems with many small computers running "
                  link="https://talkpython.fm/episodes/show/255/talking-to-cars-with-python"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="hibernate"
                  tag2="java"
                  title="LazyInitializationException – What it is and the best way to fix it"
                  paragraph="The LazyInitializationException is one of the most common exceptions when working with Hibernate."
                  link="https://thoughts-on-java.org/blog/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="java"
                  tag2="expectation"
                  title="What Causes java.lang.reflect.InvocationTargetException?"
                  paragraph="When working with Java Reflection API, it is common to encounter java.lang.reflect.InvocationTargetException."
                  link="https://www.baeldung.com/java-lang-reflect-invocationtargetexception"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="SQL"
                  tag2="inner join"
                  title="SQL INNER JOIN – A Beginner’s Guide"
                  paragraph="In this article, we are going to see how the INNER JOIN works in SQL, and how you.."
                  link="https://vladmihalcea.com/sql-inner-join/"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="JPA"
                  tag2="xml"
                  title="A beginner’s guide to JPA persistence.xml file"
                  paragraph="In this article, I’m going to explain what is the purpose of the JPA persistence.xml "
                  link="https://vladmihalcea.com/jpa-persistence-xml/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="java"
                  tag2="json"
                  title="Multiline String literals with Java Text Blocks"
                  paragraph="In this article, show you how the new Java Text Blocks can help you increase the readability of JPQL, SQL queries, or JSON string values."
                  link="https://vladmihalcea.com/multiline-string-java-text-blocks/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="GIT"
                  tag2="GUI"
                  title="Top 10 Best GUI Git Client for Developers"
                  paragraph="Git is a version control system for tracking file changes. Usually used in a team environment, especially among programmers,"
                  link="https://dev.to/shijiezhou/top-10-best-gui-git-client-for-developer-1gel"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="facebook"
                  tag2="data"
                  title="Data Transfer Project: Enabling portability of photos and videos between services"
                  paragraph="Over the past year, an open source framework has been developed. Today, we are announcing a new tool on Facebook that allows "
                  link="https://engineering.fb.com/security/data-transfer-project/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="programming languag"
                  tag2="c++"
                  title="Stork: How to Make a Programming Language in C++"
                  paragraph="In this series, we will develop a new scripting language and describe that process step by step."
                  link="https://www.toptal.com/c-plus-plus/creating-programming-language-in-c-"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Ruby on Rails"
                  tag2="apps"
                  title="Timestamp Truncation: A Ruby on Rails ActiveRecord Tale"
                  paragraph="Tests are supposed to help keep apps from being flaky. But once in a while, tests themselves can become flaky—even the most straightforward ones. "
                  link="https://www.toptal.com/ruby-on-rails/timestamp-truncation-rails-activerecord-tale"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Programming"
                  tag2="scripting"
                  title="Difference between Programming Language and Scripting Language"
                  paragraph="A programming language is a language used to write set of instructions to perform a task or to get an output from it,"
                  link="https://www.thecrazyprogrammer.com/2020/03/difference-between-programming-language-and-scripting-language.html"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Computer science"
                  tag2="women"
                  title="Why Are There So Few Women in Computer Science?"
                  paragraph="It is widely accepted that women play a key role in our lives. Women are mothers and the modern female entrepreneur is ubiquitous,"
                  link="https://www.thecrazyprogrammer.com/2020/02/why-are-there-so-few-women-in-computer-science.html"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Flutter"
                  tag2="API"
                  title="Flutter Networking Tutorial: Getting Started"
                  paragraph="In this tutorial, you’ll learn how to make asynchronous network requests and handle the responses in a Flutter app"
                  link="https://www.raywenderlich.com/5896601-flutter-networking-tutorial-getting-started"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Bubbles"
                  tag2="Android"
                  title="Bubbles Tutorial for Android 10: Getting Started"
                  paragraph="In this Bubbles for Android 10 tutorial, you’ll learn how to use the Bubble API"
                  link="raywenderlich.com/8220197-bubbles-tutorial-for-android-10-getting-started"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Android"
                  tag2="kotlin"
                  title="Android Networking With Kotlin Tutorial: Getting Started"
                  paragraph="In this tutorial, you’ll get started with Android networking by creating a simple app"
                  link="https://www.raywenderlich.com/6994782-android-networking-with-kotlin-tutorial-getting-started"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Java"
                  tag2="Basics"
                  title="Does Java 'pass-by-reference' or 'pass-by-value'?"
                  paragraph="This may sound unintuitive for some, as it's common for lectures to showcase the difference between"
                  link="https://stackabuse.com/does-java-pass-by-reference-or-pass-by-value/"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Linux"
                  tag2="swift"
                  title="A Complete Guide to Swift Development on Linux"
                  paragraph="In this tutorial you’ll discover everything you need to start developing Swift on Linux. "
                  link="https://www.raywenderlich.com/8325890-a-complete-guide-to-swift-development-on-linux"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="java"
                  tag2="proxy"
                  title="The Proxy Design Pattern in Java"
                  paragraph="The Proxy Design Pattern is a design pattern belonging to the set of structural patterns."
                  link="https://stackabuse.com/the-proxy-design-pattern-in-java/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Git "
                  tag2="Rbase and merge"
                  title="Git Rebase VS Git Merge"
                  paragraph="Git rebase and git merge have similar purpose, that is to integrate a commit made in a branch to another branch."
                  link="https://medium.com/a-technologists-pov/git-rebase-vs-git-merge-b2a299ab43c0"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Google Pay"
                  tag2="App"
                  title="How to Integrate Google Pay Into Your Existing Android App"
                  paragraph="How to Integrate Google Pay Into Your Existing Android App
                  Start accepting payments through GPay"
                  link="https://medium.com/better-programming/how-to-integrate-google-pay-into-your-existing-android-app-d75b269cd623"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="APP"
                  tag2="nlp"
                  title="How To Build a Sentiment Analysis App
                  "
                  paragraph="It is often necessary to analyze texts and detect whether they have a positive, negative, or neutral tone. "
                  link="https://rapidapi.com/blog/build-sentiment-analysis-app/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="datascience"
                  tag2="python"
                  title="Top 25 Python Libraries for Data Science Projects"
                  paragraph="This post is attempting to enlighten you about the most useful and popular Python libraries used by data scientists"
                  link="https://www.techbeamers.com/top-python-libraries-data-science/"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1=""
                  tag2=""
                  title="Detect git Directory with Bash"
                  paragraph="One interesting aspect of working at Mozilla is that Firefox lives in a mercurial repository"
                  link="https://davidwalsh.name/detect-git-directory"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1=""
                  tag2=""
                  title="5 Essential git Commands and Utilities"
                  paragraph="For many of us, git and GitHub play a huge role in our development workflows. Whenever we have a tool that we need to use often, "
                  link="https://davidwalsh.name/5-essential-git-commands-and-utilities"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="MangoDB"
                  tag2="Altas"
                  title="What is Mongo DB Atlas?"
                  paragraph="Today Data plays a major role in every corner of the IT industry.  Hence we need a place to store the data in a secure place for further utilization. "
                  link="https://onlineitguru.com/blogger/what-is-mongo-db-atlas"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="MySQL"
                  title="MySQL Create User with Password"
                  paragraph="This tutorial explains how to create a user with password in MySQL. We’ll use the MySQL Create User command and describe it "
                  link="https://www.techbeamers.com/mysql-create-user/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="clientHeight"
                  tag2="offsetHeight"
                  title="Difference between clientHeight and offsetHeight Property"
                  paragraph="You can use the clientHeight property to measure the inner height of an element, including padding."
                  link="https://www.encodedna.com/javascript/difference-between-clientheight-and-offsetheight.htm"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="UML"
                  title="Architecture of UML"
                  paragraph="A model is a way to represent a system. To envision a system, we will build several models.   "
                  link="Architecture of UML"
                />
              </div>
              <h1>Documentation</h1>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="React native"
                  title="React native documentation"
                  paragraph="Welcome to the very start of your React Native journey! If you're looking for environment setup instructions, "
                  link="https://reactnative.dev/docs/getting-started"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Node js "
                  title="Node js Documentation"
                  paragraph="There are several types of documentation available on this website"
                  link="https://nodejs.org/en/docs/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Swift"
                  title="Swift Documentation"
                  paragraph="You can use the resources on this page as documentation for the Swift language.  "
                  link="https://swift.org/documentation/"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Flutter"
                  title="Flutter Documentation"
                  paragraph="To install and run Flutter, your development environment must meet these minimum requirements:"
                  link="https://flutter.dev/docs"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Android"
                  title="Documentation for android developers"
                  paragraph="Whether you're building for Android handsets, Wear OS by Google, Android TV, Android Auto, or Android Things,"
                  link="https://developer.android.com/docs"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="datascience"
                  title="Welcome to datascience’s documentation!"
                  paragraph="The datascience package was written for use in Berkeley’s DS 8 course and contains useful functionality "
                  link="http://data8.org/datascience/"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Bootstrap"
                  title="Bootstrap Documentation"
                  paragraph="Get started with Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with"
                  link="https://getbootstrap.com/docs/4.1/getting-started/introduction/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Django"
                  title="Django documentation"
                  paragraph="Everything you need to know about Django. "
                  link="https://docs.djangoproject.com/en/3.0/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Java"
                  title="Java Documentation"
                  paragraph="Whether you are working on a new cutting edge app or simply ramping up on new technology, Java documentation has all the information "
                  link="https://docs.oracle.com/en/java/"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="C"
                  title="C Programming Language"
                  paragraph="The interface of C standard library is defined by the following collection of headers."
                  link="https://devdocs.io/c/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="C++"
                  title="C++ Programming Language"
                  paragraph="The interface of C++ standard library is defined by the following collection of headers."
                  link="https://devdocs.io/cpp/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Javascript"
                  title="JavaScript"
                  paragraph=" This part of the JavaScript section on MDN serves as a repository of facts about the JavaScript language"
                  link="https://devdocs.io/javascript/"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="HTML"
                  title="HTML: Hypertext Markup Language"
                  paragraph="HTML (HyperText Markup Language) is the most basic building block of the Web. "
                  link="https://developer.mozilla.org/en-US/docs/Web/HTML"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="CSS"
                  title="CSS: Cascading Style Sheets"
                  paragraph="Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML"
                  link="https://developer.mozilla.org/en-US/docs/Web/CSS"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="DBMS"
                  title="Database Documentation"
                  paragraph="Oracle provides a range of industry-leading on-premises and cloud-based solutions to meet the data management requirements  "
                  link="https://docs.oracle.com/en/database/"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="sql"
                  title="Microsoft SQL documentation"
                  paragraph="Learn how to use Azure SQL Services and SQL Server to manage your database needs, both on-premises and in the cloud."
                  link="https://docs.microsoft.com/en-us/sql/?view=sql-server-ver15"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Python"
                  title="Python 3.8.2 documentation"
                  paragraph="Welcome! This is the documentation for Python 3.8.2.

                  "
                  link="https://docs.python.org/3/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Reactjs"
                  title="getting started with react"
                  paragraph="React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial. "
                  link="https://reactjs.org/docs/getting-started.html"
                />
              </div>
            </div>
            <div className="col-md-3 ">
              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProgrammingLanguagesBlog;
