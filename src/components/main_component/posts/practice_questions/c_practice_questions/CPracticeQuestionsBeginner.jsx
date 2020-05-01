import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCode } from "@fortawesome/free-solid-svg-icons";
import PracticeQuestionCardCarousel from "../PracticeQuestionCardCarousel";
import RightSideSection from "../../../../right_section/RightSideSection";
import HeaderCard from "../../../HeaderCard";
import PracticeQuestionCard from "../PracticeQuestionCard";
import Discuss from "../../../Discuss";
import Technologies from "../../../../right_section/Technologies";

class CPracticeQuestionsBeginner extends Component {
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
              title="Beginner C Programming Practice Problems"
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
              question="Take Akshay’s basic salary as input from User. His
              commition income is 40% of basic salary, and providend fund deducted is 20% of basic salary. Write a program to calculate
              his actual salary in hand.
              "
              no="1"
              tag1="beginner"
              tag2="basic"
            />
            <PracticeQuestionCard
              question="A Trader buys 100 gram Gold at the rate of 42700 per 10 gram. He sold at rate 45800 per 10 gram also He buys 5 kg silver at the rate of 54500 per kg and sold at 42400 per kg. Write a C Program to Calculate the net profit or loss."
              no="2"
              tag1="beginner"
              tag2="basic"
            />
            <PracticeQuestionCard
              question="The distance between Delhi and Nagpur is 456 KM. Write a program to convert and print this distance in meters, feet, inches and centimeters"
              no="2"
              tag1="beginner"
              tag2="basic"
            />
            <PracticeQuestionCard
              question="Temperature of a city in Fahrenheit degrees is 89. Write a program to convert this temperature into Centigrade degrees"
              no="3"
              tag1="beginner"
              tag2="basic"
            />
            <PracticeQuestionCard
              question="A Trader buys 100 gram Gold at the rate of 42700 per 10 gram. He sold at rate 45800 per 10 gram also He buys 5 kg silver at the rate of 54500 per kg and sold at 42400 per kg. Write a C Program to Calculate the net profit or loss."
              no="4"
              tag1="beginner"
              tag2="basic"
            />
            <PracticeQuestionCard
              question="Chetan’s height is 176.76 cm, Sourabh’s height is 180.05 cm and Babloo’s height is 154.79 cm. Write a C Program to find how is tallest one and print the average height."
              no="5"
              tag1="beginner"
              tag2="basic"
            />
            <PracticeQuestionCard
              question="In a town, the percentage of men is 52. The percentage of total literacy is 48. If total percentage of literate men is 35 of the total population, write a program to find the total number of illiterate men and women if the population of the town is 80,000"
              no="6"
              tag1="beginner"
              tag2="basic"
            />
            <PracticeQuestionCard
              question="Chetan travels the distance of 490 km and Babloo travels the distance of 789 km. Chetan’s Bike Average Fuel Consumption is 67.54 (km/lt) and Babloo’s Bike Average Fuel Consumption is 56.7 (km/lt). Write a C Program to Calculate total fuel Consumption of both the Bikes. "
              no="7"
              tag1="beginner"
              tag2="basic"
            />
            <PracticeQuestionCard
              question="Write a C program that accepts 4 real numbers from the keyboard and print out the difference of the maximum and minimum values of these four numbers."
              no="8"
              tag1="beginner"
              tag2="basic"
            />
            <PracticeQuestionCard
              question={`Aman have 45634 Rupees and Soniya have 87543 Rupees. Write a program to calculate the total sum of all digits.
              
              Ex : 4 + 5+ 6 + 3 + 4 + 8 + 7 + 5 + 4 + 3 = 49`}
              no="9"
              tag1="beginner"
              tag2="basic"
            />
            <PracticeQuestionCard
              question={`Write a program to print a new number by adding one to each of its digits. For example if the number that is input is 12391 then the output should be displayed as 23402.`}
              no="10"
              tag1="beginner"
              tag2="basic"
            />

            <Discuss
              url="https://www.datacode.in/?p=/react-datacode/#/c_practice_questions_beginner"
              title="Beginner C Practice Problems "
              identifier="c_practice_questions_beginner"
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

export default CPracticeQuestionsBeginner;
