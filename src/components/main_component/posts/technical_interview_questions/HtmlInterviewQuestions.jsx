import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";
import RoadMapCard from "../../tutorials/RoadMapCard";
import InterviewQuestionCardCarousel from "./InterviewQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FbLikeShare from "../../../FbLikeShare";
import { faHome, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import LearningSideSection from "../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../right_section/Technologies";

class HtmlInterviewQuestions extends Component {
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
              Find the Best HTML Interview Questions
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
                  question={`1) What is HTML?
                `}
                  answer={`HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. It makes the text more interactive and dynamic. It can turn text into images, tables, links`}
                />
                <QuestionCard
                  question={`2) What are Tags?
                `}
                  answer={`HTML tags are composed of three things: an opening tag, content and ending tag. Some tags are unclosed tags.


                HTML documents contain two things:
                
                content, and
                tags
                When a web browser reads an HTML document, the browser reads it from top to bottom and left to right. HTML tags are used to create HTML documents and render their properties. Each HTML tags have different properties.
                
                Syntax:
                <tag> content </tag> 

                Content is placed between tags to display data on the web page.
                
                `}
                />
                <QuestionCard
                  question={`3) Do all HTML tags have an end tag?
                `}
                  answer={`No. There are some HTML tags that don't need a closing tag. For example: <image> tag, <br> tag. More details.

                `}
                />
                <QuestionCard
                  question={`4) What is formatting in HTML?
                `}
                  answer={`The HTML formatting is a process of format the text for a better look and feel. It uses different tags to make text bold, italicized, underlined`}
                />
                <QuestionCard
                  question={`5) How many types of heading does an HTML contain?
                `}
                  answer={`The HTML contains six types of headings which are defined with the <h1> to <h6> tags. Each type of heading tag displays different text size from another. So, <h1> is the largest heading tag and <h6> is the smallest one.

                `}
                />
                <QuestionCard
                  question={`6) How to create a hyperlink in HTML?
                `}
                  answer={`The HTML provides an anchor tag to create a hyperlink that links one page to another page. These tags can appear in any of the following ways:

                Unvisited link - It is displayed, underlined and blue.
                Visited link - It is displayed, underlined and purple.
                Active link - It is displayed, underlined and red.
                `}
                />
                <QuestionCard
                  question={`7) Which HTML tag is used to display the data in the tabular form?
                `}
                  answer={`The HTML table tag is used to display data in tabular form (row * column). It also manages the layout of the page, e.g., header section, navigation bar, body content, footer section.`}
                />
                <QuestionCard
                  question={`8) What are some common lists that are used when designing a page?
                `}
                  answer={`There are many common lists which are used to design a page. You can choose any or a combination of the following list types:

                Ordered list - The ordered list displays elements in numbered format. It is represented by <ol> tag.
                Unordered list - The unordered list displays elements in bulleted format. It is represented by <ul> tag.
                Definition list - The definition list displays elements in definition form like in dictionary. The <dl>, <dt> and <dd> tags are used to define description list.`}
                />
                <QuestionCard
                  question={`9) What is the difference between HTML elements and tags?
                `}
                  answer={`HTML elements communicate to the browser to render text. When the elements are enclosed by brackets <>, they form HTML tags. Most of the time, tags come in a pair and surround content.

                `}
                />
                <QuestionCard
                  question={`10) What is semantic HTML?
                `}
                  answer={`Semantic HTML is a coding style. It is the use of HTML markup to reinforce the semantics or meaning of the content. For example: In semantic HTML <b> </b> tag is not used for bold statement as well as <i> </i> tag is used for italic. Instead of these we use <strong></strong> and <em></em> tags.

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
              imgsource="html_tech.jpeg"
              title="Top 50 HTML Interview Questions and Answers "
              source="(edureka)"
              tag1="HTML"
              tag2=" Interview Questions"
              link="https://www.edureka.co/blog/interview-questions/top-50-html-interview-questions-and-answers/"
            />
            <RoadMapCard
              imgsource="html_tech.jpeg"
              title="30 Top HTML Interview Questions and Answers"
              source="(softwaretestinghelp)"
              tag1="HTML"
              tag2=" Interview Questions"
              link="https://www.softwaretestinghelp.com/html-interview-questions/"
            />
            <RoadMapCard
              imgsource="html_tech.jpeg"
              title="Top 60 HTML & HTML5 Interview Questions & Answers"
              source="(guru99)"
              tag1="HTML"
              tag2=" Interview Questions"
              link="https://career.guru99.com/top-50-html-interview-questions/"
            />
            <RoadMapCard
              imgsource="html_tech.jpeg"
              title="35+ HTML Interview Questions"
              source="(online interview questions)"
              tag1="HTML"
              tag2=" Interview Questions"
              link="https://www.onlineinterviewquestions.com/html-interview-questions/"
            />
            <RoadMapCard
              imgsource="html_tech.jpeg"
              title="Latest HTML interview questions for frontend web developers"
              source="(techbeamers)"
              tag1="HTML"
              tag2=" Interview Questions"
              link="https://www.techbeamers.com/latest-html-interview-questions/"
            />
            <RoadMapCard
              imgsource="html_tech.jpeg"
              title="13 Most Helpful HTML Interview Questions & Best Answers"
              source="(goskills)"
              tag1="HTML"
              tag2=" Interview Questions"
              link="https://www.goskills.com/Development/Articles/HTML-interview-questions-answers"
            />

            <LearningSideSection language="html" />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default HtmlInterviewQuestions;
