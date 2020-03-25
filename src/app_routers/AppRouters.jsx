import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainComponent from "../components/main_component";
import Articles from "../components/main_component/aticles/Articles";
import AboutUs from "../components/header_component/AboutUs";
import DBMSInterviewQuestion from "../components/main_component/posts/technical_interview_questions/DBMSInterviewQuestion";
import OOPsInterviewQuestion from "../components/main_component/posts/technical_interview_questions/OOPsInterviewQuestion";
import PythonQuize from "../components/main_component/posts/mcqQuestions/PythonQuize";

class AppRouters extends Component {
  state = {};
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route
            exact
            path="/dbms_interview_question"
            component={DBMSInterviewQuestion}
          />
          <Route
            exact
            path="/oops_interview_question"
            component={OOPsInterviewQuestion}
          />
          <Route exact path="/python_mcqs" component={PythonQuize} />
        </Switch>
      </>
    );
  }
}

export default AppRouters;
