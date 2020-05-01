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

class PythonPracticeQuestionsBeginner extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <HeaderCard
              title="Beginner Python Programming Practice Problems"
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
                to="index_python_practice_questions"
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
              question={`Check type of following:
              "CodesDope"
              15
              16.2
              9.33333333333333333333`}
              no="1"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`
              Take two inputs from user and check whether they are equal or not.`}
              no="2"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Take two number and check whether the sum is greater than 5, less than 5 or equal to 5.`}
              no="3"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Take 10 integer inputs from user and store them in a list. Now, copy all the elements in another list but in reverse order.`}
              no="4"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Take 10 integer inputs from user and store them in a list. Again ask user to give a number. Now, tell user whether that number is present in list or not.
              ( Iterate over list using while loop ).`}
              no="5"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Create a class named 'Rectangle' with two data members- length and breadth and a method to claculate the area which is 'length*breadth'. The class has three constructors which are :
              1 - having no parameter - values of both length and breadth are assigned zero.
              2 - having two numbers as parameters - the two numbers are assigned as length and breadth respectively.
              3 - having one number as parameter - both length and breadth are assigned that number.
              Now, create objects of the 'Rectangle' class having none, one and two parameters and print their areas.`}
              no="6"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Suppose you have a Piggie Bank with an initial amount of $50 and you have to add some more amount to it. Create a class 'AddAmount' with a data member named 'amount' with an initial value of $50. Now make two constructors of this class as follows:
              1 - without any parameter - no amount will be added to the Piggie Bank
              2 - having a parameter which is the amount that will be added to Piggie Bank
              Create object of the 'AddAmount' class and display the final amount in Piggie Bank.`}
              no="7"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`
              Take name, roll number and field of interest from user and print in the below format :
              Hey, my name is xyz and my roll number is xyz. My field of interest is xyz`}
              no="8"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program to find prime factor of a number.
              If a factor of a number is prime number then it is its prime factor.`}
              no="9"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`
              A student will not be allowed to sit in exam if his/her attendence is less than 75%.
              Take following input from user
              Number of classes held
              Number of classes attended.
              And print
              percentage of class attended
              Is student is allowed to sit in exam or not.
              `}
              no="10"
              tag1="Beginner"
              tag2="Basic"
            />

            <Discuss
              url="https://www.datacode.in/?p=/react-datacode/#/python_practice_questions_beginner"
              title="Beginner Python Practice Problems "
              identifier="python_practice_questions_beginner"
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

export default PythonPracticeQuestionsBeginner;
