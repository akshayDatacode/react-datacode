import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";
class JavaInterviewQuestions extends Component {
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
                  <h1 className="card-title text-light display-5 ">
                    Java Interview Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <Link to="/home" className="badge badge-primary mr-1">
                Home >
              </Link>
              <Link
                to="/index_interview_questioins"
                className="badge badge-warning mr-1"
              >
                Interview Questions >
              </Link>
              <QuestionCard
                question={`Q1. What are wrapper classes in Java?
             `}
                answer={`Wrapper classes convert the Java primitives into the reference types (objects). Every primitive data type has a class dedicated to it. These are known as wrapper classes because they “wrap” the primitive data type into an object of that class. Refer to the below image which displays different primitive type, wrapper class and constructor argument.
             `}
              />
              <QuestionCard
                question={`Q2. What are constructors in Java?
             `}
                answer={`In Java, constructor refers to a block of code which is used to initialize an object. It must have the same name as that of the class. Also, it has no return type and it is automatically called when an object is created.
             `}
              />
              <QuestionCard
                question={`Q3. What is singleton class in Java and how can we make a class singleton?
             `}
                answer={`Singleton class is a class whose only one instance can be created at any given time, in one JVM. A class can be made singleton by making its constructor private.
             `}
              />
              <QuestionCard
                question={`Q4. What is the difference between equals() and == in Java?
             `}
                answer={`Equals() method is defined in Object class in Java and used for checking equality of two objects defined by business logic.“==” or equality operator in Java is a binary operator provided by Java programming language and used to compare primitives and objects. public boolean equals(Object o) is the method provided by the Object class. The default implementation uses == operator to compare two objects. For example: method can be overridden like String class. equals() method is used to compare the values of two objects.
             `}
              />
              <QuestionCard
                question={`Q5. What is a package in Java? List down various advantages of packages.
             `}
                answer={`Packages in Java, are the collection of related classes and interfaces which are bundled together. By using packages, developers can easily modularize the code and optimize its reuse. Also, the code within the packages can be imported by other classes and reused. Below I have listed down a few of its advantages:
             Packages help in avoiding name clashes
             They provide easier access control on the code
             Packages can also contain hidden classes which are not visible to the outer classes and only used within the package
             Creates a proper hierarchical structure which makes it easier to locate the related classes
             `}
              />
              <QuestionCard
                question={`Q6. Why pointers are not used in Java?
             `}
                answer={`Java doesn’t use pointers because they are unsafe and increases the complexity of the program. Since, Java is known for its simplicity of code, adding the concept of pointers will be contradicting. Moreover, since JVM is responsible for implicit memory allocation, thus in order to avoid direct access to memory by the user,  pointers are discouraged in Java.
`}
              />
              <QuestionCard
                question={`Q7. What is JIT compiler in Java?
             `}
                answer={`JIT stands for Just-In-Time compiler in Java. It is a program that helps in converting the Java bytecode into instructions that are sent directly to the processor. By default, the JIT compiler is enabled in Java and is activated whenever a Java method is invoked. The JIT compiler then compiles the bytecode of the invoked method into native machine code, compiling it “just in time” to execute. Once the method has been compiled, the JVM summons the compiled code of that method directly rather than interpreting it. This is why it is often responsible for the performance optimization of Java applications at the run time.
             `}
              />
              <QuestionCard
                question={`Q8. What are access modifiers in Java?
             `}
                answer={`In Java, access modifiers are special keywords which are used to restrict the access of a class, constructor, data member and method in another class. Java supports four types of access modifiers:
             Default
             Private
             Protected
             Public
                          `}
              />
              <QuestionCard
                question={`Q9. Define a Java Class.
             `}
                answer={`A class in Java is a blueprint which includes all your data.  A class contains fields (variables) and methods to describe the behavior of an object. Let’s have a look at the syntax of a class.
            
             class Abc {
             member variables // class body
             methods}
             `}
              />
              <QuestionCard
                question={`Q10. What is an object in Java and how is it created?
             `}
                answer={`An object is a real-world entity that has a state and behavior. An object has three characteristics:
             State
             Behavior
             Identity
             An object is created using the ‘new’ keyword. For example:
             ClassName obj = new ClassName();
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

export default JavaInterviewQuestions;
