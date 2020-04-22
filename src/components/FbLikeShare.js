import React, { Component } from "react";
import { FacebookProvider, Like } from "react-facebook";

class FbLikeShare extends Component {
  state = {};
  render() {
    return (
      <>
        <FacebookProvider appId="682148765561455">
          <Like
            href="https://www.datacode.in/?p=/react-datacode/#/"
            colorScheme="dark"
            showFaces
            share
          />
        </FacebookProvider>
      </>
    );
  }
}

export default FbLikeShare;
