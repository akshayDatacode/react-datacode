import React, { Component } from 'react';
import {Switch, Route } from "react-router-dom";
import MainComponent from '../components/main_component';
import Articles from '../components/main_component/aticles/Articles';
import AboutUs from '../components/main_component/AboutUs';
import DBMSPosts from '../components/main_component/posts/DBMSPosts';
import OOPsPost from '../components/main_component/posts/OOPsPost';
import PythonQuize from '../components/main_component/posts/PythonQuize';

class AppRouters extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <Switch>
                <Route exact path="/" component = {MainComponent}/>
                <Route exact path="/articles" component = {Articles}/>
                <Route exact path="/aboutus" component = {AboutUs}/>
                <Route exact path="/dbms_interview_question" component ={DBMSPosts} />
                <Route exact path="/oops_interview_question" component ={OOPsPost} />
                <Route exact path="/python_mcqs" component ={PythonQuize} />

            </Switch>
            </>
         );
    }
}
 
export default AppRouters;