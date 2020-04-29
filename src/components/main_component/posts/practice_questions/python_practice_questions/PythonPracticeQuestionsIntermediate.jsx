import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PracticeQuestionCard from "../PracticeQuestionCard";
import RightSideSection from "../../../../right_section/RightSideSection";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
import Discuss from "../../../Discuss";

class PythonPracticeQuestionsIntermediate extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <HeaderCard
              title="Intermediate Python Programming Practice Problems"
              color="#FFD700"
              textcolor="black"
            />

            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>

            <PracticeQuestionCard
              question={`Write a program in python to calculate the sum of the series (1*1) + (2*2) + (3*3) + (4*4) + (5*5)  + ... + (n*n).
              Input the value for nth term: 5
              1*1 = 1 
              2*2 = 4 
              3*3 = 9 
              4*4 = 16
              5*5 = 25
              The sum of the above series is: 55`}
              no="1"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program in python to calculate the series (1) + (1+2) + (1+2+3) + (1+2+3+4) + ... +  (1+2+3+4+...+n).`}
              no="2"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program in python to print a square pattern with # character.
              # # # # 
              # # # # 
              # # # # 
              # # # #`}
              no="3"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program in python to display the sum of the series [ 9 + 99 + 999 + 9999 ...].
              Sample Output:
              Input number of terms: 5
              9 99 999 9999 99999 
              The sum of the sarise = 111105`}
              no="4"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program in python to find the number and sum of all integer between 100 and 200 which are divisible by 9.`}
              no="5"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program in python to Check Whether a Number can be Express as Sum of Two Prime Numbers.
              Input a positive integer: 20
              20 = 3 + 17`}
              no="6"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program in python to make such a pattern like a pyramid with numbers increased by 1.
              Input number of rows: 4                                               
                    1                                                               
                   2 3                                                              
                  4 5 6                                                             
                 7 8 9 10 `}
              no="7"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program in python to print the Floyd's Triangle. 
              1                                                                      
              01                                                                     
              101                                                                    
              0101                                                                   
              10101`}
              no="8"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program in python to display Pascal's triangle like right angle traingle.
              1                                                                      
              1   1                                                                  
              1   2   1                                                              
              1   3   3   1                                                          
              1   4   6   4   1                                                      
              1   5   10   10   5   1                                                
              1   6   15   20   15   6   1`}
              no="9"
              tag1="Intermediate"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program in python to display such a pattern for n number of rows using number. Each row  will contain odd numbers of number. The first and last number of each row will be 1 and middle column  will be the row number.
              1                                                                  
             121                                                                 
            12321                                                                
           1234321                                                               
          123454321`}
              no="10"
              tag1="Intermediate"
              tag2="Basic"
            />

            <Discuss
              url="https://www.datacode.in/?p=/react-datacode/#/python_practice_questions_intermediate"
              title="Intermediate Python Practice Problems "
              identifier="python_practice_questions_intermediate"
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

export default PythonPracticeQuestionsIntermediate;
