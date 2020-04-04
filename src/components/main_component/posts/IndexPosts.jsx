import React, { Component } from "react";
import PostCard from "../PostCard";

class IndexPosts extends Component {
  state = {};

  render() {
    return (
      <>
        {/* First 3 Post Cards */}
        <div className="container-fluid mt-5">
          <div class="row ">
            <div className="col">
              <div class="card-deck mt-3">
                <PostCard
                  imgsource="programming_boooks.jpeg"
                  title="Programming Books"
                  paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                  link="/index_books"
                />
                <PostCard
                  imgsource="indexcover2.jpeg"
                  title="Programming MCQs"
                  paragraph="Programming MCQ Question bext Learning Maretiral"
                  link="/index_mcqs"
                />
                <PostCard
                  imgsource="programming_practices.jpeg"
                  title="Programming Example Questions"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
              </div>
            </div>
          </div>
        </div>
        {/* First Row 3 Post Cards Ending >>>>>>>>>>>>>>>>>>>>> */}
        {/* First 3 Post Cards */}
        <div className="container-fluid mt-5">
          <div class="row ">
            <div className="col">
              <div class="card-deck mt-3">
                <PostCard
                  imgsource="programming_practices.jpeg"
                  title="Programming Example Questions"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
                <PostCard
                  imgsource="programming_practices.jpeg"
                  title="Programming Example Questions"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
                <PostCard
                  imgsource="programming_practices.jpeg"
                  title="Programming Example Questions"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
              </div>
            </div>
          </div>
        </div>
        {/* First Row 3 Post Cards Ending >>>>>>>>>>>>>>>>>>>>> */}
      </>
    );
  }
}

export default IndexPosts;
