import React, { Component } from 'react';
import FooterComponentUpper from './FooterComponentUpper';
import FooterComponent from './FooterComponent';
class IndexFooter extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <FooterComponentUpper/>
            <FooterComponent/>
            </>
         );
    }
}
 
export default IndexFooter;