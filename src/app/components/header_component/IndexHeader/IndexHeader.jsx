import React, { useState } from "react";
import HeaderComponent from "../OldHeader";
import Header from "./Header";
// import NavbarComponent from "./NavbarComponent";
import SideDrawer from "../side_drawer/SideDrawer";
import BackDrop from "../back_drop/BackDrop";

const IndexHeader = ({
  isShowAddTutorial,
}) => {
  //  state = {
  //    sideDrawerOpen: false,
  //  };
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    console.log("ddd")
    setSideDrawerOpen((prevState) => {
      return !prevState.sideDrawerOpen
    });
  };

  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backDrop;

  if (sideDrawerOpen) {
    backDrop = <BackDrop click={backDropClickHandler} />;
  }

  return (
    <>
      <Header drawerClickHandler={drawerToggleClickHandler} isShowAddTutorial={isShowAddTutorial} />
      {/* /<HeaderComponent /> */}
      {/* <HeaderComponent 
          drawerClickHandler={this.drawerToggleClickHandler}
          isUserLogin={this.props.isUserLogin}
        /> */}
      {/* <NavbarComponent/>  */}
      <SideDrawer show={sideDrawerOpen} backDropClickHandler={backDropClickHandler} />
      {backDrop}
    </>
  );
}

export default IndexHeader;