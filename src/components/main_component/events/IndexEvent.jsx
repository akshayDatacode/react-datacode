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
                imgsource="event.jpeg"	                
                status="Upcoming"	                
                eventName="Beginner's Coding Challenge"
                detail="A Coding Challenge for Beginners 
                
                Register here:- https://bit.ly/datacode_beginner_code_challenge "
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
                
                Register here:- https://bit.ly/datacode_beginner_code_challenge`}
              />

            <EventCard
                imgsource="event.jpeg"	                
                status="Closed"	                
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
                eventName="Shootpy_ Python for Women workshop"
                detail="this is the event wich is taking over with the help  or out business"
                discription="This International Women’s Day (8th March 2020), Datacode organized ‘Shoot PY_ for Women’ - an online python contest for women in association with Facebook Developers Circle as a Community partner.

              to recognize the success of women programmers and reassert their importance to the IT industry.
                
                We at Datacode provided a platform for all code divas to showcase their coding talent and praise them.
                we had more than 200 female participants in the contest from all over the world
                
                "
              />
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
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
                eventName="CodeCamp Online Round"
                detail="this is the event wich is taking over with the help  or out business"
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="CodeCamp 2"
                detail="This is Our First Event with Rajeev Sir "
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
             
            </div>
            <div className="card-deck m-2">
            <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="CodeCamp 2 Online Round"
                detail="this is the event wich is taking over with the help  or out business"
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="ShootPy_ Online Round"
                detail="This is Our First Event with Rajeev Sir "
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
             
            </div>
            <div className="card-deck m-2">
            <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="ShootPy2.O_ Online Round"
                detail="this is the event wich is taking over with the help  or out business"
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />

               <EventCard
                imgsource="event.jpeg"	                
                status="Closed"	                
                eventName="Codeamp 1"	                
                detail="This is Our First Event with Rajeev Sir "
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
</div>
            <div className="card-deck m-2 ">
              <h3 className="mt-4 mb-2" style={{ color: "#072C71" }}>
                Discuss with the Community
              </h3>
              <Discuss
                url="https://www.datacode.in/?p=/react-datacode/#/index_articles"
                title="Communities Learning Blogs"
                identifier="index_articles"
              />
            </div>
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
