import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PracticeQuestionCard from "../PracticeQuestionCard";
import RightSideSection from "../../../../right_section/RightSideSection";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
import Discuss from "../../../Discuss";

class DSPracticeQuestionsBeginner extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <HeaderCard
              title="Beginner DataStructure Programming Practice Problems"
              color="#FFD700"
              textcolor="black"
            />

            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>

            <PracticeQuestionCard
              question={`Write a Program to Solve the Problem of Reverse given string using Recursion`}
              no="1"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Program to Solve the Problem of Longest even length palidromic sum substring`}
              no="2"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Program Find index of 0 to replaced to get maximum length sequence of continuous ones`}
              no="3"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program to Find  26(mod 7), 78(mod 98), -87(mod 91), -38(mod 38).`}
              no="4"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Program to List all the Permutations of the number 1,2,3,4.

              Note first that there are 4! = 24 such permutations :
              
              1234 1243 1324 1342 1423 1432
              2134 2314 2314 2341 2413 2431
              3124 3142 3214 3241 3412 3421
              4123 4132 4213 4312 4312 4321
              
              Observe that the first row contains the six permutations beginning with 1, those beginning with 2, and so on.
              `}
              no="5"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a function subprogram Datacode(A,B), where A and B are positive integers such that Datacode(A,B) = 1 if A divides B but otherwise Datacode(A,B) = 0 (for example, Datacode(3,15)=1 but Datacode(3,16) = 0 ).`}
              no="6"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a Program using Datacode(A,B) function which reads a positive integer N > 10 and determines whether or not N is a prime number.
              (Hint : N is prime if (i) Datacode(2,N)=0 [i.e., N is odd]) and (ii) Datacode(B,N)=0 for all odd integers B.)
              `}
              no="7"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Translate Procedure into a Computer Program i.e., Write a program which finds the location LOC1 of the largest element and the location LOC2 of the second largest element in an array DATA with N > 1 element. Test the program using 70,30,45,65,36,87,34,75,23,54. 
              `}
              no="8"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a subprogram INST(TEXT, NEW, K) which inserts a string NEW into TEXT beginning at TEXT [ K ].`}
              no="9"
              tag1="Beginner"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program which reads words WORD1 and WORD2 and then replaces each occurence of WORD1 in TEXT by WORD2. Test the program using WORD1=”DATACODE” WORD2=”LEARNING”.`}
              no="10"
              tag1="Beginner"
              tag2="Basic"
            />

            <Discuss
              url="https://www.datacode.in/?p=/react-datacode/#/ds_practice_questions_beginner"
              title="Beginner DataSturcture Practice Problems "
              identifier="ds_practice_questions_beginner"
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

export default DSPracticeQuestionsBeginner;
