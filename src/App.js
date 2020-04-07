import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AppRouters from "./app_routers/AppRouters";
import IndexFooter from "./components/footer_component/indexFooter";
import IndexHeader from "./components/header_component/IndexHeader";
import FooterComponentUpper from "./components/footer_component/FooterComponentUpper";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="row">
            <div className="col-md col-sm mb-4">
              <IndexHeader />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid m-0 border border-danger">
        <div className="row  mt-5 mb-2 p-0 ">
          <div className="col">
            <AppRouters />
          </div>
        </div>
        <div className="row  mt-5 mb-2 p-0 ">
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
};

export default App;
