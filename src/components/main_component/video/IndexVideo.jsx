import React, { Component } from "react";
import CarouselComponent from "../CarouselComponent";
import VideoRow from "./VideoRow";
import "../../../assets/css/video.css";


class IndexVideo extends Component {
  state = {};
  render() {
    return (
      <>
        <CarouselComponent />
        <div id="video-top">
      <h1> Top and latest webinars</h1>
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
