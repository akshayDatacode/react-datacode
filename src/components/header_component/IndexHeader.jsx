import React, { Component } from 'react';
import HeaderBannerSection from './HeaderBannerSection';
import HeaderComponent from './HeaderComponent';
class IndexHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            
            <HeaderComponent/>
            <HeaderBannerSection />
            </>
         );
    }
}
 
export default IndexHeader;