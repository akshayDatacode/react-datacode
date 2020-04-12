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
              <h2 className="text-center mb-4">DBMS Community Blogs</h2>
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
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item active">
                      <Link class="page-link" to="/dbms_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item ">
                      <Link class="page-link" to="dbms_blog2">
                        2
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
