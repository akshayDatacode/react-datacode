import React, { Component } from "react";
import Quize from "../quize";
import HeaderCard from "../../../HeaderCard";
import RecommendPost from "../../../../right_section/RecommendPost";
import RightSideSection from "../../../../right_section/RightSideSection";
import { Link } from "react-router-dom";
import MCQCardCarousel from "../MCQCardCarousel";
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
        <HeaderCard title="JavaScript MCQs Set 2" />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid ">
                <Link to="/home" className="badge badge-primary mr-1">
                  Home >{" "}
                </Link>
                <Link to="/index_mcqs" className="badge badge-warning mr-1">
                  Programming MCQs >{" "}
                </Link>
                <Link to="/index_js_mcqs" className="badge badge-success mr-1">
                  JS-MCQs >
                </Link>
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="11"
                    question="What will be the output of the following ?"
                    language="Javascript"
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
                    language="Javascript"
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
                    language="Javascript"
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
                    language="Javascript"
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
                    language="Javascript"
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
                    language="Javascript"
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
            <div className="col-md-4">
              <RightSideSection />
              <h5 className="mb-3">Recommend for you</h5>
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
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JSMCQ2;
