import React, { useEffect } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

// -----------------------------------------------------

import AppRouters from "./app_routers/AppRouters";
import IndexFooter from "../components/footer_component/indexFooter";
import IndexHeader from "../components/header_component/IndexHeader";
import FooterComponentUpper from "../components/footer_component/FooterComponentUpper";
import { setLocalUser } from "../components/user/actions";

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

const App = () => {
  useEffect(() => {
    var localUser = JSON.parse(localStorage.getItem("userDetails"));
    console.log("local user", localUser);
    setLocalUser(localUser);
  }, []);
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
        <AppRouters />

        {/* <div className="row mb-2 p-0 ">
            <div className="col">
              <FooterComponentUpper />
            </div>
          </div> */}

        <IndexFooter />
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setLocalUser,
};

export default connect(null, mapDispatchToProps)(App);
