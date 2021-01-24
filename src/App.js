import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AppRouters from "./app_routers/AppRouters";
import IndexFooter from "./components/footer_component/indexFooter";
import IndexHeader from "./components/header_component/IndexHeader";
import FooterComponentUpper from "./components/footer_component/FooterComponentUpper";

// import fire from "./config/fire";
// import LoginComponent from "./user_base/LoginComponent";

import "./assets/scss/style.scss";
import "./assets/scss/landing_page.scss";

class App extends Component {
  state = {
    user: {},
  };

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

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="row">
              <div className="col-md col-sm">
                {/* <IndexHeader isUserLogin={this.state.user} /> */}
                <IndexHeader />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid m-0 ">
          <div className="row mb-2 p-0 ">
            <div className="col p-0">
              {/* <div>{this.state.user ? <AppRouters /> : <LoginComponent />}</div> */}
              <AppRouters />
            </div>
          </div>
          <div className="row mb-2 p-0 ">
            <div className="col">
              <FooterComponentUpper />
            </div>
          </div>
        </div>

        <div className="row m-0 p-0 ">
          <div className="col">
            <IndexFooter />
          </div>
        </div>
      </>
    );
  }
}

export default App;
