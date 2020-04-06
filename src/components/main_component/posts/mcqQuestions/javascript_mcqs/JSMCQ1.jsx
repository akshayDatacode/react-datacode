import React, { Component } from "react";
import Quize from "../quize";
import HeaderBannerSection from "../../../HeaderBannerSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import RightSideSection from "../../../../right_section/RightSideSection";
import { Link } from "react-router-dom";
class JSMCQ1 extends Component {
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
        <h1> JS MCQ SET 1</h1>
        <HeaderBannerSection imgsource="pythonmcq.jpeg" />
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
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="row mt-2">
                <div className="col">
                  <h2 className="text-secondary">JS Programming MCQs Set 1</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="JavaScript is ______ Side Scripting Language."
                    correctAnswer="Browser

                "
                    v1="Server
                "
                    v2="Browser
                "
                    v3="ISP"
                    v4="None of These
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="JavaScript is designed for following purpose -"
                    correctAnswer="To add interactivity to HTML Pages.
                "
                    v1="To Perform Server Side Scripting Opertion
                "
                    v2="To Style HTML Pages
                "
                    v3="To Execute Query Related to DB on Server
                "
                    v4="To add interactivity to HTML Pages.
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="JavaScript is can be written -"
                    correctAnswer="Both 1 and 2 "
                    v1="directly into HTML pages
                "
                    v2="directly into JS file and included into HTML
                "
                    v3="Both 1 and 2 "
                    v4="None of these
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="Variable can hold ________ value at a time"
                    correctAnswer="Single
                "
                    v1="Double
                "
                    v2="None of these
                "
                    v3="Multiple
                "
                    v4="Single
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question="Integer Variable is declared using following syntax in JavaScript.
                "
                    correctAnswer="var num;
                "
                    v1="var num;
                "
                    v2="Integer num;
                "
                    v3="int num;
                "
                    v4="integer num;
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question="We can declare ___________ at a time. Select most appropriate option.
                "
                    correctAnswer="One or more Variables
                "
                    v1="More than One Variables
                "
                    v2="One or more Variables
                "
                    v3="One Variable Only
                "
                    v4="None of these
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="Assignment Operators is following type of operator ______________.
                "
                    correctAnswer="Binary
                "
                    v1="Ternary
                "
                    v2="Binary
                "
                    v3="Unarry
                "
                    v4="None of these
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="'+=' operator can operate on following data values.
                "
                    correctAnswer="All Options
                "
                    v1="Float
                "
                    v2="Integer
                "
                    v3="String
                "
                    v4="All Options
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question="JavaScript contains a _________________ that assigns a value to a variable based on some condition."
                    correctAnswer="Conditional operator
                "
                    v1="Logical Operator
                "
                    v2="Bitwise Operator
                "
                    v3="Assignment operator
                "
                    v4="Conditional operator
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="Guess the ternary operator used in the following example !!!
                marks = (mark<35)?'Fail':'Pass';"
                    correctAnswer=""
                    v1="Colon Operator
                "
                    v2="Bitwise Operator
                "
                    v3="Logical Operator
                "
                    v4="Conditional Operator
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="11"
                    question="What will be the output of the following ?
                <script type='text/javascript'>
    var name;
    name = 'Datacode';
</script>
<script type='text/javascript'>
    document.write(name);
</script>"
                    correctAnswer="Datacode"
                    v1="Nothing will be printed
                "
                    v2="Datacode"
                    v3="Error"
                    v4="None of these
                "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="12"
                    question="+Infinity in JS gets added with +Infinity then output of the code will be -
                "
                    correctAnswer="+Infinity
                "
                    v1="-Infinity
                "
                    v2="NaN
                "
                    v3="+Infinity
                "
                    v4="none of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="13"
                    question="What will be the output of the following JavaScript code?

                var a1 = [,,,]; 
                var a2 = new Array(3); 
                0 in a1 
                0 in a2"
                    correctAnswer="true false"
                    v1="true false"
                    v2="false true"
                    v3="true true"
                    v4="false true"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="14"
                    question="What is the observation made in the following JavaScript code?

                if (!a[i]) continue;"
                    correctAnswer="Skips the null elements"
                    v1="Skips the defined elements
                "
                    v2="Skips the existent elements
                "
                    v3="Skips the null elements"
                    v4="Skips the defined & existent elements"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="15"
                    question="What convenience does the following JavaScript code snippet provide?

                let succ = function(x) x+1, yes = function() true, no = function() false;"
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
                    question="What will the following JavaScript code snippet work? If not, what will be the error?

                function tail(o) 
                { 
                    for (; o.next; o = o.next) ;
                    return o;
                }"
                    correctAnswer="Yes, this will work"
                    v1="No, this will throw an exception as only numerics can be used in a for loop"
                    v2="No, this will not iterate"
                    v3="Yes, this will work"
                    v4="No, this will result in a runtime error with the message “Cannot use Linked List”"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="19"
                    question=" What will be the output of the following JavaScript code?

                function myFunction() 
                {
                    document.getElementById('demo').innerHTML = Boolean(10 > 9);
                }
                "
                    correctAnswer="true
                "
                    v1="true
                "
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

export default JSMCQ1;
