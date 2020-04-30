import React, { Component } from "react";
import RightSideSection from "../../../right_section/RightSideSection";
import ProgramCard from "./ProgramCard";
import RecommendPost from "../../../right_section/RecommendPost";
class PythonPgramQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluids ">
          <div className="row">
            <div className="col">
              <div className="card bg-success">
                <div className="card-body p-2">
                  <h1 className="card-title text-light display-5">
                    Python Programming Examples Question
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-none d-sm-block mt-4">
              <div className="card bg-primary">
                <div className="card-body text-light p-2 m-1"
                style={{
                  backgroundColor: "blue",   
                      }}>
                  <h3>Python Road Map</h3>
                </div>
              </div>
              <ul class="list-group list-group-flush">
                <li className="list-group-item">Python Introduction</li>
                <li className="list-group-item">Variable</li>
                <li className="list-group-item">Keywords and Identifiers</li>
                <li className="list-group-item">Data Type</li>
                <li className="list-group-item">Python Flow Control</li>
                <li className="list-group-item">If statement</li>
                <li className="list-group-item">If-Else</li>
                <li className="list-group-item">Nested if</li>
                <li className="list-group-item">For Loop</li>
                <li className="list-group-item">While Loop</li>
                <li className="list-group-item">Break</li>
                <li className="list-group-item">Continue</li>
                <li className="list-group-item">Pass</li>
                <li className="list-group-item">Python Function</li>
                <li className="list-group-item">Python Recursion</li>
                <li className="list-group-item">Python OOPs</li>
                <li className="list-group-item">Class & Object</li>
                <li className="list-group-item">Python Constructors</li>
              </ul>
            </div>
            <div className="col-md-6 mt-3 pt-3 bg-light">
              <div className="mb-3">
                <h5 className="mb-2" style={{ color: "#072C71" }}>
                  Basic Python Programming examples 
                </h5>
                <ProgramCard
                  heading="Python Program to Print Hello world!"
                  language="Python"
code={`# This program prints Hello, world!

print('Hello, world!')
                  
Output:-

Hello, world!`}
                />

                <ProgramCard
                  heading="Python program to do arithmetical operations"
                  language="Python"
code={`# Store input numbers:  
num1 = input('Enter first number: ')  
num2 = input('Enter second number: ')  
  
# Add two numbers  
sum = float(num1) + float(num2)  

# Subtract two numbers  
min = float(num1) - float(num2) 

# Multiply two numbers  
mul = float(num1) * float(num2)  

#Divide two numbers  
div = float(num1) / float(num2)  

# Display the sum  
print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))  
  
# Display the subtraction  
print('The subtraction of {0} and {1} is {2}'.format(num1, num2, min)) 

# Display the multiplication  
print('The multiplication of {0} and {1} is {2}'.format(num1, num2, mul))  

# Display the division  
print('The division of {0} and {1} is {2}'.format(num1, num2, div))  
    
`}
                />

                <ProgramCard
                  heading="Python program to find the area of a triangle"
                  language="Python"
code={`# Three sides of the triangle is a, b and c:  
a = float(input('Enter first side: '))  
b = float(input('Enter second side: '))  
c = float(input('Enter third side: '))  
  
# calculate the semi-perimeter  
s = (a + b + c) / 2  
  
# calculate the area  
area = (s*(s-a)*(s-b)*(s-c)) ** 0.5  
print('The area of the triangle is %0.2f' %area)   `}
                />
                <ProgramCard
                  heading="Python program to solve quadratic equation"
                  language="Python"
code={`# import complex math module  
import cmath  
a = float(input('Enter a: '))  
b = float(input('Enter b: '))  
c = float(input('Enter c: '))  
  
# calculate the discriminant  
d = (b**2) - (4*a*c)  
  
# find two solutions  
sol1 = (-b-cmath.sqrt(d))/(2*a)  
sol2 = (-b+cmath.sqrt(d))/(2*a)  
print('The solution are {0} and {1}'.format(sol1,sol2))   `}
                />
                <ProgramCard
                  heading="Python program to swap two variables"
                  language="Python"
code={`# Python swap program   
x = input('Enter value of x: ')  
y = input('Enter value of y: ')  
  
# create a temporary variable and swap the values  
temp = x  
x = y  
y = temp  
  
print('The value of x after swapping: {}'.format(x))  
print('The value of y after swapping: {}'.format(y))  `}
                />
                <ProgramCard
                  heading="Python program to generate a random number"
                  language="Python"
code={`import random  
print(random.randint(100,500))  `}
                />
                <ProgramCard
                  heading="Python program to convert kilometers to miles"
                  language="Python"
code={`# Collect input from the user  
kilometers = float(input('How many kilometers?: '))  
# conversion factor  
conv_fac = 0.621371  
# calculate miles  
miles = kilometers * conv_fac  
print('%0.3f kilometers is equal to %0.3f miles' %(kilometers,miles))  `}
                />
                <ProgramCard
                  heading="Python program to convert Celsius to Fahrenheit"
                  language="Python"
code={`# Collect input from the user  
celsius = float(input('Enter temperature in Celsius: '))  
  
# calculate temperature in Fahrenheit  
fahrenheit = (celsius * 1.8) + 32  
print('%0.1f  Celsius is equal to %0.1f degree Fahrenheit'%(celsius,fahrenheit))  `}
                />
                <ProgramCard
                  heading="Python program to display calendar"
                  language="Python"
code={`import calendar  
# Enter the month and year  
yy = int(input("Enter year: "))  
mm = int(input("Enter month: "))  
  
# display the calendar  
print(calendar.month(yy,mm))  `}
                />

              </div>

              <div className="mb-3">
                <h5 className="mb-2" style={{ color: "#072C71" }}>
                Python programs with conditions and loops

                </h5>

                <ProgramCard
                  heading="Python Program to Check if a Number is Positive, Negative or Zero"
                  language="Python"
code={`num = float(input("Enter a number: "))  
  
if num > 0:  
 print("{0} is a positive number".format(num))  
elif num == 0:  
   print("{0} is zero".format(num))   
else:  
   print("{0} is negative number".format(num))   `}
                />
                <ProgramCard
                  heading="Python Program for factorial of a number"
                  language="Python"
code={`num = int(input("Enter a number: "))  
factorial = 1  
if num < 0:  
   print("Sorry, factorial does not exist for negative numbers")  
elif num == 0:  
   print("The factorial of 0 is 1")  
else:  
   for i in range(1,num + 1):  
       factorial = factorial*i  
   print("The factorial of",num,"is",factorial)  `}
                />
               
                <ProgramCard
                  heading="Python Program to Check whether Year is a Leap Year or not"
                  language="Python"
code={`year = int(input("Enter a year: "))  
if (year % 4) == 0:  
   if (year % 100) == 0:  
       if (year % 400) == 0:  
           print("{0} is a leap year".format(year))  
       else:  
           print("{0} is not a leap year".format(year))  
   else:  
       print("{0} is a leap year".format(year))  
else:  
   print("{0} is not a leap year".format(year))  `}
                />
                <ProgramCard
                  heading="Python Program to Check If a number is Prime or not"
                  language="Python"
code={`num = int(input("Enter a number: "))  
  
if num > 1:  
   for i in range(2,num):  
       if (num % i) == 0:  
           print(num,"is not a prime number")  
           print(i,"times",num//i,"is",num)  
           break  
   else:  
       print(num,"is a prime number")  
         
else:  
   print(num,"is not a prime number")  `}
                />
                <ProgramCard
                  heading="Python Program to Check If number is Even or Odd"
                  language="Python"
code={`num = int(input("Enter a number: "))  
if (num % 2) == 0:  
   print("{0} is Even number".format(num))  
else:  
   print("{0} is Odd number".format(num))`}
                />
                 <ProgramCard
                  heading="Python Program to Print all Prime Numbers between an Interval"
                  language="Python"
code={`#Take the input from the user:   
lower = int(input("Enter lower range: "))  
upper = int(input("Enter upper range: "))  
  
for num in range(lower,upper + 1):  
   if num > 1:  
       for i in range(2,num):  
           if (num % i) == 0:  
               break  
       else:  
           print(num)  `}
                />
                 <ProgramCard
                  heading="Python Program to Display the multiplication Table"
                  language="Python"
code={`num = int(input("Show the multiplication table of? "))  
# using for loop to iterate multiplication 10 times   
for i in range(1,11):  
   print(num,'x',i,'=',num*i)  `}
                />
                 <ProgramCard
                  heading="Python Program to Print the Fibonacci sequence
                  "
                  language="Python"
code={`nterms = int(input("How many terms you want? "))  
# first two terms  
n1 = 0  
n2 = 1  
count = 2  
# check if the number of terms is valid  
if nterms <= 0:  
   print("Plese enter a positive integer")  
elif nterms == 1:  
   print("Fibonacci sequence:")  
   print(n1)  
else:  
   print("Fibonacci sequence:")  
   print(n1,",",n2,end=', ')  
   while count < nterms:  
       nth = n1 + n2  
       print(nth,end=' , ')  
       # update values  
       n1 = n2  
       n2 = nth  
       count += 1  `}
                />
                 <ProgramCard
                  heading="Python Program to Check Armstrong Number"
                  language="Python"
code={` num = int(input("Enter a number: "))  
sum = 0  
temp = num  
  
while temp > 0:  
   digit = temp % 10  
   sum += digit ** 3  
   temp //= 10  
  
if num == sum:  
   print(num,"is an Armstrong number")  
else:  
   print(num,"is not an Armstrong number")  `}
                />
                 <ProgramCard
                  heading="Python Program to Find Armstrong Number in an Interval"
                  language="Python"
code={`lower = int(input("Enter lower range: "))  
upper = int(input("Enter upper range: "))  
  
for num in range(lower,upper + 1):  
   sum = 0  
   temp = num  
   while temp > 0:  
       digit = temp % 10  
       sum += digit ** 3  
       temp //= 10  
       if num == sum:  
            print(num)  `}
                />
                 <ProgramCard
                  heading="Python Program to Find the Sum of Natural Numbers
                  "
                  language="Python"
code={`num = int(input("Enter a number: "))  
  
if num < 0:  
   print("Enter a positive number")  
else:  
   sum = 0  
   # use while loop to iterate un till zero  
   while(num > 0):  
       sum += num  
       num -= 1  
   print("The sum is",sum)  `}
                />
        
              </div>

              <div className="mb-3">
                <h5 className="mb-2" style={{ color: "#072C71" }}>
                Python Function Programs
                </h5>
                <ProgramCard
                  heading="Python Program to Find LCM"
                  language="Python"
code={`def lcm(x, y):  
if x > y:  
    greater = x  
else:  
    greater = y  
while(True):  
    if((greater % x == 0) and (greater % y == 0)):  
        lcm = greater  
        break  
    greater += 1  
return lcm  


num1 = int(input("Enter first number: "))  
num2 = int(input("Enter second number: "))  
print("The L.C.M. of", num1,"and", num2,"is", lcm(num1, num2))  `}
                />
                 <ProgramCard
                  heading="Python Program to Find HCF"
                  language="Python"
code={`def hcf(x, y):  
if x > y:  
    smaller = y  
else:  
    smaller = x  
for i in range(1,smaller + 1):  
    if((x % i == 0) and (y % i == 0)):  
        hcf = i  
return hcf  

num1 = int(input("Enter first number: "))  
num2 = int(input("Enter second number: "))  
print("The H.C.F. of", num1,"and", num2,"is", hcf(num1, num2))  
`}
                />
                 <ProgramCard
                  heading="Python Program to Convert Decimal to Binary, Octal and Hexadecimal"
                  language="Python"
code={`dec = int(input("Enter a decimal number: "))  
  
print(bin(dec),"in binary.")  
print(oct(dec),"in octal.")  
print(hex(dec),"in hexadecimal."  `}
                />
                 <ProgramCard
                  heading="Python Program To Find ASCII value of a character"
                  language="Python"
code={`c = input("Enter a character: ")  
  
print("The ASCII value of '" + c + "' is",ord(c))  `}
                />
                 <ProgramCard
                  heading="Python Program to Make a Simple Calculator"
                  language="Python"
code={`# define functions  
def add(x, y):  
   """This function adds two numbers"" 
   return x + y 
def subtract(x, y): 
   """This function subtracts two numbers""" 
   return x - y 
def multiply(x, y): 
   """This function multiplies two numbers""" 
   return x * y 
def divide(x, y): 
   """This function divides two numbers"""  
   return x / y  
# take input from the user  
print("Select operation.")  
print("1.Add")  
print("2.Subtract")  
print("3.Multiply")  
print("4.Divide")  
  
choice = input("Enter choice(1/2/3/4):")  
  
num1 = int(input("Enter first number: "))  
num2 = int(input("Enter second number: "))  
  
if choice == '1':  
   print(num1,"+",num2,"=", add(num1,num2))  
  
elif choice == '2':  
   print(num1,"-",num2,"=", subtract(num1,num2))  
  
elif choice == '3':  
   print(num1,"*",num2,"=", multiply(num1,num2))  
elif choice == '4':  
   print(num1,"/",num2,"=", divide(num1,num2))  
else:  
   print("Invalid input")  `}
                />
                 <ProgramCard
                  heading="Python Program to Display Calendar"
                  language="Python"
code={`# First import the calendar module  
import calendar  
# ask of month and year  
yy = int(input("Enter year: "))  
mm = int(input("Enter month: "))  
# display the calendar  
print(calendar.month(yy,mm))  `}
                />
                 <ProgramCard
                  heading="Python Program to Display Fibonacci Sequence Using Recursion"
                  language="Python"
code={`def recur_fibo(n):  
if n <= 1:  
    return n  
else:  
    return(recur_fibo(n-1) + recur_fibo(n-2))  
# take input from the user  
nterms = int(input("How many terms? "))  
# check if the number of terms is valid  
if nterms <= 0:  
print("Plese enter a positive integer")  
else:  
print("Fibonacci sequence:")  
for i in range(nterms):  
    print(recur_fibo(i))  `}
                />
                 <ProgramCard
                  heading="Python Program to Find Factorial of Number Using Recursion"
                  language="Python"
code={`def recur_factorial(n):  
if n == 1:  
    return n  
else:  
    return n*recur_factorial(n-1)  
# take input from the user  
num = int(input("Enter a number: "))  
# check is the number is negative  
if num < 0:  
print("Sorry, factorial does not exist for negative numbers")  
elif num == 0:  
print("The factorial of 0 is 1")  
else:  
print("The factorial of",num,"is",recur_factorial(num))  `}
                />
               
                </div>

              <div className="mb-3">
                <h5 className="mb-2" style={{ color: "#072C71" }}>
                Python Native Data Type Programs
                </h5>
                <ProgramCard
                  heading="Python Program to Add Two Matrices"
                  language="Python"
code={`X = [[1,2,3],  
[4,5,6],  
[7,8,9]]  

Y = [[10,11,12],  
[13,14,15],  
[16,17,18]]  

Result = [[0,0,0],  
         [0,0,0],  
         [0,0,0]]  
# iterate through rows  
for i in range(len(X)):  
# iterate through columns  
for j in range(len(X[0])):  
result[i][j] = X[i][j] + Y[i][j]  
for r in result:  
print(r)  
`}
                />
                <ProgramCard
                  heading="Python Program to Multiply Two Matrices"
                  language="Python"
code={`X = [[1,2,3],  
[4,5,6],  
[7,8,9]]  

Y = [[10,11,12],  
[13,14,15],  
[16,17,18]]  

Result = [[0,0,0],  
        [0,0,0],  
       [0,0,0]]  

# iterate through rows of X  
for i in range(len(X)):  
for j in range(len(Y[0])):  
for k in range(len(Y)):  
    result[i][j] += X[i][k] * Y[k][j]  
for r in result:  
print(r)  `}
                />
                <ProgramCard
                  heading="Python Program to Transpose a Matrix"
                  language="Python"
code={`X = [[1,2],  
[4,5],  
[7,8]]  

Result = [[0,0,0],  
       [0,0,0]]  

# iterate through rows  
for i in range(len(X)):  
for j in range(len(X[0])):  
 result[j][i] = X[i][j]  

for r in result:  
print(r)  `}
                />
                <ProgramCard
                  heading="Python Program to Sort Words in Alphabetic Order"
                  language="Python"
code={`my_str = input("Enter a string: ")  
# breakdown the string into a list of words  
words = my_str.split()  
# sort the list  
words.sort()  
# display the sorted words  
for word in words:  
   print(word)  `}
                />
                <ProgramCard
                  heading="Python Program to Remove Punctuation From a String"
                  language="Python"
code={`# define punctuation  
punctuation = '''''!()-[]{};:'"\,<>./?@#$%^&*_~'''  
# take input from the user  
my_str = input("Enter a string: ")  
# remove punctuation from the string  
no_punct = ""  
for char in my_str:  
   if char not in punctuation:  
       no_punct = no_punct + char  
# display the unpunctuated string  
print(no_punct)  `}
                />
              
             
              </div>

              <div className="mb-3">
                <h5 className="mb-2" style={{ color: "#072C71" }}>
                  Python Programming Examples on Lists
                </h5>
                <ProgramCard
                  heading="Python Program to Find the Largest Number in a List"
                  language="Python"
code={`a=[]
n=int(input("Enter number of elements:"))
for i in range(1,n+1):
    b=int(input("Enter element:"))
    a.append(b)
a.sort()
print("Largest element is:",a[n-1])`}
                />
                <ProgramCard
                  heading="Python Program to Find the Second Largest Number in a List"
                  language="Python"
code={`a=[]
n=int(input("Enter number of elements:"))
for i in range(1,n+1):
    b=int(input("Enter element:"))
    a.append(b)
a.sort()
print("Second largest element is:",a[n-2])`}
                />
                <ProgramCard
                  heading="Python Program to Put Even and Odd elements in a List into Two Different Lists"
                  language="Python"
code={`a=[]
n=int(input("Enter number of elements:"))
for i in range(1,n+1):
    b=int(input("Enter element:"))
    a.append(b)
even=[]
odd=[]
for j in a:
    if(j%2==0):
        even.append(j)
    else:
        odd.append(j)
print("The even list",even)
print("The odd list",odd)`}
                />
                <ProgramCard
                  heading="Python Program to Merge Two Lists and Sort it"
                  language="Python"
code={`a=[]
c=[]
n1=int(input("Enter number of elements:"))
for i in range(1,n1+1):
    b=int(input("Enter element:"))
    a.append(b)
n2=int(input("Enter number of elements:"))
for i in range(1,n2+1):
    d=int(input("Enter element:"))
    c.append(d)
new=a+c
new.sort()
print("Sorted list is:",new)`}
                />
                <ProgramCard
                  heading="Python Program to Sort the List According to the Second Element in Sublist"
                  language="Python"
code={`a=[['A',34],['B',21],['C',26]]
for i in range(0,len(a)):
    for j in range(0,len(a)-i-1):
        if(a[j][1]>a[j+1][1]):
            temp=a[j]
            a[j]=a[j+1]
            a[j+1]=temp
 
print(a)`}
                />
                <ProgramCard
                  heading="Python Program to Find the Second Largest Number in a List Using Bubble Sort"
                  language="Python"
code={`a=[]
n=int(input("Enter number of elements:"))
for i in range(1,n+1):
    b=int(input("Enter element:"))
    a.append(b)
for i in range(0,len(a)):
    for j in range(0,len(a)-i-1):
        if(a[j]>a[j+1]):
            temp=a[j]
            a[j]=a[j+1]
            a[j+1]=temp 
print('Second largest number is:',a[n-2])`}
                />
                <ProgramCard
                  heading="Python Program to Sort a List According to the Length of the Elements"
                  language="Python"
code={`a=[]
n=int(input("Enter number of elements:"))
for i in range(1,n+1):
    b=input("Enter element:")
    a.append(b)
a.sort(key=len)
print(a)`}
                />
                <ProgramCard
                  heading="Python Program to Find the Union of two Lists"
                  language="Python"
code={`l1 = []
num1 = int(input('Enter size of list 1: '))
for n in range(num1):
    numbers1 = int(input('Enter any number:'))
    l1.append(numbers1)
 
l2 = []
num2 = int(input('Enter size of list 2:'))
for n in range(num2):
    numbers2 = int(input('Enter any number:'))
    l2.append(numbers2)
 
union = list(set().union(l1,l2))
 
print('The Union of two lists is:',union)`}
                />
                <ProgramCard
                  heading="Python Program to Remove the Duplicate Items from a List"
                  language="Python"
code={`a=[]
n= int(input("Enter the number of elements in list:"))
for x in range(0,n):
    element=int(input("Enter element" + str(x+1) + ":"))
    a.append(element)
b = set()
unique = []
for x in a:
    if x not in b:
        unique.append(x)
        b.add(x)
print("Non-duplicate items:")
print(unique)`}
                />
                <ProgramCard
                  heading="Python Program to Read a List of Words and Return the Length of the Longest One"
                  language="Python"
code={`a=[]
n= int(input("Enter the number of elements in list:"))
for x in range(0,n):
    element=input("Enter element" + str(x+1) + ":")
    a.append(element)
max1=len(a[0])
temp=a[0]
for i in a:
    if(len(i)>max1):
       max1=len(i)
       temp=i
print("The word with the longest length is:")
print(temp)
`}
                />
                <ProgramCard
                  heading="Python Program to Remove the ith Occurrence of the Given Word in a List where Words can Repeat"
                  language="Python"
code={`a=[]
n= int(input("Enter the number of elements in list:"))
for x in range(0,n):
    element=input("Enter element" + str(x+1) + ":")
    a.append(element)
print(a)
c=[]
count=0
b=input("Enter word to remove: ")
n=int(input("Enter the occurrence to remove: "))
for i in a:
    if(i==b):
        count=count+1
        if(count!=n):
            c.append(i)
    else:
        c.append(i)
if(count==0):
    print("Item not found ")
else: 
    print("The number of repetitions is: ",count)
    print("Updated list is: ",c)
    print("The distinct elements are: ",set(a))`}
                />
                <ProgramCard
                  heading="Python Program to Remove All Tuples in a List of Tuples with the USN Outside the Given Range"
                  language="Python"
code={`y=[('a','12CS039'),('b','12CS320'),('c','12CS055'),('d','12CS100')]
low=int(input("Enter lower roll number (starting with 12CS):"))
up=int(input("Enter upper roll number (starting with 12CS):"))
l='12CS0'+str(low)
u='12CS'+str(up)
p=[x for x in y if x[1]>l and x[1]<u]
print(p)`}
                />
                
              </div>
              <div className="mb-3">
                <h5 className="mb-2" style={{ color: "#072C71" }}>
                Python Circular Linked List Programs
                </h5>
                <ProgramCard
                  heading="Python program to create a Circular Linked List of N nodes and count the number of nodes"
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the list. It has two properties data and next which will point to the next node.
Define another class for creating the circular linked list, and it has two nodes: head and tail. It has two methods: add() and display() .
add() will add the node to the list:
It first checks whether size is null or head is null; then it will insert the node as the head.
Both head and tail will point to a newly added node.
If the head is not null, the new node will be the new tail, and the new tail will point to the head as it is a circular linked list.
a. countNodes() will count the number of nodes present in the list.

Define new node current which will point to the head node.
Traverse through the list to count the nodes by making the current node to point to next node in the list till current points to head again.

PROGRAM:
#Represents the node of the list.    
class Node:    
    def __init__(self,data):    
        self.data = data;    
        self.next = None;    
     
class CreateList:    
    #Declaring head and tail pointer as null.    
    def __init__(self):    
        self.count = 0;    
        self.head = Node(None);    
        self.tail = Node(None);    
        self.head.next = self.tail;    
        self.tail.next = self.head;    
        
    #This function will add the new node at the end of the list.    
    def add(self,data):    
        newNode = Node(data);    
        #Checks if the list is empty.    
        if self.head.data is None:    
            #If list is empty, both head and tail would point to new node.    
            self.head = newNode;    
            self.tail = newNode;    
            newNode.next = self.head;    
        else:    
            #tail will point to new node.    
            self.tail.next = newNode;    
            #New node will become new tail.    
            self.tail = newNode;    
            #Since, it is circular linked list tail will point to head.    
            self.tail.next = self.head;    
                
    #This function will count the nodes of circular linked list    
    def countNodes(self):    
        current = self.head;    
        self.count=self.count+1;    
        while(current.next != self.head):    
            self.count=self.count+1;    
            current = current.next;    
        print("Count of nodes present in circular linked list: "),    
        print(self.count);    
        
     
class CircularLinkedList:    
    cl = CreateList();    
    #Adds data to the list    
    cl.add(1);    
    cl.add(2);    
    cl.add(4);    
    cl.add(1);    
    cl.add(2);    
    cl.add(3);    
    #Displays all the nodes present in the list    
    cl.countNodes();    

Output:

Count of nodes present in circular linked list:
6`}
                />
                <ProgramCard
                  heading="Python program to create a Circular Linked List of n nodes and display it in reverse order"
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the list. It has two properties data and next which will point to the next node.
Define another class for creating the circular linked list, and it has two nodes: head and tail. It has two methods: add(), display() and reverse().
add() will add a node to the list:
It first checks whether the head is null, then it will insert the node as the head.
Both head and tail will point to the newly added node.
If the head is not null, the new node will be the new tail, and new tail will point to head as it is a circular linked list.
a. display() will show all the nodes present in the list.

Define a new node 'current' that will point to the head.
Print current.data till current will points to head again.
Current will point to the next node in the list in each iteration.
a. reverse() will print the circular linked list in reverse order.


This method checks whether the next node to current is head which implies that, current is pointing to tail, then it will print the data of the tail node.
Recursively call reverse() by considering node next to current node and prints out all the nodes in reverse order starting from the tail.

PROGRAM:
#Represents the node of list.    
class Node:    
    def __init__(self,data):    
      self.data = data;    
      self.next = None;    
     
class CreateList:    
    #Declaring head and tail pointer as null.    
    def __init__(self):    
      self.head = Node(None);    
      self.tail = Node(None);    
      self.head.next = self.tail;    
      self.tail.next = self.head;    
          
    #This function will add the new node at the end of the list.    
    def add(self,data):    
      newNode = Node(data);    
      #Checks if the list is empty.    
      if self.head.data is None:    
        #If list is empty, both head and tail would point to new node.    
        self.head = newNode;    
        self.tail = newNode;    
        newNode.next = self.head;    
      else:    
        #tail will point to new node.    
        self.tail.next = newNode;    
        #New node will become new tail.    
        self.tail = newNode;    
        #Since, it is circular linked list tail will point to head.    
        self.tail.next = self.head;    
     
    #Displays all the nodes in the list    
    def display(self):    
        current = self.head;    
        if self.head is None:    
          print("List is empty");    
          return;    
        else:    
            #Prints each node by incrementing pointer.    
            print(current.data),    
            while(current.next != self.head):    
                current = current.next;    
                print(current.data),    
            
    #Reverse the order of the nodes present in the list.    
    def reverse(self, current):    
        #Checks if the next node is head, if yes then prints it.    
        if(current.next == self.head):    
            print(current.data),    
            return;    
        #Recursively calls the reverse function    
        self.reverse(current.next);    
        print(current.data),    
        
        
class CircularLinkedList:    
    cl = CreateList();    
    #Adds data to the list    
    cl.add(1);    
    cl.add(2);    
    cl.add(3);    
    cl.add(4);    
    cl.add(5);    
    cl.add(6);    
    print("Original List: ");    
    cl.display();    
    print("\nReversed List: ");    
    #Print reversed list    
    cl.reverse(cl.head);    

Output:

Original List: 
1 2 3 4 5 6
Reversed List: 
6 5 4 3 2 1`}
                />
                <ProgramCard
                  heading="Python program to create and display a Circular Linked List"
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the list. It has two properties data and next which will point to the next node.
Define another class for creating the circular linked list, and it has two nodes: head and tail. It has two methods: add() and display() .
add() will add the node to the list:
It first checks whether the head is null, then it will insert the node as the head.
Both head and tail will point to the newly added node.
If the head is not null, the new node will be the new tail, and the new tail will point to the head as it is a circular linked list.
a. display() will show all the nodes present in the list.

Define a new node 'current' that will point to the head.
Print current.data till current will points to head
Current will point to the next node in the list in each iteration.

PROGRAM:
#Represents the node of list.    
class Node:    
  def __init__(self,data):    
    self.data = data;    
    self.next = None;    
     
class CreateList:    
  #Declaring head and tail pointer as null.    
  def __init__(self):    
    self.head = Node(None);    
    self.tail = Node(None);    
    self.head.next = self.tail;    
    self.tail.next = self.head;    
        
  #This function will add the new node at the end of the list.    
  def add(self,data):    
    newNode = Node(data);    
    #Checks if the list is empty.    
    if self.head.data is None:    
      #If list is empty, both head and tail would point to new node.    
      self.head = newNode;    
      self.tail = newNode;    
      newNode.next = self.head;    
    else:    
      #tail will point to new node.    
      self.tail.next = newNode;    
      #New node will become new tail.    
      self.tail = newNode;    
      #Since, it is circular linked list tail will point to head.    
      self.tail.next = self.head;    
     
  #Displays all the nodes in the list    
  def display(self):    
    current = self.head;    
    if self.head is None:    
      print("List is empty");    
      return;    
    else:    
        print("Nodes of the circular linked list: ");    
        #Prints each node by incrementing pointer.    
        print(current.data),    
        while(current.next != self.head):    
            current = current.next;    
            print(current.data),    
     
     
class CircularLinkedList:    
  cl = CreateList();    
  #Adds data to the list    
  cl.add(1);    
  cl.add(2);    
  cl.add(3);    
  cl.add(4);    
  #Displays all the nodes present in the list    
  cl.display();    

Output:

Nodes of the circular linked list: 
1 2 3 4`}
                />
                <ProgramCard
                  heading="Python program to delete a node from the beginning of the Circular Linked List"
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the list. It has two properties data and next which will point to the next node.
Define another class for creating the circular linked list, and it has two nodes: head and tail. It has two methods: deleteStart() and display() .
deleteStart() will delete the node from the beginning of the list:
It first checks whether the head is null (empty list) then, it will return from the function as there is no node present in the list.
If the list is not empty, it will check whether the list has only one node.
If the list has only one node, it will set both head and tail to null.
If the list has more than one node then, the head will point to the next node in the list that is, we will remove the previous head node and tail will point to the new head.
a. display() will show all the nodes present in the list.

Define a new node 'current' that will point to the head.
Print current.data till current will points to head again.
Current will point to the next node in the list in each iteration.

PROGRAM:
#Represents the node of list.    
class Node:    
    def __init__(self,data):    
        self.data = data;    
        self.next = None;    
     
class CreateList:    
    #Declaring head and tail pointer as null.    
    def __init__(self):    
        self.head = Node(None);    
        self.tail = Node(None);    
        self.head.next = self.tail;    
        self.tail.next = self.head;    
        
    #This function will add the new node at the end of the list.    
    def add(self,data):    
        newNode = Node(data);    
        #Checks if the list is empty.    
        if self.head.data is None:    
            #If list is empty, both head and tail would point to new node.    
            self.head = newNode;    
            self.tail = newNode;    
            newNode.next = self.head;    
        else:    
            #tail will point to new node.    
            self.tail.next = newNode;    
            #New node will become new tail.    
            self.tail = newNode;    
            #Since, it is circular linked list tail will point to head.    
            self.tail.next = self.head;    
        
    #Deletes node from the beginning of the list    
    def deleteStart(self):    
        #Checks whether list is empty    
        if(self.head == None):    
            return;    
        else:    
            #Checks whether contain only one element    
            #If not, head will point to next element in the list and tail will point to new head.    
            if(self.head != self.tail ):    
                self.head = self.head.next;    
                self.tail.next = self.head;    
            #If the list contains only one element     
            #then it will remove it and both head and tail will point to null    
            else:    
                self.head = self.tail = None;    
                
    #Displays all the nodes in the list    
    def display(self):    
        current = self.head;    
        if self.head is None:    
            print("List is empty");    
            return;    
        else:    
            #Prints each node by incrementing pointer.    
            print(current.data, end= ' ');    
            while(current.next != self.head):    
                current = current.next;    
                print(current.data,end=' ');    
            print("\n");    
     
class CircularLinkedList:    
    cl = CreateList();    
    #Adds data to the list    
    cl.add(1);    
    cl.add(2);    
    cl.add(3);    
    cl.add(4);    
    #Printing original list    
    print("Original List:");    
    cl.display();    
    while(cl.head != None):    
        cl.deleteStart();    
        #Printing updated list    
        print("Updated List:");    
        cl.display();    

Output:

Original List: 
 1 2 3 4
Updated List: 
 2 3 4
Updated List: 
 3 4
Updated List: 
 4
Updated List: 
List is empty
`}
                />
                <ProgramCard
                  heading="Python program to delete a node from the end of the Circular Linked List
                  "
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the list. It has two properties data and next which will point to the next node.
Define another class for creating the circular linked list, and it has two nodes: head and tail. It has two methods: deleteEnd() and display() .
deleteEnd() will delete the node from the end of the list:
It first checks whether the head is null (empty list) then, it will return from the function as there is no node present in the list.
If the list is not empty, it will check whether the list has only one node.
If the list has only one node, it will set both head and tail to null.
If the list has more than one node then, iterate through the loop till current.next!= tail.
Now, current will point to the node previous to tail. Make current as new tail and tail will point to head thus, deletes the node from last.
a. display() will show all the nodes present in the list.

Define a new node 'current' that will point to the head.
Print current.data till current will points to head again.
Current will point to the next node in the list in each iteration.

PROGRAM:
#Represents the node of list.    
class Node:    
    def __init__(self,data):    
        self.data = data;    
        self.next = None;    
     
class CreateList:    
    #Declaring head and tail pointer as null.    
    def __init__(self):    
        self.head = Node(None);    
        self.tail = Node(None);    
        self.head.next = self.tail;    
        self.tail.next = self.head;    
        
    #This function will add the new node at the end of the list.    
    def add(self,data):    
        newNode = Node(data);    
        #Checks if the list is empty.    
        if self.head.data is None:    
            #If list is empty, both head and tail would point to new node.    
            self.head = newNode;    
            self.tail = newNode;    
            newNode.next = self.head;    
        else:    
            #tail will point to new node.    
            self.tail.next = newNode;    
            #New node will become new tail.    
            self.tail = newNode;    
            #Since, it is circular linked list tail will point to head.    
            self.tail.next = self.head;    
        
    #Deletes node from end of the list    
    def deleteEnd(self):    
        #Checks whether list is empty    
        if(self.head == None):    
            return;    
        else:    
            #Checks whether contain only one element    
            if(self.head != self.tail ):    
                current = self.head;    
                #Loop will iterate till the second last element as current.next is pointing to tail    
                while(current.next != self.tail):    
                    current = current.next;    
                #Second last element will be new tail    
                self.tail = current;    
                #Tail will point to head as it is a circular linked list    
                self.tail.next = self.head;    
            #If the list contains only one element     
            #Then it will remove it and both head and tail will point to null    
            else:    
                self.head = self.tail = None;    
                
    #Displays all the nodes in the list    
    def display(self):    
        current = self.head;    
        if self.head is None:    
            print("List is empty");    
            return;    
        else:    
            #Prints each node by incrementing pointer.    
            print(current.data),    
            while(current.next != self.head):    
                current = current.next;    
                print(current.data),    
            print("\n");    
     
class CircularLinkedList:    
    cl = CreateList();    
    #Adds data to the list    
    cl.add(1);    
    cl.add(2);    
    cl.add(3);    
    cl.add(4);    
    #Printing original list    
    print("Original List:");    
    cl.display();    
    while(cl.head != None):    
        cl.deleteEnd();    
        #Printing updated list    
        print("Updated List:");    
        cl.display();    

Output:

Original List: 
 1 2 3 4
Updated List: 
 1 2 3
Updated List: 
 1 2
Updated List: 
 1
Updated List: 
List is empty`}
                />
                </div>

                <div className="mb-3">
                <h5 className="mb-2" style={{ color: "#072C71" }}>
                Python Doubly Linked List Programs                </h5>
                <ProgramCard
                  heading="Python program to convert a given binary tree to doubly linked list"
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the binary tree. It will have three properties: data left, and right where the left and right represent two children of a node.
Root will represent the root of the binary tree. Head and tail node represent the head and tail of the doubly linked list.
BinaryTreeToDLL() will convert the given binary tree to the corresponding doubly linked list.
Perform inorder traversal of the binary tree by converting the left subtree first.
If the list is empty, both head and tail will point to a node.
If the list is not empty, the node will be inserted at the end of the list. Here, pointer left, and right will represent the previous and next pointer of the doubly linked list.
Now, recursively call BinaryTreeToDLL() to convert the right subtree.
a. display() will show all the nodes present in the list.

Define a new node 'current' that will point to the head.
Print current.data till current points to null.
Current will point to the next node in the list in each iteration.

PROGRAM:
#Represent a node of binary tree    
class Node:    
    def __init__(self,data):    
        self.data = data;    
        self.left = None;    
        self.right = None;    
            
class BinaryTreeToDLL:    
    def __init__(self):    
        #Represent the root of binary tree    
        self.root = None;    
        #Represent the head and tail of the doubly linked list    
        self.head = None;    
        self.tail = None;    
            
    #convertbtToDLL() will convert the given binary tree to corresponding doubly linked list    
    def convertbtToDLL(self, node):    
        #Checks whether node is None    
        if(node == None):    
            return;    
                
        #Convert left subtree to doubly linked list    
        self.convertbtToDLL(node.left);    
            
        #If list is empty, add node as head of the list    
        if(self.head == None):    
            #Both head and tail will point to node    
            self.head = self.tail = node;    
        #Otherwise, add node to the end of the list    
        else:    
            #node will be added after tail such that tail's right will point to node    
            self.tail.right = node;    
            #node's left will point to tail    
            node.left = self.tail;    
            #node will become new tail    
            self.tail = node;    
                
        #Convert right subtree to doubly linked list    
        self.convertbtToDLL(node.right);    
        
    #display() will print out the nodes of the list    
    def display(self):    
        #Node current will point to head    
        current = self.head;    
        if(self.head == None):    
            print("List is empty");    
            return;    
        print("Nodes of generated doubly linked list: ");    
        while(current != None):    
            #Prints each node by incrementing pointer.    
            print(current.data),    
            current = current.right;    
            
           
bt = BinaryTreeToDLL();    
#Add nodes to the binary tree    
bt.root = Node(1);    
bt.root.left = Node(2);    
bt.root.right = Node(3);    
bt.root.left.left = Node(4);    
bt.root.left.right = Node(5);    
bt.root.right.left = Node(6);    
bt.root.right.right = Node(7);    
     
#Converts the given binary tree to doubly linked list    
bt.convertbtToDLL(bt.root);    
     
#Displays the nodes present in the list    
bt.display();    

Output:

Nodes of generated doubly linked list: 
4 2 5 1 6 3 7 `}
                />
                <ProgramCard
                  heading="Python program to create a doubly linked list from a ternary tree"
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the ternary tree. It will have four properties: data, left, middle, right where left, middle and right represent three children of a node.
Root will represent the root of the ternary tree. Head and tail node represent the head and tail of the doubly linked list.
convertTernaryToDLL() will convert the given ternary tree to the corresponding doubly linked list.
Nodes left, middle and right represent the child of the given node.
If the node is not null, then the node will be inserted into the list.
If the list is empty, both head and tail will point to a node.
If the list is not empty then, the node will be inserted at the end of the list. Here, pointer left, and right will represent the previous and next pointer of the doubly linked list. The middle will not point to anything hence, simply set it to null.
When a node is successfully added into the list then, call convertTernaryToDLL() recursively to add a left, middle and right child of given node to the list.
a. displayDLL() will show all the nodes present in the list.

Define a new node 'current' that will point to the head.
Print current.data till current points to null.
Current will point to the next node in the list in each iteration.

PROGRAM:
#Represent a node of ternary tree    
class Node:    
    def __init__(self,data):    
        self.data = data;    
        self.left = None;    
        self.middle = None;    
        self.right = None;    
            
class TernaryTreeToDLL:    
    def __init__(self):    
        #Represent the root of ternary tree    
        self.root = None;    
        #Represent the head and tail of the doubly linked list    
        self.head = None;    
        self.tail = None;    
            
    #convertTernaryToDLL() will convert the given ternary tree to corresponding doubly linked list    
    def convertTernaryToDLL(self, node):    
        #Checks whether node is None    
        if(node == None):    
            return;    
                
        #Keep three pointers to all three children    
        left = node.left;    
        middle = node.middle;    
        right = node.right;    
            
        #If list is empty then, add node as head of the list    
        if(self.head == None):    
            #Both head and tail will point to node    
            self.head = self.tail = node;    
            node.middle = None;    
            #head's left will point to None    
            self.head.left = None;    
            #tail's right will point to None, as it is the last node of the list    
            self.tail.right = None;    
        #Otherwise, add node to the end of the list    
        else:    
            #node will be added after tail such that tail's right will point to node    
            self.tail.right = node;    
            #node's left will point to tail    
            node.left = self.tail;    
            node.middle = None;    
            #node will become new tail    
            self.tail = node;    
            #As it is last node, tail's right will point to None    
            self.tail.right = None;    
                
        #Add left child of current node to the list    
        self.convertTernaryToDLL(left);    
        #Then, add middle child of current node to the list    
        self.convertTernaryToDLL(middle);    
        #Then, add right child of current node to the list    
        self.convertTernaryToDLL(right);    
        
    #displayDLL() will print out the nodes of the list    
    def displayDLL(self):    
        #Node current will point to head    
        current = self.head;    
        if(self.head == None):    
            print("List is empty");    
            return;    
        print("Nodes of generated doubly linked list: ");    
        while(current != None):    
            #Prints each node by incrementing pointer.    
            print(current.data),    
            current = current.right;    
                
tree = TernaryTreeToDLL();    
#Add nodes to the ternary tree    
tree.root = Node(5);    
tree.root.left = Node(10);    
tree.root.middle = Node(12);    
tree.root.right = Node(15);    
tree.root.left.left = Node(20);    
tree.root.left.middle = Node(40);    
tree.root.left.right = Node(50);    
tree.root.middle.left = Node(24);    
tree.root.middle.middle = Node(36);    
tree.root.middle.right = Node(48);    
tree.root.right.left = Node(30);    
tree.root.right.middle = Node(45);    
tree.root.right.right = Node(60);    
     
#Converts the given ternary tree to doubly linked list    
tree.convertTernaryToDLL(tree.root);    
     
#Displays the nodes present in the list    
tree.displayDLL();    

Output:

Nodes of generated doubly linked list: 
5 10 20 40 50 12 24 36 48 15 30 45 60 `}
                />
                <ProgramCard
                  heading="Python program to create a doubly linked list of n nodes and count the number of nodes"
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the list. It will have three properties: data, previous which will point to the previous node and next which will point to the next node.
Define another class for creating a doubly linked list, and it has two nodes: head and tail. Initially, head and tail will point to null.
addNode() will add node to the list:
It first checks whether the head is null, then it will insert the node as the head.
Both head and tail will point to a newly added node.
Head's previous pointer will point to null and tail?s next pointer will point to null.
If the head is not null, the new node will be inserted at the end of the list such that new node's previous pointer will point to tail.
The new node will become the new tail. Tail's next pointer will point to null.
a. countNodes() will count the number of nodes present in the list.


Define a variable counter and new node current which will point to the head node.
Traverse through the list to count the nodes by making the current node to point to next node in the list till current point to null.
Increment the counter by 1.
a. display() will show all the nodes present in the list.

Define a new node 'current' that will point to the head.
Print current.data till current points to null.
Current will point to the next node in the list in each iteration.

PROGRAM:
#Represent a node of doubly linked list    
class Node:    
    def __init__(self,data):    
        self.data = data;    
        self.previous = None;    
        self.next = None;    
            
class CountList:    
    #Represent the head and tail of the doubly linked list    
    def __init__(self):    
        self.head = None;    
        self.tail = None;    
            
    #addNode() will add a node to the list    
    def addNode(self, data):    
        #Create a new node    
        newNode = Node(data);    
            
        #If list is empty    
        if(self.head == None):    
            #Both head and tail will point to newNode    
            self.head = self.tail = newNode;    
            #head's previous will point to None    
            self.head.previous = None;    
            #tail's next will point to None, as it is the last node of the list    
            self.tail.next = None;    
        else:    
            #newNode will be added after tail such that tail's next will point to newNode    
            self.tail.next = newNode;    
            #newNode's previous will point to tail    
            newNode.previous = self.tail;    
            #newNode will become new tail    
            self.tail = newNode;    
            #As it is last node, tail's next will point to None    
            self.tail.next = None;    
                
    #countNodes() will count the nodes present in the list    
    def countNodes(self):    
        counter = 0;    
        #Node current will point to head    
        current = self.head;    
            
        while(current != None):    
            #Increment the counter by 1 for each node    
            counter = counter + 1;    
            current = current.next;    
        return counter;    
                
    #display() will print out the nodes of the list    
    def display(self):    
        #Node current will point to head    
        current = self.head;    
        if(self.head == None):    
            print("List is empty");    
            return;    
        print("Nodes of doubly linked list: ");    
        while(current != None):     
            #Prints each node by incrementing pointer.    
            print(current.data),    
            current = current.next;    
                
dList = CountList();    
#Add nodes to the list    
dList.addNode(1);    
dList.addNode(2);    
dList.addNode(3);    
dList.addNode(4);    
dList.addNode(5);    
     
#Displays the nodes present in the list    
dList.display();    
     
#Counts the nodes present in the given list    
print("\nCount of nodes present in the list: " + str(dList.countNodes()));    

Python program to create a doubly linked list of n nodes and display it in reverse orderOutput:

Nodes of doubly linked list: 
1 2 3 4 5 
Count of nodes present in the list: 5`}
                />
                <ProgramCard
                  heading="Python program to create a doubly linked list of n nodes and display it in reverse order"
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the list. It will have three properties: data, previous which will point to the previous node and next which will point to the next node.
Define another class for creating a doubly linked list, and it has two nodes: head and tail. Initially, head and tail will point to null.
addNode() will add node to the list:
It first checks whether the head is null, then it will insert the node as the head.
Both head and tail will point to a newly added node.
Head's previous pointer will point to null and tail's next pointer will point to null.
If the head is not null, the new node will be inserted at the end of the list such that new node's previous pointer will point to tail.
The new node will become the new tail. Tail's next pointer will point to null.
a. reverse() will reverse the given doubly linked list.

Define a node current which will initially point to head.
Traverse through the list by making current to point to current.next in each iteration till current points to null.
In each iteration, swap previous and next pointer of each node to reverse the direction of the list.
In the end, swap the position of head and tail.
a. display() will show all the nodes present in the list.

Define a new node 'current' that will point to the head.
Print current.data till current points to null.
Current will point to the next node in the list in each iteration.

PROGRAM:
#Represent a node of doubly linked list    
class Node:    
    def __init__(self,data):    
        self.data = data;    
        self.previous = None;    
        self.next = None;    
            
class ReverseList:    
    #Represent the head and tail of the doubly linked list    
    def __init__(self):    
        self.head = None;    
        self.tail = None;    
            
    #addNode() will add a node to the list    
    def addNode(self, data):    
        #Create a new node    
        newNode = Node(data);    
            
        #If list is empty    
        if(self.head == None):    
            #Both head and tail will point to newNode    
            self.head = self.tail = newNode;    
            #head's previous will point to None    
            self.head.previous = None;    
            #tail's next will point to None, as it is the last node of the list    
            self.tail.next = None;    
        else:    
            #newNode will be added after tail such that tail's next will point to newNode    
            self.tail.next = newNode;    
            #newNode's previous will point to tail    
            newNode.previous = self.tail;    
            #newNode will become new tail    
            self.tail = newNode;    
            #As it is last node, tail's next will point to None    
            self.tail.next = None;    
                
    #reverse() will reverse the doubly linked list    
    def reverse(self):    
        #Node current will point to head    
        current = self.head;    
            
        #Swap the previous and next pointers of each node to reverse the direction of the list    
        while(current != None):    
            temp = current.next;    
            current.next = current.previous;    
            current.previous = temp;    
            current = current.previous;    
        #Swap the head and tail pointers.    
        temp = self.head;    
        self.head = self.tail;    
        self.tail = temp;    
            
    #display() will print out the elements of the list    
    def display(self):    
        #Node current will point to head    
        current = self.head;    
        if(self.head == None):    
            print("List is empty");    
            return;    
                
        while(current != None):    
            #Prints each node by incrementing pointer.    
            print(current.data),    
            current = current.next;    
                
dList = ReverseList();    
#Add nodes to the list    
dList.addNode(1);    
dList.addNode(2);    
dList.addNode(3);    
dList.addNode(4);    
dList.addNode(5);    
     
print("Original List: ");    
dList.display();    
     
#Reverse the given list    
dList.reverse();    
     
#Displays the reversed list    
print("\nReversed List: ");    
dList.display();    

Output:

Original List: 
1 2 3 4 5 
Reversed List: 
5 4 3 2 1 `}
                />
                <ProgramCard
                  heading="Python program to create and display a doubly linked list"
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the list. It will have three properties: data, previous which will point to the previous node and next which will point to the next node.
Define another class for creating a doubly linked list, and it has two nodes: head and tail. Initially, head and tail will point to null.
addNode() will add node to the list:
It first checks whether the head is null, then it will insert the node as the head.
Both head and tail will point to a newly added node.
Head's previous pointer will point to null and tail's next pointer will point to null.
If the head is not null, the new node will be inserted at the end of the list such that new node's previous pointer will point to tail.
The new node will become the new tail. Tail's next pointer will point to null.
a. display() will show all the nodes present in the list.

Define a new node 'current' that will point to the head.
Print current.data till current points to null.
Current will point to the next node in the list in each iteration.

PROGRAM:
#Represent a node of doubly linked list    
class Node:    
    def __init__(self,data):    
        self.data = data;    
        self.previous = None;    
        self.next = None;    
            
class DoublyLinkedList:    
    #Represent the head and tail of the doubly linked list    
    def __init__(self):    
        self.head = None;    
        self.tail = None;    
            
    #addNode() will add a node to the list    
    def addNode(self, data):    
        #Create a new node    
        newNode = Node(data);    
            
        #If list is empty    
        if(self.head == None):    
            #Both head and tail will point to newNode    
            self.head = self.tail = newNode;    
            #head's previous will point to None    
            self.head.previous = None;    
            #tail's next will point to None, as it is the last node of the list    
            self.tail.next = None;    
        else:    
            #newNode will be added after tail such that tail's next will point to newNode    
            self.tail.next = newNode;    
            #newNode's previous will point to tail    
            newNode.previous = self.tail;    
            #newNode will become new tail    
            self.tail = newNode;    
            #As it is last node, tail's next will point to None    
            self.tail.next = None;    
                
    #display() will print out the nodes of the list    
    def display(self):    
        #Node current will point to head    
        current = self.head;    
        if(self.head == None):    
            print("List is empty");    
            return;    
        print("Nodes of doubly linked list: ");    
        while(current != None):     
            #Prints each node by incrementing pointer.    
            print(current.data),;    
            current = current.next;    
                
dList = DoublyLinkedList();    
#Add nodes to the list    
dList.addNode(1);    
dList.addNode(2);    
dList.addNode(3);    
dList.addNode(4);    
dList.addNode(5);    
     
#Displays the nodes present in the list    
dList.display();  

Output:

Nodes of doubly linked list: 
1 2 3 4 5`}
                />
                <ProgramCard
                  heading="Python program to delete a new node from the beginning of the doubly linked list"
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the list. It will have three properties: data, previous which will point to the previous node and next which will point to the next node.
2Define another class for creating a doubly linked list, and it has two nodes: head and tail. Initially, head and tail will point to null.
3deleteFromStart() will delete a node from the beginning of the list:
It first checks whether the head is null (empty list) then, it will return from the function as there is no node present in the list.
If the list is not empty, it will check whether the list has only one node.
If the list has only one node, it will set both head and tail to null.
If the list has more than one node then, the head will point to the next node in the list and delete the old head node.
a. display() will show all the nodes present in the list.


Define a new node 'current' that will point to the head.
Print current.data till current points to null.
Current will point to the next node in the list in each iteration.

PROGRAM:
#Represent a node of doubly linked list    
class Node:    
    def __init__(self,data):    
        self.data = data;    
        self.previous = None;    
        self.next = None;    
            
class DeleteStart:    
    #Represent the head and tail of the doubly linked list    
    def __init__(self):    
        self.head = None;    
        self.tail = None;    
            
    #addNode() will add a node to the list    
    def addNode(self, data):    
        #Create a new node    
        newNode = Node(data);    
            
        #If list is empty    
        if(self.head == None):    
            #Both head and tail will point to newNode    
            self.head = self.tail = newNode;    
            #head's previous will point to None    
            self.head.previous = None;    
            #tail's next will point to None, as it is the last node of the list    
            self.tail.next = None;    
        else:    
            #newNode will be added after tail such that tail's next will point to newNode    
            self.tail.next = newNode;    
            #newNode's previous will point to tail    
            newNode.previous = self.tail;    
            #newNode will become new tail    
            self.tail = newNode;    
            #As it is last node, tail's next will point to None    
            self.tail.next = None;    
                
    #deleteFromStart() will delete a node from the beginning of the list    
    def deleteFromStart(self):    
        #Checks whether list is empty    
        if(self.head == None):    
            return;    
        else:    
            #Checks whether the list contains only one element    
            if(self.head != self.tail):    
                #head will point to next node in the list    
                self.head = self.head.next;    
                #Previous node to current head will be made None    
                self.head.previous = None;    
                    
            #If the list contains only one element     
            #then, it will remove the node, and now both head and tail will point to None    
    
            else:    
                self.head = self.tail = None;    
                    
    #display() will print out the nodes of the list    
    def display(self):    
        #Node current will point to head    
        current = self.head;    
        if(self.head == None):    
            print("List is empty");    
            return;    
        while(current != None):    
            #Prints each node by incrementing pointer.    
            print(current.data),    
            current = current.next;    
        print();    
           
dList = DeleteStart();    
#Add nodes to the list    
dList.addNode(1);    
dList.addNode(2);    
dList.addNode(3);    
dList.addNode(4);    
dList.addNode(5);    
     
#Printing original list    
print("Original List: ");    
dList.display();    
while(dList.head != None):    
    dList.deleteFromStart();    
    #Printing updated list    
    print("Updated List: ");    
    dList.display();      

Output:

Original List: 
1 2 3 4 5 
Updated List: 
2 3 4 5 
Updated List: 
3 4 5 
Updated List: 
4 5 
Updated List: 
5 
Updated List: 
List is empty`}
                />
                <ProgramCard
                  heading="Python program to delete a new node from the end of the doubly linked list"
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the list. It will have three properties: data, previous which will point to the previous node and next which will point to the next node.
Define another class for creating the doubly linked list, and it has two nodes: head and tail. Initially, head and tail will point to null.
deleteFromEnd() will delete a node from the end of the list:
It first checks whether the head is null (empty list) then, it will return from the function as there is no node present in the list.
If the list is not empty, it will check whether the list has only one node.
If the list has only one node, it will set both head and tail to null.
If the list has more than one node then, tail's previous node will become the new tail of the list.
This new tail will point to null thus, delete the last node of the list.
a. display() will show all the nodes present in the list.


Define a new node 'current' that will point to the head.
Print current.data till current points to null.
Current will point to the next node in the list in each iteration.

PROGRAM:
#Represent a node of doubly linked list    
class Node:    
    def __init__(self,data):    
        self.data = data;    
        self.previous = None;    
        self.next = None;    
            
class DeleteEnd:    
    #Represent the head and tail of the doubly linked list    
    def __init__(self):    
        self.head = None;    
        self.tail = None;    
            
    #addNode() will add a node to the list    
    def addNode(self, data):    
        #Create a new node    
        newNode = Node(data);    
            
        #If list is empty    
        if(self.head == None):    
            #Both head and tail will point to newNode    
            self.head = self.tail = newNode;    
            #head's previous will point to None    
            self.head.previous = None;    
            #tail's next will point to None, as it is the last node of the list    
            self.tail.next = None;    
        else:    
            #newNode will be added after tail such that tail's next will point to newNode    
            self.tail.next = newNode;    
            #newNode's previous will point to tail    
            newNode.previous = self.tail;    
            #newNode will become new tail    
            self.tail = newNode;    
            #As it is last node, tail's next will point to None    
            self.tail.next = None;    
                
    #deleteFromEnd() will delete a node from the end of the list    
    def deleteFromEnd(self):    
        #Checks whether list is empty    
        if(self.head == None):    
            return;    
        else:    
            #Checks whether the list contains only one node    
            if(self.head != self.tail):    
                #Previous node to the tail will become new tail    
                self.tail = self.tail.previous;    
                #Node next to current tail will be made None    
                self.tail.next = None;    
                    
            #If the list contains only one element     
            #Then it will remove the node, and now both head and tail will point to None    
    
            else:    
                self.head = self.tail = None;    
                    
    #display() will print out the nodes of the list    
    def display(self):    
        #Node current will point to head    
        current = self.head;    
        if(self.head == None):    
            print("List is empty");    
            return;    
        while(current != None):    
            #Prints each node by incrementing pointer.    
            print(current.data),    
            current = current.next;    
        print();    
           
dList = DeleteEnd();    
#Add nodes to the list    
dList.addNode(1);    
dList.addNode(2);    
dList.addNode(3);    
dList.addNode(4);    
dList.addNode(5);    
     
#Printing original list    
print("Original List: ");    
dList.display();    
while(dList.head != None):    
    dList.deleteFromEnd();    
    #Printing updated list    
    print("Updated List: ");    
    dList.display();    

Output:

Original List: 
1 2 3 4 5 
Updated List: 
1 2 3 4 
Updated List: 
1 2 3 
Updated List: 
1 2 
Updated List: 
1 
Updated List: 
List is empty`}
                />
                <ProgramCard
                  heading="Python program to delete a new node from the middle of the doubly linked list"
                  language="Python"
code={`ALGORITHM:
Define a Node class which represents a node in the list. It will have three properties: data, previous which will point to the previous node and next which will point to the next node.
Define another class for creating the doubly linked list, and it has two nodes: head and tail. Initially, head and tail will point to null.
deleteFromMid() will delete a node from the middle of the list:
It first checks whether the head is null (empty list) then, it will return from the function as there is no node present in the list.
If the list is not empty, it will check whether the list has only one node.
If the list has more than one node then, it will calculate the size of the list. Divide the size by 2 and store it in variable mid.
Iterate through the list till current points to the mid node of the list.
Connect current's previous node to current's next node.
Delete the current node by setting it to null.
a. display() will show all the nodes present in the list.


Define a new node 'current' that will point to the head.
Print current.data till current points to null.
Current will point to the next node in the list in each iteration.

PROGRAM:
#Represent a node of doubly linked list    
class Node:    
    def __init__(self,data):    
        self.data = data;    
        self.previous = None;    
        self.next = None;    
            
class DeleteMid:    
    #Represent the head and tail of the doubly linked list    
    def __init__(self):    
        self.head = None;    
        self.tail = None;    
        self.size = 0;    
            
    #addNode() will add a node to the list    
    def addNode(self, data):    
        #Create a new node    
        newNode = Node(data);    
            
        #If list is empty    
        if(self.head == None):    
            #Both head and tail will point to newNode    
            self.head = self.tail = newNode;    
            #head's previous will point to None    
            self.head.previous = None;    
            #tail's next will point to None, as it is the last node of the list    
            self.tail.next = None;    
        else:    
            #newNode will be added after tail such that tail's next will point to newNode    
            self.tail.next = newNode;    
            #newNode's previous will point to tail    
            newNode.previous = self.tail;    
            #newNode will become new tail    
            self.tail = newNode;    
            #As it is last node, tail's next will point to None    
            self.tail.next = None;    
        #Size will count the number of nodes present in the list    
        self.size = self.size + 1;    
            
    #deleteFromMid() will delete a node from middle of the list    
    def deleteFromMid(self):    
        #Checks whether list is empty    
        if(self.head == None):    
            return;    
        else:    
            #current will point to head    
            current = self.head;    
                
            #Store the mid position of the list    
            mid = (self.size//2) if(self.size % 2 == 0) else((self.size+1)//2);    
                
            #Iterate through list till current points to mid position    
            for i in range(1, mid):    
                current = current.next;    
                    
            #If middle node is head of the list    
            if(current == self.head):    
                self.head = current.next;    
            #If middle node is tail of the list    
            elif(current == self.tail):    
                self.tail = self.tail.previous;    
            else:    
                current.previous.next = current.next;    
                current.next.previous = current.previous;    
            #Delete the middle node    
            current = None;    
        self.size = self.size - 1;        
        
    #display() will print out the nodes of the list    
    def display(self):    
        #Node current will point to head    
        current = self.head;    
        if(self.head == None):    
            print("List is empty");    
            return;    
        while(current != None):    
            #Prints each node by incrementing pointer.    
            print(current.data),    
            current = current.next;    
        print();    
           
dList = DeleteMid();    
#Add nodes to the list    
dList.addNode(1);    
dList.addNode(2);    
dList.addNode(3);    
dList.addNode(4);    
dList.addNode(5);    
     
#Printing original list    
print("Original List: ");    
dList.display();    
while(dList.head != None):    
    dList.deleteFromMid();    
    #Printing updated list    
    print("Updated List: ")    
    dList.display();    

Output:

Original List: 
1 2 3 4 5 
Updated List: 
1 2 4 5 
Updated List: 
1 4 5 
Updated List: 
1 5 
Updated List: 
5 
Updated List: 
List is empty`}
                />

                </div>


              <div className="mb-3">
                <h5 className="mb-2" style={{ color: "#072C71" }}>
                Python Array Programs
                </h5>
                <ProgramCard
                  heading="Python program to print the elements of an array"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Loop through the array by incrementing the value of i.
STEP 3: Finally, print out each element of the array.

PROGRAM:
#Initialize array     
arr = [1, 2, 3, 4, 5];     
     
print("Elements of given array: ");    
#Loop through the array by incrementing the value of i     
    
for i in range(0, len(arr)):    
    print(arr[i]),    

Output:

Elements of given array:
1	2    3    4    5`}
                />
                <ProgramCard
                  heading="Python program to copy all elements of one array into another array"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Declare another array of the same size as of the first one
STEP 3: Loop through the first array from 0 to length of the array and copy an element from the first array to the second array that is arr1[i] = arr2[i].

PROGRAM:
#Initialize array     
arr1 = [1, 2, 3, 4, 5];     
     
#Create another array arr2 with size of arr1    
arr2 = [None] * len(arr1);    
     
#Copying all elements of one array into another    
for i in range(0, len(arr1)):    
    arr2[i] = arr1[i];     
     
#Displaying elements of array arr1     
print("Elements of original array: ");    
for i in range(0, len(arr1)):    
   print(arr1[i]),    
     
print();    
     
#Displaying elements of array arr2     
print("Elements of new array: ");    
for i in range(0, len(arr2)):    
   print(arr2[i]),  


Output:

Elements of original array
1 2 3 4 5
Elements of new array:
1 2 3 4 5`}
                />
                 <ProgramCard
                  heading="Python program to find the frequency of each element in the array"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array arr.
STEP 2: Declare another array fr with the same size of array arr. It is used to store the frequencies of elements present in the array.
STEP 3: Variable visited will be initialized with the value -1. It is required to mark an element visited that is, it helps us to avoid counting the same element again.
STEP 4: The frequency of an element can be counted using two loops. One loop will be used to select an element from an array, and another loop will be used to compare the selected element with the rest of the array.
STEP 5: Initialize count to 1 in the first loop to maintain a count of each element. Increment its value by 1 if a duplicate element is found in the second loop since we have counted this element and didn't want to count it again. Mark this element as visited by setting fr[j] = visited. Store count of each element to fr.
STEP 6: Finally, print out the element along with its frequency.

PROGRAM:
#Initialize array     
arr = [1, 2, 8, 3, 2, 2, 2, 5, 1];     
#Array fr will store frequencies of element    
fr = [None] * len(arr);    
visited = -1;    
     
for i in range(0, len(arr)):    
    count = 1;    
    for j in range(i+1, len(arr)):    
        if(arr[i] == arr[j]):    
            count = count + 1;    
            #To avoid counting same element again    
            fr[j] = visited;    
                
    if(fr[i] != visited):    
        fr[i] = count;    
     
#Displays the frequency of each element present in array    
print("---------------------");    
print(" Element | Frequency");    
print("---------------------");    
for i in range(0, len(fr)):    
    if(fr[i] != visited):    
        print("    " + str(arr[i]) + "    |    " + str(fr[i]));    
print("---------------------");    


Output:


----------------------------------------
Element | Frequency
----------------------------------------
1           |         2
2           |         4
8           |         1
3           |         1
5           |         1
----------------------------------------`}
                />
                 <ProgramCard
                  heading="Python program to left rotate the elements of an array"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Variable n will denote the number of times an array should be rotated toward its left.
STEP 3: The array can be left rotated by shifting its elements to a position prior to them which can be accomplished by looping through the array and perform the operation arr[j] = arr[j+1].
STEP 4: The first element of the array will be added to the last of the rotated array.

PROGRAM:
#Initialize array     
arr = [1, 2, 3, 4, 5];     
#n determine the number of times an array should be rotated    
n = 3;    
     
#Displays original array    
print("Original array: ");    
for i in range(0, len(arr)):    
    print(arr[i]),     
     
#Rotate the given array by n times toward left    
for i in range(0, n):    
    #Stores the first element of the array    
    first = arr[0];    
        
    for j in range(0, len(arr)-1):    
        #Shift element of array by one    
        arr[j] = arr[j+1];    
            
    #First element of array will be added to the end    
    arr[len(arr)-1] = first;    
     
print();    
     
#Displays resulting array after rotation    
print("Array after left rotation: ");    
for i in range(0, len(arr)):    
    print(arr[i]),    


Output:


Original Array:
1   2   3   4   5
Array after left rotation:
4   5   1   2   3`}
                />
                 <ProgramCard
                  heading="Python program to print the duplicate elements of an array"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Duplicate elements can be found using two loops. The outer loop will iterate through the array from 0 to length of the array. The outer loop will select an element. The inner loop will be used to compare the selected element with the rest of the elements of the array.
STEP 3: If a match is found which means the duplicate element is found then, display the element.

PROGRAM:
#Initialize array     
arr = [1, 2, 3, 4, 2, 7, 8, 8, 3];     
     
print("Duplicate elements in given array: ");    
#Searches for duplicate element    
for i in range(0, len(arr)):    
    for j in range(i+1, len(arr)):    
        if(arr[i] == arr[j]):    
            print(arr[j]);    


Output:


Duplicate elements in given array:
2
3
8
`}
                />
               
                 <ProgramCard
                  heading="Python program to print the elements of an array in reverse order"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Loop through the array in reverse order that is, the loop will start from (length of the array - 1) and end at 0 by decreasing the value of i by 1.
STEP 3: Print the element arr[i] in each iteration.

PROGRAM:
#Initialize array     
arr = [1, 2, 3, 4, 5];     
print("Original array: ");    
for i in range(0, len(arr)):    
    print(arr[i]),     
print("Array in reverse order: ");    
#Loop through the array in reverse order    
for i in range(len(arr)-1, -1, -1):     
    print(arr[i]),     


Output:

Original array: 
1	2   3   4   5
Array in reverse order:
5    4   3   2   1`}
                />
                 <ProgramCard
                  heading="Python program to print the elements of an array present on even position"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Calculate the length of the declared array.
STEP 3: Loop through the array by initializing the value of variable "i" to 1 (because first even positioned element lies on i = 1) then incrementing its value by 2, i.e., i=i+2.
STEP 4: Print the elements present in even positions.

PROGRAM:
#Initialize array     
arr = [1, 2, 3, 4, 5];     
     
print("Elements of given array present on even position: ");    
#Loop through the array by incrementing the value of i by 2    
    
#Here, i will start from 1 as first even positioned element is present at position 1.    
for i in range(1, len(arr), 2):    
    print(arr[i]);   

    
Output:

Elements of given array present on even position:
2
4`}
                />
                 <ProgramCard
                  heading="Python program to print the elements of an array present on odd position"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Calculate the length of the declared array.
STEP 3: Loop through the array by initializing the value of variable "i" to 0 then incrementing its value by 2, i.e., i=i+2.
STEP 4: Print the elements present in odd positions.

PROGRAM:
#Initialize array     
arr = [1, 2, 3, 4, 5];     
     
print("Elements of given array present on odd position: ");    
#Loop through the array by incrementing the value of i by 2     
    
for i in range(0, len(arr), 2):    
    print(arr[i]);     
}  


Output:

Elements of given array present on odd position:
1
3
5`}
                />
                 <ProgramCard
                  heading="Python program to print the largest element in an array"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Store first element in variable max.
STEP 3: Loop through the array from 0 to length of the array and compare the value of max with elements of the array.
STEP 4: If any element is greater than max, max will hold the value of that element.
STEP 5: At last, max will hold the largest element in the array.

PROGRAM:
#Initialize array     
arr = [25, 11, 7, 75, 56];     
     
#Initialize max with first element of array.    
max = arr[0];    
     
#Loop through the array    
for i in range(0, len(arr)):    
    #Compare elements of array with max    
   if(arr[i] > max):    
       max = arr[i];    
           
print("Largest element present in given array: " + str(max));   


Output:

Largest element present in given array: 75`}
                />
                 <ProgramCard
                  heading="Python program to print the smallest element in an array"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Store first element in the variable min.
STEP 3: Loop through the array from 0 to length of the array and compare the value of min with elements of the array.
STEP 4: If any element is less than min, min will hold the value of that element.
STEP 5: At last, min will represent the smallest element in the array.

PROGRAM:
#Initialize array     
arr = [25, 11, 7, 75, 56];     
     
#Initialize min with the first element of the array.    
    
min = arr[0];    
     
#Loop through the array    
for i in range(0, len(arr)):    
    #Compare elements of array with min    
   if(arr[i] < min):    
       min = arr[i];    
     
print("Smallest element present in given array: " + str(min));    

Output:

Smallest element present in given array: 7`}
                />
                 <ProgramCard
                  heading="Python program to print the number of elements present in an array"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Calculate the length of the array that is a number of elements present in the array.
STEP 3: An in-built function can calculate length.
STEP 4: Finally, print the length of the array.
Array in Python is declared as

Arrayname = [ele1, ele2, ele3,....]
len() method returns the length of the array in Python.

PROGRAM:
#Initialize array     
arr = [1, 2, 3, 4, 5];     
     
#Number of elements present in an array can be found using len()    
print("Number of elements present in given array: " + str(len(arr)));     

Output:

Number of elements present in given array: 5`}
                />
                 <ProgramCard
                  heading="Python program to print the sum of all elements in an array"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: The variable sum will be used to calculate the sum of the elements. Initialize it to 0.
STEP 3: Loop through the array and add each element of the array to the variable sum as sum = sum + arr[i].

PROGRAM:
#Initialize array     
arr = [1, 2, 3, 4, 5];     
sum = 0;    
     
#Loop through the array to calculate sum of elements    
for i in range(0, len(arr)):    
   sum = sum + arr[i];    
     
print("Sum of all the elements of an array: " + str(sum));    

Output:

Sum of all the elements of an array: 15`}
                />
                 <ProgramCard
                  heading="Python program to right rotate the elements of an array"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Variable n will denote the number of times an array should be rotated toward its right.
STEP 3: The array can be right rotated by shifting its elements to a position next to them which can be accomplished by looping through the array in reverse order (loop will start from the length of the array -1 to 0) and perform the operation arr[j] = arr[j-1].
STEP 4: The last element of the array will become the first element of the rotated array.

PROGRAM:
#Initialize array     
arr = [1, 2, 3, 4, 5];     
#n determine the number of times an array should be rotated    
n = 3;    
     
#Displays original array    
print("Original array: ");    
for i in range(0, len(arr)):    
    print(arr[i]),     
     
#Rotate the given array by n times toward right    
for i in range(0, n):    
    #Stores the last element of array    
    last = arr[len(arr)-1];    
        
    for j in range(len(arr)-1, -1, -1):    
        #Shift element of array by one    
        arr[j] = arr[j-1];    
            
    #Last element of the array will be added to the start of the array.    
    
    arr[0] = last;    
     
print();    
     
#Displays resulting array after rotation    
print("Array after right rotation: ");    
for i in range(0, len(arr)):    
    print(arr[i]),  

Output:

Original Array:
1   2   3   4   5
Array after right rotation:
3   4   5   1   2   `}
                />
                 <ProgramCard
                  heading="Python program to sort the elements of an array in ascending order"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Loop through the array and select an element.
STEP 3: The inner loop will be used to compare the selected element from the outer loop with the rest of the elements of the array.
STEP 4: If any element is less than the selected element then swap the values.
STEP 5: Continue this process till entire array is sorted in ascending order.

PROGRAM:
#Initialize array     
arr = [5, 2, 8, 7, 1];     
temp = 0;    
     
#Displaying elements of original array    
print("Elements of original array: ");    
for i in range(0, len(arr)):    
    print(arr[i], end=" ");    
     
#Sort the array in ascending order    
for i in range(0, len(arr)):    
    for j in range(i+1, len(arr)):    
        if(arr[i] > arr[j]):    
            temp = arr[i];    
            arr[i] = arr[j];    
            arr[j] = temp;    
     
print();    
     
#Displaying elements of the array after sorting    
    
print("Elements of array sorted in ascending order: ");    
for i in range(0, len(arr)):    
    print(arr[i], end=" ");    

Output:

Elements of original array:
5 2 8 7 1
Elements of array sorted in ascending order:
1 2 5 7 8    
`}
                />
                 <ProgramCard
                  heading="Python program to sort the elements of an array in descending order"
                  language="Python"
code={`ALGORITHM:
STEP 1: Declare and initialize an array.
STEP 2: Loop through the array and select an element.
STEP 3: Inner loop will be used to compare selected element from the outer loop with the rest of the elements of the array.
STEP 4: If any element is greater than the selected element then swap the values.
STEP 5: Continue this process till the entire list is sorted in descending order.

PROGRAM:
#Initialize array     
arr = [5, 2, 8, 7, 1];     
temp = 0;    
     
#Displaying elements of original array    
print("Elements of original array: ");    
for i in range(0, len(arr)):     
    print(arr[i]),    
     
#Sort the array in descending order    
for i in range(0, len(arr)):    
    for j in range(i+1, len(arr)):    
        if(arr[i] < arr[j]):    
            temp = arr[i];    
            arr[i] = arr[j];    
            arr[j] = temp;    
     
print();    
     
#Displaying elements of array after sorting    
print("Elements of array sorted in descending order: ");    
for i in range(0, len(arr)):     
    print(arr[i]),   

Output:

Elements of original array:
5 2 8 7 1
Elements of array sorted in descending order:
8 7 5 2 1 `}
                />
                 
                </div>

            </div>
            <div className="col-md-3 mt-4">
              <RightSideSection />
              <h5 className="mb-4">More Programming Questions</h5>
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
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
              <RecommendPost
                imgsource="datacodelogo.jpeg"
                RecPostHading="Programminig Quize Test"
                link="/index_quize_tests"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PythonPgramQuestions;
