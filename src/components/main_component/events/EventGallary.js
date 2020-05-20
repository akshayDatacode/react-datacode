import React, { Component } from "react";
import RightSideSection from "../../right_section/RightSideSection";
import EventCard from "./EventCard";
import EventPicture from "./EventPicture";

class EventGallary extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="card text-center border-0">
          <img
            className=" card-img d-block w-100"
            src={require("../../../assets/images/datacodeheader1.jpeg")}
            alt="First slide"
          />
        </div>
        <div className="row">
          <div className="col-9 pl-md-5 pl-5">
            <div className="row">
              <div className="col">
                <div className="card-deck mt-4">
                  <EventPicture imgsource="a.jpeg" />
                  <EventPicture imgsource="b.jpeg" />
                  <EventPicture imgsource="c.jpeg" />
                </div>
                <div className="card-deck mt-4">
                  <EventPicture imgsource="d.jpeg" />
                  <EventPicture imgsource="e.jpeg" />
                  <EventPicture imgsource="f.jpeg" />
                </div>
                <div className="card-deck mt-4">
                  <EventPicture imgsource="g.jpeg" />
                  <EventPicture imgsource="h.jpeg" />
                  <EventPicture imgsource="i.jpeg" />
                </div>
                <div className="card-deck mt-4">
                  <EventPicture imgsource="j.jpeg" />
                  <EventPicture imgsource="k.jpeg" />
                  <EventPicture imgsource="l.jpeg" />
                </div>
                <div className="card-deck mt-4">
                  <EventPicture imgsource="m.jpeg" />
                  <EventPicture imgsource="n.jpeg" />
                  <EventPicture imgsource="o.jpeg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3  pt-3">
            <EventCard
              imgsource="beginners_coding_challenge.jpeg"
              imgheader="beginners_coding_banner.jpeg"
              status="Upcoming"
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
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default EventGallary;
