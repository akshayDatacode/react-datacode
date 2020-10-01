import React, { Component } from "react";
import CarouselEvent from "./CarouselEvent";
import EventCard from "./EventCard";
import RightSideSection from "../../right_section/RightSideSection";
import FooterComponentUpper from "../../footer_component/FooterComponentUpper";
import Discuss from "../Discuss";

class IndexEvent extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <CarouselEvent />

        <div className="row">
          {/* <div className="col-1"></div> */}
          <div className="col-md-9 p-2 mt-4">
            <div className="card-deck m-2">
              <EventCard
                imgsource="beginners_coding_challenge.jpeg"
                imgheader="beginners_coding_banner.jpeg"
                status="Closed"
                reglink="https://bit.ly/datacode_beginner_code_challenge"
                eventName="Beginner's Coding Challenge"
                detail="A Coding Challenge for Beginners  "
                discription={`Hola coders!

                Datacode.in is back with something exciting for all the learners out there.
                
                As a Beginner in the coding world, Do you hesitate to participate in the Online coding Contest? Do you feel it is tough and you cannot do it? Don't worry!
                For you guys, Datacode is organizing Beginner's Coding Challenge in association with  Facebook Developer Circles, Indore as our community partner.
                
                We at Datacode.in provides a platform to all the beginners to showcase their Coding Talent and improve their coding skills. 
                In this way Beginner's Coding Challenge is an initiative taken by us to help you take your first step into the world of Competitive Programming, to make you familiar with the coding platform and motivate you to participate in more Coding Contests.
                
                So, come, register, participate and get a chance to win some really  cool swags and goodies, online vouchers and a lot more.
                
                Contest details are as follows:
                Starts on May 29, 2020 @ 7:30 PM
                Ends on May 31, 2020 @ 7:30PM IST
                
               `}
              />

              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                imgheader="datacodeheader1.jpeg"
                eventName="DataStructure Learning Session"
                detail="A Session on fundamentals of DataStructure "
                discription="Datacode organized a learning session under CodechefSAGETECH campus chapter of Sage University, on Fundamentals of DataStructure for the students of 1st and 2nd year of CSE and IT department. 
                In this session we had almost 120 students. We tried to cover each and every part related to DataStructure to the beginner level students. From arrays to Stack and to Tree we tried to explain every topic in very detailed manner with examples and codes.
                We also tried to mske this session a interactive and intresting one, so we also made the students play a game of Tower of Hanoi which is basically related to stack , and students with minimum moves got the swags.
                Overall session contained lots of learning, logic building and interaction."
              />
            </div>
            <div className="card-deck m-2">
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                imgheader="datacodeheader1.jpeg"
                eventName="Shootpy_ Python for Women workshop"
                detail="A one day workshop on python for Women "
                discription="Datacode.in organised a one day workshop, dedicated to help and support all the *Women* out there who want to grow, build and succeed in the *Programming* world.

                With some sessions full of python knowledge, we are offered Beverages 🌯 for all the participants, 
                Participants also won exciting
                prizes🏆
                Goodies🎁
                and Certificates📝
                
                "
              />
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                imgheader="datacodeheader1.jpeg"
                eventName="Sagethon 2k18"
                detail="Coding Contest in Sage University "
                discription="A coding contest for all the coding ensthusiats.
                The contest is divided in two parts first round was of coding mcq's followed by second round consist of coding questions to be solved in given time.
                Winners were awarded with cool swags and prize money"
              />
            </div>

            <div className="card-deck m-2">
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                imgheader="datacodeheader3.jpeg"
                eventName="CodeCamp Online Round"
                detail="CodeCamp was an online round of CodeCamp series"
                discription="CODECAMP was a Multi-Programming Online Coding Contest Organised by Datacode for Beginners and Programmers.
                In this Contest, there was 20 MCQs of Multiple Programming Languages varying from Easy to Hard level and also
                3 Logical Coding Questions.
                
                Winners were awarded by cool Swags"
              />
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                imgheader="datacodeheader2.jpeg"
                eventName="CodeCamp 2"
                detail="One Day National Level Coding Competition - Code Camp - II"
                discription="We organised One Day National Level Coding Competition - Code Camp - II under Code Chef (DirectI- one of the Top-10 MNC) & ACM students chapter. In which around 300 students have participated.

                The KEYNOTE speaker was Mr. Mrinal Jain (Frontend Engineer, Wittyfeed, FDC Indore Lead) who delivered the session about Facbook Developer Circle and motivated students to join the Circle for student's betterment.
                
                Th TECH speaker was Mr. Rahul Rungta (Director, DATA HOUSE, Indore) who delivered the session about Data Science and its Future Scope.
                
                Winner of the coding competition got Amazing Prizes"
              />
            </div>
            <div className="card-deck m-2">
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                imgheader="datacodeheader1.jpeg"
                eventName="CodeCamp 2 Online Round"
                detail="A Multi-Programming Online Coding Contest"
                discription=" CODECAMP 2 was a Multi-Programming Online Coding Contest Organised by Datacode for Beginners and Programmers.
                In this Contest, there was 20 MCQs of Multiple Programming Languages varying from Easy to Hard level and also
                3 Logical Coding Questions.
                
                Winners were awarded by cool Swags"
              />
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                imgheader="datacodeheader1.jpeg"
                eventName="ShootPy_ Online Round"
                detail="A Weekly Challenge organised by Datacode for Python"
                discription="Shoot PY_  Online Round was a weekly Challenge organised by Datacode for Python beginners and Programmers.
                In this Contest, there was 20 MCQs of Python varying from Easy to Hard level.
              There were more than 200 participants from all over the world"
              />
            </div>
            <div className="card-deck m-2">
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                imgheader="datacodeheader1.jpeg"
                eventName="ShootPy2.O_ Online Round"
                detail="A Weekly Challenge organised by Datacode for Python"
                discription="SHOOT PY _ 2.0  Online Round was second edition of Shoot PY_  Online Round a weekly Challenge organised by Datacode for Python beginners and Programmers.
                In this Contest, there was 20 MCQs of Python varying from Easy to Hard level.
              There were more than 200 participants from all over the world"
              />

              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                imgheader="datacodeheader1.jpeg"
                eventName="Codeamp 1"
                detail="Multi Programming Coding event "
                discription=" CODECAMP (Multi Programming Online Coding Contest) in association with Codechef for the students of CS/IT II-III year on 22nd August 2019.

                Winners & all Participants were awarded by Goodies, T-shirts and swags sponsored by Facebook Developer Circle Indore, GitHub and ACM."
              />
            </div>
            {/* <div className="card-deck m-2  ">
              <h3
                className="mt-4 mb-2 text-center"
                style={{ color: "#072C71" }}
              >
                Discuss with the Community
              </h3>
              <Discuss
                url="https://www.datacode.in/?p=/react-datacode/#/index_articles"
                title="Communities Learning Blogs"
                identifier="index_articles"
              />
            </div> */}
          </div>
          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
        <div className="container-fluid mt-5">
          <FooterComponentUpper />
        </div>
      </>
    );
  }
}

export default IndexEvent;
