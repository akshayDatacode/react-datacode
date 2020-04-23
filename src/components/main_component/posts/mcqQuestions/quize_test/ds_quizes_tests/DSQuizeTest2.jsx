import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../footer_component/FooterComponentUpper";
import RightSideSection from "../../../../../right_section/RightSideSection";
import RecommendPost from "../../../../../right_section/RecommendPost";
import MCQTestCardCarousel from "../MCQTestCardCarousel";

class DSQuizeTest2 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
    show: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  counter = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  showQuizeScore = () => {
    this.setState({ show: true });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        <HeaderBannerSection imgsource="headerdark.jpeg" />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="row">
                <div className="col text-center mt-3 mb-3">
                  <h2>DataStructure Quiz Test Intermediate</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Link to="/home" className="badge badge-primary mr-1">
                    Home >>
                  </Link>
                  <Link
                    to="/index_quize_tests"
                    className="badge badge-warning mr-1"
                  >
                    Quize Test >>
                  </Link>
                  <Link
                    to="/ds_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    DataStructure Quiz >>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    question="Convert the following infix expressions into its equivalent postfix expressions
                (A + B ⋀D)/(E – F)+G"
                    correctAnswer="(A B D ⋀ + E F – / G +)"
                    v1="(A B D ⋀ + E F – / G +)"
                    v2="(A B D +⋀ E F – / G +)"
                    v3=" (A B D ⋀ + E F/- G +)"
                    v4="(A B D E F + ⋀ / – G +)"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="Consider the following operation performed on a stack of size 5.
                After the completion of all operation, the number of elements present in stack are"
                    code={`Push(1);
Pop();
Push(2);
Push(3);
Pop();
Push(4);
Pop();
Pop();
Push(5);`}
                    correctAnswer=""
                    v1="1"
                    v2="2 "
                    v3="3"
                    v4="4"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="A normal queue, if implemented using an array of size MAX_SIZE, gets full when"
                    correctAnswer="Rear = MAX_SIZE – 1"
                    v1="Front = (rear + 1)mod MAX_SIZE"
                    v2="Front = rear + 1"
                    v3=" Rear = front"
                    v4="Rear = MAX_SIZE – 1"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="Consider the following definition in c programming language. Which of the following c code is used to create new node?"
                    code={`struct node
{
    int data;
    struct node * next;
}
typedef struct node NODE;
NODE *ptr;`}
                    correctAnswer="ptr = (NODE*)malloc(sizeof(NODE));"
                    v1="ptr = (NODE*)malloc(NODE);"
                    v2="ptr = (NODE*)malloc(sizeof(NODE*));"
                    v3="ptr = (NODE*)malloc(sizeof(NODE));"
                    v4="ptr = (NODE)malloc(sizeof(NODE));"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="What does the following function do for a given Linked List with first node as head?"
                    code={`void fun1(struct node* head)
{
    if(head == NULL)
    return;
    fun1(head->next);
    printf("%d  ", head->data);
}`}
                    correctAnswer="Prints all nodes of linked list in reverse order"
                    v1="Prints all nodes of linked lists"
                    v2="Prints all nodes of linked list in reverse order"
                    v3="Prints alternate nodes of Linked List"
                    v4="Prints alternate nodes in reverse order"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="What is the functionality of the following code?"
                    code={`public void function(Node node)
{
      if(size == 0)
            head = node;
      else
      {
            Node temp,cur;
            for(cur = head; (temp = cur.getNext())!=null; cur = temp);
            cur.setNext(node);
      }
      size++;
}`}
                    correctAnswer="Inserting a node at the end of the list"
                    v1="Inserting a node at the beginning of the list"
                    v2="Deleting a node at the beginning of the list"
                    v3="Inserting a node at the end of the list"
                    v4="Deleting a node at the end of the list"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="What is a memory efficient double linked list?"
                    correctAnswer="Each node has only one pointer to traverse the list back and forth"
                    v1="Each node has only one pointer to traverse the list back and forth"
                    v2="The list has breakpoints for faster traversal"
                    v3="An auxiliary singly linked list acts as a helper list to traverse through the doubly linked list"
                    v4="A doubly linked list that uses bitwise AND operator for storing addresses"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="What is the functionality of the following piece of code?"
                    code={`public int function()
{
      Node temp = tail.getPrev();
      tail.setPrev(temp.getPrev());
      temp.getPrev().setNext(tail);
      size--;
      return temp.getItem();
}`}
                    correctAnswer="Return the element at the tail of the list and remove it from the list"
                    v1="Return the element at the tail of the list but do not remove it"
                    v2="Return the element at the tail of the list and remove it from the list"
                    v3="Return the last but one element from the list but do not remove it"
                    v4="Return the last but one element at the tail of the list and remove it from the list"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="What is the functionality of the following piece of code? Select the most appropriate"
                    code={`public void function(int data)
{
      int flag = 0;
      if( head != null)
      {
            Node temp = head.getNext();
            while((temp != head) && (!(temp.getItem() == data)))
            {
                  temp = temp.getNext();
                  flag = 1;
                  break;
            }
      }
      if(flag)
            System.out.println("success");
      else
            System.out.println("fail");
}`}
                    correctAnswer="Print fail if a particular element is not found"
                    v1="Print success if a particular element is not found"
                    v2="Print fail if a particular element is not found"
                    v3="Print success if a particular element is equal to 1"
                    v4="Print fail if the list is empty"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="What is the functionality of the following code? Choose the most appropriate answer."
                    code={`public int function()
{
      if(head == null)
            return Integer.MIN_VALUE;
      int var;
      Node temp = head;
      while(temp.getNext() != head)
            temp = temp.getNext();
      if(temp == head)
      {
            var = head.getItem();
            head = null;
            return var;
      }
      temp.setNext(head.getNext());
      var = head.getItem();
      head = head.getNext();
      return var;
}`}
                    correctAnswer="Returns the data and deletes the node from the beginning of the list"
                    v1="Return data from the end of the list"
                    v2="Returns the data and deletes the node at the end of the list"
                    v3="Returns the data from the beginning of the list"
                    v4="Returns the data and deletes the node from the beginning of the list"
                    counter={this.counter}
                  />
                </div>
              </div>
              <div className="text-center mb-3">
                <Button variant="primary" onClick={this.handleShow}>
                  Show Score
                </Button>
              </div>
              <div className="row">
                <div className="col">
                  <h5> For More Quiz Test</h5>
                  <MCQTestCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4  mt-md-4">
              <h4>Recommendation</h4>
              <RecommendPost
                imgsource="python_mcqs.jpeg"
                RecPostHading="Python MCQs Questions"
                link="/index_python_mcqs"
              />
              <RecommendPost
                imgsource="java_mcqs.jpeg"
                RecPostHading="Java MCQs Questions"
                link="/index_java_mcqs"
              />
              <RecommendPost
                imgsource="c_mcq.jpeg"
                RecPostHading="C MCQs Questions"
                link="/index_c_mcqs"
              />
              <RightSideSection />
            </div>
          </div>
        </div>
        <ScoreCard
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          show={this.state.show}
          count={this.state.count}
        />
      </>
    );
  }
}

export default DSQuizeTest2;
