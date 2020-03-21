import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostCard from './PostCard';

class IndexPosts extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="nav-link col-md-4 m-1  col-sm">
            <Link  to="/dbms_interview_question"> 
                  <PostCard require = "dbms_interview_question.jpeg.jpeg"
                            titelHead ="DBMS Interview Questions"
                            paragraph ="The Best tutorial website and also the finest and first starting education why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  " 
                  />     
            </Link>
            </div>
            <div className="nav-link col-md-4 m-1  col-sm">
            <Link  to="/dbms_interview_question"> 
                  <PostCard require = "sql1.jpeg"
                            titelHead ="SQL Interview Questions"
                            paragraph ="The Best tutorial website and also the finest and first starting education why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  " 
                  />     
            </Link>
            </div>
            <div className="nav-link col-md-4 m-1  col-sm">
            <Link  to="/dbms_interview_question"> 
                  <PostCard require = "pythontech.jpeg"
                            titelHead ="Pthon Interview Questions"
                            paragraph ="The Best tutorial website and also the finest and first starting education why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  " 
                  />     
            </Link>
            </div>
            <div className="nav-link col-md-4 m-1  col-sm">
            <Link  to="/python_mcqs"> 
                  <PostCard require = "pythontech.jpeg"
                            titelHead ="Pthon MCQ"
                            paragraph ="The Best tutorial website and also the finest and first starting education why dont know how but because of this we are fonf fgdfslsk sg;gk fs;lskg gf;gkg dggk;lfkglk dfgdlfgk  " 
                  />     
            </Link>
            </div>
            </>
         );
    }
}
 
export default IndexPosts;