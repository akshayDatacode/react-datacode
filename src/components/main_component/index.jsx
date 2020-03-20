import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Indexposts from './posts/IndexPosts';
class MainComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <>
           
            <div className="container">
                <div className="row">
                    <h6> Main Component</h6>  
                    <Indexposts/> 
                 
                 
                </div>

            </div>
          
            </>
         );
    }
}
 
export default MainComponent;