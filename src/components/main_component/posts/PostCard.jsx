import React, { Component } from 'react';
class PostCard extends Component {
    state = {  }

    render() { 
        return ( 
            <>

            <div className="card bg-light mb-5 shadow mb-2 rounded">
                <div className="card-body"> 
            
                    <img
                    src= {require("../../../assets/images/"+this.props.require)}
                    className="mx-auto img-fluid img-circle d-block mb-2"
                    alt="avatar"
                    />
                    <h5 className="text-info">{this.props.titelHead}</h5>
                    <p clsssName="text-light">{this.props.paragraph}</p>    
                    
                    <div className="row">
                        <div className="col-7"></div> 
                        <div className="col-5">
                            <h6 className="text-primary">Read More</h6>
                        </div>             
                    </div>
                    
               </div>
            </div>     
                    
            </>
         );
    }
}
 
export default PostCard;