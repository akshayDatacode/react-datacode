import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class HeaderComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            Datacode.in
          </a>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  AboutUS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  Articles
                </Link>
              </li>
            </ul>
          </div>
        </nav>

            </>
         );
    }
}
 
export default HeaderComponent;