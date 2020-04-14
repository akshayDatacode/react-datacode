import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RecommendPost from "../../../right_section/RecommendPost";
import RightSideSection from "../../../right_section/RightSideSection";
class AndroidInterviewQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluids">
          <div className="row">
            <div className="col">
              <div className="card bg-warning">
                <div className="card-body">
                  <h1 className="card-title text-dark display-5 ">
                    Android Interview Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-1"></div>

            <div className="col-md-7">
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
            <div className="col-md-4 mt-5">
              <h5 className="mb-4">Other Learning Resources</h5>
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />
              <RecommendPost
                imgsource="indexcover1.jpeg"
                RecPostHading="Interview Heading"
              />

              <RightSideSection />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AndroidInterviewQuestions;
