import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";
// -----------------------------------------------------

import AppRouters from "./components/app_routers/AppRouters";
import IndexFooter from "./components/footer_component/indexFooter";
import IndexHeader from "./components/header_component/IndexHeader";
import FooterComponentUpper from "./components/footer_component/FooterComponentUpper";
import FooterNavBar from "./components/header_component/footer_nav/FooterNavBar";
import { setLocalUser } from "../components/user/actions";
import { showFooter } from "./actions";

// import fire from "./config/fire";
// import LoginComponent from "./user_base/LoginComponent";

import "../assets/scss/contributor_header.scss";
import "../assets/scss/contributor_sidenav.scss";
import "../assets/scss/contributor_overview.scss";
import "../assets/scss/modal.scss";
import "../assets/scss/login.scss";
import "../assets/scss/style.scss";
import "../assets/scss/landing_page.scss";
import "../assets/scss/footer.scss";
import "../assets/scss/home.scss";
import "../assets/scss/header.scss";
import "../assets/scss/side_nav.scss";
import "../assets/scss/category.scss";
import "../assets/scss/profile.scss";

const App = ({ isShowFooter, setLocalUser, getUserProfile }) => {
  const showFooterPaths = ["#/", "#/home"];
  // /const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    var localUser = JSON.parse(localStorage.getItem("userDetails"));
    console.log("local user", localUser);
    if (localUser && localUser !== null && localUser.data) {
      setLocalUser(localUser.data);
    }

    // if (showFooterPaths.includes(location.pathname)) {
    //   setShowFooter(true);
    // } else {
    //   setShowFooter(false);
    // }
  });
  // state = {
  //   user: {},
  // };

  // componentDidMount() {
  //   this.authListner();
  // }

  // authListner() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ user });
  //     } else {
  //       this.setState({ user: null });
  //     }
  //   });
  // }

  return (
    <>
      <div className="wrapper">
        {/* <div className="container-fluid"> */}

        {/* <IndexHeader isUserLogin={this.state.user} /> */}
        <IndexHeader />
        {/* </div> */}

        {/* <div>{this.state.user ? <AppRouters /> : <LoginComponent />}</div> */}
        <div className="mb-5">
          <AppRouters />
        </div>
        {/* <FooterNavBar />
        <IndexFooter /> */}
        {isShowFooter ? (
          <IndexFooter />
        ) : (
          <>
            <IndexFooter hideTopFooter={true} />
            <FooterNavBar />
          </>
        )}
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setLocalUser,
};

const mapStateToProps = ({ app }) => ({
  isShowFooter: app.isShowFooter,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
