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
                status="Closed"
                eventName="DataStructure Learning Session"
                detail="This is Our First Event with Rajeev Sir "
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="Sootpy_ Python for Women workshop"
                detail="this is the event wich is taking over with the help  or out business"
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
            </div>
            <div className="card-deck m-2">
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="Sagethon 2k18"
                detail="This is Our First Event with Rajeev Sir "
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="Sagethon 2k19"
                detail="this is the event wich is taking over with the help  or out business"
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
            </div>
            <div className="card-deck m-2">
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="CodeCamp 1"
                detail="This is Our First Event with Rajeev Sir "
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="CodeCamp Online Round"
                detail="this is the event wich is taking over with the help  or out business"
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
            </div>
            <div className="card-deck m-2">
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="CodeCamp 2"
                detail="This is Our First Event with Rajeev Sir "
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="CodeCamp 2 Online Round"
                detail="this is the event wich is taking over with the help  or out business"
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
            </div>
            <div className="card-deck m-2">
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="ShootPy_ Online Round"
                detail="This is Our First Event with Rajeev Sir "
                discription=" This Event was the best one so we are not able to dscritp the bst thnfksc dfsfkskjfdvsj ;v;djsj fefjje'f"
              />
              <EventCard
                imgsource="event.jpeg"
                status="Closed"
                eventName="ShootPy2.O_ Online Round"
                detail="this is the event wich is taking over with the help  or out business"
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
