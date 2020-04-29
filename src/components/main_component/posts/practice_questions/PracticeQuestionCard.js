import React, { Component } from "react";
class PracticeQuestionCard extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="card mt-2 ">
          <div
            className="card-header p-0 m-0"
            style={{ backgroundColor: "#B5FAB7" }}
          >
            <div className="row">
              <div className="col-6 ml-2">Problem : {this.props.no}</div>
              <div className="col-5 text-right">
                <snap
                  className="badge text-white"
                  style={{ backgroundColor: "#C1580A" }}
                >
                  {this.props.tag1}
                </snap>
                <snap
                  className="ml-2 badge text-"
                  style={{ backgroundColor: "#C1580A" }}
                >
                  {this.props.tag2}
                </snap>
              </div>
            </div>
          </div>
          <div className="card-body">
            <p className="text-left p-1 m-1" style={{ color: "#072C71" }}>
              {this.props.question}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default PracticeQuestionCard;
