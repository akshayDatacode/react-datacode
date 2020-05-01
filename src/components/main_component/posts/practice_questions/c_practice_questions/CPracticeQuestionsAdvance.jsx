import React, { Component } from "react";
import PracticeQuestionCard from "../PracticeQuestionCard";
import RightSideSection from "../../../../right_section/RightSideSection";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderCard from "../../../HeaderCard";
import { faHome, faCode } from "@fortawesome/free-solid-svg-icons";
import Discuss from "../../../Discuss";
import Technologies from "../../../../right_section/Technologies";
class CPracticeQuestionsAdvance extends Component {
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
              title="Advance C Programming Practice Questions"
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
                to="index_c_practice_questions"
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
              question={`Write a function to determine whether a year in the Gregorian calender is a leap year. The function returns integer 1 if it is a leap year else 0. (Hint. A year is a leap year if it is divisible by 4 but not divisible by 100 or divisible by 400.) Using this function write another function to return the number of days in a given month (input in terms of 1–12) and year of the Gregorian calendar.`}
              no="1"
              tag1="Advance"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`A library charges a fine for every book returned late. For first 5 days the fine is 30 paise, for 6-10 days fine is two rupee and above 10 days fine is 9 rupees. If you return the book after 30 days your membership will be cancelled. Write a C program to accept the number of days the member is late to return the book and print the fine or the appropriate message.`}
              no="2"
              tag1="Advance"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`Teacher asked to check whether the triangle is isosceles, equilateral, scalene or right angled triangle If the three sides of a triangle are entered through the keyboard. Write a C Program to solve the problem. `}
              no="3"
              tag1="Advance"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`Write a C program to maintain a record of “n” student details using an array of structures with four fields (Roll number, Name, Marks, and Grade). Each field is of an appropriate data type. Print the marks of the student given student name as input.`}
              no="4"
              tag1="Advance"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`Write a program that reads a string of maximum 100 characters from the user, then modifies it by removing all the vowels and prints the result out. Use only one array of characters.
              `}
              no="5"
              tag1="Advance"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`Write a program in C to find the ceiling in a sorted array.
              Given a sorted array in ascending order and a value x, the ceiling of x is the smallest element in array greater than or equal to x, and the floor is the greatest element smaller than or equal to x.
              Expected Output :
              The given array is : 1 3 4 7 8 9 9 10
              The ceiling of 5 is: 7
              `}
              no="6"
              tag1="Advance"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`Write a program in C to check whether an array is subset of another array.
              Expected Output :
              The given first array is : 4 8 7 11 6 9 5 0 2
              The given second array is : 5 4 2 0 6
              The second array is the subset of first array
              `}
              no="7"
              tag1="Advance"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`Write a program in C to find the median of two sorted arrays of same size.
              Expected Output :
              The given array - 1 is : 1 5 13 24 35
              The given array - 2 is : 3 8 15 17 32
              The Median of the 2 sorted arrays is: 14
              `}
              no="8"
              tag1="Advance"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`Write a C program to read n unsorted numbers to an array of size n and pass the address of this array to a function to sort the numbers in ascending order using bubble sort technique. 
              `}
              no="9"
              tag1="Advance"
              tag2="Logic"
            />
            <PracticeQuestionCard
              question={`Write a recursive function with prototype that takes an integer argument n and returns the power of two i.e. 2n . We shall assume that 20 = 1`}
              no="10"
              tag1="Advance"
              tag2="Logic"
            />

            <Discuss
              url="https://www.datacode.in/?p=/react-datacode/#/c_practice_questions_advance"
              title="Advance C Practice Problems "
              identifier="c_practice_questions_advance"
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

export default CPracticeQuestionsAdvance;
