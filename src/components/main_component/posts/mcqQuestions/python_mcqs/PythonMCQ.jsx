import React, { Component } from "react";
import HeaderBannerSection from "../../../HeaderBannerSection";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class PythonMCQ extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: ""
  };

  counter = count => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <HeaderBannerSection imgsource="pythonmcq.jpeg" />
        <div className="col-fluid d-block d-md-none">
          <Link to="/index_quize_tests">Python Quize Test 1</Link>
          <ScoreCard count={this.state.count} />
        </div>
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <Quize
                quizeNo="1"
                question="Which of the following is not a keyword?"
                correctAnswer="Programming"
                v1="eval"
                v2="assert"
                v3=" nonlocal"
                v4="pass"
                counter={this.counter}
              />
              <Quize
                quizeNo="2"
                question="Which of the following is an invalid statement?"
                correctAnswer="a b c = 1000 2000 3000"
                v1="abc = 1,000,000"
                v2="a b c = 1000 2000 3000"
                v3="a,b,c = 1000, 2000, 3000"
                v4="a_b_c = 1,000,000"
                counter={this.counter}
              />
              <Quize
                quizeNo="3"
                question="Which of the following will run without errors?"
                correctAnswer="round(45.8)"
                v1="round(45.8)"
                v2="round(6352.898,2,5)"
                v3="round()"
                v4="round(7463.123,2,1)"
                counter={this.counter}
              />
              <Quize
                quizeNo="4"
                question="Which of the following is incorrect?"
                correctAnswer="float(’12+34′)"
                v1="float(‘inf’)"
                v2="float(‘nan’)"
                v3="float(’56’+’78’)"
                v4="float(’12+34′)"
                counter={this.counter}
              />
              <Quize
                quizeNo="5"
                question="What are the values of the following Python expressions?                          
                2**(3**2)
                (2**3)**2
                2**3**2 "
                correctAnswer="512, 64, 512"
                v1="64, 512, 64"
                v2="64, 64, 64"
                v3=" 512, 512, 512"
                v4="512, 64, 512"
                counter={this.counter}
              />
              <Quize
                quizeNo="6"
                question="To find the decimal value of 1111, that is 15, we can use the function:"
                correctAnswer="int(‘1111’,2)"
                v1="int(1111,10)"
                v2=" int(‘1111’,10)"
                v3="int(1111,2)"
                v4="int(‘1111’,2)"
                counter={this.counter}
              />
              <Quize
                quizeNo="7"
                question="What will be the output of the following Python code?
                ['f', 't'][bool('spam')]"
                correctAnswer="t"
                v1="t"
                v2="f"
                v3="No output"
                v4="error"
                counter={this.counter}
              />
              <Quize
                quizeNo="8"
                question="What will be the output of the following Python code?
                l=list('HELLO')
                p=l[0], l[-1], l[1:3]
                'a={0}, b={1}, c={2}'.format(*p)"
                correctAnswer="“a=H, b=O, c=[‘E’, ‘L’]”"
                v1="Error"
                v2="“a=’H’, b=’O’, c=(E, L)”"
                v3="“a=H, b=O, c=[‘E’, ‘L’]”"
                v4="Junk value"
                counter={this.counter}
              />
              <Quize
                quizeNo="9"
                question="What will be the output of the following Python code snippet?
                print('Ab!2'.swapcase())"
                correctAnswer="aB!2"
                v1="AB!@"
                v2="ab12"
                v3="aB!2"
                v4="aB1@"
                counter={this.counter}
              />
              <Quize
                quizeNo="10"
                question="What will be the output of the following Python code?

                a=[13,56,17]
                a.append([87])
                a.extend([45,67])
                print(a)"
                correctAnswer="[13, 56, 17, [87], 45, 67]"
                v1="[13, 56, 17, 87, 45, 67]
                "
                v2="[13, 56, 17, [87], 45, 67]"
                v3=" [13, 56, 17, 87,[ 45, 67]]"
                v4="[13, 56, 17, [87], [45, 67]]"
                counter={this.counter}
              />
              <Quize
                quizeNo="11"
                question="Write a list comprehension equivalent for the Python code shown below.
                for i in range(1, 101):
                 if int(i*0.5)==i*0.5:
                print(i)"
                correctAnswer="[i for i in range(1, 101) if int(i*0.5)==(i*0.5)]"
                v1="[i for i in range(1, 100) if int(i*0.5)==(i*0.5)]"
                v2="[i for i in range(1, 101) if int(i*0.5)==(i*0.5)]"
                v3="[i for i in range(1, 101) if int(i*0.5)=(i*0.5)]"
                v4="[i for i in range(1, 100) if int(i*0.5)=(i*0.5)]"
                counter={this.counter}
              />
              <Quize
                quizeNo="12"
                question="What will be the output of the following Python code?
                A = [[1, 2, 3],
                     [4, 5, 6],
                     [7, 8, 9]]
                [A[row][1] for row in (0, 1, 2)]"
                correctAnswer="[2, 5, 8]"
                v1="[7, 8, 9]"
                v2="[4, 5, 6]"
                v3="[2, 5, 8]"
                v4="[1, 4, 7]"
                counter={this.counter}
              />
              <Quize
                quizeNo="13"
                question="Is the following Python code valid?
                >>> a,b=1,2,3"
                correctAnswer="No, too many values to unpack"
                v1="Yes, this is an example of tuple unpacking. a=1 and b=2"
                v2="Yes, this is an example of tuple unpacking. a=(1,2) and b=3"
                v3="No, too many values to unpack"
                v4="Yes, this is an example of tuple unpacking. a=1 and b=(2,3)"
                counter={this.counter}
              />
              <Quize
                quizeNo="14"
                question="If we have two sets, s1 and s2, and we want to check if all the elements of s1 are present in s2 or not, we can use the function:"
                correctAnswer="s1.issuperset(s2)"
                v1="s2.issubset(s1)"
                v2="s2.issuperset(s1)"
                v3="s1.issuperset(s2)"
                v4="s1.isset(s2)"
                counter={this.counter}
              />
              <Quize
                quizeNo="15"
                question="What will be the output of the following Python code?
                a={}
                a[2]=1
                a[1]=[2,3,4]
                print(a[1][1])"
                correctAnswer=""
                v1="[2,3,4]"
                v2="3"
                v3="2"
                v4="An exception is thrown"
                counter={this.counter}
              />
              <Quize
                quizeNo="16"
                question="What will be the output of the following Python function?
                float('   -12345\n')  
                
                (Note that the number of blank spaces before the number is ‘5’)"
                correctAnswer="-12345.0"
                v1="  -12345.0 (5 blank spaces before the number)"
                v2="-12345.0"
                v3="Error"
                v4="-12345.000000000…. (infinite decimal places)"
                counter={this.counter}
              />
              <Quize
                quizeNo="17"
                question="What will be the output of the following Python code?
                elements = [0, 1, 2]
   def incr(x):
      return x+1
   print(list(map(elements, incr)))"
                correctAnswer="error"
                v1="[1, 2, 3]"
                v2="[0, 1, 2]"
                v3="error"
                v4="none of the mentioned"
                counter={this.counter}
              />
              <Quize
                quizeNo="18"
                question="What will be the output of the following Python code?
                import sys
                sys.stdin.readline() 
                Datacode is best"
                correctAnswer="‘Datacode is best\n’"
                v1="‘Datacode is best\n’"
                v2="‘Datacode is best’"
                v3="‘Datacode is best10’"
                v4="Error"
                counter={this.counter}
              />
              <Quize
                quizeNo="19"
                question="What will be the output of the following Python code?
                import datetime
                d=datetime.date(2017,06,18)
                print(d)"
                correctAnswer="Error"
                v1="Error"
                v2="2017-06-18"
                v3="18-06-2017"
                v4="06-18-2017"
                counter={this.counter}
              />
              <Quize
                quizeNo="20"
                question="Which of the following is the use of id() function in python?"
                correctAnswer="Id returns the identity of the object"
                v1="Every object doesn’t have a unique id"
                v2=" Id returns the identity of the object"
                v3="All of the mentioned"
                v4=" None of the mentioned"
                counter={this.counter}
              />
              <Quize
                quizeNo="21"
                question=" What is the output of the code shown below?
                import math
[str(round(math.pi)) for i in range (1, 6)]"
                correctAnswer="[‘3’, ‘3’, ‘3’, ‘3’, ‘3’]"
                v1="[‘3’, ‘3’, ‘3’, ‘3’, ‘3’, ‘3’]"
                v2="[‘3.1’, ‘3.14’, ‘3.142’, ‘3.1416’, ‘3.14159’, ‘3.141582’]"
                v3="[‘3’, ‘3’, ‘3’, ‘3’, ‘3’]"
                v4="[‘3.1’, ‘3.14’, ‘3.142’, ‘3.1416’, ‘3.14159’]"
                counter={this.counter}
              />
              <Quize
                quizeNo="22"
                question="What is the output of the code shown below?

                t=32.00
                [round((x-32)*5/9) for x in t]"
                correctAnswer="Error"
                v1="[0]"
                v2="0"
                v3="[0.00]"
                v4="Error"
                counter={this.counter}
              />
              <Quize
                quizeNo="23"
                question="What is the output of the following piece of code when executed in the python shell?

                a={1,2,3}
                 a.intersection_update({2,3,4,5})
                 a"
                correctAnswer="{2,3}"
                v1="{2,3}"
                v2="Error, duplicate item present in list"
                v3="Error, no method called intersection_update for set data type"
                v4="{1,4,5}"
                counter={this.counter}
              />
              <Quize
                quizeNo="24"
                question="What is the output of the code shown below?

                s=set([1, 2, 3])
                s.union([4, 5])
                s|([4, 5])"
                correctAnswer="{1, 2, 3, 4, 5}Error"
                v1="{1, 2, 3, 4, 5}{1, 2, 3, 4, 5}"
                v2="Error{1, 2, 3, 4, 5}"
                v3="{1, 2, 3, 4, 5}Error"
                v4="ErrorError"
                counter={this.counter}
              />
              <Quize
                quizeNo="25"
                question="Suppose i is 5 and j is 4, i + j is same as"
                correctAnswer="i.__add__(j)"
                v1="i.__add(j)"
                v2="i.__add__(j)"
                v3="i.__Add(j)"
                v4="i.__ADD(j)"
                counter={this.counter}
              />
              <Quize
                quizeNo="26"
                question="What is the output of the code shown below?

                l1=[1, 2, 3, [4]]
                l2=list(l1)
                id(l1)==id(l2)"
                correctAnswer="False"
                v1=" True"
                v2="False"
                v3=" Error"
                v4="Address of l1"
                counter={this.counter}
              />
              <Quize
                quizeNo="27"
                question="What is the output of the code shown below?

                'The {} side {1} {2}'.format('bright', 'of', 'life')"
                correctAnswer="Error"
                v1="Error"
                v2="‘The bright side of life’"
                v3="‘The {bright} side {of} {life}’"
                v4="No output"
                counter={this.counter}
              />
              <Quize
                quizeNo="28"
                question="Which of these is a private data field?

                def Demo:
                def __init__(self):
                    __a = 1
                    self.__b = 1
                    self.__c__ = 1
                    __d__= 1"
                correctAnswer="__b"
                v1=" __a"
                v2="__b"
                v3="__c__"
                v4="__d__"
                counter={this.counter}
              />
              <Quize
                quizeNo="29"
                question="What is the output of the code shown below?

                def f(x):
                    yield x+1
                    print('test')
                    yield x+2
                g=f(9)"
                correctAnswer="No output"
                v1="Error"
                v2="test"
                v3="test1012"
                v4="No output"
                counter={this.counter}
              />
              <Quize
                quizeNo="30"
                question="What is the value of this expression:

                bin(10-2)+bin(12^4)"
                correctAnswer="0b10000b1000"
                v1="0b10000"
                v2="0b10001000"
                v3="0b1000b1000"
                v4="0b10000b1000"
                counter={this.counter}
              />
              <Quize
                quizeNo="31"
                question="What is the output of the code shown below?

                class Truth:
                  pass
                x=Truth()
                bool(x)"
                correctAnswer="true"
                v1="pass"
                v2="true"
                v3="false"
                v4="error"
                counter={this.counter}
              />
              <Quize
                quizeNo="32"
                question="Python allows string slicing. What is the output of below code:

                s='cppbuzz chicago'
                print(s[3:5])"
                correctAnswer="bu"
                v1="pbuzz"
                v2="buzzc"
                v3="bu"
                v4="None of these"
                counter={this.counter}
              />
              <Quize
                quizeNo="33"
                question="What does the following code print?
                lst = []
                nums = [15, 6]
                lst.append(nums)
                nums = [10, 30, 20]
                lst.append(nums)
                lst.sort()
                print lst"
                correctAnswer=""
                v1="[6, 10, 15, 20, 30]"
                v2="[[6, 15], [10, 20, 30]]"
                v3="[[15, 6], [10, 30, 20]] "
                v4="[[10, 30, 20], [15, 6]]"
                counter={this.counter}
              />
              <Quize
                quizeNo="34"
                question="What is the output of the following code?

                def make_pretty(func):
                    def inner():
                        print('I got decorated')
                        func()
                    return inner
                
                def ordinary():
                    print('I am ordinary')
                   
                pretty = make_pretty(ordinary)
                pretty()"
                correctAnswer="I got decorated

                I am ordinary"
                v1="	
                I got decorated"
                v2="I am pretty

                "
                v3="I got decorated

                I am ordinary
              
              "
                v4="I am ordinary

                I got decorated"
                counter={this.counter}
              />
              <Quize
                quizeNo="35"
                question="What is the more pythonic way to use getters and setters?"
                correctAnswer="@property"
                v1="Decorators"
                v2="Generators"
                v3=" Iterators"
                v4="@property"
                counter={this.counter}
              />
              <Quize
                quizeNo="36"
                question="What is the output of the following program?.

                z = lambda x : x * x
                
                print(z(6))"
                correctAnswer="36"
                v1="6"
                v2="36"
                v3="0"
                v4="error"
                counter={this.counter}
              />
              <Quize
                quizeNo="37"
                question="Choose the correct option with reference to below Python code?.

                def fn(a):
                
                  print(a)
                
                x=90
                
                fn(x)
                "
                correctAnswer=" x is the actual argument.
                "
                v1="x is the formal argument."
                v2="a is the actual argument."
                v3="fn(x) is the function signature."
                v4=" x is the actual argument.
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="38"
                question="Which of the following is False with respect Python code?.

                class Student:
                
                  def __init__(self,id,age):
                
                    self.id=id
                
                    self.age=age
                
                std=Student(1,20)
                "
                correctAnswer="Every class must have a constructor."
                v1="'std' is the reference variable for object Student(1,20)"
                v2="id and age are called the parameters."
                v3="Every class must have a constructor."
                v4="None of the above"
                counter={this.counter}
              />
              <Quize
                quizeNo="39"
                question="Which of the following is correct?.

                class Book:
                  def __init__(self,author):
                    self.author=author
                book1=Book('V.M.Shah')
                book2=book1"
                correctAnswer="id(book1) and id(book2) will have same value."
                v1="Both book1 and book2 will have reference to two different objects of class Book."
                v2="id(book1) and id(book2) will have same value."
                v3="It will throw error as multiple references to same object is not possible."
                v4="None of the above
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="40"
                question=" What will be the output of following Python code?.

                set1={0,0,9}
                
                print(set1)"
                correctAnswer="{0,9}"
                v1="{0,0,9}"
                v2="{0,9}"
                v3="{9}"
                v4="It will throw an error as there are two 0 while creating the set."
                counter={this.counter}
              />
              <Quize
                quizeNo="41"
                question="What will the be the result of below Python code?.

                set1={1,2,3}
                
                set1.add(4)
                
                set1.add(4)
                
                print(set1)"
                correctAnswer="{1,2,3,4}"
                v1="{1,2,3,4}"
                v2="{1,2,3}"
                v3="{1,2,3,4,4}"
                v4="It will throw an error as same element is added twice"
                counter={this.counter}
              />
              <Quize
                quizeNo="42"
                question="Which of the following will delete key_value pair for key='tiger' in dictionary?.

                dic={'lion':'wild','tiger':'wild','cat':'domestic','dog':'domestic}"
                correctAnswer="del dic['tiger']"
                v1="del dic['tiger']"
                v2="dic['tiger'].delete()"
                v3=" delete(dic.['tiger'])"
                v4="del(dic.['tiger'])"
                counter={this.counter}
              />
              <Quize
                quizeNo="43"
                question="Which of the following options will not result in an error when performed on tuples in Python where tupl=(5,2,7,0,3)?."
                correctAnswer="tupl1=tupl+tupl"
                v1="tupl[1]=2"
                v2="tupl.append(2)"
                v3="tupl1=tupl+tupl"
                v4="tupl.sort()"
                counter={this.counter}
              />
              <Quize
                quizeNo="44"
                question="Which of the following is the property of variable argument count?."
                correctAnswer="More than one argument can be used while calling the function."
                v1="More than one argument can be used while calling the function."
                v2=" It should be always last while declaring the arguments."
                v3=" It should be always last "
                v4="None of these"
                counter={this.counter}
              />
              <Quize
                quizeNo="45"
                question="What will be the output of the following Python code?.

                def function1(var1=5, var2=7):
                    var2=9
                    var1=3
                    print (var1, ' ', var2)
                function1(10,12)"
                correctAnswer="3 9"
                v1="5 7"
                v2="3 9"
                v3="10 12"
                v4="Error"
                counter={this.counter}
              />
              <Quize
                quizeNo="46"
                question="What will be output of this expression:.

                'p' + 'q' if '12'.isdigit() else 'r' + 's'"
                correctAnswer="pq"
                v1="pq"
                v2="rs"
                v3="pqrs"
                v4="pq12"
                counter={this.counter}
              />
              <Quize
                quizeNo="47"
                question="What will be the output of the following code snippet?
                class Sales:
                    def __init__(self, id):
                        self.id = id
                        id = 100
                
                val = Sales(123)
                print (val.id)"
                correctAnswer="123"
                v1="SyntaxError, this program will not run"
                v2="100"
                v3="123"
                v4="None of the above"
                counter={this.counter}
              />
              <Quize
                quizeNo="48"
                question="Which of the following statements are correct about the given code snippet?
                class A:
                    def __init__(self, i = 0):
                        self.i = i
                
                class B(A):
                    def __init__(self, j = 0):
                        self.j = j
                
                def main():
                    b = B()
                    print(b.i)
                    print(b.j)
                
                main()"
                correctAnswer="Class B inherits A, but the data field “i” in A is not inherited."
                v1="Class B inherits A, but the data field “i” in A is not inherited."
                v2="Class B inherits A, thus automatically inherits all data fields in A."
                v3="When you create an object of B, you have to pass an argument such as B(5)."
                v4="The data field “j” cannot be accessed by object b."
                counter={this.counter}
              />
              <Quize
                quizeNo="49"
                question=" Which of the following statements can be used to check, whether an object “obj” is an instance of class A or not?"
                correctAnswer="isinstance(obj, A)"
                v1="obj.isinstance(A)"
                v2="A.isinstance(obj)"
                v3="isinstance(obj, A)"
                v4=" isinstance(A, obj)"
                counter={this.counter}
              />
              <Quize
                quizeNo="50"
                question="Which of the following is the output of the below Python code?

                class A:
                    def __init__(self):
                        self.x = 1
                        self.__y = 1
                 
                    def getY(self):
                        return self.__y
                a = A()
                a.x = 45
                print(a.x)"
                correctAnswer="The program runs fine and prints 45."
                v1="The program runs fine and prints 45."
                v2="The program has an error because you cannot name a variable using __y."
                v3="The program runs fine and prints 1."
                v4="The program has an error because x is private and cannot be access outside of the class."
                counter={this.counter}
              />
              <h1> C mcq </h1>
              <h1> javasript mcq question</h1>
              <Quize
                quizeNo="1"
                question="JavaScript is ______ Side Scripting Language."
                correctAnswer="Browser

                "
                v1="Server
                "
                v2="Browser
                "
                v3="ISP"
                v4="None of These
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="2"
                question="JavaScript is designed for following purpose -"
                correctAnswer="To add interactivity to HTML Pages.
                "
                v1="To Perform Server Side Scripting Opertion
                "
                v2="To Style HTML Pages
                "
                v3="To Execute Query Related to DB on Server
                "
                v4="To add interactivity to HTML Pages.
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="3"
                question="JavaScript is can be written -"
                correctAnswer="Both 1 and 2 "
                v1="directly into HTML pages
                "
                v2="directly into JS file and included into HTML
                "
                v3="Both 1 and 2 "
                v4="None of these
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="4"
                question="Variable can hold ________ value at a time"
                correctAnswer="Single
                "
                v1="Double
                "
                v2="None of these
                "
                v3="Multiple
                "
                v4="Single
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="5"
                question="Integer Variable is declared using following syntax in JavaScript.
                "
                correctAnswer="var num;
                "
                v1="var num;
                "
                v2="Integer num;
                "
                v3="int num;
                "
                v4="integer num;
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="6"
                question="We can declare ___________ at a time. Select most appropriate option.
                "
                correctAnswer="One or more Variables
                "
                v1="More than One Variables
                "
                v2="One or more Variables
                "
                v3="One Variable Only
                "
                v4="None of these
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="7"
                question="Assignment Operators is following type of operator ______________.
                "
                correctAnswer="Binary
                "
                v1="Ternary
                "
                v2="Binary
                "
                v3="Unarry
                "
                v4="None of these
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="8"
                question="'+=' operator can operate on following data values.
                "
                correctAnswer="All Options
                "
                v1="Float
                "
                v2="Integer
                "
                v3="String
                "
                v4="All Options
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="9"
                question="JavaScript contains a _________________ that assigns a value to a variable based on some condition."
                correctAnswer="Conditional operator
                "
                v1="Logical Operator
                "
                v2="Bitwise Operator
                "
                v3="Assignment operator
                "
                v4="Conditional operator
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="10"
                question="Guess the ternary operator used in the following example !!!
                marks = (mark<35)?'Fail':'Pass';"
                correctAnswer=""
                v1="Colon Operator
                "
                v2="Bitwise Operator
                "
                v3="Logical Operator
                "
                v4="Conditional Operator
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="11"
                question="What will be the output of the following ?
                <script type='text/javascript'>
    var name;
    name = 'Datacode';
</script>
<script type='text/javascript'>
    document.write(name);
</script>"
                correctAnswer="Datacode"
                v1="Nothing will be printed
                "
                v2="Datacode"
                v3="Error"
                v4="None of these
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="12"
                question="+Infinity in JS gets added with +Infinity then output of the code will be -
                "
                correctAnswer="+Infinity
                "
                v1="-Infinity
                "
                v2="NaN
                "
                v3="+Infinity
                "
                v4="none of the above"
                counter={this.counter}
              />
              <Quize
                quizeNo="13"
                question="What will be the output of the following JavaScript code?

                var a1 = [,,,]; 
                var a2 = new Array(3); 
                0 in a1 
                0 in a2"
                correctAnswer="true false"
                v1="true false"
                v2="false true"
                v3="true true"
                v4="false true"
                counter={this.counter}
              />
              <Quize
                quizeNo="14"
                question="What is the observation made in the following JavaScript code?

                if (!a[i]) continue;"
                correctAnswer="Skips the null elements"
                v1="Skips the defined elements
                "
                v2="Skips the existent elements
                "
                v3="Skips the null elements"
                v4="Skips the defined & existent elements"
                counter={this.counter}
              />
              <Quize
                quizeNo="15"
                question="What convenience does the following JavaScript code snippet provide?

                let succ = function(x) x+1, yes = function() true, no = function() false;"
                correctAnswer="Functional behaviour"
                v1="Functional behaviour"
                v2="Modular behaviour"
                v3="No convenience"
                v4="Shorthand expression"
                counter={this.counter}
              />
              <Quize
                quizeNo="16"
                question="Which of the following are the necessary events currently?"
                correctAnswer="Onclick"
                v1="DOMActivate"
                v2="DOMFocusIn"
                v3="DOMNodeInserted"
                v4="Onclick"
                counter={this.counter}
              />
              <Quize
                quizeNo="17"
                question="Which is the function used to retrieve a value?"
                correctAnswer="getItem()"
                v1="get()"
                v2="retrieve()"
                v3="getItem()"
                v4="retrieveItem()"
                counter={this.counter}
              />
              <Quize
                quizeNo="18"
                question="What will the following JavaScript code snippet work? If not, what will be the error?

                function tail(o) 
                { 
                    for (; o.next; o = o.next) ;
                    return o;
                }"
                correctAnswer="Yes, this will work"
                v1="No, this will throw an exception as only numerics can be used in a for loop"
                v2="No, this will not iterate"
                v3="Yes, this will work"
                v4="No, this will result in a runtime error with the message “Cannot use Linked List”"
                counter={this.counter}
              />
              <Quize
                quizeNo="19"
                question=" What will be the output of the following JavaScript code?

                function myFunction() 
                {
                    document.getElementById('demo').innerHTML = Boolean(10 > 9);
                }
                "
                correctAnswer="true
                "
                v1="true
                "
                v2="false"
                v3="error"
                v4="0"
                counter={this.counter}
              />
              <Quize
                quizeNo="20"
                question="What does the value 2 of the WebSocket attribute Socket.readyState indicate?"
                correctAnswer="Handshake connection"
                v1="Closed connection"
                v2="Handshake connection"
                v3="Unestablished connection"
                v4="Established connection and communication is possible"
                counter={this.counter}
              />
              <h1> HTML Quiz</h1>
              <Quize
                quizeNo="1"
                question="Which of the following prints bold letters in traditional HTML?
                i. <B>Go boldly</B>
ii. <B>Go boldly</b>
iii. <b>Go boldly</B>
iv. <b>Go boldly</b>"
                correctAnswer="i, ii, iii, and iv"
                v1="iv"
                v2="i"
                v3="i, ii, iii, and iv"
                v4="both iv and i "
                counter={this.counter}
              />
              <Quize
                quizeNo="2"
                question=" What application can one create even before the introduction of HTML5?"
                correctAnswer="Forms"
                v1="Web applications"
                v2="Mobile applications"
                v3="Forms"
                v4=" Browser based games"
                counter={this.counter}
              />
              <Quize
                quizeNo="3"
                question="In HTML Audio/Video DOM, __________ sets or returns whether the audio/video should be loaded when the page loads."
                correctAnswer="preload"
                v1="preload"
                v2="autoplay"
                v3="buffered "
                v4="controller"
                counter={this.counter}
              />
              <Quize
                quizeNo="4"
                question="Which of the following is not a HTML5 tag?
"
                correctAnswer=""
                v1="<video>"
                v2="<source>"
                v3="<track>"
                v4="<slider>"
                counter={this.counter}
              />
              <Quize
                quizeNo="5"
                question="Which of the following property is common in all drag events?"
                correctAnswer="dataTransfer"
                v1="drag effects"
                v2="drag data"
                v3="dataTransfer "
                v4="dragenter"
                counter={this.counter}
              />
              <Quize
                quizeNo="6"
                question="Which tag is used to defines multiple media resources for media elements audio and video?"
                correctAnswer="<source>"
                v1="<source>"
                v2="<canvas>"
                v3="<audio>"
                v4="<video>"
                counter={this.counter}
              />
              <Quize
                quizeNo="7"
                question="What is the default type of ‘type’ attribute of <input> element?"
                correctAnswer="Text"
                v1="Text"
                v2="Password"
                v3=" Numerals"
                v4="Special Characters"
                counter={this.counter}
              />
              <Quize
                quizeNo="8"
                question="Which attribute is used with <select> element?"
                correctAnswer="multiple"
                v1="multiple"
                v2="selected"
                v3="name"
                v4="value"
                counter={this.counter}
              />
              <Quize
                quizeNo="9"
                question=" Which element is used for grouping together related elements?"
                correctAnswer="<div>"
                v1=" <div>"
                v2="<hgroup>"
                v3="<section>"
                v4="<header>"
                counter={this.counter}
              />
              <Quize
                quizeNo="10"
                question="How many standard color names does HTML supports?"
                correctAnswer="140"
                v1="120"
                v2="130"
                v3="140"
                v4="90"
                counter={this.counter}
              />
              <h1> CSS</h1>
              <Quize
                quizeNo="1"
                question="CSS stands for __________"
                correctAnswer="Cascading Style Sheets"
                v1="Color Style Sheets"
                v2="Cascade Sheets Style"
                v3="Cascade Style Sheet"
                v4="Cascading Style Sheets"
                counter={this.counter}
              />
              <Quize
                quizeNo="2"
                question="In CSS, “font-size” can be called as ________"
                correctAnswer="Property-Name"
                v1="Selector"
                v2="Rule"
                v3="Property"
                v4="Property-Name"
                counter={this.counter}
              />
              <Quize
                quizeNo="3"
                question="Which of the following tag is used to embed css in html page?"
                correctAnswer=" <style>"
                v1="<script>"
                v2=" <style>"
                v3=" <css>"
                v4=" <!DOCTYPE html>"
                counter={this.counter}
              />
              <Quize
                quizeNo="4"
                question="Which of the following function adjust the brightness of an element’s color, for use by the filter property?"
                correctAnswer="brightness()"
                v1="contrast()"
                v2="dark()"
                v3="light()"
                v4="brightness()"
                counter={this.counter}
              />
              <Quize
                quizeNo="5"
                question="Identify the CSS property defining bottom-left corner shape of the border?"
                correctAnswer="border-bottom-left-radius"
                v1="border-radius"
                v2="border-corner-radius"
                v3="border-bottom-left-radius"
                v4="border-left-radius"
                counter={this.counter}
              />
              <Quize
                quizeNo="6"
                question="Which of the following specifies what parts of an element’s content are skipped over when applying any text decoration?"
                correctAnswer="text-decoration-skip"
                v1="@font-text"
                v2="font-style"
                v3="text-skip"
                v4="text-decoration-skip"
                counter={this.counter}
              />
              <Quize
                quizeNo="7"
                question="Choose the option that correctly specifies the output of the following CSS.

                span {
                  border: 1px solid red;
                        outline: green dotted thick;
                }"
                correctAnswer=""
                v1="All span elements will have a red border and a green dotted outline"
                v2="All span elements will have a green thick border and a red outline"
                v3="All span elements will have an outer red border and inner green dotted border"
                v4="All span elements will have a outer green dotted border and an inner red border
                "
                counter={this.counter}
              />
              <Quize
                quizeNo="8"
                question="Which of the following property specifies what line decorations, if any, are added to the text?"
                correctAnswer="text-decoration-line"
                v1="text-decoration-line"
                v2="text-line-decoration"
                v3="text-decoration-style"
                v4="text-style-decoration"
                counter={this.counter}
              />
              <Quize
                quizeNo="9"
                question="Which of the following property controls the horizontal overflow of a block or inline block?"
                correctAnswer="overflow-x"
                v1="overflow-x"
                v2="overflow"
                v3="overflow-k"
                v4="overflow-y"
                counter={this.counter}
              />
              <Quize
                quizeNo="10"
                question="Which property specifies the painting area of the background?"
                correctAnswer="background-clip"
                v1="background-clip"
                v2="background-image"
                v3="background-size"
                v4="background-origin"
                counter={this.counter}
              />
              <h1> Bootstrap quiz</h1>
              <Quize
                quizeNo="1"
                question=" Bootstrap’s global default line-height"
                correctAnswer="1.428"
                v1="1.128"
                v2="1.428"
                v3="1.228"
                v4=" 1.8"
                counter={this.counter}
              />
              <Quize
                quizeNo="2"
                question="Which of the following is correct about bootstrap wells?"
                correctAnswer="Both of the above"
                v1="You can change the size of well using the optional classes such as, well-lg or well-sm"
                v2="well-lg or well-sm classes are used in conjunction with .well class"
                v3="Both of the above"
                v4="None of the above"
                counter={this.counter}
              />
              <Quize
                quizeNo="3"
                question="  Glyphicons is mainly used for?"
                correctAnswer=""
                v1="Slideshow"
                v2="graphic images"
                v3="animation"
                v4="  providing different icons"
                counter={this.counter}
              />
              <Quize
                quizeNo="4"
                question="Which of the following class styles a table as a nice basic table with stripes on rows? "
                correctAnswer=".table-striped"
                v1=".table"
                v2=".table-striped"
                v3=".table-bordered"
                v4=" .table-hover "
                counter={this.counter}
              />
              <Quize
                quizeNo="5"
                question=" What layout is used for providing 100% width in Bootstrap? "
                correctAnswer=" Fluid layout"
                v1="Fixed layout"
                v2=" Relative layout"
                v3=" Fluid layout"
                v4="None of the above "
                counter={this.counter}
              />
              <Quize
                quizeNo="6"
                question="  In Bootstrap we can add for"
                correctAnswer="Proper Rendering and Zooming in mobile"
                v1="Proper Rendering and Zooming in mobile"
                v2="Make SEO"
                v3=" Make proper view of labels"
                v4="None "
                counter={this.counter}
              />
              <Quize
                quizeNo="7"
                question="Which of the following class makes thumbnail image "
                correctAnswer=".img-thumbnail"
                v1=".img-tmbnail"
                v2=" .img-thumbnail-image"
                v3=" .img-thumb"
                v4=".img-thumbnail "
                counter={this.counter}
              />
              <Quize
                quizeNo="8"
                question=" Which of the following bootstrap style helps to combine sets of more complex components?"
                correctAnswer=".btn-toolbar"
                v1=".btn-group"
                v2=".btn-toolbar"
                v3=".btn-group-lg"
                v4=" .btn-group-vertical "
                counter={this.counter}
              />
              <Quize
                quizeNo="9"
                question=" Which plugin is used to create a modal window?"
                correctAnswer="modal"
                v1="modal"
                v2="window"
                v3="dialog Box"
                v4="popup "
                counter={this.counter}
              />
              <Quize
                quizeNo="10"
                question="The .container class provides "
                correctAnswer="Fixed width container"
                v1="Full width container"
                v2="Fixed width container"
                v3="Table format"
                v4=" To create a Form"
                counter={this.counter}
              />
              <h1> React quiz</h1>
              <Quize
                quizeNo="1"
                question="React is a ________ "
                correctAnswer="Javascript library"
                v1="Javascript library"
                v2="Javascript framework"
                v3="Both of above"
                v4="None of above "
                counter={this.counter}
              />
              <Quize
                quizeNo="2"
                question="ReactJS covers _________ "
                correctAnswer="User Interface layer in an application"
                v1="User Interface layer in an application"
                v2="Data layer in an application"
                v3="Both a and b"
                v4=" None of above"
                counter={this.counter}
              />
              <Quize
                quizeNo="3"
                question=" ReactJS uses _____ to increase performance"
                correctAnswer="Virtual DOM"
                v1="Original DOM"
                v2="Virtual DOM"
                v3="Both of above"
                v4=" None of above"
                counter={this.counter}
              />
              <Quize
                quizeNo="4"
                question="What will be the output following 

                var Helloword=(props)=>
                {
                 return(
                 <div>
                 hello world 1
                 </div>
                 <div>
                 Hello world 2
                 </div>
                 );
                }
                ReactDOM.render(<Helloworld/>,mountNode) "
                correctAnswer="Error"
                v1="Hello world 1

                "
                v2="Hello world 2"
                v3="Hello world 1 Hello world 2"
                v4=" Error"
                counter={this.counter}
              />
              <Quize
                quizeNo="5"
                question="Number of elements, a valid react component can return  "
                correctAnswer="1"
                v1="1"
                v2="2"
                v3="3"
                v4=" 4"
                counter={this.counter}
              />
              <Quize
                quizeNo="6"
                question=" State in react is________"
                correctAnswer="Both of above"
                v1="A permanent storage"
                v2="Internal storage of the component

                "
                v3="Both of above"
                v4="None of above "
                counter={this.counter}
              />
              <Quize
                quizeNo="7"
                question="props in react can________ "
                correctAnswer="Not be changed in the component"
                v1="Be changed inside the component"
                v2="Be changed in side other component"
                v3="Not be changed in the component"
                v4=" None of above"
                counter={this.counter}
              />
              <Quize
                quizeNo="8"
                question=" Keys are given to a list of elements in react. These keys should be "
                correctAnswer="Unique among the siblings only"
                v1="Unique in the DOM"
                v2="Unique among the siblings only"
                v3="Do not requires to be unique"
                v4=" None of above"
                counter={this.counter}
              />
              <Quize
                quizeNo="9"
                question="For controlled components in react "
                correctAnswer="Source of truth is component state"
                v1="Source of truth is DOM"
                v2="Source of truth can be anything"
                v3="Source of truth is component state"
                v4="None of above "
                counter={this.counter}
              />
              <Quize
                quizeNo="10"
                question=" In which directory react components are saved?"
                correctAnswer="inside js/components/"
                v1="inside vendor/components"
                v2="inside external/components"
                v3="inside vendor/components"
                v4="inside js/components/ "
                counter={this.counter}
              />
              <h1>C++</h1>
              <Quize
                quizeNo="1"
                question="Wrapping data and its related functionality into a single entity is known as _____________ "
                correctAnswer=" Encapsulation"
                v1="Abstraction"
                v2=" Encapsulation"
                v3=" Polymorphism"
                v4=" Modularity"
                counter={this.counter}
              />
              <Quize
                quizeNo="2"
                question="What is virtual inheritance? "
                correctAnswer="C++ technique to avoid multiple copies of the base class into children/derived class"
                v1="C++ technique to avoid multiple copies of the base class into children/derived class"
                v2="C++ technique to avoid multiple inheritances of classes"
                v3="C++ technique to enhance multiple inheritance"
                v4="C++ technique to ensure that a private member of the base class can be accessed somehow "
                counter={this.counter}
              />
              <Quize
                quizeNo="3"
                question="What will be the output of the following C++ code?

                #include <iostream>
                using namespace std;
                class A{
                public:
                  A(){
                    cout<<'Constructor called\n';
                     }
                  ~A(){
                    cout<<'Destructor called\n';
                      }
                };
                int main(int argc, char const *argv[])
                {
                  A *a = new A[5];
                  delete a;
                  return 0;
                } "
                correctAnswer="Segmentation fault"
                v1="“Constructor called” five times and then “Destructor called” five times"
                v2="“Constructor called” five times and then “Destructor called” once"
                v3="Error"
                v4="Segmentation fault "
                counter={this.counter}
              />
              <Quize
                quizeNo="4"
                question="What does ‘\a’ escape code represent? "
                correctAnswer="alert
                "
                v1="alert
                "
                v2="backslash"
                v3="tab"
                v4="form feed "
                counter={this.counter}
              />
              <Quize
                quizeNo="5"
                question=" What happens if the following code is compiled on both C and C++?

                #include<stdio.h>
                struct STRUCT
                {
                private:
                  int a;
                };
                int main()
                {
                  printf('%d\n', (int)sizeof(struct STRUCT));
                  return 0;
                }"
                correctAnswer="The program gives an error in case of C but runs perfectly in case of C++"
                v1="The program runs fine and both prints output “HELLO THIS IS STRUCTURE”"
                v2="The program gives an error in case of C but runs perfectly in case of C++"
                v3="The program gives an error in case of C++ but runs perfectly in case of C"
                v4="  The program gives an error in case of both C and C++"
                counter={this.counter}
              />
              <Quize
                quizeNo="6"
                question="  What is the value of the bool?

                bool is_int(789.54)"
                correctAnswer="False"
                v1="True"
                v2="False"
                v3="1"
                v4=" 2"
                counter={this.counter}
              />
              <Quize
                quizeNo="7"
                question="Given the variables p, q are of char type and r, s, t are of int type. Select the right statement?

                1. t = (r * s) / (r + s);
                2. t = (p * q) / (r + s); "
                correctAnswer="both 1 and 2 are true"
                v1="1 is true but 2 is false"
                v2="1 is false and 2 is true"
                v3="both 1 and 2 are true"
                v4="both 1 and 2 are false "
                counter={this.counter}
              />
              <Quize
                quizeNo="8"
                question="What is the range of the floating point numbers? "
                correctAnswer="-3.4E+38 to +3.4E+38"
                v1="-3.4E+38 to +3.4E+38"
                v2="-3.4E+38 to +3.4E+34"
                v3="-3.4E+38 to +3.4E+36"
                v4="-3.4E+38 to +3.4E+32 "
                counter={this.counter}
              />
              <Quize
                quizeNo="9"
                question="What will happen in the following C++ code snippet?

                int a = 100, b = 200;
                int *p = and a, *q = &b;
                p = q; "
                correctAnswer="p now points to b"
                v1="b is assigned to a"
                v2="p now points to b"
                v3="a is assigned to b"
                v4="q now points to a
                 "
                counter={this.counter}
              />
              <Quize
                quizeNo="10"
                question=" What will be the output of the following C++ code?

    
                
                    #include <iostream>
                    using namespace std;
                    int main()
                    {
                        int a = 5, b = 10, c = 15;
                        int *arr[ ] = {&a, &b, &c};
                        cout << arr[1];
                        return 0;
                    }"
                correctAnswer="it will return some random number
                V"
                v1="5"
                v2="10"
                v3="15"
                v4="it will return some random number
                 "
                counter={this.counter}
              />
              <h1>Java quiz</h1>
              <Quize
                quizeNo="1"
                question="What is the range of short data type in Java? "
                correctAnswer="-32768 to 32767"
                v1="-128 to 127"
                v2="-32768 to 32767"
                v3="-2147483648 to 2147483647"
                v4="  None of the mentioned"
                counter={this.counter}
              />
              <Quize
                quizeNo="2"
                question="Which of the following are legal lines of Java code?

                1. int w = (int)888.8;
                2. byte x = (byte)100L;
                3. long y = (byte)100;
                4. byte z = (byte)100L; "
                correctAnswer="All statements are correct"
                v1="1 and 2"
                v2=" 2 and 3"
                v3="3 and 4"
                v4="All statements are correct "
                counter={this.counter}
              />
              <Quize
                quizeNo="3"
                question=". What will be the output of the following Java program?

                class array_output {
                    public static void main(String args[]) 
                    {    
                        char array_variable [] = new char[10];
                  for (int i = 0; i < 10; ++i) {
                            array_variable[i] = 'i';
                            System.out.print(array_variable[i] + '' );
                            i++;
                        }
                    } 
                } "
                correctAnswer="i i i i i"
                v1="i i i i i"
                v2="0 1 2 3 4"
                v3=" i j k l m"
                v4="None of the mentioned "
                counter={this.counter}
              />
              <Quize
                quizeNo="4"
                question="  What will be the output of the following Java program?

                class mainclass {
                    public static void main(String args[]) 
                    {
                        char a = 'A';
                        a++;
                  System.out.print((int)a);
                    } 
                }"
                correctAnswer="66"
                v1="66"
                v2="67"
                v3="65"
                v4="64 "
                counter={this.counter}
              />
              <Quize
                quizeNo="5"
                question=" Which of these is an incorrect array declaration?"
                correctAnswer="int arr[] = int [5] new"
                v1="int arr[] = new int[5]"
                v2="int [] arr = new int[5]"
                v3="int arr[] = new int[5]"
                v4="int arr[] = int [5] new "
                counter={this.counter}
              />
              <Quize
                quizeNo="6"
                question=" What will be the output of the following Java code?

                int arr[] = new int [5];
                System.out.print(arr); "
                correctAnswer="Class name@ hashcode in hexadecimal form"
                v1="0"
                v2="value stored in arr[0]"
                v3="00000"
                v4=" Class name@ hashcode in hexadecimal form"
                counter={this.counter}
              />
              <Quize
                quizeNo="7"
                question="What is the type of variable ‘b’ and ‘d’ in the following Java snippet?

                int a[], b;
                int []c, d; "
                correctAnswer="‘b’ is int variable; ‘d’ is int array"
                v1="‘b’ and ‘d’ are int"
                v2="‘b’ and ‘d’ are arrays of type int"
                v3="‘b’ is int variable; ‘d’ is int array"
                v4=" ‘d’ is int variable; ‘b’ is int array"
                counter={this.counter}
              />
              <Quize
                quizeNo="8"
                question="What is it called if an object has its own lifecycle and there is no owner? "
                correctAnswer="Association"
                v1="Aggregation"
                v2="Composition"
                v3="Encapsulation"
                v4=" Association"
                counter={this.counter}
              />{" "}
              <Quize
                quizeNo="9"
                question="Which of these is correct way of inheriting class A by class B? "
                correctAnswer="class B extends A {}"
                v1="class B + class A {}"
                v2="class B inherits class A {}"
                v3="class B extends A {}"
                v4=" class B extends class A {}"
                counter={this.counter}
              />
              <Quize
                quizeNo="10"
                question="Which of these is an incorrect statement? "
                correctAnswer="StringBuffer class is used to store string in a buffer for later use"
                v1=" String objects are immutable, they cannot be changed"
                v2="String object can point to some other reference of String variable"
                v3="StringBuffer class is used to store string in a buffer for later use"
                v4=" None of the mentioned"
                counter={this.counter}
              />
              <h1>Django</h1>
              <Quize
                quizeNo="1"
                question="What is the Django shortcut method to more easily render an html response? "
                correctAnswer="render_to_response"
                v1="render_to_html"
                v2="render_to_response"
                v3="response_render"
                v4=" render"
                counter={this.counter}
              />
              <Quize
                quizeNo="2"
                question="By using django.contrib.humanize, you can use the following filter in your template to display the number 3 as three. "
                correctAnswer="apnumber"
                v1="apnumber"
                v2="intcomma"
                v3="intword"
                v4=" ordinal"
                counter={this.counter}
              />
              <Quize
                quizeNo="3"
                question="How do you concatenate two QuerySets into one list? "
                correctAnswer="from itertools import chain	result = list(chain(query_set_1, query_set_2))"
                v1="result = list(query_set_1 | query_set_2)"
                v2="from itertools import chain	result = list(chain(query_set_1, query_set_2))"
                v3="from django.db.models import Q result = Q(query_set_1) | Q(query_set_1)"
                v4="result = query_set_1 + query_set_2
              "
                counter={this.counter}
              />
              <Quize
                quizeNo="4"
                question="What is the Django command to start a new app named ‘users’ in an existing project? "
                correctAnswer="manage.py startapp users"
                v1="manage.py –newapp users"
                v2="manage.py newapp users"
                v3="manage.py –startapp users"
                v4="manage.py startapp users "
                counter={this.counter}
              />
              <Quize
                quizeNo="5"
                question="What are the features available in Django web framework? "
                correctAnswer="All of the above"
                v1="Admin Interface (CRUD)"
                v2="Templating"
                v3="Form handling"
                v4=" All of the above"
                counter={this.counter}
              />
              <Quize
                quizeNo="6"
                question="  The architecture of Django consists of?"
                correctAnswer="All of these"
                v1="Models"
                v2=" Views"
                v3="Templates"
                v4="All of these "
                counter={this.counter}
              />
              <Quize
                quizeNo="7"
                question="What is the purpose of settings.py? "
                correctAnswer="To configure settings for the Django project"
                v1="To configure settings for the Django project"
                v2="To configure settings for an app"
                v3="To set the date and time on the server"
                v4=" To sync the database schema"
                counter={this.counter}
              />
              <Quize
                quizeNo="8"
                question="What are the caching strategies in Django? "
                correctAnswer="Both A and B"
                v1="File sytem caching"
                v2="In-memory caching"
                v3="Both A and B"
                v4=" None "
                counter={this.counter}
              />
              <Quize
                quizeNo="9"
                question="In Django how would you retrieve all the ‘User’ records from a given database? "
                correctAnswer="User.objects.all()"
                v1="User.objects.all()"
                v2="Users.objects.all()"
                v3="User.all_records()"
                v4="User.object.all() "
                counter={this.counter}
              />
              <Quize
                quizeNo="10"
                question="What is the most easiest, fastest, and most stable deployment choice in most cases with Django? "
                correctAnswer="mod_wsgi"
                v1="FastCGI"
                v2="mod_wsgi"
                v3="SCGI"
                v4="AJP
              "
                counter={this.counter}
              />
              <h1>Dbms quiz</h1>
              <Quize
                quizeNo="1"
                question="Database __________ which is the logical design of the database, and the database _______ which is a snapshot of the data in the database at a given instant in time. "
                correctAnswer="Schema, Instance"
                v1="Instance, Schema"
                v2="Relation, Schema"
                v3="Relation, Domain"
                v4="Schema, Instance "
                counter={this.counter}
              />
              <Quize
                quizeNo="2"
                question="The tuples of the relations can be of ________ order. "
                correctAnswer="Any"
                v1="Any"
                v2="Same"
                v3=" Sorted"
                v4="Constant "
                counter={this.counter}
              />
              <Quize
                quizeNo="3"
                question="Which one of the following is a set of one or more attributes taken collectively to uniquely identify a record? "
                correctAnswer="Super key"
                v1="Candidate key"
                v2="Sub key"
                v3="Super key"
                v4="Foreign key "
                counter={this.counter}
              />
              <Quize
                quizeNo="4"
                question="Which one of the following attribute can be taken as a primary key? "
                correctAnswer="Id"
                v1="Name"
                v2="Street"
                v3="Id"
                v4="Department "
                counter={this.counter}
              />
              <Quize
                quizeNo="5"
                question="Student(ID, name, dept name, tot_cred)
              In this query which attributes form the primary key? "
                correctAnswer="ID"
                v1="Name"
                v2="Dept"
                v3="Tot_cred"
                v4="ID "
                counter={this.counter}
              />
              <Quize
                quizeNo="6"
                question="The _______operation performs a set union of two “similarly structured” tables "
                correctAnswer="Union"
                v1="Union"
                v2="Join"
                v3="Product"
                v4="Intersect "
                counter={this.counter}
              />
              <Quize
                quizeNo="7"
                question="SELECT name ____ instructor name, course id
              FROM instructor, teaches
              WHERE instructor.ID= teaches.ID;
              Which keyword must be used here to rename the field name? "
                correctAnswer="As"
                v1="From"
                v2="Rename"
                v3="As"
                v4="Join "
                counter={this.counter}
              />
              <Quize
                quizeNo="8"
                question="SELECT * FROM employee WHERE dept_name='Comp Sci';
              In the SQL given above there is an error . Identify the error. "
                correctAnswer="'Comp Sci'"
                v1="Dept_name"
                v2="Employee"
                v3="'Comp Sci'"
                v4=" From "
                counter={this.counter}
              />
              <Quize
                quizeNo="9"
                question=" In SQL the spaces at the end of the string are removed by _______ function. "
                correctAnswer="Trim"
                v1="Upper"
                v2="String"
                v3="Lower"
                v4="Trim "
                counter={this.counter}
              />
              <Quize
                quizeNo="10"
                question="_____ operator is used for appending two strings. "
                correctAnswer="||"
                v1=" &"
                v2="%"
                v3="||"
                v4=" _"
                counter={this.counter}
              />
              <h1>Git quiz</h1>
              <Quize
                quizeNo="1"
                question="What's the git command that downloads your repository from GitHub to your computer?

              "
                correctAnswer="git clone
              "
                v1="git push "
                v2="git fork
              "
                v3="git clone
               "
                v4="git commit
              "
                counter={this.counter}
              />
              <Quize
                quizeNo="2"
                question="How do you create a copy of a lab under your own GitHub account so that you can solve the lab?

              "
                correctAnswer="Forking it via the GitHub interface.
              "
                v1="Forking it via the GitHub interface.
              "
                v2="git fork
              "
                v3="git clone
              "
                v4=" git pull-request
              "
                counter={this.counter}
              />
              <Quize
                quizeNo="3"
                question=" What's the opposite of git clone, instead of downloading your code from GitHub, uploads your changes and code back to GitHub?

               "
                correctAnswer="git push
              "
                v1="git push
              "
                v2="git add
              "
                v3="git upload
              "
                v4="git status
              "
                counter={this.counter}
              />
              <Quize
                quizeNo="4"
                question="How do you check the state of your local git repository since your last commit?

              "
                correctAnswer="git status
              "
                v1="git check
              "
                v2="git status
              "
                v3="git commit
              "
                v4=" git diff
              "
                counter={this.counter}
              />
              <Quize
                quizeNo="5"
                question="How do you stage files for a commit?

               "
                correctAnswer="git add
              "
                v1="git stage
              "
                v2="git commit
              "
                v3="git add
              "
                v4="git reset
              "
                counter={this.counter}
              />
              <Quize
                quizeNo="6"
                question=" How do you save the current state of your code into the git version control?

              "
                correctAnswer="By committing the staged changes with git commit
              "
                v1="By committing the staged changes with git commit
              "
                v2="By adding all changes and staging them with git stage
              "
                v3="By adding all changes and staging them with git add
              "
                v4="By creating a new commit with git init
              "
                counter={this.counter}
              />
              <Quize
                quizeNo="7"
                question=" "
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=" "
                counter={this.counter}
              />
              <Quize
                quizeNo="8"
                question="What's a shortcut to staging all the changes you have?

              "
                correctAnswer="git add .
              "
                v1="git commit add .
              "
                v2="git commit .
              "
                v3="git push -am 'Message'
              "
                v4="git add .
              "
              />
              <Quize
                quizeNo="9"
                question="How do you supply a commit message to a commit?

              "
                correctAnswer=""
                v1="git message 'I'm coding'
              "
                v2="git add 'I'm coding'
              "
                v3="git commit 'I'm coding'
              "
                v4="git commit -m 'I'm coding'
              "
                counter={this.counter}
              />
              <Quize
                quizeNo="10"
                question="How do you submit a solution to Learn? "
                correctAnswer=""
                v1="git pull-request
              "
                v2="git submit
              "
                v3="learn submit
              "
                v4="git commit -am 'Done with Lab'
              "
              />
            </div>
            <div className="col-4 d-none d-sm-block">
              <Link to="/python_quize_tests">Python Quize Tests</Link>
              <ScoreCard count={this.state.count} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PythonMCQ;
