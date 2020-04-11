import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import RightSideSection from "../../../right_section/RightSideSection";
import PostCard from "../../PostCard";
import ArticlePostCard from "../ArticlePostCard";

import { Link } from "react-router-dom";

class MachineLearningBlog extends Component {
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
              <h2 className="text-center mb-4">MachineLearning Blogs</h2>
              <Link to="/home" className="badge badge-primary mr-1">
                Home >
              </Link>
              <Link to="/index_articles" className="badge badge-warning mr-1">
                Blogs >
              </Link>

              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Machine Learning"
                  tag2="courses"
                  title="Machine Learning free online courses; from beginner to advanced"
                  paragraph="That’s why Today I’m posting a new set of courses only focused on Machine Learning and breaking it down into 3 levels: beginner, intermediate and advanced."
                  link="https://medium.com/@gonzaloferreirovolpi/machine-learning-free-online-courses-from-beginner-to-advanced-f50982dce950"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Learning"
                  tag2="nlp"
                  title="Advancing Self-Supervised and Semi-Supervised Learning with SimCLR"
                  paragraph="Recently, natural language processing models, such as BERT and T5, have shown that it is possible to achieve good results"
                  link="https://ai.googleblog.com/2020/04/advancing-self-supervised-and-semi.html"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Learning"
                  tag2="robots"
                  title="Exploring Nature-Inspired Robot Agility"
                  paragraph="Whether it’s a dog chasing after a ball or a horse jumping over obstacles, animals can effortlessly perform an incredibly rich repertoire of agile skills. "
                  link="https://ai.googleblog.com/2020/04/exploring-nature-inspired-robot-agility.html"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="language"
                  tag2="models"
                  title="Better Language Models"
                  paragraph="Our model, called GPT-2 (a successor to GPT), was trained simply to predict the next word in 40GB of Internet text. "
                  link="https://openai.com/blog/better-language-models/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="CNN"
                  tag2="ML"
                  title="Deep Double Descent"
                  paragraph="We show that the double descent phenomenon occurs in CNNs, ResNets, and transformers: performance first improves,"
                  link="https://openai.com/blog/deep-double-descent/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="robot"
                  tag2="NN"
                  title="Solving Rubik’s Cube with a Robot Hand"
                  paragraph="We’ve trained a pair of neural networks to solve the Rubik’s Cube with a human-like robot hand"
                  link="https://openai.com/blog/solving-rubiks-cube/"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="NLP"
                  tag2="Models"
                  title="Natural Language Processing"
                  paragraph="Natural Language Processing (NLP) will enable better understanding all around: we'll talk to our computers;"
                  link="http://aiplaybook.a16z.com/docs/guides/nlp#user-content-naturallanguageprocessing"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Api's"
                  tag2="NLP"
                  title="Training Your Own Models"
                  paragraph="If you've played with the examples from the previous sections on NLP and vision recognition, you've seen the power of APIs. Send in a picture"
                  link="http://aiplaybook.a16z.com/docs/guides/dl#user-content-trainingyourownmodels"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Reinforcement learning"
                  title="Reinforcement Learning : Markov-Decision Process (Part 1)"
                  paragraph="In a typical Reinforcement Learning (RL) problem, there is a learner and a decision maker called agent and the"
                  link="https://towardsdatascience.com/introduction-to-reinforcement-learning-markov-decision-process-44c533ebf8da"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Pandas"
                  tag2="ml"
                  title="A Complete Pandas Guide"
                  paragraph="The most time-consuming part of a data science project is data cleaning and preparation. Pandas is a very powerful and versatile Python data analysis library "
                  link="https://medium.com/@soneryildirim1988/a-complete-pandas-guide-2dc53c77a002"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Reinforcement learning"
                  title="Fundamental Iterative Methods of Reinforcement Learning"
                  paragraph="How much reinforcement learning can you master by studying Value and Policy Iteration? A lot.
                  "
                  link="https://towardsdatascience.com/fundamental-iterative-methods-of-reinforcement-learning-df8ff078652a"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="DataScience"
                  title="Building a Career in Data Science with Emily Robinson"
                  paragraph="It's very common in DataScience to switch rols every one to three years, so it's not as if you're signing a contract"
                  link="https://towardsdatascience.com/building-a-career-in-data-science-with-emily-robinson-27cd9bdba4c4"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Deep Learning"
                  tag2="pytorch"
                  title="Reasons to Choose PyTorch for Deep Learning"
                  paragraph="PyTorch has a lot to offer to Deep Learning programmers"
                  link="https://towardsdatascience.com/reasons-to-choose-pytorch-for-deep-learning-c087e031eaca"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Deep learning"
                  tag2="algorithms"
                  title="Deep Learning Algorithms — The Complete Guide"
                  paragraph="Deep Learning is a hyponym in relation to 'machine learning,' which in turn is a hyponym"
                  link="https://towardsdatascience.com/deep-learning-algorithms-the-complete-guide-ce020bd47ecc"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="visualizations"
                  tag2="data"
                  title="3 Questions You Should Ask Yourself When Creating Data Visualizations"
                  paragraph="As an aspiring Data Analyst, I have been developing a passion for creating data visualizations of alll kind. While my first trials were very basic"
                  link="https://towardsdatascience.com/3-questions-you-should-ask-yourself-when-creating-data-visualizations-fa255652508a"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="ML"
                  tag2="learning"
                  title="Active Learning in Machine Learning"
                  paragraph="Most suprvised machine learning models require large amounts of data to be trained with good results."
                  link="https://towardsdatascience.com/active-learning-in-machine-learning-525e61be16e5"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="freelancing"
                  tag2="datascience"
                  title="How to Become a Freelance Data Scientist"
                  paragraph="Over the past decade, freelancing has become more and more popular — and for good reason. In fact, the World Economic Forum notes that 16.1% of the EU workforce is comprised of freelancers, "
                  link="https://thepythonguru.com/how-to-become-a-freelance-data-scientist/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Datascience"
                  tag2="data"
                  title="5 Best Data Science Courses to Start in 2020"
                  paragraph=" With such a large population comes an equally humungous amount of data. Thus, managing, structuring, storing and studying the data is a tough challenge! "
                  link="https://dev.to/coursesity/top-5-courses-to-learn-data-science-in-2020-2d31"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="models"
                  tag2="training"
                  title="Getting the Most Out of Pre-trained Models"
                  paragraph="Most of the new deep learning models being released, especially in NLP, are very, very large: They have parameters ranging"
                  link="https://www.toptal.com/deep-learning/exploring-pre-trained-models"
                />

                <h1>Interview</h1>
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="Interview"
                  tag2="questions"
                  title="15 Questions Technical Hiring Managers Love To Ask In Interviews"
                  paragraph="Interviews are always stressful, but they’re less so when you know what to expect. Below, fifteen tech interviewers from a variety of companies share some favorite questions"
                  link="https://www.forbes.com/sites/laurencebradford/2016/11/17/15-questions-technical-hiring-managers-love-to-ask-interviewees/#718b99172598"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="interview"
                  tag2="questions"
                  title="12 TRICKY JOB INTERVIEW QUESTIONS IN TECH…AND HOW TO ANSWER THEM"
                  paragraph="Job interviews are nerve-wracking, to say the least. Even if you’ve got years of experience and the job description sounds like it was written specifically for you, "
                  link="https://skillcrush.com/blog/answer-the-toughest-tech-interview-questions/"
                />
              </div>
              <div className="card-deck m-2">
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="interviews"
                  tag2="preparations"
                  title="THE MOST IMPORTANT TECHNICAL INTERVIEW QUESTIONS YOU NEED TO PREPARE FOR"
                  paragraph="While some people might not find job interviews nerve-wracking, for most of us, it’s the stuff anxiety dreams are made of. And while you’ll certainly come across standard questions "
                  link="https://skillcrush.com/blog/technical-interviews/"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="technical"
                  tag2="interview"
                  title="How to Prep for Your Technical Interview: Advice From a Hiring Manager"
                  paragraph="With Silicon Valley’s second big tech boom, engineers have been in incredibly high demand by startups and tech giants alike. For those who have engineering backgrounds"
                  link="https://www.themuse.com/advice/how-to-prep-for-your-technical-interview-advice-from-a-hiring-manager"
                />
                <ArticlePostCard
                  imgsource="js.jpeg"
                  tag1="It"
                  tag2="interview"
                  title="How to Prepare for Technical IT Interview Questions"
                  paragraph="Here's an extension of our top interview questions tips for those of you facing job interviews that will weigh heavily on your technical acumen."
                  link="https://www.pluralsight.com/blog/it-ops/how-to-prepare-for-technical-it-interview-questions"
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

export default MachineLearningBlog;
