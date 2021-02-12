import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../../app/components/footer_component/FooterComponentUpper";
import RightSideSection from "../../../../../right_section/RightSideSection";
import RecommendPost from "../../../../../right_section/RecommendPost";
import MCQTestCardCarousel from "../MCQTestCardCarousel";
import FbLikeShare from "../../../../../FbLikeShare";

class JavaQuizeTest1 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
    show: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  counter = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  showQuizeScore = () => {
    this.setState({ show: true });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        <HeaderBannerSection imgsource="headerdark.jpeg" className="mb-md-5" />

        <div class="container-fluid mt-md-4">
          <FbLikeShare />
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="row">
                <div className="col text-center mt-3 mb-3">
                  <h2>Java Quiz Test Beginner</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Link to="/home" className="badge badge-primary mr-1">
                    Home >>
                  </Link>
                  <Link
                    to="/index_quize_tests"
                    className="badge badge-warning mr-1"
                  >
                    Quize Test >>
                  </Link>
                  <Link
                    to="/java_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    Java Quiz >>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    language="java"
                    question="What is the range of short data type in Java?"
                    correctAnswer="-32768 to 32767"
                    v1="-128 to 127"
                    v2="-32768 to 32767"
                    v3="-2147483648 to 2147483647"
                    v4="None of the mentioned"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    language="java"
                    question="Which of the following are legal lines of Java code?"
                    code={`1. int w = (int)888.8;
2. byte x = (byte)100L;
3. long y = (byte)100;
4. byte z = (byte)100L;`}
                    correctAnswer="All statements are correct"
                    v1=" 1 and 2"
                    v2="2 and 3 "
                    v3="3 and 4"
                    v4="All statements are correct"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="Which of these literals can be contained in float data type variable?"
                    language="java"
                    correctAnswer=" -3.4e+038"
                    v1=" -1.7e+308"
                    v2=" -3.4e+038"
                    v3="+1.7e+308"
                    v4="-3.4e+050"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    language="java"
                    question="In Iterator, hasMoreElements() method of Enumeration has been changed to:
                "
                    correctAnswer="hasNext()
                "
                    v1="hasNextElement()
                "
                    v2="isNext()
                "
                    v3="hasNext()
                "
                    v4="name remains same
                "
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="TreeSet internally uses that one to store elements?
                "
                    language="java"
                    correctAnswer="TreeMap
                "
                    v1="HashMap
                "
                    v2="TreeMap
                "
                    v3="LinkedMap"
                    v4="LinkedHashMap
                "
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    language="java"
                    question="Enumeration returned by ArrayList is
                "
                    correctAnswer="Fail-fast
                "
                    v1="Fail-fast
                "
                    v2="Fail"
                    v3="Fail-safe
                "
                    v4="None of the above
                "
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    language="java"
                    question="Which of these is synchronised and isn't sorted by natural order?"
                    correctAnswer=""
                    v1="EnumSet"
                    v2="LinkedList
                "
                    v3="ConcurrentSkipListSet"
                    v4="Vector"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    language="java"
                    question="The Comparator interface contains the method?
                "
                    correctAnswer="compare()
                "
                    v1="compareWith()
                "
                    v2="compareTo()
                "
                    v3="compareToWith()
                "
                    v4="compare()
                "
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    language="java"
                    question="What will Collections.sort internally uses when number of elements are less than 7?"
                    correctAnswer="Insertion sort"
                    v1="Insertion sort"
                    v2="Merge sort
                "
                    v3="Quick sort
                "
                    v4="bubble sort"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    language="java"
                    question="In ListIterator, when a call to next() or previous(), if a call is made to set(E element) followed by add() or remove() what happens?"
                    correctAnswer="UnsupportedOperationException
                "
                    v1="Compilation error"
                    v2="UnsupportedOperationException
                "
                    v3="ConcurrentModificationException
                "
                    v4="run time error
                "
                    counter={this.counter}
                  />
                </div>
              </div>
              <div className="text-center mb-3">
                <Button variant="primary" onClick={this.handleShow}>
                  Show Score
                </Button>
              </div>
              <div className="row">
                <div className="col">
                  <h5> For More Quiz Test</h5>
                  <MCQTestCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-md-4">
              <h4>Recommendation</h4>
              <RecommendPost
                imgsource="python_mcqs.jpeg"
                RecPostHading="Python MCQs Questions"
                link="/index_python_mcqs"
              />
              <RecommendPost
                imgsource="java_mcqs.jpeg"
                RecPostHading="Java MCQs Questions"
                link="/index_java_mcqs"
              />
              <RecommendPost
                imgsource="c_mcq.jpeg"
                RecPostHading="C MCQs Questions"
                link="/index_c_mcqs"
              />
              <RightSideSection />
            </div>
          </div>
        </div>
        <ScoreCard
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          show={this.state.show}
          count={this.state.count}
        />
      </>
    );
  }
}

export default JavaQuizeTest1;
