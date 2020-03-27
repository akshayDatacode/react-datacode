import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter as Router } from "react-router-dom";
import AppRouters from "./app_routers/AppRouters";

import IndexFooter from "./components/footer_component/indexFooter";
import IndexHeader from "./components/header_component/IndexHeader";

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="row">
            <div className="col-md col-sm mb-5">
              <IndexHeader />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid m-0">
        <div className="row  mt-3 mb-2 p-0 ">
          <div className="col">
            <AppRouters />
          </div>
        </div>
      </div>

      <div className="row m-0 p-0 ">
        <div className="col">
          <IndexFooter />
        </div>
      </div>
    </Router>
  );
};

export default App;
