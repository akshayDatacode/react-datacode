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

class DSQuizeTest3 extends Component {
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
                  <h2>DataStructure Quiz Test Advance</h2>
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
                    question="What is the functionality of the following code? Choose the most appropriate answer."
                    code={`public int function()
{
      if(head == null)
            return Integer.MIN_VALUE;
      int var;
      Node temp = head;
      Node cur;
      while(temp.getNext() != head)
      {
             cur = temp;
             temp = temp.getNext();
      }
      if(temp == head)
      {
              var = head.getItem();
              head = null;
              return var;
      }
      var = temp.getItem();
      cur.setNext(head);
      return var;
}`}
                    correctAnswer="Returns the data and deletes the node at the end of the list"
                    v1="Return data from the end of the list"
                    v2="Returns the data and deletes the node at the end of the list"
                    v3="Returns the data from the beginning of the list"
                    v4="Returns the data and deletes the node from the beginning of the list"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    question="What does the following function check for? (all necessary headers to be included and function is called from main)"
                    code={`#define MAX 10
 
typedef struct stack
{
      int top;
      int item[MAX];
}stack;
              
  int function(stack *s)
  {
      if(s->top == -1)
          return 1;
      else return 0;
}`}
                    correctAnswer="empty stack"
                    v1="full stack"
                    v2=" invalid index "
                    v3="empty stack"
                    v4="infinite stack"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    question="What is the functionality of the following piece of Java code?
                Assume: ‘a’ is a non empty array of integers, the Stack class creates an array of specified size and provides a top pointer indicating TOS(top of stack), push and pop have normal meaning."
                    code={`public void some_function(int[] a)
{
      Stack S=new Stack(a.length);
      int[] b=new int[a.length];
      for(int i=0;i<a.length;i++)
      {
          S.push(a[i]);
      }
      for(int i=0;i<a.length;i++)
      {
          b[i]=(int)(S.pop());
      }
      System.out.println("output :");
      for(int i=0;i<b.length;i++)
      {
          System.out.println(b[i]);
      }
}`}
                    correctAnswer=""
                    v1="print alternate elements of array"
                    v2="duplicate the given array"
                    v3="parentheses matching"
                    v4="reverse the array"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    question="What does the following piece of code do?"
                    code={`public Object function()
{
    if(isEmpty())
    return -999;
    else
    {
          Object high;
          high = q[front];
          return high;
    }
}`}
                    correctAnswer="Return the front element"
                    v1="Dequeue"
                    v2="Enqueue"
                    v3="Return the front element"
                    v4="Return the last element"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    question="What is the output of the following piece of code?"
                    code={`public class CircularQueue
{
	protected static final int CAPACITY = 100;
	protected int size,front,rear;
	protected Object q[];
	int count = 0;
 
	public CircularQueue()
	{
		this(CAPACITY);
	}
	public CircularQueue (int n)
	{
		size = n;
		front = 0;
		rear = 0;
		q = new Object[size];
	}
 
 
	public void enqueue(Object item)
	{
		if(count == size)
		{
			System.out.println("Queue overflow");
				return;
		}
		else
		{
			q[rear] = item;
			rear = (rear+1)%size;
			count++;
		}
	}
	public Object dequeue()
	{
		if(count == 0)
		{
			System.out.println("Queue underflow");
			return 0;
		}
		else
		{
			Object ele = q[front];
			q[front] = null;
			front = (front+1)%size;
			count--;
			return ele;
		}
	}
	public Object frontElement()
	{
		if(count == 0)
		return -999;
		else
		{
			Object high;
			high = q[front];
			return high;
		}
	}
	public Object rearElement()
	{
		if(count == 0)
		return -999;
		else
		{
			Object low;
			rear = (rear-1)%size;
			low = q[rear];
			rear = (rear+1)%size;
			return low;
		}
	}
}
public class CircularQueueDemo
{
	public static void main(String args[])
	{
		Object var;
		CircularQueue myQ = new CircularQueue();
		myQ.enqueue(10);
		myQ.enqueue(3);
		var = myQ.rearElement();
		myQ.dequeue();
		myQ.enqueue(6);
		var = mQ.frontElement();
		System.out.println(var+" "+var);
	}
}`}
                    correctAnswer="3 3"
                    v1="3 3"
                    v2="3 6"
                    v3="6 6"
                    v4="10 6"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    question="What is the time complexity to insert a node based on key in a priority queue?"
                    correctAnswer=" O(n)"
                    v1="O(nlogn)"
                    v2="O(logn)"
                    v3=" O(n)"
                    v4=" O(n2)"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    question="What is the functionality of the following piece of code?"
                    code={`public Object delete_key() 
{
	if(count == 0)
	{
		System.out.println("Q is empty");
		System.exit(0);
	}
	else
	{
		Node cur = head.getNext();
		Node dup = cur.getNext();
		Object e = cur.getEle();
		head.setNext(dup);
		count--;
		return e;
	}
}`}
                    correctAnswer="Delete the first element in the list"
                    v1="Return but not delete the first element in the list"
                    v2="Delete the first element in the list"
                    v3=" Return but not delete the second element in the list"
                    v4="Delete the second element in the list"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    question="What is the functionality of the following piece of code?"
                    code={`public void function(Object item)
{
	Node temp=new Node(item,trail);
	if(isEmpty())
	{
		head.setNext(temp);
		temp.setNext(trail);
	}
	else
	{
		Node cur=head.getNext();
		while(cur.getNext()!=trail)
		{
			cur=cur.getNext();
		}
		cur.setNext(temp);
	}
	size++;
}`}
                    correctAnswer="Insert at the rear end of the dequeue"
                    v1="Insert at the rear end of the dequeue"
                    v2=" Insert at the front end of the dequeue"
                    v3=" Fetch the element at the rear end of the dequeue"
                    v4="Fetch the element at the front end of the dequeue
                "
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    question="After performing these set of operations, what does the final list look contain?"
                    code={`InsertFront(10);
InsertFront(20);
InsertRear(30);
DeleteFront();
InsertRear(40);
InsertRear(10);
DeleteRear();
InsertRear(15);
display();`}
                    correctAnswer=""
                    v1=" 10 30 10 15"
                    v2="20 30 40 15"
                    v3="20 30 40 10"
                    v4="10 30 40 15"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    question="What is the functionality of the following piece of code?"
                    code={`public void fun(int x)
{
	q1.offer(x);
}`}
                    correctAnswer="Perform push() with pop as the costlier operation"
                    v1="Perform push() with push as the costlier operation"
                    v2="Perform push() with pop as the costlier operation"
                    v3="Perform pop() with push as the costlier operation"
                    v4="Perform pop() with pop as the costlier operation"
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

export default DSQuizeTest3;
