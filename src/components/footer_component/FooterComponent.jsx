import React, { Component } from 'react';
class FooterComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <>
<footer class="page-footer font-small stylish-color-dark pt-4 text-light bg-dark">

  <div class="container text-center text-md-left">

    <div class="row">

      <div class="col-md-4 mx-auto">

        <h5 class="font-weight-bold text-uppercase mt-3 mb-4 ">Datacode.in</h5>
        <p class="text-muted">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>

      </div>
      <hr class="clearfix w-100 d-md-none"/>

<div class="col-md-5 mx-auto">

  <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Our Partners</h5>

  <ul class="list-unstyled">
    <li>
      <a href="#!" class="text-muted">Community Partner:- Facebook Developers Circle Indore</a>
    </li>
    <li>
      <a href="#!" class="text-muted">Community Partner:- Facebook Developers Circle Indore</a>
    </li>
    <li>
      <a href="#!" class="text-muted">Community Partner:- Facebook Developers Circle Indore</a>
    </li>
    <li>
      <a href="#!" class="text-muted">Community Partner:- Facebook Developers Circle Indore</a>
    </li>
  </ul>

</div>

      <hr class="clearfix w-100 d-md-none"/>

      <div class="col-md-2 mx-auto">

        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Contact</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!" class="text-muted">datacode.in@gmail.com</a>
          </li>
          <li>
            <a href="#!" class="text-muted">Link 2</a>
          </li>
          <li>
            <a href="#!" class="text-muted">Link 3</a>
          </li>
          <li>
            <a href="#!" class="text-muted">Link 4</a>
          </li>
        </ul>

      </div>

     

      

    </div>

  </div>


  
  <hr/>
<h6>space for buttons</h6>
  <ul class="list-unstyled list-inline text-center">
    <li class="list-inline-item">
      <a class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-tw mx-1">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-gplus mx-1">
        <i class="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-li mx-1">
        <i class="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a class="btn-floating btn-dribbble mx-1">
        <i class="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>

 

</footer>
            </>
         );
    }
}
 
export default FooterComponent;