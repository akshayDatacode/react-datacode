import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../footer_component/FooterComponentUpper";
import RightSideSection from "../../../../../right_section/RightSideSection";
import RecommendPost from "../../../../../right_section/RecommendPost";
import MCQTestCardCarousel from "../MCQTestCardCarousel";
class DSQuizeTest1 extends Component {
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
        <HeaderBannerSection imgsource="headerdark.jpeg" />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="row">
                <div className="col text-center mt-3 mb-3">
                  <h2>DataStructure Quiz Test Beginner</h2>
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
                    to="/ds_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    DataStructure Quiz >>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    question="In a min-heap:"
                    correctAnswer="parent nodes have values greater than or equal to their childs"
                    v1="parent nodes have values greater than or equal to their childs"
                    v2="parent nodes have values less than or equal to their childs"
                    v3="both statements are true

                "
                    v4="both statements are wrong

                "
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="Stack is used for"
                    correctAnswer="Recursion"
                    v1="CPU Resource Allocation"
                    v2="Breadth First Traversal "
                    v3="Recursion"
                    v4="None of the above"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="Travelling salesman problem is an example of"
                    correctAnswer="Greedy Algorithm"
                    v1="Dynamic Algorithm"
                    v2="Greedy Algorithm"
                    v3="Recursive Approach"
                    v4="Divide & Conquer"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="Binary search tree has best case run-time complexity of Ο(log n). What could the worst case?"
                    correctAnswer="Ο(n)"
                    v1="Ο(n)"
                    v2="Ο(n2)"
                    v3="Ο(n3)"
                    v4="None of the above"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="Which of the following has search effeciency of Ο(1) −"
                    correctAnswer=" Hash Table"
                    v1="Tree"
                    v2="Heap"
                    v3=" Hash Table"
                    v4="Linked-List"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="How many swaps are required to sort the given array using bubble sort - { 2, 5, 1, 3, 4}"
                    correctAnswer="4"
                    v1="4"
                    v2="5"
                    v3="6"
                    v4="7"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="Which of the following uses memoization?"
                    correctAnswer="Dynamic programming approach"
                    v1="Greedy approach"
                    v2=" Divide and conquer approach"
                    v3="Dynamic programming approach"
                    v4="None of the above!"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="Heap is an example of"
                    correctAnswer="complete binary tree"
                    v1="complete binary tree"
                    v2="spanning tree"
                    v3="sparse tree"
                    v4="binary search tree"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="If we choose Prim's Algorithm for uniquely weighted spanning tree instead of Kruskal's Algorithm, then"
                    correctAnswer="we'll get the same spanning tree."
                    v1="we'll get a different spanning tree"
                    v2="we'll get the same spanning tree."
                    v3="spanning will have less edges."
                    v4="spanning will not cover all vertices."
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="Which of the following algorithm does not divide the list −"
                    correctAnswer="linear search"
                    v1="linear search"
                    v2="binary search"
                    v3="merge sort"
                    v4="quick sort"
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

export default DSQuizeTest1;
