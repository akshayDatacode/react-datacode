import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class IndexPosts extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Link className="nav-link" to="/dbms_interview_question">
                  DBMS Interview Question
            </Link>
            <Link className="nav-link" to="/oops_interview_question">
                  OOPs Interview Question
            </Link>
            <Link className="nav-link" to="/python_mcqs">
                  Python MCQs
            </Link>
            </>
         );
    }
}
 
export default IndexPosts;