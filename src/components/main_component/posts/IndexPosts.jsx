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
                  title="Programming Practice Questions"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
              </div>
            </div>
          </div>
        </div>
        {/* First Row 3 Post Cards Ending >>>>>>>>>>>>>>>>>>>>> */}

        {/* second 3 Post Cards */}
        <div className="container-fluid mt-5">
          <div class="row ">
            <div className="col">
              <div class="card-deck mt-3">
                <PostCard
                  imgsource="indexcover1.jpeg"
                  title="Technical Interview Questions"
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
        {/* First 3 Post Cards */}
        <div className="container-fluid mt-5">
          <div class="row ">
            <div className="col">
              <div class="card-deck mt-3">
                <PostCard
                  imgsource="python_programming.jpeg"
                  title="Python Programming"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
                <PostCard
                  imgsource="java_programming.jpeg"
                  title="Java Programming"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
                <PostCard
                  imgsource="c_programming.jpeg"
                  title="C Programming"
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
                  imgsource="datastructure.jpeg"
                  title="DataStructure"
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
        {/* fourth 3 Post Cards */}
        <div className="container-fluid mt-5">
          <div class="row ">
            <div className="col">
              <div class="card-deck mt-3">
                <PostCard
                  imgsource="javascript.jpeg"
                  title="JavaScript"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
                <PostCard
                  imgsource="html.jpeg"
                  title="HTML"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
                <PostCard
                  imgsource="css.jpeg"
                  title="CSS"
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
                  imgsource="sql_interview_question.jpeg"
                  title="SQL Interview Questions"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
                <PostCard
                  imgsource="dbms_interview_question.jpeg"
                  title="DBMS Interview Questions"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
                <PostCard
                  imgsource="oops_interview_question.jpeg"
                  title="OOPs Interview Questions"
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
                  imgsource="python_programming_question.jpeg"
                  title="Python Programming Example Questions"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
                <PostCard
                  imgsource="java_programming_question.jpeg"
                  title="Java Programming Example Questions"
                  paragraph="Programming Example Qustions fromm Beginners to Advance Study"
                  link="/index_programming_questions"
                />
                <PostCard
                  imgsource="c_programming_question.jpeg"
                  title="C Programming Example Questions"
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
