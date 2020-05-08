import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "../../footer_component/CardCarouselItem";

class TrainingCertificationCardCarousel extends Component {
  state = {};
  render() {
    return (
      <>
        {/* Desktop Carousel Cards  */}
        <div className="mb-5 d-none d-sm-block">
          <Carousel indicators={false}>
            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="datascience_training_certification.jpeg"
                  title="DataScience Training Certification"
                  link="/datascience_training_certification"
                />
                <CardCarouselItem
                  imgsource="machinelearning_training_certification.jpeg"
                  title="Machine Learning Training Certification"
                  link="/machinelearning_training_certification"
                />
                <CardCarouselItem
                  imgsource="webdevelopment_training_certification.jpeg"
                  title="Webdevelopment Training Certification"
                  link="/webdevelopment_training_certification"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="computerscience_training_certification.jpeg"
                  title="computerscience Training Certification"
                  link="/computerscience_training_certification"
                />
                <CardCarouselItem
                  imgsource="nodejs_training_certification.jpeg"
                  title="NodeJs Training Certification"
                  link="/nodejs_training_certification"
                />
                <CardCarouselItem
                  imgsource="php_training_certification.jpeg"
                  title="PHP Training Certification"
                  link="/php_training_certification"
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="c_training_certification.jpeg"
                  title="C Training Certification"
                  link="/c_training_certification"
                />
                <CardCarouselItem
                  imgsource="python_training_certification.jpeg"
                  title="Python Training Certification"
                  link="/python_training_certification"
                />
                <CardCarouselItem
                  imgsource="java_training_certification.jpeg"
                  title="Java Training Certification"
                  link="/java_training_certification"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="js_training_certification.jpeg"
                  title="Javascript Training Certification"
                  link="/js_training_certification"
                />
                <CardCarouselItem
                  imgsource="html_css_training_certification.jpeg"
                  title="HTM CSS Training Certification"
                  link="/html_training_certification"
                />
                <CardCarouselItem
                  imgsource="git_training_certification.jpeg"
                  title="Git Training Certification"
                  link="/github_training_certification"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="ds_training_certification.jpeg"
                  title="Datastructure & Algorithm"
                  link="/ds_training_certification"
                />
                <CardCarouselItem
                  imgsource="dbms_sql_training_certification.jpeg"
                  title="DBMS / SQL"
                  link="/dbms_training_certification"
                />
                <CardCarouselItem
                  imgsource="swift_training_certification.jpeg"
                  title="swift"
                  link="/swift_training_certification"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="android_training_certification.jpeg"
                  title="Android"
                  link="/android_training_certification"
                />
                <CardCarouselItem
                  imgsource="react_training_certification.jpeg"
                  title="React"
                  link="/react_training_certification"
                />
                <CardCarouselItem
                  imgsource="angular_training_certification.jpeg"
                  title="Angular"
                  link="/angular_training_certification"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="oops_training_certification.jpeg"
                  title="OOPS"
                  link="/oops_training_certification"
                />
                <CardCarouselItem
                  imgsource="cpp_training_certification.jpeg"
                  title="C++"
                  link="/cpp_training_certification"
                />
                <CardCarouselItem
                  imgsource="comming_soon.jpeg"
                  title="Coming soon"
                  link="/index_technologies"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Mobile Carousel Cards  */}
        <div className="mb-5 d-block d-md-none">
          <Carousel indicators={false}>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="datascience_training_certification.jpeg"
                title="DataScience Training Certification"
                link="/datascience_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="machinelearning_training_certification.jpeg"
                title="Machine Learning Training Certification"
                link="/machinelearning_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="webdevelopment_training_certification.jpeg"
                title="Webdevelopment Training Certification"
                link="/webdevelopment_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="computerscience_training_certification.jpeg"
                title="computerscience Training Certification"
                link="/computerscience_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="nodejs_training_certification.jpeg"
                title="NodeJs Training Certification"
                link="/nodejs_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="php_training_certification.jpeg"
                title="PHP Training Certification"
                link="/php_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_training_certification.jpeg"
                title="Python Training Certification"
                link="/python_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="c_training_certification.jpeg"
                title="C _training_certification"
                link="/c_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="cpp_training_certification.jpeg"
                title="C++ Training Certification"
                link="/cpp_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="java_training_certification.jpeg"
                title="Java _training_certification"
                link="/java_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="js_training_certification.jpeg"
                title="Javascript"
                link="/js_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="html_css_training_certification.jpeg"
                title="HTML"
                link="/html_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="git_training_certification.jpeg"
                title="Git Training Certification"
                link="/github_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="swift_training_certification.jpeg"
                title="Swift Training Certification"
                link="/swift_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="ds_training_certification.jpeg"
                title="Datastructure & Algorithm"
                link="/ds_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="dbms_sql_training_certification.jpeg"
                title="DBMS"
                link="/dbms_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="oops_training_certification.jpeg"
                title="OOPs"
                link="/oops_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="android_training_certification.jpeg"
                title="Android"
                link="/android_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="react_training_certification.jpeg"
                title="React"
                link="/react_training_certification"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="angular_training_certification.jpeg"
                title="Angular"
                link="/angular_training_certification"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default TrainingCertificationCardCarousel;
