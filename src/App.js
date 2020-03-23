import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouters from "./app_routers/AppRouters";

import IndexFooter from './components/footer_component/indexFooter';
import IndexHeader from './components/header_component/IndexHeader';

const App = () => {
  return (
    <>
    <Router>
      <div className="containers">
        
        <div className="row">
          <div className="col-12">
            <IndexHeader/>
          </div>  
        </div>
        
        <div className="row">
          <div className="col-12">
            <AppRouters/>    
          </div>  
        </div>
           
        

        <div className="row">
          <div className="col-12">
            <IndexFooter />
           
          </div>     
        </div> 
      </div>
      
       
     
    </Router>
    </>
  );
}

export default App;
