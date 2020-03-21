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
                    <Indexposts/> 
                 
                 
                </div>

            </div>
          
            </>
         );
    }
}
 
export default MainComponent;