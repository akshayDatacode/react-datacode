import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";
import RoadMapCard from "../../tutorials/RoadMapCard";
import InterviewQuestionCardCarousel from "./InterviewQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FbLikeShare from "../../../FbLikeShare";
import { faHome, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import LearningSideSection from "../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../right_section/Technologies";

class AndroidInterviewQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7 mt-4">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              Find the Best Android Interview Questions
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>
            <Link
              to="/index_interview_questioins"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="2x"
                color="#06CB6C"
              />
            </Link>
            <div className="row mb-5">
              <div className="col">
                <QuestionCard
                  question={`1) What is Android?
                `}
                  answer={`Android is an open-source, Linux-based operating system used in mobiles, tablets, televisions, etc.

                `}
                />
                <QuestionCard
                  question={`2) Who is the founder of Android?
                `}
                  answer={`Andy Rubin.

                `}
                />
                <QuestionCard
                  question={`3) Explain the Android application Architecture.
                `}
                  answer={`Following is a list of components of Android application architecture:

                1. Services: Used to perform background functionalities.
                2. Intent: Used to perform the interconnection between activities and the data passing mechanism.
                3. Resource Externalization: strings and graphics.
                4. Notification: light, sound, icon, notification, dialog box and toast.
                5. Content Providers: It will share the data between applications.
                `}
                />
                <QuestionCard
                  question={`4) What are the code names of android?
                `}
                  answer={`
                1. Aestro
                2. Blender
                3. Cupcake
                4. Donut
                5. Eclair
                6. Froyo
                7. Gingerbread
                8. Honeycomb
                9. Ice Cream Sandwich
                10. Jelly Bean
                11. KitKat
                12. Lollipop
                13. Marshmallow`}
                />
                <QuestionCard
                  question={`5) What are the advantages of Android?
                `}
                  answer={`Open-source: It means no license, distribution and development fee.

                Platform-independent: It supports Windows, Mac, and Linux platforms.
                
                Supports various technologies: It supports camera, Bluetooth, wifi, speech, EDGE etc. technologies.
                
                Highly optimized Virtual Machine: Android uses a highly optimized virtual machine for mobile devices, called DVM (Dalvik Virtual Machine).`}
                />
                <QuestionCard
                  question={`6) Does android support other languages than java?
                `}
                  answer={`Yes, an android app can be developed in C/C++ also using android NDK (Native Development Kit). It makes the performance faster. It should be used with Android SDK.

                `}
                />
                <QuestionCard
                  question={`7) What are the core building blocks of android?
                `}
                  answer={`The core building blocks of Android are:

                1. Activity
                2. View
                3. Intent
                4. Service
                5. Content Provider
                6. Fragment etc.
                `}
                />
                <QuestionCard
                  question={`8) What is activity in Android?
                `}
                  answer={`Activity is like a frame or window in java that represents GUI. It represents one screen of android.

                `}
                />
                <QuestionCard
                  question={`9) How are view elements identified in the android program?
                `}
                  answer={`View elements can be identified using the keyword findViewById.

                `}
                />
                <QuestionCard
                  question={`10) What is intent?
                `}
                  answer={`It is a kind of message or information that is passed to the components. It is used to launch an activity, display a web page, send SMS, send email, etc. There are two types of intents in android:

                1. Implicit Intent
                2. Explicit Intent
                `}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h4 className="text-primary">For More Technologies</h4>
                <InterviewQuestionCardCarousel />
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <FbLikeShare />{" "}
            <h4 className="mb-3 mt-4" style={{ color: "#072C71" }}>
              Other Learning Resources
            </h4>

            <RoadMapCard
              imgsource="android_tech.jpeg"
              title="50 Android Interview Questions & Answers"
              source="(guru99)"
              tag1="android"
              tag2=" Interview Questions"
              link="https://www.guru99.com/android-interview-questions.html"
            />
            <RoadMapCard
              imgsource="android_tech.jpeg"
              title="Top 50 Android Interview Questions You Must Prepare "
              source="(edureka)"
              tag1="android"
              tag2=" Interview Questions"
              link="https://www.edureka.co/blog/interview-questions/top-android-interview-questions-for-beginners/"
            />
            <RoadMapCard
              imgsource="android_tech.jpeg"
              title="Top 35 Android Interview Questions and Answers"
              source="(softwaretestinghelp)"
              tag1="android"
              tag2=" Interview Questions"
              link="https://www.softwaretestinghelp.com/android-interview-questions/"
            />
            <RoadMapCard
              imgsource="android_tech.jpeg"
              title="Android Interview Questions"
              source="(tutorialspoint)"
              tag1="android"
              tag2=" Interview Questions"
              link="https://www.tutorialspoint.com/android/android_interview_questions.htm"
            />
            <RoadMapCard
              imgsource="android_tech.jpeg"
              title="Android Interview Questions Cheat Sheet"
              source="(android.jlelse.eu)"
              tag1="android"
              tag2=" Interview Questions"
              link="https://android.jlelse.eu/android-interview-questions-cheat-sheet-96ea01c88def"
            />
            <RoadMapCard
              imgsource="android_tech.jpeg"
              title="50 Top Android Interview Questions And Answers "
              source="(hackr.io)"
              tag1="android"
              tag2=" Interview Questions"
              link="https://hackr.io/blog/android-interview-questions"
            />
            <LearningSideSection language="android" />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default AndroidInterviewQuestions;
