import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AppRouters from "./app_routers/AppRouters";
import IndexFooter from "../components/footer_component/indexFooter";
import IndexHeader from "../components/header_component/IndexHeader";
import FooterComponentUpper from "../components/footer_component/FooterComponentUpper";

// import fire from "./config/fire";
// import LoginComponent from "./user_base/LoginComponent";

import "../assets/scss/style.scss";
import "../assets/scss/landing_page.scss";
import "../assets/scss/footer.scss";

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
        <div className="wrapper">
          {/* <div className="container-fluid"> */}

          {/* <IndexHeader isUserLogin={this.state.user} /> */}
          <IndexHeader />

          {/* </div> */}

          {/* <div>{this.state.user ? <AppRouters /> : <LoginComponent />}</div> */}
          <div className="mt-5">
            <AppRouters />
          </div>

          {/* <div className="row mb-2 p-0 ">
            <div className="col">
              <FooterComponentUpper />
            </div>
          </div> */}

          <IndexFooter />
        </div>
      </>
    );
  }
}

export default App;
