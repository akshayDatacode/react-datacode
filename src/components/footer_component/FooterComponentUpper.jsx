import React, { Component } from 'react';
class FooterComponentUpper extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className='row'>
                <div className=" border m-2 border-primary col-sm col-md-8 ">
                    <h6> popular posts</h6>
                </div>
                <div className=" border m-2 border-danger col-sm col-md ">
                    <h6> Daily posts</h6>
                </div>
            </div>
            </>
         );
    }
}
 
export default FooterComponentUpper;