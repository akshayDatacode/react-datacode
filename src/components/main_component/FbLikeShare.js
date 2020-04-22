import React, { Component } from "react";
import { FacebookProvider, Like } from "react-facebook";

class FbLikeShare extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <FacebookProvider appId="682148765561455">
              <Like
                href="https://www.datacode.in/?p=/react-datacode/#/"
                colorScheme="dark"
                showFaces
                share
              />
            </FacebookProvider>
          </div>
        </div>
      </>
    );
  }
}

export default FbLikeShare;
