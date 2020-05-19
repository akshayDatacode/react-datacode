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
          <div className="col-1"></div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <div className="card-deck mt-4">
                  <EventPicture imgsource="js_mcq.jpeg" />
                  <EventPicture imgsource="js_mcq.jpeg" />
                  <EventPicture imgsource="js_mcq.jpeg" />
                </div>
                <div className="card-deck mt-4">
                  <EventPicture imgsource="js_mcq.jpeg" />
                  <EventPicture imgsource="js_mcq.jpeg" />
                  <EventPicture imgsource="js_mcq.jpeg" />
                </div>
                <div className="card-deck mt-4">
                  <EventPicture imgsource="js_mcq.jpeg" />
                  <EventPicture imgsource="js_mcq.jpeg" />
                  <EventPicture imgsource="js_mcq.jpeg" />
                </div>
                <div className="card-deck mt-4">
                  <EventPicture imgsource="js_mcq.jpeg" />
                  <EventPicture imgsource="js_mcq.jpeg" />
                  <EventPicture imgsource="js_mcq.jpeg" />
                </div>
                <div className="card-deck mt-4">
                  <EventPicture imgsource="js_mcq.jpeg" />
                  <EventPicture imgsource="js_mcq.jpeg" />
                  <EventPicture imgsource="js_mcq.jpeg" />
                </div>
                <div className="card-deck mt-4">
                  <EventPicture imgsource="js_mcq.jpeg" />
                  <EventPicture imgsource="js_mcq.jpeg" />
                  <EventPicture imgsource="js_mcq.jpeg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3  pt-3">
            <EventCard
              imgsource="event.jpeg"
              status="Upcoming"
              eventName="Sagethon 2k18"
              detail="This is Our First Event with Rajeev Sir "
              discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
            />
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default EventGallary;
