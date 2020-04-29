import React, { Component } from "react";
import RightSideSection from "../../../right_section/RightSideSection";
import ProgramCard from "./ProgramCard";
import RecommendPost from "../../../right_section/RecommendPost";
class PythonPgramQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluids ">
          <div className="row">
            <div className="col">
              <div className="card bg-success">
                <div className="card-body p-2">
                  <h1 className="card-title text-light display-5">
                    Python Programming Examples Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-none d-sm-block mt-4">
              <div className="card bg-primary">
                <div className="card-body p-2 m-1">
                  <h3>Python Road Map</h3>
                </div>
              </div>
              <ul class="list-group list-group-flush">
                <li className="list-group-item">Python Introduction</li>
                <li className="list-group-item">Variable</li>
                <li className="list-group-item">Keywords and Identifiers</li>
                <li className="list-group-item">Data Type</li>
                <li className="list-group-item">Python Flow Control</li>
                <li className="list-group-item">If statement</li>
                <li className="list-group-item">If-Else</li>
                <li className="list-group-item">Nested if</li>
                <li className="list-group-item">For Loop</li>
                <li className="list-group-item">While Loop</li>
                <li className="list-group-item">Break</li>
                <li className="list-group-item">Continue</li>
                <li className="list-group-item">Pass</li>
                <li className="list-group-item">Python Function</li>
                <li className="list-group-item">Python Recursion</li>
                <li className="list-group-item">Python OOPs</li>
                <li className="list-group-item">Class & Object</li>
                <li className="list-group-item">Python Constructors</li>
              </ul>
            </div>
            <div className="col-md-6 mt-3 pt-3 bg-light">
              <div className="mb-3">
                <h5 className="mb-2" style={{ color: "#072C71" }}>
                  Python Programming examples on Characters
                </h5>
                <ProgramCard
                  link="https://www.programiz.com/python-programming/examples/hello-world"
                  heading="Python Program to Print Hello world!"
                  language="Python"
                  code={`HEllo Gabbu`}
                />

                <ProgramCard
                  link="https://beginnersbook.com/2018/01/python-program-check-positive-negative-zero/"
                  heading="Python Program to Check if a Number is Positive Negative or Zero"
                  language="Python"
                  code={`HEllo Gabbu`}
                />

                <ProgramCard
                  link="https://beginnersbook.com/2018/01/python-program-check-alphabet/"
                  heading="Python Program to Check Alphabet"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://beginnersbook.com/2018/01/python-program-check-vowel-consonant/"
                  heading="Python Program to Check Vowel or Consonant"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.tutorialgateway.org/python-program-to-check-character-is-lowercase-or-uppercase/"
                  heading="Python Program to check character is Lowercase or Uppercase"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
              </div>

              <div className="mb-3">
                <h5 className="mb-2" style={{ color: "#072C71" }}>
                  Python examples on simple mathematical problems
                </h5>

                <ProgramCard
                  link="https://www.geeksforgeeks.org/python-program-to-add-two-numbers/"
                  heading="Python program to add two numbers"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.geeksforgeeks.org/python-program-for-factorial-of-a-number/"
                  heading="Python Program for factorial of a number"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.geeksforgeeks.org/python-program-for-simple-interest/"
                  heading="Python Program for simple interest"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://beginnersbook.com/2018/01/python-program-check-leap-year-or-not/"
                  heading="Python Program to Check whether Year is a Leap Year or not"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://beginnersbook.com/2018/01/python-program-check-prime-or-not/"
                  heading="Python Program to Check If a number is Prime or not"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://beginnersbook.com/2018/01/python-program-check-even-odd/"
                  heading="Python Program to Check If number is Even or Odd"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://beginnersbook.com/2018/02/python-program-to-convert-decimal-to-binary/"
                  heading="Python Program to Convert Decimal to Binary"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://beginnersbook.com/2018/03/python-program-to-add-two-binary-numbers/"
                  heading="Python Program to Add two binary numbers"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://beginnersbook.com/2018/03/python-program-to-add-two-matrices/"
                  heading="Python Program to Add two Matrices"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://beginnersbook.com/2018/04/python-program-to-calculate-length-of-a-string/"
                  heading="Python Program to Calculate length of a String"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-calculate-average-numbers-given-list/"
                  heading="Python Program to Calculate the Average of Numbers in a Given List"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-exchange-values-two-numbers-without-using-temporary-variable/"
                  heading="Python Program to Exchange the Values of Two Numbers Without Using a Temporary Variable"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-read-number-compute/"
                  heading="Python Program to Read a Mumber n and Compute n+nn+nnn"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-reverse-given-number/"
                  heading="Python Program to Reverse a Given Number"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-take-marks-5-subjects-display-grade/"
                  heading="Python Program to Take in the Marks of 5 Subjects and Display the Grade"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-print-numbers-range-divisible-given-number/"
                  heading="Python Program to Print Number Range Divisible By Given Number"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-take-numbers-print-quotient-remainder/"
                  heading="Python Program to Read Two Numbers and Print Their Quotient and Remainder"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-print-odd-numbers-given-range/"
                  heading="Python Program to Print Odd Numbers Within a Given Range"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-find-sum-digits-number/"
                  heading="Python Program to Find the Sum of Digits in a Number"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-find-smallest-divisor-integer/"
                  heading="Python Program to Find the Smallest Divisor of an Integer"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-check-number-palindrome/"
                  heading="Python Program to Check if a Number is a Palindrome"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
              </div>
              <div className="mb-3">
                <h5 className="mb-2" style={{ color: "#072C71" }}>
                  Advanced Python Mathematical Programs
                </h5>
                <ProgramCard
                  link="https://www.tutorialgateway.org/python-program-armstrong-number/"
                  heading="Python Program For Armstrong Number"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.tutorialgateway.org/python-program-to-count-number-of-digits-in-a-number/"
                  heading="Python Program to Count Number of Digits in a Number"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.tutorialgateway.org/python-fibonacci-series-program/"
                  heading="Python Fibonacci Series program"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.tutorialgateway.org/python-program-to-find-factors-of-a-number/"
                  heading="Python Program to find Factors of a Number"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.tutorialgateway.org/python-program-to-find-first-digit-of-a-number/"
                  heading="Python Program to find First Digit of a Number"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-check-date-valid-print-incremented-date/"
                  heading="Python Program to Check if a Date is Valid and Print the Incremented Date if it is"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-compute-simple-interest-given-required-values/"
                  heading="Python Program to Compute Simple Interest Given all the Required Values"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-print-pascal-triangle/"
                  heading="Python Program to Print the Pascal's triangle for n number of rows given by the user"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-check-perfect-number/"
                  heading="Python Program to Check if a Number is a Perfect Number"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
              </div>
              <div className="mb-3">
                <h5 className="mb-2" style={{ color: "#072C71" }}>
                  Python Programming Examples on Lists
                </h5>
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-find-largest-number-list/"
                  heading="Python Program to Find the Largest Number in a List"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-find-second-largest-number-list/"
                  heading="Python Program to Find the Second Largest Number in a List"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-even-odd-elements-different-lists/"
                  heading="Python Program to Put Even and Odd elements in a List into Two Different Lists"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-merge-two-lists-sort/"
                  heading="Python Program to Merge Two Lists and Sort it"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-sort-list-accoring-second-element-sublist/"
                  heading="Python Program to Sort the List According to the Second Element in Sublist"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-second-largest-number-bubble-sort/"
                  heading="Python Program to Find the Second Largest Number in a List Using Bubble Sort"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-sort-list-length-elements/"
                  heading="Python Program to Sort a List According to the Length of the Elements"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-find-union-two-lists/"
                  heading="Python Program to Find the Union of two Lists"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-remove-duplicate-items-list/"
                  heading="Python Program to Remove the Duplicate Items from a List"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-read-list-words-returns-longest/"
                  heading="Python Program to Read a List of Words and Return the Length of the Longest One"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-remove-occurrence-given-word-list/"
                  heading="Python Program to Remove the ith Occurrence of the Given Word in a List where Words can Repeat"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-remove-tuples-outside-range/"
                  heading="Python Program to Remove All Tuples in a List of Tuples with the USN Outside the Given Range"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
                <ProgramCard
                  link="https://www.sanfoundry.com/python-program-find-union-two-lists/"
                  heading="Python Program to Find the Union of two Lists"
                  language="Python"
                  code={`HEllo Gabbu`}
                />
              </div>
            </div>
            <div className="col-md-3 mt-4">
              <RightSideSection />
              <h5 className="mb-4">More Programming Questions</h5>
              <RecommendPost
                imgsource="python_mcqs.jpeg"
                RecPostHading="Python MCQs Questions"
                link="/index_python_mcqs"
              />
              <RecommendPost
                imgsource="java_mcqs.jpeg"
                RecPostHading="Java MCQs Questions"
                link="/index_java_mcqs"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PythonPgramQuestions;
