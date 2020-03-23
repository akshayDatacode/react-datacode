import React, { Component } from 'react';
import {Image} from "react-bootstrap";
class HeaderBannerSection  extends Component {
    state = {  }
    render() { 
        return ( 
           <>
            Header Banner Area
            <header class="masthead">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 text-center">
                            <h1 class="font-weight-light">Vertically Centered Masthead Content</h1>
                            <p class="lead">A great starter layout for a landing page</p>
                            <Image
                            src= {require("../../assets/images/"+ this.props.imgsource)}
                            className="mx-auto img-fluid img-circle d-block img-responsive"
                            alt="Responsive image"
                            />
                        </div>
                    </div>
                </div>
            </header>
            </>
         );
    }
}
 
export default HeaderBannerSection ;