import React, { Component } from "react";
import HeaderBannerSection from "../../HeaderBannerSection";
import Quize from "./quize";
import ScoreCard from "./scoreCard";
class PythonQuize extends Component {
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
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
               <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
                <Quize
                quizeNo=""
                question=""
                correctAnswer=""
                v1=""
                v2=""
                v3=""
                v4=""
                counter={this.counter}
              />
            </div>
            <div className="col-4 d-none d-sm-block">
              <ScoreCard count={this.state.count} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PythonQuize;
