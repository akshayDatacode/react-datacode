import React, { Component } from "react";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";
import HeaderCard from "../../../HeaderCard";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../../right_section/Technologies";
import FbLikeShare from "../../../FbLikeShare";
class JSMCQ2 extends Component {
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
          <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              JavaScript Multiple choice Questions Set-1
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" /> 
            </Link>
            <Link
              to="/index_mcqs"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}

            >
              <FontAwesomeIcon icon={faChalkboardTeacher} size="2x" color="#06CB6C" />

            </Link>
            <Link
              to="/index_js_mcqs"
              className="badge mr-1 text-white"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                  icon={faCode}
                  size="1x"
                  color="#06CB6C"
                  className="mr-2"
                />
                back to Index
            </Link>
            <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="11"
                    question="What will be the output of the following ?"
                    language="js"
                    code={`<script type='text/javascript'>
var name;
name = 'Datacode';
</script>
<script type='text/javascript'>
document.write(name);
</script>`}
                    correctAnswer="Datacode"
                    v1="Nothing will be printed"
                    v2="Datacode"
                    v3="Error"
                    v4="None of these"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="12"
                    question="+Infinity in JS gets added with +Infinity then output of the code will be -"
                    correctAnswer="+Infinity"
                    v1="-Infinity"
                    v2="NaN"
                    v3="+Infinity"
                    v4="none of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="13"
                    question="What will be the output of the following JavaScript code?"
                    language="js"
                    code={`var a1 = [,,,]; 
var a2 = new Array(3); 
0 in a1 
0 in a2`}
                    correctAnswer="true false"
                    v1="true false"
                    v2="false true"
                    v3="true true"
                    v4="false true"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="14"
                    question="What is the observation made in the following JavaScript code?"
                    language="js"
                    code={`if (!a[i]) continue;`}
                    correctAnswer="Skips the null elements"
                    v1="Skips the defined elements"
                    v2="Skips the existent elements"
                    v3="Skips the null elements"
                    v4="Skips the defined & existent elements"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="15"
                    question="What convenience does the following JavaScript code snippet provide?"
                    language="js"
                    code={`let succ = function(x) x+1, yes = function() true, no = function() false;`}
                    correctAnswer="Functional behaviour"
                    v1="Functional behaviour"
                    v2="Modular behaviour"
                    v3="No convenience"
                    v4="Shorthand expression"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="16"
                    question="Which of the following are the necessary events currently?"
                    correctAnswer="Onclick"
                    v1="DOMActivate"
                    v2="DOMFocusIn"
                    v3="DOMNodeInserted"
                    v4="Onclick"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="17"
                    question="Which is the function used to retrieve a value?"
                    correctAnswer="getItem()"
                    v1="get()"
                    v2="retrieve()"
                    v3="getItem()"
                    v4="retrieveItem()"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="18"
                    question="What will the following JavaScript code snippet work? If not, what will be the error?"
                    language="js"
                    code={`function tail(o) 
{ 
    for (; o.next; o = o.next) ;
    return o;
}`}
                    correctAnswer="Yes, this will work"
                    v1="No, this will throw an exception as only numerics can be used in a for loop"
                    v2="No, this will not iterate"
                    v3="Yes, this will work"
                    v4="No, this will result in a runtime error with the message “Cannot use Linked List”"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="19"
                    question=" What will be the output of the following JavaScript code?"
                    language="js"
                    code={`function myFunction() 
{
    document.getElementById('demo').innerHTML = Boolean(10 > 9);
}`}
                    correctAnswer="true"
                    v1="true"
                    v2="false"
                    v3="error"
                    v4="0"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="20"
                    question="What does the value 2 of the WebSocket attribute Socket.readyState indicate?"
                    correctAnswer="Handshake connection"
                    v1="Closed connection"
                    v2="Handshake connection"
                    v3="Unestablished connection"
                    v4="Established connection and communication is possible"
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
            <div className="col-md-4 mt-md-5 mt-3">
            <LearningSideSection language="js" />
            <RightSideSection />
            <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JSMCQ2;
