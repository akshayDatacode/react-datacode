import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import ArticlePostCard from "../ArticlePostCard";

import { Link } from "react-router-dom";

class ProgrammingLanguagesBlog extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
       <div className="container-fluid ">
          <div className="row">
            <div className="col-md-1 p-0 m-0"></div>
            <div className="col-md-8 p-0 mt-4">
              <h2 className="text-center mb-4">WebDesign Community Blogs</h2>
              <Link to="/home" className="badge badge-primary mr-1">
                Home >
              </Link>
              <Link to="/index_articles" className="badge badge-warning mr-1">
                Blogs >
              </Link>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Node js"
                  tag2="api"
                  title="How to Use SSL/TLS with Node.js"
                  paragraph="In 2020, there’s no reason for your website not to use HTTPS. Visitors expect it, Google uses it as a ranking factor and browser makers will happily name and shame those sites not using it."
                  link="https://www.sitepoint.com/how-to-use-ssltls-with-node-js/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="javasript"
                  tag2="nodejs"
                  title="Five Ways to Lazy Load Images for Better Website Performance"
                  paragraph="With images being among the most popular type of content on the web, page load time on websites can easily become an issue."
                  link="https://www.sitepoint.com/five-techniques-lazy-load-images-website-performance/?utm_source=rss"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="website"
                  tag2="html"
                  title="How Fast Should My Website Be? [+7 Tips for Speeding Up Your Site]"
                  paragraph="Did you know that for every second faster your website loads, you increase conversions by 7%?"
                  link="https://www.webfx.com/blog/web-design/how-fast-should-my-website-be/"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="color"
                  tag2="website"
                  title="7 Color Palette Generators that Will Make Your Brand Pop"
                  paragraph="As of January 2019, there were over 1 billion websites in the world (and counting!). In this veritable landslide of code,"
                  link="https://webresourcesdepot.com/color-palette-generators-that-will-make-your-brand-pop/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Video"
                  tag2="CSS"
                  title="Tinkering with Video on Mobile"
                  paragraph="Of course, you can just chuck video on YouTube or whatever and get good video handling for nothing. But YouTube isn’t always right "
                  link="https://css-tricks.com/180-tinkering-with-video-on-mobile/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="HTML"
                  tag2="CSS"
                  tag3="javascript"
                  title="Web Design 101: How HTML, CSS, and JavaScript Work"
                  paragraph="To someone who's never coded before, the concept of creating a website from scratch -- layout, design, and all -- can seem really intimidating."
                  link="https://blog.hubspot.com/marketing/web-design-html-css-javascript"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="webdesign"
                  tag2="technology"
                  title="A peek into the future of technology and accessibility"
                  paragraph="Exploring how disabilities can be the driving force for technological breakthroughs."
                  link="https://uxplanet.org/a-peek-into-the-future-of-technology-and-accessibility-a481484790a5"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="web"
                  tag2="accessibility"
                  title="Web Accessibility: Do’s and Don’ts"
                  paragraph="Internet is the biggest source of information in our time, how would you feel if you weren’t able to access it? Frustrated right?"
                  link="https://medium.com/@david.bergmann/web-accessibility-dos-and-don-ts-b3d3542f341d"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Webdesign"
                  title="Vulnerability in Design"
                  paragraph="Is there a secret to being a great designer? What do great designers all have in common? Is it purely based on talent and a keen eye, or is it something more?"
                  link="https://uxdesign.cc/vulnerability-in-design-fa5b72f6b3e3"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="React"
                  tag2="Reactjs"
                  title="A Quick Tour Through a React Component Lifecycle"
                  paragraph="When a component is created in React, a very intricate lifecycle is created as well. But not to worry! "
                  link="https://levelup.gitconnected.com/a-quick-tour-through-a-react-component-lifecycle-ff3610bb97b9"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Javascript"
                  tag2="functions"
                  title="JavaScript Best Practices — Declarations and Functions"
                  paragraph="Javascript is a very forgiving language. its's easy to write code that runs but has mistakes in it. "
                  link="https://medium.com/@hohanga/javascript-best-practices-declarations-and-functions-a690689c106e"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="graphics"
                  tag2="design"
                  title="Goodbye, Clean Code"
                  paragraph="But it was repetitive. Each shape (such as a rectangle or an oval) had a different set of handles, and dragging each handle in different directions affected the shape’"
                  link="https://overreacted.io/goodbye-clean-code/"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="javascript"
                  tag2="interview"
                  title="What Is JavaScript Made Of?"
                  paragraph="Even though I could build websites with frameworks, something was missing. I dreaded JavaScript job interviews"
                  link="https://overreacted.io/what-is-javascript-made-of/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="react"
                  tag2="hooks"
                  title="State Management in Pure React with Hooks: useEffect"
                  paragraph="Hooks are the new features added to the React API. They let you use state and other React features in the functional component."
                  link="https://dev.to/bipinrajbhar/state-management-in-pure-react-with-hooks-useeffect-5bn6"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="devtool"
                  tag2="webdesign"
                  title="9 ways to level up your browser devtool skills"
                  paragraph="This is a list of amazing things that browsers can help you with while developing web applications."
                  link="https://dev.to/sendilkumarn/level-up-your-browser-skills-8gh"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Reactjs"
                  tag2="app"
                  title="Start your next React App with Isomorphic"
                  paragraph="Modern web is all about javascript and its frameworks are growing faster. And if think about its frameworks, React Js has got most of the momentum. "
                  link="https://dev.to/alrubelrana/start-your-next-react-app-with-isomorphic-1i7g"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="articles"
                  tag2="webdevelopment"
                  title="How To Embed Multiple Choice Quiz Questions into Your Article"
                  paragraph="The multiple choice quiz format is perfect for this. I developed a method to embed multiple choice questions in the math articles"
                  link="https://www.freecodecamp.org/news/multiple-choice-quiz-template/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="website"
                  tag2="react"
                  tag3="blog"

                  title="Get a blog on your website with React and WordPress API"
                  paragraph="There were a few options for incorporating a blog into my site. The main two were a custom content management system (CMS) or"
                  link="https://www.freecodecamp.org/news/get-a-blog-on-your-website-with-react-and-wordpress-api-c63ff81b388e/"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="React"
                  tag2="folder"
                  title="React Folder Structure in 5 Steps"
                  paragraph="How to structure large React apps into folders and files is a highly opinionated topic. I struggled for a while writing about this subject,"
                  link="https://www.robinwieruch.de/react-folder-structure"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="express.js"
                  tag2="node.js"
                  title="How to setup Express.js in Node.js"
                  paragraph="Express.js is the most popular choice when it comes to building web applications with Node.js. "
                  link="robinwieruch.de/node-js-express-tutorial"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="firebase"
                  tag2="react"
                  title="A Firebase in React Tutorial for Beginners [2019]"
                  paragraph="This comprehensive tutorial walks you through a real-world application using React and Firebase. React is used to display applications"
                  link="https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="fundamentals"
                  tag2="react"
                  title="The Road to React [Book 2020]"
                  paragraph="The Road to React teaches the fundamentals of React. You will build a real-world application in plain React without complicated tooling. "
                  link="https://www.robinwieruch.de/the-road-to-learn-react"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="wordpress"
                  tag2="blogs"
                  title="How to Start a WordPress Blog the RIGHT WAY in 7 Easy Steps (2020)"
                  paragraph="Do you want to start a WordPress blog the right way? We know that starting a blog can be a terrifying thought specially when you are not geeky."
                  link="https://www.wpbeginner.com/start-a-wordpress-blog/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="wordpress"
                  tag2="issues"
                  title="How to Fix Common Image Issues in WordPress"
                  paragraph="WordPress comes with some pretty neat tools to manage and edit images. You can easily upload images, align them, and even edit them inside WordPress."
                  link="https://www.wpbeginner.com/beginners-guide/how-to-fix-common-image-issues-in-wordpress/"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="wordpress"
                  tag2="online"
                  title="How to Set Up Online Food Ordering for Restaurants in WordPress"
                  paragraph="Do you want to set up online food ordering for your restaurant? Whether it’s a brand new venture, or you’ve been serving customers in person for years, "
                  link="https://www.wpbeginner.com/wp-tutorials/how-to-set-up-online-food-ordering-for-restaurants-in-wordpress/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="wordpress"
                  tag2="website"
                  title="How to launch a WordPress Website in 10 steps"
                  paragraph="Currently, the rapid changes in the world make it essential for businesses of any class, size, and economic sector to have a website. "
                  link="https://wparena.com/how-to-launch-a-wordpress-website/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="vue"
                  tag2="angular"
                  title="Vue vs. Angular Comparison – What Framework to Choose?"
                  paragraph="Selecting a front-end framework can be a trickier and more time-consuming process than you might think."
                  link="https://wparena.com/vue-versus-angular-comparison/"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="wordpress"
                  tag2="database"
                  title="WordPress Database Clean-up – How to Go about It?"
                  paragraph="Operating a WordPress website comprises of multiple tasks! One of the most crucial and overlooked tasks is database maintenance "
                  link="https://wparena.com/wordpress-database-optimization/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="wordpress"
                  tag2="blogs"
                  title="Step-by-Step Guide to Start a WordPress Blog in 2020"
                  paragraph="I still remember coming across WordPress for the first time. I decided I was going to start a blog – I had barely read a blog before,"
                  link="https://www.wpexplorer.com/get-started-wordpress-blogging/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="wordpress"
                  tag2="security"
                  title="Improve Your WordPress Site Security"
                  paragraph="Everyone knows that keeping your WordPress website secure should be a top priority. But 9 times out of 10 it isn’t."
                  link="https://www.wpexplorer.com/wordpress-security/"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="wordpress"
                  tag2="speeding"
                  title="How to Speed Up WordPress: A Comprehensive Guide"
                  paragraph="Welcome to the only guide you need to speed up WordPress. We’ve crafted this step by step guide to outline  "
                  link="https://www.wpexplorer.com/how-to-speed-up-wordpress/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="angular9"
                  tag2="angular"
                  title="All Perks, No Hassle: An Angular 9 Tutorial"
                  paragraph="“Every year the internet breaks,” goes the saying, and developers usually have to go and fix it. With the long-awaited Angular version 9, "
                  link="https://www.toptal.com/angular/angular-9-tutorial-angular-ivy"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="webapp"
                  tag2="firebase"
                  title="Taking Firebase Serverless – Mobile and Web Applications Made Easy"
                  paragraph="Mobile and web applications usually require a back-end server. Web applications require a web server to deliver content. "
                  link="https://www.toptal.com/google/firebase-serverless-mobile-and-web-apps"
                />
              </div>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="rest api"
                  tag2="nodejs"
                  title="Creating a Secure REST API in Node.js"
                  paragraph="Consider all the software that you use in your life. It doesn’t matter if you’re a developer or a regular user that just casually browses  "
                  link="https://www.toptal.com/nodejs/secure-rest-api-in-nodejs"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="nodejs"
                  tag2="webdevelopment"
                  title="Converting Callbacks to Promises in Node.js"
                  paragraph="A few years back, callbacks were the only way we could achieve asynchronous code execution in JavaScript."
                  link="https://stackabuse.com/converting-callbacks-to-promises-in-node-js/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="website"
                  tag2="build"
                  title="How to Build a Time-Saving Appointment and Event Booking Website"
                  paragraph="Want to build an appointment and event booking website that gives your clients more time to do business than handle the logistics of it? "
                  link="https://tympanus.net/codrops/2020/03/19/how-to-build-a-time-saving-appointment-and-event-booking-website/"
                />
              </div>

            
              </div>
            <div className="col-md-3 ">
              <RightSideSection />
              </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProgrammingLanguagesBlog;
