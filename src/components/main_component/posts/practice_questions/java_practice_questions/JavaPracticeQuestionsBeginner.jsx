import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode } from "@fortawesome/free-solid-svg-icons";
import PracticeQuestionCard from "../PracticeQuestionCard";
import RightSideSection from "../../../../right_section/RightSideSection";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
import Discuss from "../../../Discuss";
import Technologies from "../../../../right_section/Technologies";

class JavaPracticeQuestionsBeginner extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <HeaderCard
              title="Beginner Java Programming Practice Problems"
              color="#FFD700"
              textcolor="black"
            />
            <div className="mb-3">
              <Link
                to="/home"
                className="badge mr-1"
                style={{ backgroundColor: "#06CB6C" }}
              >
                <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
              </Link>
              <Link
                to="index_java_practice_questions"
                className="badge mr-1 text-white"
                style={{ backgroundColor: "#072C71" }}
              >
                <FontAwesomeIcon
                  icon={faCode}
                  size="1x"
                  color="#06CB6C"
                  className="mr-2"
                />
                back to code
              </Link>
            </div>

            <PracticeQuestionCard
              question={`Write a Java program that takes two numbers as input and display the product of two numbers.`}
              no="1"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Java program to print the sum (addition), multiply, subtract, divide and remainder of two numbers`}
              no="2"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Java program to multiply two binary numbers`}
              no="3"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Java program to convert a decimal number to hexadecimal number`}
              no="4"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Take name, roll number and field of interest from user and print in the format below :
              Hey, my name is xyz and my roll number is xyz. My field of interest are xyz.
              `}
              no="5"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`
              Write a program to enter the values of two variables 'a' and 'b' from keyboard and then check if both the conditions 'a < 50' and 'a < b' are true.`}
              no="6"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`If the marks of Robert in three subjects are entered through keyboard (each out of 100 ), write a program to calculate his total marks and percentage marks.`}
              no="7"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`A shop will give discount of 10% if the cost of purchased quantity is more than 1000.
              Ask user for quantity
              Suppose, one unit will cost 100.
              Judge and print total cost for user.`}
              no="8"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`A company decided to give bonus of 5% to employee if his/her year of service is more than 5 years.
              Ask user for their salary and year of service and print the net bonus amount.`}
              no="9"
              tag1="Beginner"
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
              no="10"
              tag1="Beginner"
              tag2="Basic"
            />

            <Discuss
              url="https://www.datacode.in/?p=/react-datacode/#/java_practice_questions_beginner"
              title="Beginner Java Practice Problems "
              identifier="java_practice_questions_beginner"
            />

            <h5 className="text-secondary mt-5 mb-3">
              For More Programming Practice Questions
            </h5>
            <PracticeQuestionCardCarousel />
          </div>

          <div className="col-md-3">
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default JavaPracticeQuestionsBeginner;
