import React, { Component } from 'react';
import QuestionCard from './QuestionCard';
class DBMSPosts extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <h1>DBMS Post</h1> 
            <QuestionCard
             question = "What is Interview Questions"
             answer = "The answer of each question is came from interview question"
            />   
            </>
         );
    }
}
 
export default DBMSPosts;