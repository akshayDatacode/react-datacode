import React, { Component } from "react";
import HeaderCard from "../../../HeaderCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PracticeQuestionCard from "../PracticeQuestionCard";
import RightSideSection from "../../../../right_section/RightSideSection";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
import Discuss from "../../../Discuss";

class JavaPracticeQuestionsAdvance extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <HeaderCard
              title="Advance Java Programming Practice Problems"
              color="#FFD700"
              textcolor="black"
            />

            <Link to="/home" className="badge badge-primary mr-1">
              <FontAwesomeIcon icon={faHome} size="2x" />
            </Link>

            <PracticeQuestionCard
              question={`Factorial of any number n is represented by n! and is equal to 1*2*3*....*(n-1)*n. E.g.-
              4! = 1*2*3*4 = 24
              3! = 3*2*1 = 6
              2! = 2*1 = 2
              Also,
              1! = 1
              0! = 0
              Write a Java program to calculate factorial of a number.`}
              no="1"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Consider an integer array, the number of elements in which is determined by the user. The elements are also taken as input from the user. Write a program to find those pair of elements that has the maximum and minimum difference among all element pairs.`}
              no="2"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program to find greatest common divisor (GCD) or highest common factor (HCF) of given two numbers`}
              no="3"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`A three digit number is called Armstrong number if sum of cube of its digit is equal to number itself.
              E.g.- 153 is an Armstrong number because (13)+(53)+(33) = 153.
              Write all Armstrong numbers between 100 to 500.`}
              no="4"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`A person is elligible to vote if his/her age is greater than or equal to 18. Define a method to find out if he/she is elligible to vote. Write a Java program 
              `}
              no="5"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program to print the factorial of a number by defining a method named 'Factorial'.
              Factorial of any number n is represented by n! and is equal to 1*2*3*....*(n-1)*n. E.g.-
              4! = 1*2*3*4 = 24
              3! = 3*2*1 = 6
              2! = 2*1 = 2
              Also,
              1! = 1
              0! = 0`}
              no="6"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Define a method named 'perfect' that determines if parameter number is a perfect number. Use this function in a program that determines and prints all the perfect numbers between 1 and 1000.
              [An integer number is said to be "perfect number" if its factors, including 1(but not the number itself), sum to the number. E.g., 6 is a perfect number because 6=1+2+3].`}
              no="7"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Define a method to calculate power of a number raised to other i.e. ab using recursion where the numbers 'a' and 'b' are to be entered by the user`}
              no="8"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Write a program that takes as input your gross salary and your total saving and uses another function named taxCalculator() to calculate your tax. The taxCalculator() function takes as parameters the gross salary as well as the total savings amount. The tax is calculated as follows:
              (a) The savings is deducted from the gross income to calculate the taxable income. Maximum deduction of savings can be Rs. 100,000, even though the amount can be more than this.
              (b) For up to 100,000 as taxable income the tax is 0 (Slab 0); beyond 100,000 to 200,000 tax is 10% of the difference above 100,000 (Slab 1); beyond 200,000 up to 500,000 the net tax is the tax calculated from Slab 0 and Slab 1 and then 20% of the taxable income exceeding 200,000 (Slab 2); if its more than 500,000, then the tax is tax from Slab 0, Slab 1, Slab 2 and 30% of the amount exceeding 500,000.`}
              no="9"
              tag1="Advance"
              tag2="Basic"
            />
            <PracticeQuestionCard
              question={`Take 20 integer inputs from user and print the following:
              number of positive numbers
              number of negative numbers
              number of odd numbers
              number of even numbers
              number of 0s.`}
              no="10"
              tag1="Advance"
              tag2="Basic"
            />

            <Discuss
              url="https://www.datacode.in/?p=/react-datacode/#/java_practice_questions_advance"
              title="Advance Java Practice Problems "
              identifier="java_practice_questions_advance"
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

export default JavaPracticeQuestionsAdvance;
