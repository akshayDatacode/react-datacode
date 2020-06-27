import React, { Component } from "react";
import { FacebookProvider, Like } from "react-facebook";
import Comments from "react-facebook/dist/Comments";

class FbLikeComment extends Component {
  state = {};
  render() {
    return (
      <>
        <div id="fb-root"></div>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=682148765561455&autoLogAppEvents=1"
        ></script>
        <div
          class="fb-comments"
          data-href="https://www.datacode.in/#/"
          data-numposts="5"
          data-width="800"
          data-colorscheme="dark"
        ></div>
      </>
    );
  }
}

export default FbLikeComment;
