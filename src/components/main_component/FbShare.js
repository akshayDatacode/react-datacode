import React, { Component } from "react";
class FbShare extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          class="fb-share-button"
          data-href="https://www.datacode.in"
          data-layout="button"
          data-size="large"
        >
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.datacode.in%2F&amp;src=sdkpreparse"
            class="fb-xfbml-parse-ignore"
          >
            Share
          </a>
        </div>
      </>
    );
  }
}

export default FbShare;
