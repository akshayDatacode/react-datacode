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

class PythonPracticeQuestionsAdvance extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <HeaderCard
              title="Advance Python Programming Practice Problems"
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
              question={`Write a Python program to get all strobogrammatic numbers that are of length n.A strobogrammatic number is a number whose numeral is rotationally symmetric, so that it appears the same when rotated 180 degrees. In other words, the numeral looks the same right-side up and upside down (e.g., 69, 96, 1001).
              For example,
              Given n = 2, return ["11", "69", "88", "96"].
              Given n = 3, return ['818', '111', '916', '619', '808', '101', '906', '609', '888', '181', '986', '689']`}
              no="1"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Python program to find the value of n where n degrees of number 2 are written sequentially in a line without spaces`}
              no="2"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Python program to create a sequence where the first four members of the sequence are equal to one, and each successive term of the sequence is equal to the sum of the four previous ones. Find the Nth member of the sequence`}
              no="3"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Python program that accept a positive number and subtract from this number the sum of its digits and so on. Continues this operation until the number is positive`}
              no="4"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program in python to print a pattern like highest numbers of columns appear in first row.
              12345                                                                                                         
              2345                                                                                                          
              345                                                                                                           
              45                                                                                                            
              5`}
              no="5"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Python program to compute the summation of the absolute difference of all distinct pairs in an given array (non-decreasing order).
              Sample array: [1, 2, 3]
              Then all the distinct pairs will be:
              1 2
              1 3
              2 3`}
              no="6"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Python program to find the difference between the largest integer and the smallest integer which are created by 8 numbers from 0 to 9. The number that can be rearranged shall start with 0 as in 00135668.
              Input:
              Input an integer created by 8 numbers from 0 to 9.:
              2345
              Difference between the largest and the smallest integer from the given integer:
              3087`}
              no="7"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`if you draw a straight line on a plane, the plane is divided into two regions. For example, if you pull two straight lines in parallel, you get three areas, and if you draw vertically one to the other you get 4 areas.
              Write a Python program to create maximum number of regions obtained by drawing n given straight lines.
              Input:
              (1 = n = 10,000)
              Input number of straight lines (o to exit):
              5
              Number of regions:
              16`}
              no="8"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Python program to find whether a given array of integers contains any duplicate element. Return true if any value appears at least twice in the said array and return false if every element is distinct`}
              no="9"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Python function to calculate the factorial of a number (a non-negative integer). The function accepts the number as an argument.`}
              no="10"
              tag1="Advance"
              tag2="Basic"
            />

            <Discuss
              url="https://www.datacode.in/?p=/react-datacode/#/python_practice_questions_advance"
              title="Advance Python Practice Problems "
              identifier="python_practice_questions_advance"
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

export default PythonPracticeQuestionsAdvance;
