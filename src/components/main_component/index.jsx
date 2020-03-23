import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Indexposts from './posts/IndexPosts';
import HeaderBannerSection from './HeaderBannerSection'
class MainComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <>
           
            <div className="container">
                <div className="row"> 
                    <HeaderBannerSection imgsource = "coder1.jpeg"/>
                    <Indexposts/> 

                 
                 
                </div>

            </div>
          
            </>
         );
    }
}
 
export default MainComponent;