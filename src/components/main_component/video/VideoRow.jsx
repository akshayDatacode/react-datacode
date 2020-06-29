import React, { Component } from "react";
import Youtube from "react-youtube";
import YouTube from "react-youtube";
import "../../../assets/css/video.css";

class VideoRow extends Component {
  state = {};

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "390",
      width: "690",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <>
   

        <div id="youtube-video">

          <div className="col-md-6">
            <YouTube id="video-id"
              videoId={this.props.videoId}
              opts={opts}
              onReady={this._videoOnReady}
            />
          </div>

          <div className="col-md-6  ">
            <div id="content" >
              <h1>Heading of the webinar</h1>
              <p>What are Microservices? </p>
               <p> What's Cloud-Native Development? </p>
<p>
We hear them often and they are everywhere in the industry these days but what are they? What are they used for and why should you know about them? 

If you are interested or simply curious about any of these, come and join us.

DevcIndore presents Introduction to Microservices webinar which will give you an insight into the microservices and We bet you'll learn something really interesting.  

We will be having an enthusiastic software engineer, Kashif Ali from Diaspark Inc who would be the speaker for the session.</p>
             
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VideoRow;
