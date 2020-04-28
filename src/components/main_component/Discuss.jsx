import { DiscussionEmbed, CommentEmbed } from "disqus-react";

import React, { Component } from "react";
class Discuss extends Component {
  state = {};

  render() {
    return (
      <>
        <DiscussionEmbed
          shortname="datacode-in"
          config={{
            url: "https://www.datacode.in/#/",
            identifier: "datacode-in",
            title: "Comment Your Answer",
          }}
        />
      </>
    );
  }
}

export default Discuss;
