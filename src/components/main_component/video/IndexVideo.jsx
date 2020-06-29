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
            <VideoRow videoId="UYxTC3Y4Lwc" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="3ajFpYW-Qd4" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="e2l3v6QbJPk" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="H3vqbhvQcx4" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="o4wdgzSm3gQ" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="dIrAnD5tWEQ" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="7T5Y6V7jlYU" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="lYANvzJ4HtM" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="Ewa4-URpMg0" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="eFOFKkqroYk" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="74t29bYS0kjM" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="K0Dy70Q4zS4" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="UdEzRTOaUys" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="33i4pcA-HAw" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="rVg-XLWE4_o" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideoRow videoId="HuklCMnc3Ao" />
          </div>
        </div>
      </>
    );
  }
}

export default IndexVideo;
