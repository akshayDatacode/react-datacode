import React, { Component } from "react";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import MCQCardCarousel from "../MCQCardCarousel";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../../right_section/Technologies";

class DSMCQ1 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  counter = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
                <h2
                  className="text-center mb-4 display-5"
                  style={{ color: "#072C71" }}
                >
                  DataStructure Multiple choice Questions Set-1
                </h2>
                <Link
                  to="/home"
                  className="badge mr-1"
                  style={{ backgroundColor: "#06CB6C" }}
                >
                  <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
                </Link>
                <Link
                  to="/index_mcqs"
                  className="badge mr-1"
                  style={{ backgroundColor: "#072C71" }}
                >
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    size="2x"
                    color="#06CB6C"
                  />
                </Link>
                <Link
                  to="/index_ds_mcqs"
                  className="badge mr-1 text-white"
                  style={{ backgroundColor: "#072C71" }}
                >
                  <FontAwesomeIcon
                    icon={faCode}
                    size="1x"
                    color="#06CB6C"
                    className="mr-2"
                  />
                  back to Index
                </Link>

                <ScoreCard count={this.state.count} />
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="Which of these best describes an array?
                    "
                    correctAnswer="Container of objects of similar types "
                    v1="A data structure that shows a hierarchical behaviour"
                    v2="Container of objects of similar types "
                    v3="Arrays are immutable once initialised
                  "
                    v4="Array is not a data structure"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="Process of inserting an element in stack is called ____________
                    "
                    correctAnswer="Push "
                    v1="Create"
                    v2="Evaluation "
                    v3="Push"
                    v4=" Pop"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question="The postfix form of the expression (A+ B)*(C*D- E)*F / G is?"
                    correctAnswer="AB + CD* E – *F *G / "
                    v1="AB+ CD*E – FG /**"
                    v2=" AB + CD* E – F **G / "
                    v3="AB + CD* E – *F *G /"
                    v4="AB + CDE * – * F *G /"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question=" The result of evaluating the postfix expression 5, 4, 6, +, *, 4, 9, 3, /, +, * is?"
                    correctAnswer="350 "
                    v1="350"
                    v2="600 "
                    v3="650"
                    v4="588"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question="If the elements “A”, “B”, “C” and “D” are placed in a queue and are deleted one at a time, in what order will they be removed?"
                    correctAnswer=" ABCD "
                    v1=" ABCD"
                    v2=" DCBA "
                    v3="DCAB"
                    v4="ABDC"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question="Consider the following definition in c programming language"
                    code={`struct node
{
  int data;
  struct node * next;
}
  typedef struct node NODE;
  NODE *ptr;`}
                    correctAnswer=" ptr = (NODE*)malloc(sizeof(NODE)); "
                    v1="ptr = (NODE*)malloc(NODE);"
                    v2="ptr = (NODE*)malloc(sizeof(NODE*)); "
                    v3="ptr = (NODE)malloc(sizeof(NODE));"
                    v4=" ptr = (NODE*)malloc(sizeof(NODE));"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="What does the following function do for a given Linked List with first node as head?"
                    code={`void fun1(struct node* head)
{
if(head == NULL)
return;
fun1(head->next);
printf("%d  ", head->data);
}`}
                    correctAnswer="Prints all nodes of linked list in reverse order "
                    v1="Prints all nodes of linked lists"
                    v2="Prints all nodes of linked list in reverse order "
                    v3="Prints alternate nodes of Linked List"
                    v4="Prints alternate nodes in reverse order"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="The following function reverse() is supposed to reverse a singly linked list. There is one line missing at the end of the function. What should be added in place of “/*ADD A STATEMENT HERE*/”, so that the function correctly reverses a linked list."
                    code={`/* Link list node */
struct node
{
 int data;
struct node* next;
};
                     
/* head_ref is a double pointer which points to head (or start) pointer 
of linked list */
static void reverse(struct node** head_ref)
{
 struct node* prev   = NULL;
 struct node* current = *head_ref;
 struct node* next;
 while (current != NULL)
{
  next  = current->next;  
  current->next = prev;   
  prev = current;
  current = next;
}
  /*ADD A STATEMENT HERE*/
}`}
                    correctAnswer="*head_ref = prev; "
                    v1="*head_ref = current;"
                    v2="*head_ref = prev; "
                    v3="*head_ref = next;"
                    v4="*head_ref = NULL;"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="9"
                    question="What is the space complexity for deleting a linked list?"
                    correctAnswer=" O(1) "
                    v1=" O(1)"
                    v2="O(n) "
                    v3="Either O(1) or O(n)"
                    v4="O(logn)"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="Which of the following is false about a doubly linked list?"
                    correctAnswer=" "
                    v1="We can navigate in both the directions"
                    v2="It requires more space than a singly linked list "
                    v3="The insertion and deletion of a node take a bit longer"
                    v4="Implementing a doubly linked list is easier than singly linked list"
                    counter={this.counter}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>For More MCQs Questions</h4>
                  <MCQCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-5 mt-3">
              <LearningSideSection language="ds" />
              <RightSideSection />
              <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DSMCQ1;
