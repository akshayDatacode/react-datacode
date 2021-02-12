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

class ReactQuizeTest2 extends Component {
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
                  <h2>React Quiz Test Intermediate</h2>
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
                    to="/react_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    React Quize >>
          </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    question="How do you access a function fetch() from a h1 element in JSX?"
                    correctAnswer="<h1>{fetch()}</h1>"
                    v1="<h1>{fetch()}</h1>"
                    v2="<h1>${fetch()}</h1>"
                    v3="<h1>{fetch}</h1>"
                    v4="<h1>${fetch}</h1>"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="Which method in a React Component should you override to stop the component from updating?"
                    correctAnswer="shouldComponentUpdate"
                    v1="willComponentUpdate"
                    v2="shouldComponentUpdate "
                    v3="componentDidUpdate"
                    v4="componentDidMount"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="What's used to pass data to a component from outside?"

                    correctAnswer="props"
                    v1="setState"
                    v2="render with arguments"
                    v3="PropTypes"
                    v4="props"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="Which of the following is the correct data flow sequence of flux concept?"
                    correctAnswer=""
                    v1="Action->Store->Dispatcher->View"
                    v2="Dispatcher->Action->Store->View"
                    v3="Action->Dispatcher->Store->View"
                    v4="Action->Dispatcher->View->Store"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="Which functions allow to bind the context of the components?"

                    correctAnswer="=>"
                    v1=":"
                    v2="=>"
                    v3="."
                    v4=" ::"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="Who Develop React.js?"
                    correctAnswer="Facebook"
                    v1="Facebook"
                    v2="microsoft"
                    v3="Twitter
                "
                    v4="Google"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="Which of the following is not components of Redux?"
                    correctAnswer="State"
                    v1="Action"
                    v2="Reducer"
                    v3="View"
                    v4="State"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="Which of the following methods used for state of the component?"
                    correctAnswer="setState"
                    v1="setState"
                    v2=" forceUpdate"
                    v3="getInitialState"
                    v4="getPropsValue"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="ReactJS renders Components start with?"
                    correctAnswer="Uppercase"
                    v1="Lowercase"
                    v2="Uppercase"
                    v3="curly brackets"
                    v4="Variable"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="Which of the following represented the Pre and post life cycle methods of components ?"
                    correctAnswer="Will, Did"
                    v1="getInitialState, componentWillMount"
                    v2="Mounting, Unmounting"
                    v3="Will, Did"
                    v4="Before, After"
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
        <div className="container-fluid mt-5">
          <FooterComponentUpper />
        </div>
      </>
    );
  }
}

export default ReactQuizeTest2;
