import React, { Component } from "react";
import CarouselEvent from "./CarouselEvent";
import EventCard from "./EventCard";
import RightSideSection from "../../right_section/RightSideSection";

class IndexEvent extends Component {
  state = {};
  render() {
    return (
      <>
        <CarouselEvent />

        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 p-5 mt-4">
            <div className="card-deck m-2">
              <EventCard
                imgsource="event.jpeg"
                status="Upcoming"
                eventName="Sagethon 2k18"
                detail="This is Our First Event with Rajeev Sir "
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="CodeCamp1"
                detail="this is the event wich is taking over with the help  or out business"
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
            </div>
          </div>
          <div className="col-md-3">
            <RightSideSection />
          </div>
        </div>
      </>
    );
  }
}

export default IndexEvent;
