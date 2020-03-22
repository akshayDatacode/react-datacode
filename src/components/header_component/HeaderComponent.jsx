import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class HeaderComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <>
<nav class="navbar navbar-expand-lg text-light bg-dark">
  <a class="navbar-brand text-light bg-dark" href="#">Datacode.in</a>
  <button class="navbar-toggler text-white bg-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      
   
    </ul>

    <div class="nav-item dropdown form-inline my-2 my-lg-0">
        <a class="nav-link dropdown-toggle text-light bg-dark" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Technologies
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">C</a>
          <a class="dropdown-item" href="#">C++</a>
          <a class="dropdown-item" href="#">Python</a>
        </div>
      </div>

      <div class="form-inline my-2 my-lg-0">


    <a class="nav-link text-light bg-dark" href="#">Articles</a>

    <a class="nav-link text-light bg-dark" href="#">Languages</a>

     
    <a class="nav-link text-light bg-dark" href="#">Blogs</a>
    <a class="nav-link text-light bg-dark" href="#">About Us</a>


    </div>

  </div>
</nav>
            </>
         );
    }
}
 
export default HeaderComponent;