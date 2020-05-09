import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";
import RoadMapCard from "../../technologies/RoadMapCard";
import InterviewQuestionCardCarousel from "./InterviewQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FbLikeShare from "../../../FbLikeShare";
import { faHome, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import Technologies from "../../../right_section/Technologies";

class CloudComputingInterviewQuestions extends Component {
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
              Find the Best Cloud Computing Interview Questions
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>
            <Link
              to="/index_interview_questioins"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="2x"
                color="#06CB6C"
              />
            </Link>
              <div className="row mb-5">
                <div className="col">
                  <QuestionCard
                    question={`1) What is cloud computing?
`}
                    answer={`Cloud computing is an internet based new age computer technology. It is the next stage technology that uses the clouds to provide the services whenever and wherever the user need it.It provides a method to access several servers world wide.


`}
                  />
                  <QuestionCard
                    question={`2) What are the benefits of cloud computing?
`}
                    answer={`The main benefits of cloud computing are:

Data backup and storage of data.
Powerful server capabilities.
Incremented productivity.
Very cost effective and time saving.
Software as Service known as SaaS.`}
                  />
                  <QuestionCard
                    question={`3) What is a cloud?
`}
                    answer={`A cloud is a combination of networks ,hardware, services, storage, and interfaces that helps in delivering computing as a service. It has three users :

End users
Business management users
cloud service provider`}
                  />
                  <QuestionCard
                    question={`4) What are the different data types used in cloud computing?
 `}
                    answer={`There are different data types in cloud computing like emails, contracts, images , blogs etc. As we know that data is increasing day by day so it is needed to new data types to store these new data. For an example, if you want to store video then you need a new data type.

`}
                  />
                  <QuestionCard
                    question={`5) Which are the different layers that define cloud architecture?
`}
                    answer={`Following are the different layers that are used by cloud architecture:

CLC or Cloud Controller
Walrus
Cluster Controller
SC or Storage Controller
NC or Node Controller`}
                  />
                  <QuestionCard
                    question={`6) Which platforms are used for large scale cloud computing?
`}
                    answer={`The following platforms are used for large scale cloud computing:

Apache Hadoop
MapReduce
`}
                  />
                  <QuestionCard
                    question={`7) What are the different layers in cloud computing? Explain working of them.
`}
                    answer={`There are 3 layers in the hierarchy of cloud computing.

Infrastructure as a service (IaaS):It provides cloud infrastructure in terms of hardware as like memory, processor, speed etc.

Platform as a service (PaaS):It provides cloud application platform for the developer.

Software as a service (SaaS)::It provides the cloud applications to users directly without installing anything on the system. These applications remains on cloud.

`}
                  />
                  <QuestionCard
                    question={`8) What do you mean by software as a service?
`}
                    answer={`Software As a Service (SaaS) is an important layer of cloud computing. It provides cloud applications like Google is doing. It facilitate users to save their document on the cloud and create as well.

`}
                  />
                  <QuestionCard
                    question={`9) What is the platform as a service?
`}
                    answer={`It is also a layer in cloud architecture. This model is built on the infrastructure model and provide resources like computers, storage and network. It is responsible to provide complete virtualization of the infrastructure layer, make it look like a single server and invisible for outside world.

`}
                  />
                  <QuestionCard
                    question={`10) What is on-demand functionality? How is it provided in cloud computing?
`}
                    answer={`Cloud computing provides a on-demand access to the virtualized IT resources. It can be used by the subscriber. It uses shared pool to provide configurable resources. Shared pool contains networks, servers, storage, applications and services.

`}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h4 className="text-primary">For More Technologies</h4>
                  <InterviewQuestionCardCarousel />
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-5">
            <FbLikeShare />{" "}
            <h4 className="mb-3 mt-4" style={{ color: "#072C71" }}>
              Other Learning Resources
            </h4>
              <RoadMapCard
                imgsource="cn_tech.jpeg"
                title="Top Cloud Computing Interview Questions"
                source="(intellipaat)"
                tag1="Cloud Computing"
                link="https://intellipaat.com/blog/interview-question/cloud-computing-interview-questions/"
              />
              <RoadMapCard
                imgsource="cn_tech.jpeg"
                title="Cloud Computing Interview Questions & Answers (Fresher)"
                source="(janbask)"
                tag1="cloud"
                tag2="interview"
                link="https://www.janbasktraining.com/blog/cloud-computing-interview-questions-answers/"
              />
              <RoadMapCard
                imgsource="cn_tech.jpeg"
                title="40 Latest Cloud Computing Interview Questions"
                source="(data-flair.training)"
                tag1=" Cloud"
                tag2=" interview"
                link="https://data-flair.training/blogs/cloud-computing-interview-questions/"
              />
              <RoadMapCard
                imgsource="cn_tech.jpeg"
                title="TOP 250+ Cloud Computing Interview Questions and Answers "
                source="(wisdomjobs)"
                tag1="cloud"
                tag2="Answer"
                link="https://www.wisdomjobs.com/e-university/cloud-computing-interview-questions.html"
              />
              <RoadMapCard
                imgsource="cn_tech.jpeg"
                title="Top 50+ Cloud Computing Interview Questions 2020 "
                source="(gangboard)"
                tag1="Cloud"
                tag2="Computing"
                link="https://www.gangboard.com/blog/cloud-computing-interview-questions-and-answers"
              />
              <RoadMapCard
                imgsource="cn_tech.jpeg"
                title="Top 50 Frequently Asked Cloud Computing Interview Questions"
                source="(ubuntupit)"
                tag1="cloud computing"
                tag2="interview questions"
                link="https://www.ubuntupit.com/frequently-asked-cloud-computing-interview-questions/"
              />

            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default CloudComputingInterviewQuestions;
