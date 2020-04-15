import React, { Component } from "react";
import { Link } from "react-router-dom";
class ArticlePostCard extends Component {
  state = {};

  render() {
    return (
      <>
        <div class="card border border-light">
          <img
            className=" card-img-top mx-auto img-fluid img-circle d-block mb-0"
            src={require("../../../assets/images/" + this.props.imgsource)}
            alt="avatar"
          />

          <div class="card-body mt-0">
            <snap className="text-right text-white badge badge-primary">
              {this.props.tag1}
            </snap>
            <snap className="text-right text-white ml-2 badge badge-success">
              {this.props.tag2}
            </snap>
            <snap className="text-right text-white ml-2 badge badge-danger">
              {this.props.tag3}
            </snap>
            <h6 className="card-title">{this.props.title}</h6>
            <p className="card-text text-secondary ">{this.props.paragraph}</p>
          </div>
          <div class="card-footer border border-white bg-white">
            <div className="row">
              <div className="col text-right">
                <a href={this.props.link} target="_blank">
                  <h6 className="text-secondary">Read More</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ArticlePostCard;
