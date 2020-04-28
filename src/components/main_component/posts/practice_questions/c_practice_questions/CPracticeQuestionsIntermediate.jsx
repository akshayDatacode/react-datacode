import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PracticeQuestionCard from "../PracticeQuestionCard";
import RightSideSection from "../../../../right_section/RightSideSection";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
class CPracticeQuestionsIntermediate extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <HeaderCard
              title="Intermediate C Programming Practice Questions"
              color="#FFD700"
              textcolor="black"
            />

            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>

            <PracticeQuestionCard
              question={`Write a C program to convert specified days into years, weeks and days.
              (Note: Ignore leap year.)
            
              Input :-
              
              Number of days : 1329
              
              Expected Output :
              Years: 3
              Weeks: 33
              Days: 3
              `}
              no="1"
              tag1="Intermediate"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`The length & breadth of a rectangle and radius of a circle are input through the keyboard. Write a program to calculate the area & perimeter of the rectangle, and the area & circumference of the circle.`}
              no="2"
              tag1="Intermediate"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.`}
              no="3"
              tag1="Intermediate"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`If a five-digit number is input through the keyboard, write a program to print a new number by adding one to each of its digits. For example if the number that is input is 12391 then the output should be displayed as 23402.`}
              no="4"
              tag1="Intermediate"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`A five-digit number is entered through the keyboard. Write a program to obtain the reversed number and to determine whether the original and reversed numbers are equal or not
              `}
              no="5"
              tag1="Intermediate"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`Write a program to check whether a triangle is valid or not, when the three angles of the triangle are entered through the keyboard. A triangle is valid if the sum of all the three angles is equal to 180 degrees.`}
              no="6"
              tag1="Intermediate"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`If cost price and selling price of an item is input through the keyboard, write a program to determine whether the seller has made profit or incurred loss. Also determine how much profit he made or loss he incurred
              `}
              no="7"
              tag1="Intermediate"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`Math teacher asked  students to find the coordinate of the XY points. Write a C program to accept a coordinate point in a XY coordinate system and determine in which quadrant the coordinate point lies.

              Ex : -  X-7, Y-9
              The coordinate point (7,9) lies in the First quadrant
              `}
              no="8"
              tag1="Intermediate"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`To Qualify an Examination of a School. There are 4 Subjects of 100 marks. Each need atleast 40 marks. And the total marks of all subject atleast 200.
              Dhanshree Got 46 marks in Math , 45 marks in Hindi , 54 marks in Science , 54 marks in English. Write a C Program to the calculate result Percentage and find she is Pass or Fail 
              `}
              no="9"
              tag1="Intermediate"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`Abhijeet have 19767 Rupees in his Bank Account and He want to withdraw all of them from ATM. Write a C Program to break the amount into smallest possible number of bank notes.`}
              no="10"
              tag1="Intermediate"
              tag2="Logic"
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

export default CPracticeQuestionsIntermediate;
