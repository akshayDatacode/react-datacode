import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainComponent from "../components/main_component";
import IndexArticles from "../components/main_component/aticles/IndexArticles";
import AboutUs from "../components/header_component/AboutUs";
import DBMSInterviewQuestions from "../components/main_component/posts/technical_interview_questions/DBMSInterviewQuestions";
import OOPsInterviewQuestions from "../components/main_component/posts/technical_interview_questions/OOPsInterviewQuestions";
import PythonQuize from "../components/main_component/posts/mcqQuestions/PythonQuize";
import HomeComponent from "../components/main_component/HomeComponent";
import IndexInterviewQuestions from "../components/main_component/posts/technical_interview_questions/IndexInterviewQuestions";
import IndexBooks from "../components/main_component/posts/books/IndexBooks";
import PythonBooks from "../components/main_component/posts/books/PythonBooks";

class AppRouters extends Component {
  state = {};
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/articles" component={IndexArticles} />
          <Route path="/aboutus" component={AboutUs} />
          <Route
            path="/dbms_interview_question"
            component={DBMSInterviewQuestions}
          />
          <Route
            path="/oops_interview_question"
            component={OOPsInterviewQuestions}
          />
          <Route exact path="/python_mcqs" component={PythonQuize} />
          <Route
            exact
            path="/index_interview_questioins"
            component={IndexInterviewQuestions}
          />
          <Route exact path="/index_books" component={IndexBooks} />
          <Route exact path="/python_books" component={PythonBooks} />
        </Switch>
      </>
    );
  }
}

export default AppRouters;
