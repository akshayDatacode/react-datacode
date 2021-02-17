import React, { useState } from "react";
import HeaderComponent from "../OldHeader";
import Header from "./Header";
// import NavbarComponent from "./NavbarComponent";
import SideDrawer from "../side_drawer/SideDrawer";
import BackDrop from "../back_drop/BackDrop";

const IndexHeader = ({
  isShowAddTutorial,
  currentUser,
  logoutUser,
}) => {
  //  state = {
  //    sideDrawerOpen: false,
  //  };
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
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
      <Header currentUser={currentUser} logoutUser={logoutUser} drawerClickHandler={drawerToggleClickHandler} isShowAddTutorial={isShowAddTutorial} />
      {/* /<HeaderComponent /> */}
      {/* <HeaderComponent 
          drawerClickHandler={this.drawerToggleClickHandler}
          isUserLogin={this.props.isUserLogin}
        /> */}
      {/* <NavbarComponent/>  */}
      <SideDrawer logoutUser={logoutUser} currentUser={currentUser} show={sideDrawerOpen} backDropClickHandler={backDropClickHandler} />
      {backDrop}
    </>
  );
}

export default IndexHeader;
