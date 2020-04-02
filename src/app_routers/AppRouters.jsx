import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainComponent from "../components/main_component";
import HomeComponent from "../components/main_component/HomeComponent";
import IndexArticles from "../components/main_component/aticles/IndexArticles";
import AboutUs from "../components/header_component/AboutUs";
// Interview Routinig
import IndexInterviewQuestions from "../components/main_component/posts/technical_interview_questions/IndexInterviewQuestions";
import DBMSInterviewQuestions from "../components/main_component/posts/technical_interview_questions/DBMSInterviewQuestions";
import OOPsInterviewQuestions from "../components/main_component/posts/technical_interview_questions/OOPsInterviewQuestions";
// Books Routing
import IndexBooks from "../components/main_component/posts/books/IndexBooks";
import PythonBooks from "../components/main_component/posts/books/PythonBooks";
// Index Quize Test
import IndexQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/IndexQuizeTests";

// Python Quize Test
import IndexPythonQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/python_quizes_tests/IndexPythonQuizeTests";
import PythonQuizeTest1 from "../components/main_component/posts/mcqQuestions/quize_test/python_quizes_tests/PythonQuizeTest1";
import PythonQuizeTest2 from "../components/main_component/posts/mcqQuestions/quize_test/python_quizes_tests/PythonQuizeTest2";
import PythonQuizeTest3 from "../components/main_component/posts/mcqQuestions/quize_test/python_quizes_tests/PythonQuizeTest3";
import PythonQuizeTest4 from "../components/main_component/posts/mcqQuestions/quize_test/python_quizes_tests/PythonQuizeTest4";

// C Quize Test
import IndexCQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/c_quizes_tests/IndexCQuizeTests";
import CQuizeTest1 from "../components/main_component/posts/mcqQuestions/quize_test/c_quizes_tests/CQuizeTest1";
import CQuizeTest2 from "../components/main_component/posts/mcqQuestions/quize_test/c_quizes_tests/CQuizeTest2";
import CQuizeTest3 from "../components/main_component/posts/mcqQuestions/quize_test/c_quizes_tests/CQuizeTest3";
import CQuizeTest4 from "../components/main_component/posts/mcqQuestions/quize_test/c_quizes_tests/CQuizeTest4";
// Index MCQ
import IndexMcqQuestions from "../components/main_component/posts/mcqQuestions/IndexMcqQuestions";
// Python MCQ Routing
import IndexPythonMCQ from "../components/main_component/posts/mcqQuestions/python_mcqs/IndexPythonMCQ";
import PythonMCQ1 from "../components/main_component/posts/mcqQuestions/python_mcqs/PythonMCQ";

// CMCQs Routing
import IndexCMCQ from "../components/main_component/posts/mcqQuestions/c_mcqs/IndexCMCQ";
import CMCQ1 from "../components/main_component/posts/mcqQuestions/c_mcqs/CMCQ1";
// Java MCQ Routing
import IndexJavaMCQ from "../components/main_component/posts/mcqQuestions/java_mcqs/IndexJavaMCQ";
import JavaMCQ1 from "../components/main_component/posts/mcqQuestions/java_mcqs/JavaMCQ1";

class AppRouters extends Component {
  state = {};
  render() {
    return (
      <>
        <Switch>
          {/* Navigarion Routing */}
          <Route exact path="/" component={MainComponent} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/articles" component={IndexArticles} />
          <Route path="/aboutus" component={AboutUs} />
          {/* End ______________ */}

          {/* Starting Index MCQs */}
          <Route exact path="/index_mcqs" component={IndexMcqQuestions} />

          {/* Ending Index Mcqs */}

          {/* Starting Python MCQs */}
          <Route exact path="/index_python_mcqs" component={IndexPythonMCQ} />
          <Route exact path="/python_mcq_1" component={PythonMCQ1} />
          {/* Ending Python MCQS */}

          {/* Starting C MCQs */}
          <Route exact path="/index_c_mcqs" component={IndexCMCQ} />
          <Route exact path="/c_mcq_1" component={CMCQ1} />
          {/* Ending C MCQs */}

          {/* Starting Python MCQs */}
          <Route exact path="/index_java_mcqs" component={IndexJavaMCQ} />
          <Route exact path="/java_mcq_1" component={JavaMCQ1} />
          {/* Ending Python MCQS */}

          {/* Index Quize Tests Routing */}

          <Route exact path="/index_quize_tests" component={IndexQuizeTests} />

          {/* Ending Index Quize Tests Routing */}

          {/* C Quize Test Routing */}
          <Route exact path="/c_quize_tests" component={IndexCQuizeTests} />
          <Route exact path="/c_quize_test_1" component={CQuizeTest1} />
          <Route exact path="/c_quize_test_2" component={CQuizeTest2} />
          <Route exact path="/c_quize_test_3" component={CQuizeTest3} />
          <Route exact path="/c_quize_test_4" component={CQuizeTest4} />

          {/* Ending  C Quize Test Routing */}

          {/* Python Quize Test Routing */}
          <Route
            exact
            path="/python_quize_tests"
            component={IndexPythonQuizeTests}
          />
          <Route
            exact
            path="/python_quize_test_1"
            component={PythonQuizeTest1}
          />
          <Route
            exact
            path="/python_quize_test_2"
            component={PythonQuizeTest2}
          />
          <Route
            exact
            path="/python_quize_test_3"
            component={PythonQuizeTest3}
          />
          <Route
            exact
            path="/python_quize_test_4"
            component={PythonQuizeTest4}
          />

          {/* Enging Python Quize Test Routing */}

          {/* Starting Interview Routing */}

          <Route
            exact
            path="/index_interview_questioins"
            component={IndexInterviewQuestions}
          />
          <Route
            path="/dbms_interview_question"
            component={DBMSInterviewQuestions}
          />
          <Route
            path="/oops_interview_question"
            component={OOPsInterviewQuestions}
          />
          {/* Einding Interview Routing */}

          {/* Book Routing */}
          <Route exact path="/index_books" component={IndexBooks} />
          <Route exact path="/python_books" component={PythonBooks} />
          {/* Ending Book Routing */}
        </Switch>
      </>
    );
  }
}

export default AppRouters;
