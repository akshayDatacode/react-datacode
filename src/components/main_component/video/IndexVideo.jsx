import React, { Component } from "react";
import CarouselComponent from "../CarouselComponent";
import VideoRow from "./VideoRow";

class IndexVideo extends Component {
  state = {};
  render() {
    return (
      <>
        <CarouselComponent />
        <div className="row">
          <div className="col">
            <VideoRow videoId="Ewa4-URpMg0" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="Ewa4-URpMg0" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="Ewa4-URpMg0" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="Ewa4-URpMg0" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="Ewa4-URpMg0" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="Ewa4-URpMg0" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="Ewa4-URpMg0" />
          </div>
        </div>
      </>
    );
  }
}

export default IndexVideo;
