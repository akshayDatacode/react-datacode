import React, { Component } from "react";
import { FacebookProvider, Like } from "react-facebook";

class FbLikeShare extends Component {
  state = {};
  render() {
    return (
      <>
        <FacebookProvider appId="682148765561455">
          <Like
            href={this.props.link}
            layout="button_count"
            size="large"
            share
          />
        </FacebookProvider>
      </>
    );
  }
}

export default FbLikeShare;
