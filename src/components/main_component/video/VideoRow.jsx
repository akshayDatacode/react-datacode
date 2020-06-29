import React, { Component } from "react";
import Youtube from "react-youtube";
import YouTube from "react-youtube";

class VideoRow extends Component {
  state = {};

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "390",
      width: "570",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <>
        <div className="row p-4">
          <div className="col-md-6 border border-danger ">
            <div className="row p-4">
              Contect ContectContectContectContectContectContectContectContect
              ContectContectContectContectContect
              ContectContectContectContectContectContectCoContectContectContect
              ContectContectContectContectContectContectContectContect
              ContectContectContectContectContectContect
              ContectContectContectContectContect
              ContectContectContectContectContectContectContectContect
              ContectContectContectContect ContectContectContectntect
              ContectContectContect
            </div>
          </div>
          <div className="col-md-6 border border-primary">
            <div className="card">
              <YouTube
                videoId={this.props.videoId}
                opts={opts}
                onReady={this._videoOnReady}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VideoRow;
