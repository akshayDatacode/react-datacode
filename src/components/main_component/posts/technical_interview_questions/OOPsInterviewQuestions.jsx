import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";
import RoadMapCard from "../../tutorials/RoadMapCard";
import InterviewQuestionCardCarousel from "./InterviewQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FbLikeShare from "../../../FbLikeShare";
import { faHome, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import LearningSideSection from "../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../right_section/Technologies";

class OOPsInterviewQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7 mt-4">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              Find the Best OOPs Interview Questions
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>
            <Link
              to="/index_interview_questioins"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="2x"
                color="#06CB6C"
              />
            </Link>
            <div className="row mb-5">
              <div className="col">
                <QuestionCard
                  question={`1. Can you explain the different types of Inheritance?`}
                  answer={`There are four main types of Inheritance in OOPS as listed below:

                
                • Single Inheritance: This includes one base class along with one derived class.
                • Hierarchical Inheritance: This inheritance class includes one base class as well as multiple derived classes of the same base class.
                • Multilevel Inheritance: This includes a class derived from a derived class.
                • Multiple Inheritance: This class includes several base classes as well as a derived class.
                `}
                />
                <QuestionCard
                  question={`2. Explain the concept of a hashtable.
                `}
                  answer={`Hashtable is used to store multiple items. Each of these items is linked with their own unique string key and can be accessed using the key associated with it.`}
                />
                <QuestionCard
                  question={`3. What is Association?
                `}
                  answer={`Association can be described as a relationship that exists between two objects with multiplicity.
                `}
                />
                <QuestionCard
                  question={`4. Can you touch upon the core concepts of OOPS?
                `}
                  answer={`The core concepts of OOPS are as below:
                • Encapsulation
                • Polymorphism
                • Inheritance
                • Abstraction
                • Composition
                • Association
                • Aggregation
                
                `}
                />
                <QuestionCard
                  question={`5. Can you list out some examples of tokens?
                `}
                  answer={`Here are some common examples of tokens:
                • Keywords
                • Commas
                • Constants
                • Identifiers
                • Brackets
                • Operators`}
                />
                <QuestionCard
                  question={`6. Can you describe Polymorphism and list out the different types of Polymorphism?
                `}
                  answer={`Polymorphism can be termed as the ability to take on more than one form. In OOPS, Polymorphism means a single interface with multiple implementations for a certain class of action.

                Polymorphism can further be classified into two distinct types:
                • Static
                • Dynamic`}
                />
                <QuestionCard
                  question={`7. Can you explain what Access Modifiers are?
                `}
                  answer={`Access modifiers are used to figure out the scope of the method or variables accessible from other various objects or classes.

                Access modifiers can be of five types:
                • Private
                • Public
                • Protected
                • Friend
                • Protected Friend`}
                />
                <QuestionCard
                  question={`8. Can you list out the different types of constructors?
                `}
                  answer={`Constructors are of three types as listed below:
                • Default Constructor: Contains no parameters.
                • Parametric Constructor: Contains parameters. This parameter is used to create a new class instance and for simultaneously passing arguments.
                • Copy Constructor: This is used to create a new object as a copy of an existing object.
                
                In addition to the above-mentioned questions, here’s an additional list of 8 frequently asked OOPS Interview questions that will surely assist you in your bid to crack your all-important OOPS interview.
                
                a. Can you explain what a multicast Delegate is?
                b. Please describe the friend function.
                c. Explain the what Information Hiding is in OOPS.
                d. Explain the concepts of Overloading and Overriding Polymorphism.
                e. Describe the concept of Enum?
                f. Explain multiple inheritance.
                g. Can you point out the differences between Shadowing and Overriding?
                h. Touch upon the differences between Static and Dynamic polymorphism.`}
                />
                <QuestionCard
                  question={`9: What is the relationship between a class and an object?`}
                  answer={`A class acts as a blue-print that defines the properties, states, and behaviors that are common to a number of objects. An object is an instance of the class. For example, you have a class called Vehicle and Car is the object of that class. You can create any number of objects for the class named Vehicle, such as Van, Truck, and Auto.

                The new operator is used to create an object of a class. When an object of a class is instantiated, the system allocates memory for every data member that is present in the class.`}
                />
                <QuestionCard
                  question={`10: When should I use a struct instead of a class?`}
                  answer={`Do not define a structure unless the type has all of the following characteristics:

                1. It logically represents a single value, similar to primitive types (integer, double, and so on).
                2. It has an instance size smaller than 16 bytes.
                3. It is immutable.
                4. It will not have to be boxed frequently.
                `}
                />
                <QuestionCard
                  question={`11. What is polymorphism, what is it for, and how is it used?`}
                  answer={`Polymorphism describes a pattern in object oriented programming in which classes have different functionality while sharing a common interface.

                The beauty of polymorphism is that the code working with the different classes does not need to know which class it is using since they’re all used the same way. A real world analogy for polymorphism is a button. Everyone knows how to use a button: you simply apply pressure to it. What a button “does,” however, depends on what it is connected to and the context in which it is used — but the result does not affect how it is used. If your boss tells you to press a button, you already have all the information needed to perform the task.`}
                />
                <QuestionCard
                  question={`12: What do you mean by data encapsulation?`}
                  answer={`Data encapsulation is a concept of binding data and code in single unit called object and hiding all the implementation details of a class from the user. It prevents unauthorized access of data and restricts the user to use the necessary data only.`}
                />
                <QuestionCard
                  question={`13: What are abstract classes? What are the distinct characteristics of an abstract class?`}
                  answer={`An abstract class is a class that cannot be instantiated and is always used as a base class.
                The following are the characteristics of an abstract class:
                
                1.You cannot instantiate an abstract class directly. This implies that you cannot create an object of the abstract class; it must be inherited.
                2.You can have abstract as well as non-abstract members in an abstract class.
                3.You must declare at least one abstract method in the abstract class.
                4.An abstract class is always public.
                5.An abstract class is declared using the abstract keyword.
                
                The basic purpose of an abstract class is to provide a common definition of the base class that multiple derived classes can share.
                
                `}
                />
                <QuestionCard
                  question={`14: What are similarities between a class and a structure?`}
                  answer={`The following are some of the similarities between a class and a structure:

                1.Access specifiers, such as public, private, and protected, are identically used in structures and classes to restrict the access of their data and methods outside their body.
                2.The access level for class members and struct members, including nested classes and structs, is private by default. Private nested types are not accessible from outside the containing type.
                3.Both can have constructors, methods, properties, fields, constants, enumerations, events, and event handlers.
                4.Both structures and classes can implement interfaces to use multiple-inheritance in code.
                5.Both structures and classes can have constructors with parameter.
                6.Both structures and classes can have delegates and events.`}
                />
                <QuestionCard
                  question={`15: How can you prevent a class from overriding in C#?`}
                  answer={`You can prevent a class from overriding in C# by using the sealed keyword`}
                />
                <QuestionCard
                  question={`16: How is method overriding different from method overloading?`}
                  answer={`*Overriding involves the creation of two or more methods with the same name and same signature in different classes (one of them should be parent class and other should be child).
                *Overloading is a concept of using a method at different places with same name and different signatures within the same class.`}
                />
                <QuestionCard
                  question={`17: Can you specify the accessibility modifier for methods inside the interface?`}
                  answer={`All the methods inside an interface are always public, by default. You cannot specify any other access modifier for them.`}
                />
                <QuestionCard
                  question={`18: Is it possible for a class to inherit the constructor of its base class?`}
                  answer={`No, a class cannot inherit the constructor of its base class.

                `}
                />
                <QuestionCard
                  question={`19.What is the meaning of “IS-A” and “HAS-A” relationship?`}
                  answer={`“IS-A” relationship implies inheritance. A sub class object is said to have “IS-A” relationship with the super class or interface. If class A extends B then A “IS-A” B. It is transitive, that is, if class A extends B and class B extends C then A “IS-A” C. The “instanceof” operator in java determines the “IS-A” relationship.

                When a class A has a member reference variable of type B then A “HAS-A” B. It is also known as Aggregation.
                
                `}
                />
                <QuestionCard
                  question={`20.What is the difference between Association and Dependency?`}
                  answer={`The main difference between Association and Dependency is in case of Association one class has an attribute or member variable of the other class type but in case of Dependency a method takes an argument of the other class type or a method has a local variable of the other class type.`}
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
            <FbLikeShare />{" "}
            <h4 className="mb-3 mt-4" style={{ color: "#072C71" }}>
              Other Learning Resources
            </h4>
            <RoadMapCard
              imgsource="oops_tech.jpeg"
              title="OOPs Interview Questions"
              source="(edureka)"
              tag1="OOPs"
              tag2="Interview Questions"
              link="https://www.edureka.co/blog/interview-questions/oops-interview-questions/"
            />
            <RoadMapCard
              imgsource="oops_tech.jpeg"
              title="Commonly Asked OOP Interview Questions "
              source="(geeksforgeeks)"
              tag1="Common"
              tag2="OOP"
              link="https://www.geeksforgeeks.org/commonly-asked-oop-interview-questions/"
            />
            <RoadMapCard
              imgsource="oops_tech.jpeg"
              title="Top 20+ OOPS Interview Questions and Answers in 2020"
              source="(best interview question)"
              tag1="oops interview"
              tag2="answers"
              link="https://www.bestinterviewquestion.com/oops-interview-questions"
            />
            <RoadMapCard
              imgsource="oops_tech.jpeg"
              title="TOP 250+ OOPS Interview Questions and Answer"
              source="(wisdom jobs)"
              tag1=" OOPS"
              tag2="Interview Questions"
              link="https://www.wisdomjobs.com/e-university/oops-interview-questions.html"
            />
            <RoadMapCard
              imgsource="oops_tech.jpeg"
              title="Top 30 OOPs Interview Questions "
              source="(spring people)"
              tag1="Top 30 "
              tag2="OOP"
              link="https://www.springpeople.com/blog/30-oops-interview-questions-and-answers-2018/"
            />


            <LearningSideSection language="oops" />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default OOPsInterviewQuestions;
