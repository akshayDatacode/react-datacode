import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import ArticlePostCard from "../ArticlePostCard";
import { Link } from "react-router-dom";
import Discuss from "../../Discuss";
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
              </div>
              <div className="row justify-content-center mt-3">
                <nav>
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <Link class="page-link" to="/dbms_blog">
                        1
                      </Link>
                    </li>
                    <li class="page-item active">
                      <Link class="page-link" to="dbms_blog2">
                        2
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <h3 className="mt-4 mb-2" style={{ color: "#072C71" }}>
                Discuss with the Community
              </h3>
              <Discuss
                url="https://www.datacode.in/?p=/react-datacode/#/index_articles"
                title="Communities Learning Blogs"
                identifier="index_articles"
              />
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
