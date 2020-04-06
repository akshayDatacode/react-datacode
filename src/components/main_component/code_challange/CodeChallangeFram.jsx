import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import PrismCode from "../../PrismCode";
class CodeChallangeFram extends Component {
  state = {};
  render() {
    let code = this.props.code;
    return (
      <>
        <div className="card border border-light rounded shadow mt-3">
          <div>
            <h6 className="ml-2 mt-2 text-primary">{this.props.questionNO}</h6>
          </div>
          <div className="card-body text-secondary ">
            <h6>{this.props.codeproblem}</h6>
          </div>

          <Accordion className="text-right border border-white">
            <Accordion.Toggle
              eventKey="0"
              className="mr-3 mb-1  text-danger border border-white bg-white"
            >
              <h6 className="mt-1"> {`<Code Solution>`} </h6>
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <PrismCode
                  code={code}
                  language={this.props.language}
                  plugins={["line-numbers"]}
                />
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </div>
      </>
    );
  }
}

export default CodeChallangeFram;
