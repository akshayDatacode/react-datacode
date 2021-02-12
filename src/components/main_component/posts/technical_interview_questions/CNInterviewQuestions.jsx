import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";
import RoadMapCard from "../../tutorials/RoadMapCard";
import InterviewQuestionCardCarousel from "./InterviewQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FbLikeShare from "../../../FbLikeShare";
import { faHome, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import Technologies from "../../../right_section/Technologies";


class CNInterviewQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7 mt-4">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              Find the Best Computer Network Interview Questions
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>
            <Link
              to="/index_interview_questioins"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="2x"
                color="#06CB6C"
              />
            </Link>
            <div className="row mb-5">
              <div className="col">
                <QuestionCard
                  question={`Q #1) What is a Network?`}
                  answer={`Answer: Network is defined as a set of devices connected to each other using a physical transmission medium.

For Example, A computer network is a group of computers connected with each other to communicate and share information and resources like hardware, data, and software. In a network, nodes are used to connect two or more networks.`}
                />
                <QuestionCard
                  question={`Q #2) What is a Node?`}
                  answer={`Answer: Two or more computers are connected directly by an optical fiber or any other cable. A node is a point where a connection is established. It is a network component that is used to send, receive and forward the electronic information.

        A device connected to a network is also termed as Node. Let's consider that in a network there are 2 computers, 2 printers, and a server are connected, then we can say that there are five nodes on the network.`}
                />
                <QuestionCard
                  question={`Q #3) What is Network Topology?`}
                  answer={`Answer: Network topology is a physical layout of the computer network and it defines how the computers, devices, cables, etc are connected to each other.

        `}
                />
                <QuestionCard
                  question={`Q #4) What are Routers?`}
                  answer={`Answer: The router is a network device that connects two or more network segments. It is used to transfer information from the source to the destination.

        Routers send the information in terms of data packets and when these data packets are forwarded from one router to another router then the router reads the network address in the packets and identifies the destination network.`}
                />
                <QuestionCard
                  question={`Q #5) What is the OSI reference model?`}
                  answer={`Answer: Open System Interconnection, the name itself suggests that it is a reference model that defines how applications can communicate with each other over a networking system.

        It also helps to understand the relationship between networks and defines the process of communication in a network.`}
                />
                <QuestionCard
                  question={`Q #6) What are the layers in OSI Reference Models? Describe each layer briefly.`}
                  answer={`Answer: Given below are the seven layers of OSI Reference Models:

        a) Physical Layer (Layer 1): It converts data bits into electrical impulses or radio signals. Example: Ethernet.

        b) Data Link Layer (Layer 2): At the Data Link layer, data packets are encoded and decoded into bits and it provides a node to node data transfer. This layer also detects the errors that occurred at Layer 1.

        c) Network Layer (Layer 3): This layer transfers variable length data sequence from one node to another node in the same network. This variable-length data sequence is also known as “Datagrams”.

        d) Transport Layer (Layer 4): It transfers data between nodes and also provides acknowledgment of successful data transmission. It keeps track of transmission and sends the segments again if the transmission fails.

        e) Session Layer (Layer 5): This layer manages and controls the connections between computers. It establishes, coordinates, exchange and terminates the connections between local and remote applications.

        f) Presentation Layer (Layer 6): It is also called as “Syntax Layer”. Layer 6 transforms the data into the form in which the application layer accepts.

        g) Application Layer (Layer 7): This is the last layer of the OSI Reference Model and is the one that is close to the end-user. Both end-user and application layer interacts with the software application. This layer provides services for email, file transfer, etc.

        `}
                />
                <QuestionCard
                  question={`Q #7) What is the difference between Hub, Switch, and Router?`}
                  answer={`Answer:

        Hub	:- Hub is least expensive, least intelligent and least complicated of the three.
        It broadcast all data to every port which may cause serious security and reliability concern	In a Network, Hub is a common connection point for devices connected to the network. Hub contains multiple ports and is used to connect segments of LAN
        
        Switch	:- Switches work similarly like Hubs but in a more efficient manner.
        It creates connections dynamically and provides information only to the requesting port Switch is a device in a network which forwards packets in a network
        
        Router:- The router is smartest and most complicated out of these three. It comes in all shapes and sizes. Routers are similar like little computers dedicated for routing network traffic. Routers are located at gateway and forwards data packets`}
                />
                <QuestionCard
                  question={`Q #8) Explain TCP/IP Model`}
                  answer={`Answer: The most widely used and available protocol is TCP/IP i.e. Transmission Control Protocol and Internet Protocol. TCP/IP specifies how data should be packaged, transmitted and routed in their end to end data communication
        
        Given below is a brief explanation of each layer:

        Application Layer: This is the top layer in the TCP/IP model. It includes processes that use the Transport Layer Protocol to transmit the data to their destination. There are different Application Layer Protocols such as HTTP, FTP, SMTP, SNMP protocols, etc.
        
        Transport Layer: It receives the data from the Application Layer which is above the Transport Layer. It acts as a backbone between the host's system connected with each other and it mainly concerns about the transmission of data. TCP and UDP are mainly used as Transport Layer protocols.
        
        Network or Internet Layer: This layer sends the packets across the network. Packets mainly contain source & destination IP addresses and actual data to be transmitted.
        
        Network Interface Layer: It is the lowest layer of the TCP/IP model. It transfers the packets between different hosts. It includes encapsulation of IP packets into frames, mapping IP addresses to physical hardware devices, etc.`}
                />

                <QuestionCard
                  question={`Q #9) What is HTTP and what port does it use?`}
                  answer={`Answer: HTTP is HyperText Transfer Protocol and it is responsible for web content. Many web pages are using HTTP to transmit the web content and allow the display and navigation of HyperText. It is the primary protocol and port used here is TCP port 80.`}
                />
                <QuestionCard
                  question={`Q #10) What is HTTPs and what port does it use?`}
                  answer={`Answer: HTTPs is a Secure HTTP. HTTPs is used for secure communication over a computer network. HTTPs provides authentication of websites that prevents unwanted attacks.
        In bi-directional communication, the HTTPs protocol encrypts the communication so that the tampering of the data gets avoided. With the help of an SSL certificate, it verifies if the requested server connection is a valid connection or not. HTTPs use TCP with port 443.`}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <h4 className="text-primary">For More Technologies</h4>
                <InterviewQuestionCardCarousel />
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <FbLikeShare />{" "}
            <h4 className="mb-3 mt-4" style={{ color: "#072C71" }}>
              Other Learning Resources
            </h4>
            <RoadMapCard
              imgsource="cn_tech.jpeg"
              title="Top 47 Networking Interview Questions"
              source="(javatpoint)"
              tag1="Interview Questions"
              link="https://www.javatpoint.com/networking-interview-questions"
            />
            <RoadMapCard
              imgsource="cn_tech.jpeg"
              title="Commonly asked Computer Networks Interview Questions"
              source="()"
              tag1="Networks"
              tag2="Questions"
              link="https://www.geeksforgeeks.org/commonly-asked-computer-networks-interview-questions-set-1/"
            />
            <RoadMapCard
              imgsource="cn_tech.jpeg"
              title="Hardware and Networking Interview Questions & Answers"
              source="(learning.naukri)"
              tag1=" interview"
              link="https://learning.naukri.com/articles/networking-interview-questions-answers/"
            />
            <RoadMapCard
              imgsource="cn_tech.jpeg"
              title="TOP 250+ Networking Interview Questions and Answers "
              source="(wisdom jobs)"
              tag1="Computer Network"
              link="https://www.wisdomjobs.com/e-university/networking-interview-questions.html"
            />
            <RoadMapCard
              imgsource="cn_tech.jpeg"
              title="10 Basic Interview Questions and Answers "
              source="(tecmint)"
              tag1="computer  network "
              link="https://www.tecmint.com/networking-interview-questions/"
            />
            <RoadMapCard
              imgsource="cn_tech.jpeg"
              title="Networking Interview Questions updated on Apr 2020"
              source="(placement.freshersworld)"
              tag1="network "
              link="http://placement.freshersworld.com/networking-interview-questions/33121835176"
            />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default CNInterviewQuestions;
