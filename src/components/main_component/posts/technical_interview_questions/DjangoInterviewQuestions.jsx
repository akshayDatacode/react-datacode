import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RecommendPost from "../../../right_section/RecommendPost";
import RightSideSection from "../../../right_section/RightSideSection";
import { Link } from "react-router-dom";
import RoadMapCard from "../../technologies/RoadMapCard";
import InterviewQuestionCardCarousel from "./InterviewQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class DjangoInterviewQuestions extends Component {
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
              <div className="card bg-primary">
                <div className="card-body">
                  <h1 className="card-title text-dark display-5 ">
                    Django Interview Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-md-1"></div>
            <div className="col-md-7 ">
            <Link to="/home" className="badge badge-primary mr-1">
                  <FontAwesomeIcon icon={faHome} size="1x" />
                </Link>
              <Link
                to="/index_interview_questioins"
                className="badge badge-warning mr-1"
              >
                Interview Questions >>
              </Link>
              <div className="row mb-5">
                <div className="col">
              <QuestionCard
                question={`1) Explain the Android application Architecture.
                `}
                answer={`Following is a list of components of Android application architecture:

                1. Services: Used to perform background functionalities.
                2. Intent: Used to perform the interconnection between activities and the data passing mechanism.
                3. Resource Externalization: strings and graphics.
                4. Notification: light, sound, icon, notification, dialog box and toast.
                5. Content Providers: It will share the data between applications.
                `}
              />
              <QuestionCard
                question={`Q.2 What is Django Admin Interface?`}
                answer={`Django Admin is the preloaded interface made to fulfill the need of web developers as they won’t need to make another admin panel which is time-consuming and expensive.

                Django Admin is application imported from django.contrib packages. It is meant to be operated by the organization itself and therefore doesn’t need the extensive frontend.
                
                Django’s Admin interface has its own user authentication and most of the general features. It also offers lots of advanced features like authorization access, managing different models, CMS (Content Management System), etc.`}
              />
              <QuestionCard
                question={`Q.3 How is Django’s code reusability feature different from other frameworks?

                `}
                answer={` Django framework offers more code-reusability then other frameworks out there. As Django Project is a collection of different applications like login application, signup application. These applications can be just copied from one directory to another with some tweaks to settings.py file and you won’t need to write new signup application from scratch.

                That’s why Django is a rapid development framework and this level of code reusability is not there in other frameworks.`}
              />
              <QuestionCard
                question={`Q.4 Explain the file structure of a typical Django project?

                `}
                answer={`A Django project is a collection of web-applications which coordinate together to serve the request of the user. These applications have one assigned feature and shall do only that.

                A typical Django project consists of these four files:
                
                manage.py
                settings.py
                __init__.py
                urls.py
                wsgi.py
                `}
              />
              <QuestionCard
                question={`Q.5 Django is an MVC based framework, how this framework implements MVC?

                `}
                answer={`Django is based on MTV architecture which is a variant of MVC architecture.

                MVC is an acronym for Model, View, and Controller. There are different parts of a website so that they can develop and execute in different machines to achieve faster and more responsive websites. Django implements MTV architecture by having 3 different components and they are all handled by Django itself.
                
                Models are the part which is models.py file in a Django application, which defines the data structure of the particular application.
                
                View are the mediators between models and templates, they receive the data from the Model and make it a dictionary and return the same as a response to a request to the Template.
                
                The Template is the component with which user interacts, and it generates both statically and dynamically in the Django server.
                
                That’s how the Django implements 3 components and work in coordination with each other.`}
              />
              <QuestionCard
                question={`Q.6 What happens when a typical Django website gets a request? Explain.

                `}
                answer={`When a user enters a URL in the browser the same request is received by the Django Server. The server then looks for the match of the requested URL in its URL-config and if the URL matches, it returns the corresponding view function. It will then request the data from the Model of that application, if any data is required and pass it to the corresponding template which is then rendered in the browser, otherwise, a 404 error is returned.`}
              />
              <QuestionCard
                question={`Q.7 What is the Controller in the MVC framework of Django?

                `}
                answer={`As Django implements in MTV framework, these three components communicate with each other via the controller and that controller is actually Django framework. Django framework does the controlling part itself.`}
              />
              <QuestionCard
                question={`Q.8 What is Django Rest Framework (DRF)?

                `}
                answer={`Django REST is a framework which lets you create RESTful APIs rapidly.

                This framework has got funding by many big organizations and is popular because of its features over Django frameworks like Serialisation, Authentication policies and Web-browsable API.
                
                RESTful APIs are perfect for web applications since they use low bandwidth and are designed such that they work well with the communications over the Internet like GET, POST, PUT, etc.`}
              />
              <QuestionCard
                question={`Q.9 What is Django ORM?

                `}
                answer={` Django ORM is one of the special feature-rich tools in Django. ORM is an acronym for Object-Relational Mapper. This ORM enables a developer to interact with a database in a pythonic way.

                Django ORM is the abstraction between models (web application data-structure) and the database where the data is stored. It makes possible to retrieve, save, delete and perform other operations over the database without ever writing any SQL code.
                
                It also covers many loopholes and takes all the field attributes and gives you more control over your code in Python rather than any database language.`}
              />
              <QuestionCard
                question={`Q.10 What is a Model in Django and what is the Model class?

                `}
                answer={`A Model in Django is a python class which derives from Model class that imports from the django.db.models library. The concept of Django Models is to create objects that can store data from the user in a user-defined format. Therefore, python class is used for the process and that class is generally defined in models.py file of the particular application.`}
              />
            </div>

            </div>
              
              <div className="row">
                <div className="col">
                  <h4 className="text-primary">For More Technologies</h4>
                  <InterviewQuestionCardCarousel />
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-5">
              <h5 className="mb-4">Other Learning Resources</h5>
                <RoadMapCard
                imgsource="django_tech.jpeg"
                title="Top 50 Django Interview Questions and Answers "
                source="(edureka)"
                tag1="django"
                tag2="interview-questions"
                link="https://www.edureka.co/blog/interview-questions/django-interview-questions/"
              />
              <RoadMapCard
                imgsource="django_tech.jpeg"
                title="Top 25 Django Interview Questions"
                source="(javatpoint)"
                tag1="django"
                tag2="interview-questions"
                link="https://www.javatpoint.com/django-interview-questions-and-answers"
              />

            <RoadMapCard
                imgsource="django_tech.jpeg"
                title="Django Interview Questions and Answers for 2020"
                source="(intellipaat)"
                tag1="django"
                tag2="interview-questions"
                link="https://intellipaat.com/blog/interview-question/django-interview-questions/"
              />

              <RoadMapCard
                imgsource="django_tech.jpeg"
                title="40+ Django Interview Questions"
                source="(online interview questions)"
                tag1="django"
                tag2="interview-questions"
                link="https://www.onlineinterviewquestions.com/django-interview-questions/"
              />

              <RoadMapCard
                imgsource="django_tech.jpeg"
                title="Top 16 Django Interview Questions & Answers "
                source="(guru99)"
                tag1="django"
                tag2="interview-questions"
                link="https://career.guru99.com/top-16-django-interview-questions/"
              />

             <RoadMapCard
                imgsource="django_tech.jpeg"
                title="Top 12 Django Interview Questions And Answers "
                source="(educba)"
                tag1="django"
                tag2="interview-questions"
                link="https://www.educba.com/django-interview-questions/"
              />



              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DjangoInterviewQuestions;
