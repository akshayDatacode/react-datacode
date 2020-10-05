import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import NavbarComponent from "./NavbarComponent";
 import SideDrawer from "./side_drawer/SideDrawer";
 import BackDrop from "./back_drop/BackDrop";

class IndexHeader extends Component {
   state = {
     sideDrawerOpen: false,
   };

   drawerToggleClickHandler = () => {
     this.setState((prevState) => {
       return { sideDrawerOpen: !prevState.sideDrawerOpen };
     });
   };

   backDropClickHandler = () => {
     this.setState({ sideDrawerOpen: false });
   };

  render() {
     let backDrop;

   if (this.state.sideDrawerOpen) {
       backDrop = <BackDrop click={this.backDropClickHandler} />;
     }
    return (
      <>
         <HeaderComponent
          drawerClickHandler={this.drawerToggleClickHandler}
          isUserLogin={this.props.isUserLogin}
        />
        <NavbarComponent/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop} 
      </>
    );
  }
}

export default IndexHeader;
