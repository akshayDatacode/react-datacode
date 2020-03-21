import React, { Component } from 'react';
class PostCard extends Component {
    state = {  }

    render() { 
        return ( 
            <>
                    <div className = " border border-success">
                    <img
                    src= {require("../../../assets/images/"+this.props.require)}
                    className="mx-auto img-fluid img-circle d-block"
                    alt="avatar"
                    />
                    <h5>{this.props.titelHead}</h5>
                    <p>{this.props.paragraph}</p>    
                    
                    <div className="row">
                        <div className="col-8"></div> 
                        <div className="col-4">
                            <h6 className="text-primary">Read More</h6>
                        </div>             
                    </div>
                    </div>
            </>
         );
    }
}
 
export default PostCard;