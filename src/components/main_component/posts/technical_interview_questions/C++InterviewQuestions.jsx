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

class CppInterviewQuestions extends Component {
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
              Find the Best C++ Interview Questions
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
                  question={`Q #1) What is the basic structure of a C++ program?

             `}
                  answer={`The basic structure of a C++ program is shown below:

             #include<iostream.h>
             int main()
             {
                             cout<<”Hello,World!”;
                             return 0;
             }
             The first line`}
                />
                <QuestionCard
                  question={`Q #2) What are the Comments in C++?

             `}
                  answer={`Comments in C++ are simply a piece of source code ignored by the compiler. They are only helpful for a programmer to add a description or additional information about their source code.

             In C++ there are two ways to add comments:
             
             //single-line comment
             /* block comment */
             The first type will discard everything after the compiler encounters “//”. In the second type, the compiler discards everything between “/*” and “*/”.`}
                />
                <QuestionCard
                  question={`Q #3) Difference between Declaration and Definition of a variable.

             `}
                  answer={`Answer: The declaration of a variable is merely specifying the data type of a variable and the variable name. As a result of the declaration, we tell the compiler to reserve the space for a variable in the memory according to the data type specified.

             Example:
             
             int Result;
             char c;
             int a,b,c;
             All the above are valid declarations. Also, note that as a result of the declaration, the value of the variable is undetermined.
             
             Whereas, a definition is an implementation/instantiation of the declared variable where we tie up appropriate value to the declared variable so that the linker will be able to link references to the appropriate entities.
             
             From above Example,
             
             Result = 10;
             
             C = ‘A’;
             
             These are valid definitions.`}
                />
                <QuestionCard
                  question={`Q #4) Comment on Local and Global scope of a variable.

             `}
                  answer={`Answer: The scope of a variable is defined as the extent of the program code within which the variable remains active i.e. it can be declared, defined or worked with.

             There are two types of scope in C++:
             
             Local Scope: A variable is said to have a local scope or is local when it is declared inside a code block. The variable remains active only inside the block and is not accessible outside the code block.
             Global Scope: A variable has a global scope when it is accessible throughout the program. A global variable is declared on top of the program before all the function definitions.
             Example:
             
             #include <iostream.h>
             Int globalResult=0; //global variable
             int main()
             {
             Int localVar = 10; //local variable.
             ….. 
              
             }`}
                />
                <QuestionCard
                  question={`Q #5) What is the precedence when there are a Global variable and a Local variable in the program with the same name?

             `}
                  answer={`Answer: Whenever there is a local variable with the same name as that of a global variable, the compiler gives precedence to the local variable.

             Example:
             
             #include <iostream.h>
              int globalVar = 2;
             int main()
             {
              int globalVar = 5;
              cout<<globalVar<<endl;
             }
             The output of the above code is 5. This is because, although both the variables have the same name, the compiler has given preference to the local scope.`}
                />
                <QuestionCard
                  question={`Q #6) When there are a Global variable and Local variable with the same name, how will you access the global variable?

             `}
                  answer={`Answer: When there are two variables with the same name but different scope, i.e. one is a local variable and the other is a global variable, the compiler will give preference to a local variable.

             In order to access the global variable, we make use of a “scope resolution operator (::)”. Using this operator, we can access the value of the global variable.
             
             Example:
             
             #include<iostream.h>
             int x= 10;
             int main()
             {
              int x= 2;
              cout<<”Global Variable x = “<<::x;
              cout<<”/nlocal Variable x= “<<x;
             }
             Output:
             
             Global Variable x = 10
             local Variable x= 2
             `}
                />
                <QuestionCard
                  question={`Q #7) How many ways are there to initialize an int with a Constant?

             `}
                  answer={`Answer: There are two ways:

             The first format uses traditional C notation.
             int result = 10;
             The second format uses the constructor notation.
             int result (10);`}
                />
                <QuestionCard
                  question={`Q #8) What is a Constant? Explain with an example.

             `}
                  answer={`Answer: A constant is an expression that has a fixed value. They can be divided into integer, decimal, floating-point, character or string constants depending on their data type.

             Apart from the decimal, C++ also supports two more constants i.e. octal (to the base 8) and hexadecimal (to the base 16) constants.
             
             Examples of Constants:
             
             75 //integer (decimal)
             0113 //octal
             0x4b //hexadecimal
             3.142 //floating point
             ‘c’ //character constant
             “Hello, World” //string constant
             Note: When we have to represent a single character, we use single quotes and when we want to define a constant with more than one character, we use double-quotes.`}
                />
                <QuestionCard
                  question={`Q #9) How do you define/declare constants in C++?

             `}
                  answer={`Answer: In C++, we can define our own constants using the #define preprocessor directive.

             #define Identifier value
             
             Example:
             
             #include<iostream.h>
             #define PI 3.142
             int main ()
             {
                              float radius =5, area;
                              area = PI * r * r;
                              cout<<”Area of a Circle = “<<area;
             }
             Output: Area of a Circle = 78.55
             
             As shown in the above example, once we define a constant using #define directive, we can use it throughout the program and substitute its value.
             
             We can declare constants in C++ using the “const” keyword. This way is similar to that of declaring a variable, but with a const prefix.
             
             Examples of declaring a constant
             
             const int pi = 3.142;
             const char c = “sth”;
             const zipcode = 411014;
             
             In the above examples, whenever the type of a constant is not specified, the C++ compiler defaults it to an integer type.`}
                />
                <QuestionCard
                  question={`Q #10) Comment on Assignment Operator in C++.

             `}
                  answer={`Answer: Assignment operator in C++ is used to assign a value to another variable.

             a = 5;
             
             This line of code assigns the integer value 5 to variable a.
             
             The part at the left of the =operator is known as an lvalue (left value) and the right as rvalue (right value). Lvalue must always be a variable whereas the right side can be a constant, a variable, the result of an operation or any combination of them.
             
             The assignment operation always takes place from the right to left and never at the inverse.
             
             One property which C++ has over the other programming languages is that the assignment operator can be used as the rvalue (or part of an rvalue) for another assignment.
             
             Example:
             
             a = 2 + (b = 5);
             
             is equivalent to:
             
             b = 5;
             a = 2 + b;
             
             Which means, first assign 5 to variable b and then assign to a, the value 2 plus the result of the previous expression of b(that is 5), leaves a with a final value of 7.
             
             Thus, the following expression is also valid in C++:
             
             a = b = c = 5;
             
             assign 5 to variables a, b and c.`}
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
              imgsource="cpp_tech.jpeg"
              title="50+ Best C++ Interview Questions & Answers in 2020"
              source="(hackr.io)"
              tag1="C++"
              tag2="questions"
              link="https://hackr.io/blog/cpp-interview-questions"
            />
            <RoadMapCard
              imgsource="cpp_tech.jpeg"
              title="Commonly Asked C++ Interview Questions"
              source="(geeksforgeeks)"
              tag1="C++"
              tag2="Questions"
              link="https://www.geeksforgeeks.org/commonly-asked-c-interview-questions-set-1/"
            />
            <RoadMapCard
              imgsource="cpp_tech.jpeg"
              title="C++ Interview Questions"
              source="(tutorialspoint)"
              tag1="C++"
              tag2="Interview"
              link="https://www.tutorialspoint.com/cplusplus/cpp_interview_questions.htm"
            />
            <RoadMapCard
              imgsource="cpp_tech.jpeg"
              title="Top 39 C++ Interview Questions"
              source="(javatpoint)"
              tag1="C++"
              tag2="Questions"
              link="https://www.javatpoint.com/cpp-interview-questions"
            />
            <RoadMapCard
              imgsource="cpp_tech.jpeg"
              title="Top 24 C++ Interview Questions & Answers "
              source="(guru99)"
              tag1="C++"
              tag2="Interview"
              link="https://www.guru99.com/cpp-interview-questions.html"
            />
            <RoadMapCard
              imgsource="cpp_tech.jpeg"
              title="24 Essential C++ Interview Questions and Answers"
              source="(toptal)"
              tag1="C++"
              tag2="Questions"
              link="https://www.toptal.com/c-plus-plus/interview-questions"
            />
            <LearningSideSection language="cpp" />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default CppInterviewQuestions;
