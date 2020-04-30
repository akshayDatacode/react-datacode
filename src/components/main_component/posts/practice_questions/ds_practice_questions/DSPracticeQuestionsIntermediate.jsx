import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PracticeQuestionCard from "../PracticeQuestionCard";
import RightSideSection from "../../../../right_section/RightSideSection";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
import Discuss from "../../../Discuss";

class DSPracticeQuestionsIntermediate extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <HeaderCard
              title="Intermediate DataStrucrue Programming Practice Problems"
              color="#FFD700"
              textcolor="black"
            />

            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>

            <PracticeQuestionCard
              question={`Write a subprogram PRINT(TEXT, K) which prints the character string TEXT in lines with at most K characters. No word should be divided in the middle and appear on two lines, so some lines may contain trailing blank spaces. Each paragraph should begin with its own line and be indented using 5 blank spaces. Test the program using (a) K= 800 (b) K= 79 and (c) K = 45`}
              no="1"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program which gives the solution to the Towers of Hanoi problem for n disks. Test the program using (a) n = 3 and  (b) n = 4.`}
              no="2"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Given a stack S and a queue Q, write a program with  procedures FILLQ_WITH_S which will empty the contents of the stack S and insert them into a queue Q and FILLS_WITH_Q which will fill the stack S with the elements deleted from the queue Q. Implement the procedures with S and Q having (i) an array representation and (ii) a linked list representation. What are your observations?.`}
              no="3"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`A little girl wants to convert all the word numbers into decimal numerical numbers.
              Write a program that accepts a number as input in English language format such as One Forty Three (143) and print the decimal numerical form (143) of it.
              `}
              no="4"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Renu’s teacher asked to find the duplicate color pencils from her color box. Write a program  to delete duplicate color pencils from her box of 28 color pencils.`}
              no="5"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Paawan and Akshay are playing chess for the first time, they don’t know where to place the chess coins on the chessboard. Write a program to build an array called CHESS to represent a chessboard and create a function that would be capable of displaying the position of each coin on the chessboard.`}
              no="6"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Piyush created a magic square of 5 row X 5 columns. He put different elements numbers in  that magic square. Write a function to verify whether the sum of each individual column elements, sum of each individual row elements and sum of diagonal elements is equal or not.`}
              no="7"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program to find the location of the element a[1][2][2][1] from a 4-D integer array a[4][3][4][3] if the base address is 1008. `}
              no="8"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program to find and replace a substring of given string. For example if the string is “Learning is tough with Datacode.in” and the sub-string to be deleted is “is tough” then first check if substring “is tough” is present in the string and if present then replace the string with “is best” substring.`}
              no="9"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Sharika wants to write a letter to her friend. She wants to make it look beautiful by coloring on different lines. She wants to know how many colors she needs to write a letter. 
              Write a program, which counts the number of lines in a given letter text.
              `}
              no="10"
              tag1="Intermediate"
              tag2="Basic"
            />

            <Discuss
              url="https://www.datacode.in/?p=/react-datacode/#/ds_practice_questions_intermediate"
              title="Intermediate DataSturcture Practice Problems "
              identifier="ds_practice_questions_intermediate"
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

export default DSPracticeQuestionsIntermediate;
