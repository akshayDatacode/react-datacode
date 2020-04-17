import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import ScoreCard from "../scoreCard";
import Quize from "../quize";
import RightSideSection from "../../../../right_section/RightSideSection";
import RecommendPost from "../../../../right_section/RecommendPost";
import MCQCardCarousel from "../MCQCardCarousel";

class DjangoMCQ1 extends Component {
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
        <HeaderCard title="Django MCQs Set 1" />
        <div className="col-fluid ">
          <Link to="/home" className="badge badge-primary mr-1">
            Home >{" "}
          </Link>
          <Link to="/index_mcqs" className="badge badge-warning mr-1">
            Programming MCQs >{" "}
          </Link>
          <Link to="/index_django_mcqs" className="badge badge-success mr-1">
            Django-MCQs >
          </Link>
          <ScoreCard count={this.state.count} />
        </div>
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
                <Link
                  to="/index_django_mcqs"
                  className="badge badge-success mr-1"
                >
                  Django-MCQs >
                </Link>
                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="What is the Django shortcut method to more easily render an html response? "
                    correctAnswer="render_to_response"
                    v1="render_to_html"
                    v2="render_to_response"
                    v3="response_render"
                    v4=" render"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="By using django.contrib.humanize, you can use the following filter in your template to display the number 3 as three. "
                    correctAnswer="apnumber"
                    v1="apnumber"
                    v2="intcomma"
                    v3="intword"
                    v4=" ordinal"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="How do you concatenate two QuerySets into one list? "
                    correctAnswer="from itertools import chain	result = list(chain(query_set_1, query_set_2))"
                    v1="result = list(query_set_1 | query_set_2)"
                    v2="from itertools import chain	result = list(chain(query_set_1, query_set_2))"
                    v3="from django.db.models import Q result = Q(query_set_1) | Q(query_set_1)"
                    v4="result = query_set_1 + query_set_2"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="What is the Django command to start a new app named ‘users’ in an existing project? "
                    correctAnswer="manage.py startapp users"
                    v1="manage.py –newapp users"
                    v2="manage.py newapp users"
                    v3="manage.py –startapp users"
                    v4="manage.py startapp users "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question="What are the features available in Django web framework? "
                    correctAnswer="All of the above"
                    v1="Admin Interface (CRUD)"
                    v2="Templating"
                    v3="Form handling"
                    v4=" All of the above"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question="  The architecture of Django consists of?"
                    correctAnswer="All of these"
                    v1="Models"
                    v2=" Views"
                    v3="Templates"
                    v4="All of these "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="What is the purpose of settings.py? "
                    correctAnswer="To configure settings for the Django project"
                    v1="To configure settings for the Django project"
                    v2="To configure settings for an app"
                    v3="To set the date and time on the server"
                    v4=" To sync the database schema"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="What are the caching strategies in Django? "
                    correctAnswer="Both A and B"
                    v1="File sytem caching"
                    v2="In-memory caching"
                    v3="Both A and B"
                    v4=" None "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question="In Django how would you retrieve all the ‘User’ records from a given database? "
                    correctAnswer="User.objects.all()"
                    v1="User.objects.all()"
                    v2="Users.objects.all()"
                    v3="User.all_records()"
                    v4="User.object.all() "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="What is the most easiest, fastest, and most stable deployment choice in most cases with Django? "
                    correctAnswer="mod_wsgi"
                    v1="FastCGI"
                    v2="mod_wsgi"
                    v3="SCGI"
                    v4="AJP"
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
              <h5 className="mb-3">Recommended for you</h5>
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

export default DjangoMCQ1;
