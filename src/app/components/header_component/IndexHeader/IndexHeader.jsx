import React, { useState } from "react";
import HeaderComponent from "../OldHeader";
import Header from "./Header";
// import NavbarComponent from "./NavbarComponent";
import SideDrawer from "../side_drawer/SideDrawer";
import BackDrop from "../back_drop/BackDrop";
import { Link } from "react-router-dom";

const IndexHeader = ({
  isShowAddTutorial,
  currentUser,
  logoutUser,
  userProfileLoading,
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

  console.log("dddddddd", currentUser)

  return (
    <>
      <div className="row m-0 header-upper">
        <div className="col-12 px-0 text-right">
          <div className="px-2 col-12">
            <Link to="/our_story">
              <span className="mx-2">Our Story</span>
            </Link>
            <Link to="/our_partners">
              <span className="mx-2">Our Partners</span>
            </Link>
          </div>
        </div>
      </div>
      <Header userProfileLoading={userProfileLoading} currentUser={currentUser} logoutUser={logoutUser} drawerClickHandler={drawerToggleClickHandler} isShowAddTutorial={isShowAddTutorial} />
      {/* /<HeaderComponent /> */}
      {/* <HeaderComponent 
          drawerClickHandler={this.drawerToggleClickHandler}
          isUserLogin={this.props.isUserLogin}
        /> */}
      {/* <NavbarComponent/>  */}
      <SideDrawer userProfileLoading={userProfileLoading} logoutUser={logoutUser} currentUser={currentUser} show={sideDrawerOpen} backDropClickHandler={backDropClickHandler} />
      {backDrop}
    </>
  );
}

export default IndexHeader;
