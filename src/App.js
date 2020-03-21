import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import HeaderComponent from "./components/header_component/HeaderComponent";
import FooterComponent from "./components/footer_component/FooterComponent";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouters from "./app_routers/AppRouters";
import SideSection from './components/side_section/SideSection';
import IndexFooter from './components/footer_component/indexFooter';

const App = () => {
  return (
    <>
    <Router>
      <div className="containers">
        <div className="row">
          <div className="col">
            <HeaderComponent/>
          </div>
        </div>
        
        <div className="row">
          <div className="border border-warning  col-md-8 col-sm">
            <AppRouters/>   
          </div>
          <div className="border border-primary col col-2-md md-0 ">
             Side BARS
             <SideSection/>
          </div>    
        </div>
        <div className="row">
          <div className="col">
            <IndexFooter />
           
          </div>     
        </div> 
      </div>
      
       
     
    </Router>
    </>
  );
}

export default App;
