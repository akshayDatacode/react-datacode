import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RecommendPost from "../../../right_section/RecommendPost";
import RightSideSection from "../../../right_section/RightSideSection";
class ReactInterviewQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluids">
          <div className="row">
            <div className="col">
              <div className="card bg-warning">
                <div className="card-body">
                  <h1 className="card-title text-dark display-5 ">
                    React Interview Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-1"></div>

            <div className="col-md-7">
              <QuestionCard
                question={`1.  Differentiate between Real DOM and Virtual DOM.
                `}
                answer={`1. Real DOM
                1. It updates slow.	
                2. Can directly update HTML.	
                3. Creates a new DOM if element updates.	
                4. DOM manipulation is very expensive.	
                5. Too much of memory wastage.	

                Virtual  DOM
                1. It updates faster.
                2. Can’t directly update HTML.
                3. Updates the JSX if element updates.
                4. DOM manipulation is very easy.
                5. No memory wastage.
`}
              />
               <QuestionCard
                question={`2. What is React?
                `}
                answer={`1. React is a front-end JavaScript library developed by Facebook in 2011.
                2. It follows the component based approach which helps in building reusable UI components.
                3. It is used for developing complex and interactive web and mobile UI.
                4. Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.`}
              />
              <QuestionCard
                question={`3. What are the features of React? 
                `}
                answer={`Major features of React are listed below:

                1. It uses the virtual DOM instead of the real DOM.
                2. It uses server-side rendering.
                3. It follows uni-directional data flow or data binding.`}
              />
              <QuestionCard
                question={`4. List some of the major advantages of React.
                `}
                answer={`Some of the major advantages of React are:

                1. It increases the application’s performance
                2. It can be conveniently used on the client as well as server side
                3. Because of JSX, code’s readability increases
                4. React is easy to integrate with other frameworks like Meteor, Angular, etc
                5. Using React, writing UI test cases become extremely easy`}
              />
              <QuestionCard
                question={`5. What are the limitations of React?
                `}
                answer={`Limitations of React are listed below:

                1. React is just a library, not a full-blown framework
                2. Its library is very large and takes time to understand
                3. It can be little difficult for the novice programmers to understand
                4. Coding gets complex as it uses inline templating and JSX
                5. React Interview Questions and Answers | Edureka`}
              />
              <QuestionCard
                question={`6. What is JSX?
                `}
                answer={`JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance.`}
              />
              <QuestionCard
                question={`7. What do you understand by Virtual DOM? Explain its working.
                `}
                answer={`A virtual DOM is a lightweight JavaScript object which originally is just the copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.
                `}
              />
              <QuestionCard
                question={`8. Why can’t browsers read JSX?
                `}
                answer={`Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.


                `}
              />
              <QuestionCard
                question={`9. What do you understand from “In React, everything is a component.”
                `}
                answer={`Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.

                `}
              />
              <QuestionCard
                question={`12. Explain the purpose of render() in React.
                `}
                answer={`Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.

                `}
              />
     
     
            </div>
            <div className="col-md-4 mt-5">
              <h5 className="mb-4">Other Learning Resources</h5>
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />

              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ReactInterviewQuestions;
