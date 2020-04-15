import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainComponent from "../components/main_component";
import HomeComponent from "../components/main_component/HomeComponent";
import AboutUs from "../components/header_component/AboutUs";

// Articles
import IndexArticles from "../components/main_component/aticles/IndexArticles";
// Progrmminng blogs
import ProgrammingLanguagesBlog from "../components/main_component/aticles/programming_article/Programming_Languages_Blog";
import ProgrammingBlog2 from "../components/main_component/aticles/programming_article/ProgrammingBlog2";
import ProgrammingBlog3 from "../components/main_component/aticles/programming_article/ProgrammingBlog3";
import ProgrammingBlog4 from "../components/main_component/aticles/programming_article/ProgrammingBlog4";
import ProgrammingBlog5 from "../components/main_component/aticles/programming_article/ProgrammingBlog5";
import ProgrammingBlog6 from "../components/main_component/aticles/programming_article/ProgrammingBlog6";
import ProgrammingBlog7 from "../components/main_component/aticles/programming_article/ProgrammingBlog7";
import ProgrammingBlog8 from "../components/main_component/aticles/programming_article/ProgrammingBlog8";
import ProgrammingBlog9 from "../components/main_component/aticles/programming_article/ProgrammingBlog9";

// Machine learning Blogs
import MachineLearningBlog from "../components/main_component/aticles/machine_learning_article/MachineLearningBlog";
//WebDesign Blog Pagination
import WebDesignBlog from "../components/main_component/aticles/webdesign_article/WebDesignBlog";
import WebDesignBlog2 from "../components/main_component/aticles/webdesign_article/WebDesignBlog2";
import WebDesignBlog3 from "../components/main_component/aticles/webdesign_article/WebDesignBlog3";
import WebDesignBlog4 from "../components/main_component/aticles/webdesign_article/WebDesignBlog4";
import WebDesignBlog5 from "../components/main_component/aticles/webdesign_article/WebDesignBlog5";
import WebDesignBlog6 from "../components/main_component/aticles/webdesign_article/WebDesignBlog6";
import WebDesignBlog7 from "../components/main_component/aticles/webdesign_article/WebDesignBlog7";

// Documentation Blogs
import DocumentationBlog from "../components/main_component/aticles/documentation/DocumentationBlog";
import DocumentationBlog2 from "../components/main_component/aticles/documentation/DocumentationBlog2";
import DocumentationBlog3 from "../components/main_component/aticles/documentation/DocumentationBlog3";
import DocumentationBlog4 from "../components/main_component/aticles/documentation/DocumentationBlog4";

// DBMS Blogs
import DBMSBlog from "../components/main_component/aticles/dbms_article/DBMSBlog";
import DBMSBlog2 from "../components/main_component/aticles/dbms_article/DBMSBlog2";
import DBMSBlog3 from "../components/main_component/aticles/dbms_article/DBMSBlog3";

// Interview Routinig
import IndexInterviewQuestions from "../components/main_component/posts/technical_interview_questions/IndexInterviewQuestions";
import DBMSInterviewQuestions from "../components/main_component/posts/technical_interview_questions/DBMSInterviewQuestions";
import OOPsInterviewQuestions from "../components/main_component/posts/technical_interview_questions/OOPsInterviewQuestions";
import CInterviewQuestions from "../components/main_component/posts/technical_interview_questions/CInterviewQuestions";
import CppInterviewQuestions from "../components/main_component/posts/technical_interview_questions/C++InterviewQuestions";
import CloudComputingInterviewQuestions from "../components/main_component/posts/technical_interview_questions/CloudComputingInterviewQuestions";
import CNInterviewQuestions from "../components/main_component/posts/technical_interview_questions/CNInterviewQuestions";
import DataStructureInterviewQuestions from "../components/main_component/posts/technical_interview_questions/DataStructureInterviewQuestions";
import JavaInterviewQuestions from "../components/main_component/posts/technical_interview_questions/JavaInterviewQuestions";
import OSInterviewQuestions from "../components/main_component/posts/technical_interview_questions/OSInterviewQuestions";
import RDBMSInterviewQuestions from "../components/main_component/posts/technical_interview_questions/RDBMSInterviewQuestions";
import SDLCInterviewQuestions from "../components/main_component/posts/technical_interview_questions/SDLCInterviewQuestions";
import SQLInterviewQuestions from "../components/main_component/posts/technical_interview_questions/SQLInterviewQuestions";
import TestingInterviewQuestions from "../components/main_component/posts/technical_interview_questions/TestingInterviewQuestions";
import HtmlInterviewQuestions from "../components/main_component/posts/technical_interview_questions/HtmlInterviewQuestions";
import JSInterviewQuestions from "../components/main_component/posts/technical_interview_questions/JSInterviewQuestions";
import AngularInterviewQuestions from "../components/main_component/posts/technical_interview_questions/AngularInterviewQuestions";
import ReactInterviewQuestions from "../components/main_component/posts/technical_interview_questions/ReactInterviewQuestions";
import AndroidInterviewQuestions from "../components/main_component/posts/technical_interview_questions/AndroidInterviewQuestions";

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

// java Quize Test
import IndexJavaQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/java_quizes_tests/IndexJavaQuizeTests";
import JavaQuizeTest1 from "../components/main_component/posts/mcqQuestions/quize_test/java_quizes_tests/JavaQuizeTest1";
import JavaQuizeTest2 from "../components/main_component/posts/mcqQuestions/quize_test/java_quizes_tests/JavaQuizeTest2";
import JavaQuizeTest3 from "../components/main_component/posts/mcqQuestions/quize_test/java_quizes_tests/JavaQuizeTest3";
import JavaQuizeTest4 from "../components/main_component/posts/mcqQuestions/quize_test/java_quizes_tests/JavaQuizeTest4";

// JS Quize Test
import IndexJSQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/js_quizes_tests/IndexJSQuizeTests";
import JSQuizeTest1 from "../components/main_component/posts/mcqQuestions/quize_test/js_quizes_tests/JSQuizeTest1";
import JSQuizeTest2 from "../components/main_component/posts/mcqQuestions/quize_test/js_quizes_tests/JSQuizeTest2";
import JSQuizeTest3 from "../components/main_component/posts/mcqQuestions/quize_test/js_quizes_tests/JSQuizeTest3";
import JSQuizeTest4 from "../components/main_component/posts/mcqQuestions/quize_test/js_quizes_tests/JSQuizeTest4";

// DataStructure Quize Test
import IndexDSQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/ds_quizes_tests/IndexDSQuizeTests";
import DSQuizeTest1 from "../components/main_component/posts/mcqQuestions/quize_test/ds_quizes_tests/DSQuizeTest1";
import DSQuizeTest2 from "../components/main_component/posts/mcqQuestions/quize_test/ds_quizes_tests/DSQuizeTest2";
import DSQuizeTest3 from "../components/main_component/posts/mcqQuestions/quize_test/ds_quizes_tests/DSQuizeTest3";
import DSQuizeTest4 from "../components/main_component/posts/mcqQuestions/quize_test/ds_quizes_tests/DSQuizeTest4";

// Html Quize Test
import IndexHtmlQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/html_quizes_tests/IndexHtmlQuizeTests";
import HtmlQuizeTest1 from "../components/main_component/posts/mcqQuestions/quize_test/html_quizes_tests/HtmlQuizeTest1";
import HtmlQuizeTest2 from "../components/main_component/posts/mcqQuestions/quize_test/html_quizes_tests/HtmlQuizeTest2";
import HtmlQuizeTest3 from "../components/main_component/posts/mcqQuestions/quize_test/html_quizes_tests/HtmlQuizeTest3";
import HtmlQuizeTest4 from "../components/main_component/posts/mcqQuestions/quize_test/html_quizes_tests/HtmlQuizeTest4";

// SQL Quize Test
import IndexSQLQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/sql_quizes_tests/IndexSQLQuizeTests";
import SQLQuizeTest1 from "../components/main_component/posts/mcqQuestions/quize_test/sql_quizes_tests/SQLQuizeTest1";
import SQLQuizeTest2 from "../components/main_component/posts/mcqQuestions/quize_test/sql_quizes_tests/SQLQuizeTest2";
import SQLQuizeTest3 from "../components/main_component/posts/mcqQuestions/quize_test/sql_quizes_tests/SQLQuizeTest3";
import SQLQuizeTest4 from "../components/main_component/posts/mcqQuestions/quize_test/sql_quizes_tests/SQLQuizeTest4";

// DBMS Quize Test
import IndexDBMSQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/dbms_quizes_tests/IndexDBMSQuizeTests";
import DBMSQuizeTest1 from "../components/main_component/posts/mcqQuestions/quize_test/dbms_quizes_tests/DBMSQuizeTest1";
import DBMSQuizeTest2 from "../components/main_component/posts/mcqQuestions/quize_test/dbms_quizes_tests/DBMSQuizeTest2";
import DBMSQuizeTest3 from "../components/main_component/posts/mcqQuestions/quize_test/dbms_quizes_tests/DBMSQuizeTest3";
import DBMSQuizeTest4 from "../components/main_component/posts/mcqQuestions/quize_test/dbms_quizes_tests/DBMSQuizeTest4";

// OOPs Quize Test
import IndexOOPsQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/oops_quizes_tests/IndexOOPsQuizeTests";
import OOPsQuizeTest1 from "../components/main_component/posts/mcqQuestions/quize_test/oops_quizes_tests/OOPsQuizeTest1";
import OOPsQuizeTest2 from "../components/main_component/posts/mcqQuestions/quize_test/oops_quizes_tests/OOPsQuizeTest2";
import OOPsQuizeTest3 from "../components/main_component/posts/mcqQuestions/quize_test/oops_quizes_tests/OOPsQuizeTest3";
import OOPsQuizeTest4 from "../components/main_component/posts/mcqQuestions/quize_test/oops_quizes_tests/OOPsQuizeTest4";

// Angular Quize Test
import IndexAngularQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/angular_quizes_tests/IndexAngularQuizeTests";
import AngularQuizeTest1 from "../components/main_component/posts/mcqQuestions/quize_test/angular_quizes_tests/AngularQuizeTest1";
import AngularQuizeTest2 from "../components/main_component/posts/mcqQuestions/quize_test/angular_quizes_tests/AngularQuizeTest2";
import AngularQuizeTest3 from "../components/main_component/posts/mcqQuestions/quize_test/angular_quizes_tests/AngularQuizeTest3";
import AngularQuizeTest4 from "../components/main_component/posts/mcqQuestions/quize_test/angular_quizes_tests/AngularQuizeTest4";

// React Quize Test
import IndexReactQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/react_quizes_tests/IndexReactQuizeTests";
import ReactQuizeTest1 from "../components/main_component/posts/mcqQuestions/quize_test/react_quizes_tests/ReactQuizeTest1";
import ReactQuizeTest2 from "../components/main_component/posts/mcqQuestions/quize_test/react_quizes_tests/ReactQuizeTest2";
import ReactQuizeTest3 from "../components/main_component/posts/mcqQuestions/quize_test/react_quizes_tests/ReactQuizeTest3";
import ReactQuizeTest4 from "../components/main_component/posts/mcqQuestions/quize_test/react_quizes_tests/ReactQuizeTest4";

// Android Quize Test
import IndexAndroidQuizeTests from "../components/main_component/posts/mcqQuestions/quize_test/android_quizes_tests/IndexAndroidQuizeTests";
import AndroidQuizeTest1 from "../components/main_component/posts/mcqQuestions/quize_test/android_quizes_tests/AndroidQuizeTest1";
import AndroidQuizeTest2 from "../components/main_component/posts/mcqQuestions/quize_test/android_quizes_tests/AndroidQuizeTest2";
import AndroidQuizeTest3 from "../components/main_component/posts/mcqQuestions/quize_test/android_quizes_tests/AndroidQuizeTest3";
import AndroidQuizeTest4 from "../components/main_component/posts/mcqQuestions/quize_test/android_quizes_tests/AndroidQuizeTest4";

// Index MCQ
import IndexMcqQuestions from "../components/main_component/posts/mcqQuestions/IndexMcqQuestions";
// Python MCQ Routing
import IndexPythonMCQ from "../components/main_component/posts/mcqQuestions/python_mcqs/IndexPythonMCQ";
import PythonMCQ1 from "../components/main_component/posts/mcqQuestions/python_mcqs/PythonMCQ";
import PythonMCQ2 from "../components/main_component/posts/mcqQuestions/python_mcqs/PythonMCQ2";
import PythonMCQ3 from "../components/main_component/posts/mcqQuestions/python_mcqs/PythonMCQ3";
import PythonMCQ4 from "../components/main_component/posts/mcqQuestions/python_mcqs/PythonMCQ4";
import PythonMCQ5 from "../components/main_component/posts/mcqQuestions/python_mcqs/PythonMCQ5";

// CMCQs Routing
import IndexCMCQ from "../components/main_component/posts/mcqQuestions/c_mcqs/IndexCMCQ";
import CMCQ1 from "../components/main_component/posts/mcqQuestions/c_mcqs/CMCQ1";
import CMCQ2 from "../components/main_component/posts/mcqQuestions/c_mcqs/CMCQ2";
// Java MCQ Routing
import IndexJavaMCQ from "../components/main_component/posts/mcqQuestions/java_mcqs/IndexJavaMCQ";
import JavaMCQ1 from "../components/main_component/posts/mcqQuestions/java_mcqs/JavaMCQ1";

// JavaScript MCQs
import IndexJSMCQ from "../components/main_component/posts/mcqQuestions/javascript_mcqs/IndexJSMCQ";
import JSMCQ1 from "../components/main_component/posts/mcqQuestions/javascript_mcqs/JSMCQ1";
import JSMCQ2 from "../components/main_component/posts/mcqQuestions/javascript_mcqs/JSMCQ2";
// React MCQs
import IndexReactMCQ from "../components/main_component/posts/mcqQuestions/react_mcqs/IndexReactMCQ";
import ReactMCQ1 from "../components/main_component/posts/mcqQuestions/react_mcqs/ReactMCQ1";
// Cpp Mcqs
import IndexCppMCQ from "../components/main_component/posts/mcqQuestions/cpp_mcqs/IndexCppMCQ";
import CppMCQ1 from "../components/main_component/posts/mcqQuestions/cpp_mcqs/CppMCQ1";
// Css Mcqs
import IndexCssMCQ from "../components/main_component/posts/mcqQuestions/css_mcqs/IndexCssMCQ";
import CssMCQ1 from "../components/main_component/posts/mcqQuestions/css_mcqs/CssMCQ1";
// Html Mcqs
import IndexHtmlMCQ from "../components/main_component/posts/mcqQuestions/html_mcqs/IndexHtmlMCQ";
import HtmlMCQ1 from "../components/main_component/posts/mcqQuestions/html_mcqs/HtmlMCQ1";
// Bootstrap MCqs
import IndexBootstrapMCQ from "../components/main_component/posts/mcqQuestions/bootstrap_mcqs/IndexBootStrapMCQ";
import BootStrapMCQ1 from "../components/main_component/posts/mcqQuestions/bootstrap_mcqs/BootStrapMCQ1";
// DBMS MCQs
import IndexDBMSMCQ from "../components/main_component/posts/mcqQuestions/dbms_mcqs/IndexDBMSMCQ";
import DBMSMCQ1 from "../components/main_component/posts/mcqQuestions/dbms_mcqs/DBMSMCQ1";
// Django MCQs
import IndexDjangoMCQ from "../components/main_component/posts/mcqQuestions/django_mcqs/IndexDjangoMCQ";
import DjangoMCQ1 from "../components/main_component/posts/mcqQuestions/django_mcqs/DjangoMCQ1";
// Git MCQs
import IndexGitMCQ from "../components/main_component/posts/mcqQuestions/git_mcqs/IndexGitMCQ";
import GitMCQ1 from "../components/main_component/posts/mcqQuestions/git_mcqs/GitMCQ1";
// DS MCQs
import IndexDSMCQ from "../components/main_component/posts/mcqQuestions/ds_mcqs/IndexDSMCQ";
import DSMCQ1 from "../components/main_component/posts/mcqQuestions/ds_mcqs/DSMCQ1";
// Android MCQs
import IndexAndroidMCQ from "../components/main_component/posts/mcqQuestions/android_mcqs/IndexAndroidMCQ";
import AndroidMCQ1 from "../components/main_component/posts/mcqQuestions/android_mcqs/AndroidMCQ1";
// SQL MCQs
import IndexSQLMCQ from "../components/main_component/posts/mcqQuestions/sql_mcqs/IndexSQLMCQ";
import SQLMCQ1 from "../components/main_component/posts/mcqQuestions/sql_mcqs/SQLMCQ1";
// OOPs MCQs
import IndexOOPsMCQ from "../components/main_component/posts/mcqQuestions/oops_mcqs/IndexOOPsMCQ";
import OOPsMCQ1 from "../components/main_component/posts/mcqQuestions/oops_mcqs/OOPsMCQ1";
// Angular MCQs
import IndexAngularMCQ from "../components/main_component/posts/mcqQuestions/angular_mcqs/IndexAngularMCQ";
import AngularMCQ1 from "../components/main_component/posts/mcqQuestions/angular_mcqs/AngularMCQ1";

// Technogies
import IndexTechnologies from "../components/main_component/technologies/IndexTechnologies";
import Python from "../components/main_component/technologies/Python";
import C from "../components/main_component/technologies/C";
import Java from "../components/main_component/technologies/Java";
import JS from "../components/main_component/technologies/JS";
import DataStructure from "../components/main_component/technologies/DataStructure";
import HTML from "../components/main_component/technologies/HTML";
import DBMS from "../components/main_component/technologies/DBMS";
import SQL from "../components/main_component/technologies/SQL";
import OOPs from "../components/main_component/technologies/OOPs";
import Angular from "../components/main_component/technologies/Angular";
import ReactJS from "../components/main_component/technologies/React";
import Android from "../components/main_component/technologies/Android";

// Index Programming Questions

import IndexProgrammingQuestions from "../components/main_component/posts/programming_questions/IndexProgrammingQuestions";
import PythonPgramQuestions from "../components/main_component/posts/programming_questions/PythonPgramQuestions";
import JavaPgramQuestions from "../components/main_component/posts/programming_questions/JavaPgramQuestions";
import CPgramQuestions from "../components/main_component/posts/programming_questions/CPgramQuestions";
import JavascriptPgramQuestions from "../components/main_component/posts/programming_questions/JavascriptPgramQuestions";
import DatastructurePgramQuestions from "../components/main_component/posts/programming_questions/DatastructurePgramQuestions";

// Index Evens
import IndexEvent from "../components/main_component/events/IndexEvent";
// index CodeChallange
import IndexCodeChallange from "../components/main_component/code_challange/IndexCodeChallange";
import CodeChallangeWeek2 from "../components/main_component/code_challange/CodeChallangeWeek2";
import CodeChallangeWeek1 from "../components/main_component/code_challange/CodeChallangeWeek1";
import PythonInterviewQuestions from "../components/main_component/posts/technical_interview_questions/PythonInterviewQuestions";
import EventGallary from "../components/main_component/events/EventGallary";

class AppRouters extends Component {
  state = {};
  render() {
    return (
      <>
        <Switch>
          {/* Navigarion Routing */}
          <Route exact path="/" component={MainComponent} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/aboutus" component={AboutUs} />

          {/* End ______________ */}

          {/* Starting Articles */}
          <Route path="/index_articles" component={IndexArticles} />
          <Route path="/prog_lan_blog" component={ProgrammingLanguagesBlog} />
          <Route path="/prog_lan_blog2" component={ProgrammingBlog2} />
          <Route path="/prog_lan_blog3" component={ProgrammingBlog3} />
          <Route path="/prog_lan_blog4" component={ProgrammingBlog4} />
          <Route path="/prog_lan_blog5" component={ProgrammingBlog5} />
          <Route path="/prog_lan_blog6" component={ProgrammingBlog6} />
          <Route path="/prog_lan_blog7" component={ProgrammingBlog7} />
          <Route path="/prog_lan_blog8" component={ProgrammingBlog8} />
          <Route path="/prog_lan_blog9" component={ProgrammingBlog9} />
          {/* Web Blog */}
          <Route path="/webdesign_blog" component={WebDesignBlog} />
          <Route path="/webdesign_blog2" component={WebDesignBlog2} />
          <Route path="/webdesign_blog3" component={WebDesignBlog3} />
          <Route path="/webdesign_blog4" component={WebDesignBlog4} />
          <Route path="/webdesign_blog5" component={WebDesignBlog5} />
          <Route path="/webdesign_blog6" component={WebDesignBlog6} />
          <Route path="/webdesign_blog7" component={WebDesignBlog7} />

          {/*Machine BLogs  */}
          <Route
            path="/machine_learning_blog"
            component={MachineLearningBlog}
          />

          {/* DBMS Blogs */}
          <Route path="/dbms_blog" component={DBMSBlog} />
          <Route path="/dbms_blog2" component={DBMSBlog2} />
          <Route path="/dbms_blog3" component={DBMSBlog3} />

          {/* Documentation Blog */}
          <Route path="/documentation_blog" component={DocumentationBlog} />
          <Route path="/documentation_blog2" component={DocumentationBlog2} />
          <Route path="/documentation_blog3" component={DocumentationBlog3} />
          <Route path="/documentation_blog4" component={DocumentationBlog4} />

          {/* Ending Article */}

          {/* Starting Index MCQs */}
          <Route exact path="/index_mcqs" component={IndexMcqQuestions} />

          {/* Starting Python MCQs */}
          <Route exact path="/index_python_mcqs" component={IndexPythonMCQ} />
          <Route exact path="/python_mcq_1" component={PythonMCQ1} />
          <Route exact path="/python_mcq_2" component={PythonMCQ2} />
          <Route exact path="/python_mcq_3" component={PythonMCQ3} />
          <Route exact path="/python_mcq_4" component={PythonMCQ4} />
          <Route exact path="/python_mcq_5" component={PythonMCQ5} />

          {/* Ending Python MCQS */}

          {/* Starting C MCQs */}
          <Route exact path="/index_c_mcqs" component={IndexCMCQ} />
          <Route exact path="/c_mcq_1" component={CMCQ1} />
          <Route exact path="/c_mcq_2" component={CMCQ2} />
          {/* Ending C MCQs */}

          {/* Starting Java MCQs */}
          <Route exact path="/index_java_mcqs" component={IndexJavaMCQ} />
          <Route exact path="/java_mcq_1" component={JavaMCQ1} />
          {/* Ending Java MCQS */}

          {/* Starting JavaScript MCQs */}
          <Route exact path="/index_js_mcqs" component={IndexJSMCQ} />
          <Route exact path="/js_mcq_1" component={JSMCQ1} />
          <Route exact path="/js_mcq_2" component={JSMCQ2} />
          {/* Ending JavaScript MCQS */}

          {/* Starting Cpp MCQs */}
          <Route exact path="/index_cpp_mcqs" component={IndexCppMCQ} />
          <Route exact path="/cpp_mcq_1" component={CppMCQ1} />
          {/* Ending  MCQS */}

          {/* Starting Css MCQs */}
          <Route exact path="/index_css_mcqs" component={IndexCssMCQ} />
          <Route exact path="/css_mcq_1" component={CssMCQ1} />
          {/* Ending Css MCQS */}

          {/* Starting Html MCQs */}
          <Route exact path="/index_html_mcqs" component={IndexHtmlMCQ} />
          <Route exact path="/html_mcq_1" component={HtmlMCQ1} />
          {/* Ending  Html MCQS */}

          {/* Starting BootStrap MCQs */}
          <Route
            exact
            path="/index_bootstrap_mcqs"
            component={IndexBootstrapMCQ}
          />
          <Route exact path="/bootstrap_mcq_1" component={BootStrapMCQ1} />
          {/* Ending BootStrap MCQS */}

          {/* Starting Dbms MCQs */}
          <Route exact path="/index_dbms_mcqs" component={IndexDBMSMCQ} />
          <Route exact path="/dbms_mcq_1" component={DBMSMCQ1} />
          {/* Ending DBMS MCQS */}

          {/* Starting Django MCQs */}
          <Route exact path="/index_django_mcqs" component={IndexDjangoMCQ} />
          <Route exact path="/django_mcq_1" component={DjangoMCQ1} />
          {/* Ending Django MCQS */}

          {/* Starting Git MCQs */}
          <Route exact path="/index_git_mcqs" component={IndexGitMCQ} />
          <Route exact path="/git_mcq_1" component={GitMCQ1} />
          {/* Ending Git MCQS */}

          {/* Starting React MCQs */}
          <Route exact path="/index_react_mcqs" component={IndexReactMCQ} />
          <Route exact path="/react_mcq_1" component={ReactMCQ1} />
          {/* Ending React MCQS */}

          {/* Starting DS MCQs */}
          <Route exact path="/index_ds_mcqs" component={IndexDSMCQ} />
          <Route exact path="/ds_mcq_1" component={DSMCQ1} />
          {/* Ending DS MCQS */}

          {/* Starting Android MCQs */}
          <Route exact path="/index_android_mcqs" component={IndexAndroidMCQ} />
          <Route exact path="/android_mcq_1" component={AndroidMCQ1} />
          {/* Ending Android MCQS */}

          {/* Starting SQL  MCQs */}
          <Route exact path="/index_sql_mcqs" component={IndexSQLMCQ} />
          <Route exact path="/sql_mcq_1" component={SQLMCQ1} />
          {/* Ending SQL MCQS */}

          {/* Starting OOPs  MCQs */}
          <Route exact path="/index_oops_mcqs" component={IndexOOPsMCQ} />
          <Route exact path="/oops_mcq_1" component={OOPsMCQ1} />
          {/* Ending OOPs MCQS */}

          {/* Starting angular  MCQs */}
          <Route exact path="/index_angular_mcqs" component={IndexAngularMCQ} />
          <Route exact path="/angular_mcq_1" component={AngularMCQ1} />
          {/* Ending angular MCQS */}

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

          {/*Android  Quize Test Routing */}
          <Route
            exact
            path="/android_quize_tests"
            component={IndexAndroidQuizeTests}
          />
          <Route
            exact
            path="/android_quize_test_1"
            component={AndroidQuizeTest1}
          />
          <Route
            exact
            path="/android_quize_test_2"
            component={AndroidQuizeTest2}
          />
          <Route
            exact
            path="/android_quize_test_3"
            component={AndroidQuizeTest3}
          />
          <Route
            exact
            path="/android_quize_test_4"
            component={AndroidQuizeTest4}
          />

          {/*Angular  Quize Test Routing */}
          <Route
            exact
            path="/angular_quize_tests"
            component={IndexAngularQuizeTests}
          />
          <Route
            exact
            path="/angular_quize_test_1"
            component={AngularQuizeTest1}
          />
          <Route
            exact
            path="/angular_quize_test_2"
            component={AngularQuizeTest2}
          />
          <Route
            exact
            path="/angular_quize_test_3"
            component={AngularQuizeTest3}
          />
          <Route
            exact
            path="/angular_quize_test_4"
            component={AngularQuizeTest4}
          />

          {/*React  Quize Test Routing */}
          <Route
            exact
            path="/react_quize_tests"
            component={IndexReactQuizeTests}
          />
          <Route exact path="/react_quize_test_1" component={ReactQuizeTest1} />
          <Route exact path="/react_quize_test_2" component={ReactQuizeTest2} />
          <Route exact path="/react_quize_test_3" component={ReactQuizeTest3} />
          <Route exact path="/react_quize_test_4" component={ReactQuizeTest4} />

          {/*SQL  Quize Test Routing */}
          <Route exact path="/sql_quize_tests" component={IndexSQLQuizeTests} />
          <Route exact path="/sql_quize_test_1" component={SQLQuizeTest1} />
          <Route exact path="/sql_quize_test_2" component={SQLQuizeTest2} />
          <Route exact path="/sql_quize_test_3" component={SQLQuizeTest3} />
          <Route exact path="/sql_quize_test_4" component={SQLQuizeTest4} />

          {/*OOPs  Quize Test Routing */}
          <Route
            exact
            path="/oops_quize_tests"
            component={IndexOOPsQuizeTests}
          />
          <Route exact path="/oops_quize_test_1" component={OOPsQuizeTest1} />
          <Route exact path="/oops_quize_test_2" component={OOPsQuizeTest2} />
          <Route exact path="/oops_quize_test_3" component={OOPsQuizeTest3} />
          <Route exact path="/oops_quize_test_4" component={OOPsQuizeTest4} />

          {/*JavaScript  Quize Test Routing */}
          <Route exact path="/js_quize_tests" component={IndexJSQuizeTests} />
          <Route exact path="/js_quize_test_1" component={JSQuizeTest1} />
          <Route exact path="/js_quize_test_2" component={JSQuizeTest2} />
          <Route exact path="/js_quize_test_3" component={JSQuizeTest3} />
          <Route exact path="/js_quize_test_4" component={JSQuizeTest4} />

          {/*Java  Quize Test Routing */}
          <Route
            exact
            path="/java_quize_tests"
            component={IndexJavaQuizeTests}
          />
          <Route exact path="/java_quize_test_1" component={JavaQuizeTest1} />
          <Route exact path="/java_quize_test_2" component={JavaQuizeTest2} />
          <Route exact path="/java_quize_test_3" component={JavaQuizeTest3} />
          <Route exact path="/java_quize_test_4" component={JavaQuizeTest4} />

          {/*html  Quize Test Routing */}
          <Route
            exact
            path="/html_quize_tests"
            component={IndexHtmlQuizeTests}
          />
          <Route exact path="/html_quize_test_1" component={HtmlQuizeTest1} />
          <Route exact path="/html_quize_test_2" component={HtmlQuizeTest2} />
          <Route exact path="/html_quize_test_3" component={HtmlQuizeTest3} />
          <Route exact path="/html_quize_test_4" component={HtmlQuizeTest4} />

          {/*ds  Quize Test Routing */}
          <Route exact path="/ds_quize_tests" component={IndexDSQuizeTests} />
          <Route exact path="/ds_quize_test_1" component={DSQuizeTest1} />
          <Route exact path="/ds_quize_test_2" component={DSQuizeTest2} />
          <Route exact path="/ds_quize_test_3" component={DSQuizeTest3} />
          <Route exact path="/ds_quize_test_4" component={DSQuizeTest4} />

          {/*dbms  Quize Test Routing */}
          <Route
            exact
            path="/dbms_quize_tests"
            component={IndexDBMSQuizeTests}
          />
          <Route exact path="/dbms_quize_test_1" component={DBMSQuizeTest1} />
          <Route exact path="/dbms_quize_test_2" component={DBMSQuizeTest2} />
          <Route exact path="/dbms_quize_test_3" component={DBMSQuizeTest3} />
          <Route exact path="/dbms_quize_test_4" component={DBMSQuizeTest4} />

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
          <Route
            path="/python_interview_question"
            component={PythonInterviewQuestions}
          />
          <Route path="/c_interview_question" component={CInterviewQuestions} />
          <Route
            path="/cpp_interview_question"
            component={CppInterviewQuestions}
          />
          <Route
            path="/cloud_computing_interview_question"
            component={CloudComputingInterviewQuestions}
          />
          <Route
            path="/cn_interview_question"
            component={CNInterviewQuestions}
          />
          <Route
            path="/datastructre_interview_question"
            component={DataStructureInterviewQuestions}
          />
          <Route
            path="/java_interview_question"
            component={JavaInterviewQuestions}
          />
          <Route
            path="/os_interview_question"
            component={OSInterviewQuestions}
          />
          <Route
            path="/rdbms_interview_question"
            component={RDBMSInterviewQuestions}
          />
          <Route
            path="/sdlc_interview_question"
            component={SDLCInterviewQuestions}
          />
          <Route
            path="/sql_interview_question"
            component={SQLInterviewQuestions}
          />
          <Route
            path="/testing_interview_question"
            component={TestingInterviewQuestions}
          />
          <Route
            path="/html_interview_question"
            component={HtmlInterviewQuestions}
          />
          <Route
            path="/js_interview_question"
            component={JSInterviewQuestions}
          />
          <Route
            path="/angular_interview_question"
            component={AngularInterviewQuestions}
          />
          <Route
            path="/react_interview_question"
            component={ReactInterviewQuestions}
          />
          <Route
            path="/android_interview_question"
            component={AndroidInterviewQuestions}
          />

          {/* Einding Interview Routing */}

          {/* Book Routing */}
          <Route exact path="/index_books" component={IndexBooks} />
          <Route exact path="/python_books" component={PythonBooks} />
          {/* Ending Book Routing */}

          {/* Starting Technologies */}
          <Route
            exact
            path="/index_technologies"
            component={IndexTechnologies}
          />
          <Route exact path="/python" component={Python} />
          <Route exact path="/c" component={C} />
          <Route exact path="/java" component={Java} />
          <Route exact path="/js" component={JS} />
          <Route exact path="/datastructure" component={DataStructure} />
          <Route exact path="/html" component={HTML} />
          <Route exact path="/dbms" component={DBMS} />
          <Route exact path="/sql" component={SQL} />
          <Route exact path="/oops" component={OOPs} />
          <Route exact path="/angular" component={Angular} />
          <Route exact path="/react" component={ReactJS} />
          <Route exact path="/android" component={Android} />
          {/* Ending Technologies */}

          {/* Starting Programming Questions */}
          <Route
            exact
            path="/index_programming_questions"
            component={IndexProgrammingQuestions}
          />
          <Route
            exact
            path="/python_programming_questions"
            component={PythonPgramQuestions}
          />
          <Route
            exact
            path="/java_programming_questions"
            component={JavaPgramQuestions}
          />
          <Route
            exact
            path="/c_programming_questions"
            component={CPgramQuestions}
          />
          <Route
            exact
            path="/javascript_programming_questions"
            component={JavascriptPgramQuestions}
          />
          <Route
            exact
            path="/datastructure_programming_questions"
            component={DatastructurePgramQuestions}
          />

          {/* Ending Programming Questions  */}

          {/* Starting Event PAge */}
          <Route exact path="/index_events" component={IndexEvent} />
          <Route exact path="/events_gallary" component={EventGallary} />
          {/* Ending Event PAge */}

          {/* Starting COde Challange PAge */}
          <Route
            exact
            path="/index_code_challange"
            component={IndexCodeChallange}
          />
          <Route
            exact
            path="/code_challange_week_1"
            component={CodeChallangeWeek1}
          />
          <Route
            exact
            path="/code_challange_week_2"
            component={CodeChallangeWeek2}
          />
          {/* Ending COde Challange PAge */}
        </Switch>
      </>
    );
  }
}

export default AppRouters;
