import React, { Component } from "react";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faListAlt } from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import HeaderCard from "../../../HeaderCard";

class PythonMCQ extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  counter = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <HeaderCard
          title="Python MCQs Set 1"
          color="#FF9B00"
          textcolor="black"
        />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
                <Link to="/home" className="badge badge-primary mr-1">
                  <FontAwesomeIcon icon={faHome} size="1x" />
                </Link>
                <Link to="/index_mcqs" className="badge badge-info  mr-1">
                  MCQs >>
                </Link>
                <Link
                  to="/index_python_mcqs"
                  className="badge badge-success mr-1"
                >
                  Python MCQs >>
                </Link>
                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="Which of the following is not a keyword?"
                    correctAnswer="Programming"
                    v1="eval"
                    v2="assert"
                    v3=" nonlocal"
                    v4="pass"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="Which of the following is an invalid statement?"
                    correctAnswer="a b c = 1000 2000 3000"
                    v1="abc = 1,000,000"
                    v2="a b c = 1000 2000 3000"
                    v3="a,b,c = 1000, 2000, 3000"
                    v4="a_b_c = 1,000,000"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="Which of the following will run without errors?"
                    correctAnswer="round(45.8)"
                    v1="round(45.8)"
                    v2="round(6352.898,2,5)"
                    v3="round()"
                    v4="round(7463.123,2,1)"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="Which of the following is incorrect?"
                    correctAnswer="float(’12+34′)"
                    v1="float(‘inf’)"
                    v2="float(‘nan’)"
                    v3="float(’56’+’78’)"
                    v4="float(’12+34′)"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question="What are the values of the following Python expressions?"
                    language="Python"
                    code={`2**(3**2)
(2**3)**2
2**3**2`}
                    correctAnswer="512, 64, 512"
                    v1="64, 512, 64"
                    v2="64, 64, 64"
                    v3=" 512, 512, 512"
                    v4="512, 64, 512"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question="To find the decimal value of 1111, that is 15, we can use the function:"
                    correctAnswer="int(‘1111’,2)"
                    v1="int(1111,10)"
                    v2=" int(‘1111’,10)"
                    v3="int(1111,2)"
                    v4="int(‘1111’,2)"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="What will be the output of the following Python code?"
                    language="Python"
                    code={`['f', 't'][bool('spam')]`}
                    correctAnswer="t"
                    v1="t"
                    v2="f"
                    v3="No output"
                    v4="error"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="What will be the output of the following Python code?"
                    language="Python"
                    code={`l=list('HELLO')
p=l[0], l[-1], l[1:3]
'a={0}, b={1}, c={2}'.format(*p)`}
                    correctAnswer="“a=H, b=O, c=[‘E’, ‘L’]”"
                    v1="Error"
                    v2="“a=’H’, b=’O’, c=(E, L)”"
                    v3="“a=H, b=O, c=[‘E’, ‘L’]”"
                    v4="Junk value"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question="What will be the output of the following Python code snippet?"
                    language="Python"
                    code={`print('Ab!2'.swapcase())`}
                    correctAnswer="aB!2"
                    v1="AB!@"
                    v2="ab12"
                    v3="aB!2"
                    v4="aB1@"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="What will be the output of the following Python code?"
                    language="Python"
                    code={`a=[13,56,17]
a.append([87])
a.extend([45,67])s
print(a)`}
                    correctAnswer="[13, 56, 17, [87], 45, 67]"
                    v1="[13, 56, 17, 87, 45, 67]
                "
                    v2="[13, 56, 17, [87], 45, 67]"
                    v3=" [13, 56, 17, 87,[ 45, 67]]"
                    v4="[13, 56, 17, [87], [45, 67]]"
                    counter={this.counter}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>For More MCQs Questions</h4>
                  <MCQCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <h4>Recommended for you</h4>
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Set 2"
                link="/python_mcq_2"
              />
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Set 3"
                link="/python_mcq_3"
              />
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Set 4"
                link="/python_mcq_4"
              />
              <RecommendPost
                imgsource="python_mcq.jpeg"
                RecPostHading="Python MCQs Set 5"
                link="/python_mcq_5"
              />
              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PythonMCQ;
