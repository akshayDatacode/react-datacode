import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import ArticlePostCard from "../ArticlePostCard";
import { Link } from "react-router-dom";
class DBMSBlog extends Component {
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
              <div className="row">
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

                <h1>DBMS</h1>
                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="SQL"
                    title="SQL EXISTS and NOT EXISTS"
                    paragraph="Although the EXISTS operator has been available since SQL:86, the very first edition of the SQL Standard, I found that there are still many application developers "
                    link="https://vladmihalcea.com/sql-exists/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="joins"
                    title="SQL CROSS JOIN – A Beginner’s Guide"
                    paragraph="For our poker card game application, we have created the ranks and suits database tables:"
                    link="https://vladmihalcea.com/sql-cross-join/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="DBMS"
                    title="What is a DBMS? Database Management Systems Explained"
                    paragraph="The term ‘database’ is defined as any collection of electronic records that can be processed to produce useful information. The data can be accessed, modified, managed, controlled and organized"
                    link="https://www.bmc.com/blogs/dbms-database-management-systems/"
                  />
                </div>

                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="DBMS"
                    title="Database Management System (DBMS) Basic Concepts"
                    paragraph="A model is a representation of reality, ‘real world’ objects and events, and their associations. It is an abstraction that concentrates on the essential,"
                    link="http://dbmsbasics.blogspot.com/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="DBMS"
                    title="Creating or Altering an Objects with a Single Statement"
                    paragraph="Do you get tired of having your CREATE PROCEDURE statement failing if the stored procedure already exists?"
                    link="https://www.databasejournal.com/features/mssql/creating-or-altering-an-objects-with-a-single-statement.html"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1=".NET"
                    tag2="DBMS"
                    title="Connecting to a MySQL Database in .NET"
                    paragraph=".NET is great and provides a ton of tools for working with databases and data sources. There are times though that a data source may not be inherently supported. In a case such as MySQL you may not see the MySQL connection options when creating binding sources or data sources for your project.

                  What do you do then?"
                    link="https://www.databasejournal.com/features/mysql/connecting-to-a-mysql-database-in-.net.html"
                  />
                </div>

                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="firebase"
                    title="Introduction to Firebase"
                    paragraph="Firebase is a Cloud-hosted, NoSQL database that uses a document-model. It can be horizontally scaled while letting you store and synchronize data in real-time among users"
                    link="https://www.databasejournal.com/features/mysql/introduction-to-firebase.html"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="SQL"
                    title="Migrate SQL workloads to the cloud with confidence"
                    paragraph="Wouldn’t it be great if you could see how a workload will perform in a new environment before migrating a database to the cloud? Then you could fix any queries "
                    link="https://cloudblogs.microsoft.com/sqlserver/2020/03/31/migrate-sql-workloads-to-the-cloud-with-confidence/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="Server"
                    title="SQL SERVER – Fixing Freezing Activity Monitor"
                    paragraph="The other day I had a very interesting experience while working with my client on Comprehensive Database Performance Health Check. While doing performance tuning"
                    link="https://blog.sqlauthority.com/2020/04/08/sql-server-fixing-freezing-activity-monitor/"
                  />
                </div>

                <div className="card-deck m-2">
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="MangoDB"
                    title="MongoDB Compass – Missing a Schema Section"
                    paragraph="While working on SQL Server Comprehensive Database Performance Health Check, with a client who uses many different SQL and NoSQL databases. "
                    link="https://blog.sqlauthority.com/2020/04/04/mongodb-compass-missing-a-schema-section/"
                  />
                  <ArticlePostCard
                    imgsource="js.jpeg"
                    tag1="datagrip"
                    title="Top 9 SQL Features of DataGrip You Have to Know"
                    paragraph="DataGrip is a universal tool for dealing with databases. It supports PostgreSQL, MySQL, SQL Server, Oracle, and many other databases."
                    link="https://blog.jetbrains.com/datagrip/2019/03/11/top-9-sql-features-of-datagrip-you-have-to-know/?rdt_cid=2968134998835665122&utm_campaign=ww_en_dc_datagrip_subreddit&utm_content=Var1_card&utm_medium=cpc&utm_source=reddit"
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
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item active">
                      <Link class="page-link" to="/prog_lan_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="prog_lan_blog2">
                        2
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="prog_lan_blog3">
                        3
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="prog_lan_blog4">
                        4
                      </Link>
                    </li>
                    <li class="page-item">
                      <Link class="page-link" to="prog_lan_blog2">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
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

export default DBMSBlog;
