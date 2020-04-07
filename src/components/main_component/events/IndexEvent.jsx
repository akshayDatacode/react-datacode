import React, { Component } from "react";
import CarouselEvent from "./CarouselEvent";
import EventCard from "./EventCard";
import RightSideSection from "../../right_section/RightSideSection";
import FooterComponentUpper from "../../footer_component/FooterComponentUpper";

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
        <div className="container-fluid mt-5">
          <FooterComponentUpper />
        </div>
      </>
    );
  }
}

export default IndexEvent;
