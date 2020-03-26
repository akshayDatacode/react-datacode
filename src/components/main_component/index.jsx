import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Indexposts from "./posts/IndexPosts";
import HeaderBannerSection from "./HeaderBannerSection";
import CarouselComponent from "./CarouselComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faCodepen,
  faDashcube,
  faHtml5,
  faJava
 
} from "@fortawesome/free-brands-svg-icons";

class MainComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <CarouselComponent />

        <div className="row d-block d-md-none">
          <div className="col center">
            <center>
              <a
                variant="primary"
                href="/home"
                className=" btn btn-warning btn-lg"
              >
                Start Learning
              </a>
            </center>
          </div>
        </div>
        <hr/>
        <br/>
<br/> 

        <div className="container">
				<div class="row">
					<div class="col-lg-12 ">
						<div class="row">
							<div class="col-sm-3 col-md-3 col-lg-3 ">
									<div class="aligncenter">
										<div class="icon">
                    <a href="https://www.facebook.com/Datacode.in/" cl>
                    <FontAwesomeIcon
                      icon={faCodepen}
                      size="5x"
                      color="black"
                      className="m-2"
                    />
                  </a>								
                  		</div>
										<h6>Fully responsive</h6>
								</div>
							</div>
							<div class="col-sm-3 col-md-3 col-lg-3">
								<div class="box">
									<div class="aligncenter">
										<div class="icon">
                    <FontAwesomeIcon
                      icon={faDashcube}
                      size="5x"
                      color="black"
                      className="m-2"
                    />
                 																</div>
										<h6>Fully responsive</h6>
									</div>
								</div>
							</div>
							<div class="col-sm-3 col-md-3 col-lg-3">
								<div class="box">
									<div class="aligncenter">
										<div class="icon">
                    <FontAwesomeIcon
                      icon={faHtml5}
                      size="5x"
                      color="black"
                      className="m-2"
                    />
             																    </div>
										<h6>Fully responsive</h6>
									</div>
								</div>
							</div>
							<div class="col-sm-3 col-md-3 col-lg-3 ">
								<div class="box">
									<div class="aligncenter">
										<div class="icon">
                    <FontAwesomeIcon
                      icon={faJava}
                      size="5x"
                      color="black"
                      className="m-2"
                    />
                  										</div>
										<h6>Fully responsive</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
      <br/>
<br/> 
     <hr/>
     <br/>
<br/> 
<br/>



      <div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="row">
							<div class="col-sm-6 col-lg-6">
								<h4>About our company</h4>
								<p><strong>Meliore inciderint qui ne. Suas cotidieque vel ut lobortis reformidans duo</strong></p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae odit iste exercitationem praesentium deleniti nostrum laborum rem id nihil tempora. Adipisci ea commodi unde nam placeat cupiditate quasi a ducimus rem consequuntur ex eligendi minima
									voluptatem assumenda voluptas quidem sit maiores odio velit voluptate
								</p>
								<p>
									Mel explicari adipiscing consectetuer no, no mel apeirian scripserit repudiandae, ad assum mundi scribentur eam. Graecis offendit phaedrum eu his, eius ferri quidam eos ad, quis delenit vel ei. Alia modus facete te eos, eu tation appellantur per
								</p>
							</div>
							<div class="col-sm-6 col-lg-6">
								<h4>this block is for image</h4>
						
							</div>
						</div>
					</div>
				</div>
			</div>

      <hr/>
        <br/>
<br/> 

        <div className="container">
				<div class="row">
					<div class="col-lg-12 ">
						<div class="row">
							<div class="col-sm-3 col-md-3 col-lg-3 ">
									<div class="aligncenter">
										<div class="icon">
                    <FontAwesomeIcon
                      icon={faCodepen}
                      size="5x"
                      color="black"
                      className="m-2"
                    />
                  		</div>
										<h6>Fully responsive</h6>
								</div>
							</div>
							<div class="col-sm-3 col-md-3 col-lg-3">
								<div class="box">
									<div class="aligncenter">
										<div class="icon">
                    <FontAwesomeIcon
                      icon={faDashcube}
                      size="5x"
                      color="black"
                      className="m-2"
                    />
                  																</div>
										<h6>Fully responsive</h6>
									</div>
								</div>
							</div>
							<div class="col-sm-3 col-md-3 col-lg-3">
								<div class="box">
									<div class="aligncenter">
										<div class="icon">
                    <FontAwesomeIcon
                      icon={faHtml5}
                      size="5x"
                      color="black"
                      className="m-2"
                    />
                  															</div>
										<h6>Fully responsive</h6>
									</div>
								</div>
							</div>
							<div class="col-sm-3 col-md-3 col-lg-3 ">
								<div class="box">
									<div class="aligncenter">
										<div class="icon">
                    <FontAwesomeIcon
                      icon={faJava}
                      size="5x"
                      color="black"
                      className="m-2"
                    />
                											</div>
										<h6>Fully responsive</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
      <br/>
<br/> 
     <hr/>
     <br/>
<br/> 
<br/>
             
      
      </>
    );
  }
}

export default MainComponent;
