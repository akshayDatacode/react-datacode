import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PracticeQuestionCard from "../PracticeQuestionCard";
import RightSideSection from "../../../../right_section/RightSideSection";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
import Discuss from "../../../Discuss";

class JavaPracticeQuestionsIntermediate extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <HeaderCard
              title="Intermediate Java Programming Practice Problems"
              color="#FFD700"
              textcolor="black"
            />

            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>

            <PracticeQuestionCard
              question={`Write a Java program that takes two numbers as input and display the product of two numbers.`}
              no="1"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Java program to print the sum (addition), multiply, subtract, divide and remainder of two numbers`}
              no="2"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Java program to multiply two binary numbers`}
              no="3"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Java program to convert a decimal number to hexadecimal number`}
              no="4"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`A shop will give discount of 10% if the cost of purchased quantity is more than 1000.
              Ask user for quantity
              Suppose, one unit will cost 100.
              Judge and print total cost for user.`}
              no="5"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`
              A company decided to give bonus of 5% to employee if his/her year of service is more than 5 years.
              Ask user for their salary and year of service and print the net bonus amount. Write a Java Program.`}
              no="6"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`A school has following rules for grading system:
              a. Below 25 - F
              b. 25 to 45 - E
              c. 45 to 50 - D
              d. 50 to 60 - C
              e. 60 to 80 - B
              f. Above 80 - A
              Ask user to enter marks and print the corresponding grade.`}
              no="7"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`A student will not be allowed to sit in exam if his/her attendence is less than 75%.
              Take following input from user
              Number of classes held
              Number of classes attended.
              And print
              percentage of class attended
              Is student is allowed to sit in exam or not.
              `}
              no="8"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Java program to check whether a entered character is lowercase ( a to z ) or uppercase ( A to Z ).`}
              no="9"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Java program to check if a year is leap year or not.
              If a year is divisible by 4 then it is leap year but if the year is century year like 2000, 1900, 2100 then it must be divisible by 400.`}
              no="10"
              tag1="Intermediate"
              tag2="Basic"
            />

            <Discuss
              url="https://www.datacode.in/?p=/react-datacode/#/java_practice_questions_intermediate"
              title="Intermediate Java Practice Problems "
              identifier="java_practice_questions_intermediate"
            />

            <h5 className="text-secondary mt-5 mb-3">
              For More Programming Practice Questions
            </h5>
            <PracticeQuestionCardCarousel />
          </div>

          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default JavaPracticeQuestionsIntermediate;
