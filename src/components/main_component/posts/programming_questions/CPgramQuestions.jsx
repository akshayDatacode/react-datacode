import React, { Component } from "react";
import RightSideSection from "../../../right_section/RightSideSection";
import ProgramCard from "./ProgramCard";
import RecommendPost from "../../../right_section/RecommendPost";
import HeaderCard from "../../HeaderCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChalkboardTeacher,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
class   CPgramQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluids ">
          <HeaderCard
            title="C Programming Examples Question"
            color="#2D9E32"
            textcolor="white"
          />
          <div className="row">
            <div className="col-3 d-none d-sm-block ">
              <div className="card bg-primary">
                <div
                  className="card-body text-light p-2 m-1"
                  style={{
                    backgroundColor: "blue",
                  }}
                >
                  <h3>C Road Map</h3>
                </div>
              </div>
              <ul class="list-group list-group-flush">
              <li className="list-group-item">C Introduction</li>
                <li className="list-group-item">Variables and Types</li>
                <li className="list-group-item">Strings</li>
                <li className="list-group-item">Conditions</li>

                <li className="list-group-item">For loops</li>
                <li className="list-group-item">While loops</li>
                <li className="list-group-item">Arrays</li>
                <li className="list-group-item">Multidimensional Arrays</li>
                <li className="list-group-item">Functions</li>
                <li className="list-group-item">Static</li>
                <h1>Advanced</h1>
                <li className="list-group-item">Pointers</li>
                <li className="list-group-item">Structures</li>
                <li className="list-group-item">Function arguments by reference</li>
                <li className="list-group-item">Dynamic allocation</li>
                <li className="list-group-item">Arrays and Pointers</li>
                <li className="list-group-item">Recursion</li>
                <li className="list-group-item">Linked lists</li>
                <li className="list-group-item">Binary trees</li>
                <li className="list-group-item">Unions</li>
                <li className="list-group-item">Pointer Arithmetics</li>
                <li className="list-group-item">Function Pointers</li>
                <li className="list-group-item">Bitmasks</li>
              </ul>
            </div>

            <div className="col-md-6 ">
              {/* Nev ICONs */}
              <div className="row">
                <div className="col">
                  <Link
                    to="/home"
                    className="badge mr-1"
                    style={{ backgroundColor: "#06CB6C" }}
                  >
                    <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
                  </Link>
                  <Link
                    to="index_programming_questions"
                    className="badge mr-1 text-white"
                    style={{ backgroundColor: "#072C71" }}
                  >
                    <FontAwesomeIcon
                      icon={faCode}
                      size="1x"
                      color="#06CB6C"
                      className="mr-2"
                    />
                    back to code
                  </Link>
                </div>
              </div>
                {/* Main Question Fram */}
                <div
                className="row mt-3 pt-3 rounded"
                style={{ backgroundColor: "#B7CED8" }}
              >
                <div className="col">
                  <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                      Basic C Programming examples
                    </h5>
                    <ProgramCard
                      heading="C Program to Display 'Hello, World!'"
                      language="C"
code={`#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!");
   return 0;
}

Output:-

Hello, World!`}
                    />
                     <ProgramCard
                      heading="C program to get input from a user using scanf"
                      language="C"
code={`#include <stdio.h>
int main()
{
  int x;

  printf("Input an integer");
  scanf("%d", &x); // %d is used for an integer

  printf("The integer is: %d", x);

  return 0;
}

Output:
Input an integer
7897
The integer is: 7897`}
                    />
                     <ProgramCard
                      heading="Program to Print an Integer"
                      language="C"
code={`#include <stdio.h>
int main() {   
    int number;
   
    printf("Enter an integer: ");  
    
    // reads and stores input
    scanf("%d", &number);

    // displays output
    printf("You entered: %d", number);
    
    return 0;
}

Output:-

Enter an integer: 25
You entered: 25`}
                    />
                     <ProgramCard
                      heading="Program to Add Two Integers
                      "
                      language="C"
code={`#include <stdio.h>
int main() {    

    int number1, number2, sum;
    
    printf("Enter two integers: ");
    scanf("%d %d", &number1, &number2);

    // calculating sum
    sum = number1 + number2;      
    
    printf("%d + %d = %d", number1, number2, sum);
    return 0;
}

Output:-

Enter two integers: 12
11
12 + 11 = 23
`}
                    />
                     <ProgramCard
                      heading="Program to Multiply Two Numbers
                      "
                      language="C"
code={`#include <stdio.h>
int main() {
    double a, b, product;
    printf("Enter two numbers: ");
    scanf("%lf %lf", &a, &b);  
 
    // Calculating product
    product = a * b;

    // Result up to 2 decimal point is displayed using %.2lf
    printf("Product = %.2lf", product);
    
    return 0;
}

Output:-

Enter two numbers: 2.4
1.12
Product = 2.69`}
                    />
                     <ProgramCard
                      heading="Program to Print ASCII Value
                      "
                      language="C"
code={`#include <stdio.h>
int main() {  
    char c;
    printf("Enter a character: ");
    scanf("%c", &c);  
    
    // %d displays the integer value of a character
    // %c displays the actual character
    printf("ASCII value of %c = %d", c, c);
    
    return 0;
}

Output:-

Enter a character: G
ASCII value of G = 71`}
                    />
                     <ProgramCard
                      heading="Program to Compute Quotient and Remainder"
                      language="C"
code={`#include <stdio.h>
int main() {
    int dividend, divisor, quotient, remainder;
    printf("Enter dividend: ");
    scanf("%d", &dividend);
    printf("Enter divisor: ");
    scanf("%d", &divisor);

    // Computes quotient
    quotient = dividend / divisor;

    // Computes remainder
    remainder = dividend % divisor;

    printf("Quotient = %d", quotient);
    printf("Remainder = %d", remainder);
    return 0;
}

Output:-

Enter dividend: 25
Enter divisor: 4
Quotient = 6
Remainder = 1 `}
                    />
                     <ProgramCard
                      heading="Program to Find the Size of Variables"
                      language="C"
code={`#include<stdio.h>
int main() {
    int intType;
    float floatType;
    double doubleType;
    char charType;

    // sizeof evaluates the size of a variable
    printf("Size of int: %ld bytes", sizeof(intType));
    printf("Size of float: %ld bytes", sizeof(floatType));
    printf("Size of double: %ld bytes", sizeof(doubleType));
    printf("Size of char: %ld byte", sizeof(charType));
    
    return 0;
}

Output:-

Size of int: 4 bytes
Size of float: 4 bytes
Size of double: 8 bytes
Size of char: 1 byte`}
                    /> 
                    <ProgramCard
                    heading="Program Using the long keyword"
                    language="C"
code={`#include <stdio.h>
int main() {
    int a;
    long b;   // equivalent to long int b;
    long long c;  // equivalent to long long int c;
    double e;
    long double f;

    printf("Size of int = %zu bytes ", sizeof(a));
    printf("Size of long int = %zu bytes", sizeof(b));
    printf("Size of long long int = %zu bytes", sizeof(c));
    printf("Size of double = %zu bytes", sizeof(e));
    printf("Size of long double = %zu bytes", sizeof(f));
    
    return 0;
}

Output:-

Size of int = 4 bytes 
Size of long int = 8 bytes
Size of long long int = 8 bytes
Size of double = 8 bytes
Size of long double = 16 bytes`}
                  />
                   <ProgramCard
                      heading="C Program to Swap Two Numbers"
                      language="C"
code={`#include<stdio.h>
int main() {
      double first, second, temp;
      printf("Enter first number: ");
      scanf("%lf", &first);
      printf("Enter second number: ");
      scanf("%lf", &second);

      // Value of first is assigned to temp
      temp = first;

      // Value of second is assigned to first
      first = second;

      // Value of temp (initial value of first) is assigned to second
      second = temp;

      printf("After swapping, firstNumber = %.2lf", first);
      printf("After swapping, secondNumber = %.2lf", second);
      return 0;
}

Output:-

Enter first number: 1.20
Enter second number: 2.45

After swapping, firstNumber = 2.45
After swapping, secondNumber = 1.20`}
                    />
                    </div>
                    <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                    Basic C Programs on Strings  </h5>
                     <ProgramCard
                      heading="C Program to print a string"
                      language="C"
code={`/* C program to print a string */
#include <stdio.h>
#include <string.h>
int main()
{
    char a[100];
    int l;
    printf(“Enter the string : “);
    scanf(“%s”,&a);
    printf(“The string is %s “, a);
    return 0;
}

Output:- 

Enter the string : Focus
The string is : Focus
`}
                    />
                     <ProgramCard
                      heading="C  Program to print the length of a string"
                      language="C"
code={`/* C program to print the length of a string */
#include <stdio.h>
#include <string.h>
int main()
{
    char a[100];
    int l;
    scanf(“%s”,&a);
    int i;
    l = strlen(a);
    printf(“The length of %s is %d ”,a,l);
    return 0;
}

Output:-

Enter the string : Focus
The length of Focus is 5`}
                    />
                     <ProgramCard
                      heading="C program to copy a string "
                      language="C"
code={`/* C program to copy a string */
#include <stdio.h>
#include <string.h>
int main()
{
    char a[100], b[100];
    int l;
    scanf(“%s”,&a);
    strcpy(b, a);
    printf(“String 1 : %s String 2 : %s ”,a, b);
    return 0;
}

Output:- 

Enter string : Focus
String 1 : Focus
String 2 : Focus`}
                    />
                     <ProgramCard
                      heading=" C program to reverse a string"
                      language="C"
code={`#include <stdio.h>
#include <string.h>
int main()
{
    char a[100], b[100];
    int l;
    scanf(“%s”,&a);
    int i;
    printf(“Reversed String : “);
    for(i = strlen(a); i >= 0; i–)
    {
        printf(“%c”,a[i]);
    }
    return 0;
}

Output:- 

Enter the string : Focus
Reversed String : sucoF`}
                    /> <ProgramCard
                    heading="C program to concatenate two strings "
                    language="C"
code={`/* C program to concatenate two strings */
#include <stdio.h>
#include <string.h>
int main()
{
    char str1[] = “Data “, str2[] = “Code”;
    strcat(str1,str2);
    printf(“After concatenation : “);
    puts(str1);

    return 0;
}

Output:-

After concatenation : DataCode
`}
                  />
                   <ProgramCard
                      heading="C program to compare two strings "
                      language="C"
code={`/* C program to compare two strings */
#include <stdio.h>
#include <string.h>

int main()
{
    char str1[100], str2[100];
    scanf(“%s %s”,str1,str2);
    strcmp(str1,str2);
    if(strcmp(str1,str2) == 0)
        printf(“The strings are equal”);
    else
        printf(“The strings are not equal”);
    return 0;
}

Output:-

Enter the string 1 : Focus
Enter the string 2 : Focas
The strings are not equal
`}
                    />
                     <ProgramCard
                      heading="C Program to remove vowels from a string
                      "
                      language="C"
code={`#include <stdio.h>
int check_vowel(char);
int main()
{
    char s[100], t[100];
    int c, d = 0;
    gets(s);
    for(c = 0; s[c] != ‘0’; c++)
    {
        if(check_vowel(s[c]) == 0)
        {
            t[d] = s[c];
            d++;
        }
    }
    t[d] = ‘0’;
    strcpy(s, t);
    printf(“%s”, s);
    return 0;
}
int check_vowel(char ch)
{
    if (ch == ‘a’ || ch == ‘A’ || ch == ‘e’ || ch == ‘E’ || ch == ‘i’ || ch == ‘I’ || ch ==’o’ || ch==’O’ || ch == ‘u’ || ch == ‘U’)
        return 1;
    else
        return 0;
}
`}
                    />
                     <ProgramCard
                      heading="C program to check if the given string is a palindrome or not"
                      language="C"
code={`#include <stdio.h>
#include <string.h>

int main()
{
    char a[100], b[100];

    printf(“Enter the string : “);
    gets(a);

    strcpy(b, a); /* Copying input string */
    strrev(b); /* Reversing the string */

    if (strcmp(a, b) == 0) /* Comparing input string with the reverse string */
        printf(“The string is a palindrome”);
    else
        printf(“The string is not t a palindrome”);

    return 0;
}

Output:- 

Input - Enter the string : madam '
Output - The string is a palindrome
`}
                    />
                     <ProgramCard
                      heading="C Program to sort a string in alphabetical order"
                      language="C"
code={`/* C Program to sort a string in alphabetical order */
#include <stdio.h>
#include <string.h>

int main ()
{
    char string[100];
    printf(" Enter the string : ");
    scanf(“%s”,string);
    char temp;
    int i, j;
    int n = strlen(string);
    for (i = 0; i < n-1; i++) {
        for (j = i+1; j < n; j++) {
            if (string[i] > string[j]) {
                temp = string[i];
                string[i] = string[j];
                string[j] = temp;
            }
        }
    }

    printf(“The sorted string is : %s”, string);
    return 0;
}

Output:-

Enter the string : datacode
The sorted string is : aacddeot`}
                    />
                     <ProgramCard
                      heading="C program to remove spaces from a string"
                      language="C"
code={`/* C program to remove spaces from a string */
#include<stdio.h>

char *remove_white_spaces(char *str)
{
    int i = 0, j = 0;
    while (str[i])
    {
        if (str[i] != ‘ ‘)
            str[j++] = str[i];
        i++;
    }
    str[j] = ‘0’;
    return str;
}

int main()
{
    char str[50];
    printf(" Enter a string : ");
    gets(str);
    remove_white_spaces(str);
    printf(“%s”,str);
    return 0;
}

Output:- 

Enter a string : Welcome to Datacode.
WelcometoDatacode.
`}
                    />
                    </div>
                    <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                    Basic C Programs on Control Statements (Looping) & Recursion  </h5>

                     <ProgramCard
                      heading="C program to check if the character is a vowel or consonant using switch case"
                      language="C"
code={`// C program to check if the character is a vowel or consonant using switch case

#include <stdio.h>

void vowel_or_consonant(char ch)
{
    switch(ch)
    {
        case ‘a’:
        case ‘A’:
        case ‘e’:
        case ‘E’:
        case ‘i’:
        case ‘I’:
        case ‘o’:
        case ‘O’:
        case ‘u’:
        case ‘U’: printf(“Vowel”);
            break;
        default : printf(“Consonant”);
    }
}

int main()
{
    char ch;
    printf(“Input a character : “);
    scanf(” %c”,&ch);
    printf(“%c is a “,ch);
    vowel_or_consonant(ch);
    return 0;
}

`}
                    />
                     <ProgramCard
                      heading="C program to check whether the character is an alphabet or not"
                      language="C"
code={`// C program to check whether the character is an alphabet or not

#include <stdio.h>
int main()
{
    char ch;
    printf(“Enter a character: “);
    scanf(” %c”,&ch);
    printf(“/n”);
    if( (ch >= ‘a’ && ch <= ‘z’) || ( ch >= ‘A’ && ch <=’Z’))
        printf(“%c is an alphabet”,ch);
    else
        printf(“%c is not an alphabet/
          ”,ch);

    return 0;
}

Output:- 

Input- Enter a character:s Output- s is an alphabet
`}
                    />
                     <ProgramCard
                      heading="C Program to find whether an integer is positive or negative"
                      language="C"
code={`// C Program to find whether an integer is positive or negative
#include<stdio.h>
int main()
{
    //Fill the code
    int num;
    scanf(“%d”,&num);
    if(num > 0)
        printf(“Positive”);
    else
        printf(“Negative”);
    return 0;
}

Output:- 

44
Positive`}
                    />
                     <ProgramCard
                      heading="C Program to check if the number is odd or even "
                      language="C"
code={`#include <stdio.h>

int isEven(int n)
{
    return ((n / 2) * 2 == n);
}

int main()
{
    int n;
    printf(“/nEnter a number : “);
    scanf(“%d”,&n);
    printf(“/n”);
    printf(“/n%d is “,n);
    isEven(n) ? printf(“Even/n”) : printf(“Odd/n”);

    return 0;
}

Output:-

Input- Enter a number:564 Output- 564 is Even 
Input- Enter a number:255 Output- 255 is Odd
`}
                    />
                     <ProgramCard
                      heading="Area of a circle in C programming
                      "
                      language="C"
code={`// Area of a circle in C programming

#include <stdio.h>
#include <math.h>

float area_of_a_circle(float radius)
{
    return M_PI * radius * radius;
}
int main()
{
    float area, radius;
    printf(“/nEnter the radius of the circle : “);
    scanf(“%f”, &radius);
    area = area_of_a_circle(radius);
    printf(“/nArea of the circle : %f/n”, area);
    return 0;

}

Output:-

Input- Enter the radius of the circle:7 
Output- Area of the circle:153.86
`}
                    />
                     <ProgramCard
                      heading="C Program to find LCM of two numbers"
                      language="C"
code={`#include <stdio.h>

int main()
{
    int a, b, lcm;
    printf(“/nEnter two numbers: “);
    scanf(“%d %d”, &a, &b);

    lcm = (a > b) ? a : b;

    while(1)
    {
        if( lcm % a == 0 && lcm % b == 0 )
        {
            printf(“/nLCM of %d and %d is %d/n”, a, b,lcm);
            break;
        }
        ++lcm;
    }
    return 0;
}

Output:-

Input- Enter two numbers: 7 21 
Output- LCM of 7 and 21 is 21`}
                    />
                     <ProgramCard
                      heading="C GCD of two numbers"
                      language="C"
code={`#include<stdio.h>
#include<stdlib.h>
int main()
{
    int a,b,gcd;
    printf(“/nEnter two numbers : “);
    scanf(“%d %d”,&a,&b);
    int i;
    for(i = 1; i <= a && i <= b; i++)
    {
        if((a % i == 0) && (b % i == 0))
        {
            gcd = i;
        }
    }
    printf(“/nGCD of %d and %d is %d “,a,b,gcd);
    printf(“/n”);
    return 0;
}

Output:-

Input- Enter two numbers:20 28 
Output- GCD of 4
`}
                    />
                     <ProgramCard
                      heading="Program to find the largest among three numbers in C"
                      language="C"
code={`// C program to find the greatest among three numbers in C using functions
#include <stdio.h>>
int largest_among_three(int a, int b, int c)
{
    if(a > b && a > c)
        return a;
    else if(b > a && b > c)
        return b;
    else
        return c;
}
int main()
{
    int a,b,c;
    printf(“nEnter three numbers : “);
    scanf(“%d %d %d”,&a,&b,&c);
    int max = largest_among_three(a,b,c);
    printf(“nThe largest among the three numbers is %d ” , max);
    printf(“n”);
    return 0;
}

Output:-

Enter three numbers : 3 5 7
The largest among the three numbers is 7
`}
                    />
                     <ProgramCard
                      heading="C Program to count number of digits in an integer"
                      language="C"
code={`#include <stdio.h>
int number_of_digits(int n)
{
    if(n == 0)
        return 0;
    while(n != 0)
    {
        return 1 + number_of_digits(n/10);
    }
}
int main()
{
    int n;
    printf(“/nEnter the number: “);
    scanf(“%d”, &n);
    printf(“/nNumber of digits : “);
    printf(“%d/n”, number_of_digits(n));
    return 0;
}

Output:-

Input- Enter the number:1 2 3 4 5 6 
Output- Number of digits:6
`}
                    />
                     <ProgramCard
                      heading="C program to find the sum of digits of a number"
                      language="C"
code={`// C program to find the sum of digits of a number

# include

int sum_of_digits(int n)
{
    int sum = 0;
    while (n != 0)
    {
        sum = sum + n % 10;
        n = n/10;
    }
    return sum;
}

int main()
{
    int n;
    printf(“/nEnter a number : “);
    scanf(“%d”,&n);
    printf(“/nSum of digits of %d is %d/n”, n,sum_of_digits(n));
    return 0;
}

Output:-

Enter a number : 12345
sum of digits of 12345 is : 15`}
                    />
                     <ProgramCard
                      heading="C Program to find the sum of natural numbers "
                      language="C"
code={`#include <stdio.h>
int sum_of_natural_numbers(int n)
{
    int sum = 0;
    for(int i = 1; i <= n; i++)
    {
        sum += i;
    }
    return sum;
}
int main()
{
    int n;
    printf(“/nEnter the number : “);
    scanf(“%d”, &n);
    printf(“/nSum of %d Natural Numbers is %d/n “,n,sum_of_natural_numbers(n));
    return 0;
}

Output:-

Input- Enter the number:6 
Output- Sum of 6 Natural Numbers 21
`}
                    />
                    <ProgramCard
                      heading="C program to reverse a number"
                      language="C"
code={`// C program to reverse a number

#include <stdio.h>
int main()
{
    int n, rev = 0, rem;
    printf(“/nEnter a number : “);
    scanf(“%d”, &n);
    printf(“/nReversed Number : “);
    while(n != 0)
    {
        rem = n%10;
        rev = rev*10 + rem;
        n /= 10;
    }

    printf(“%d/n”, rev);

    return 0;
}

Output:-

Enter a number : 12345
Reversed Number : 54321`}
                    />
                    <ProgramCard
                      heading="C Program to find the factorial of a number"
                      language="C"
code={`#include <stdio.h>
int factorial_of_a_number(int n)
{
    int fact = 1, i;
    if(n == 0)
        return 1;
    else
        for(i = 1; i <= n; i++)
        {
            fact = fact * i;
        }
    return fact;
}
int main()
{
    int n;
    printf("Enter the number : ");
    scanf("%d",&n);
    if(n < 0)
        printf("Invalid output");
    else
        printf("Factorial of the number %d is %d" ,n, factorial_of_a_number(n));
    return 0;
}

Output:-

Input- Enter the number:5 
Output- Factorial of the number 5 is 120`}
                    />
                    <ProgramCard
                      heading="C program to generate fibonacci series upto n value"
                      language="C"
code={`// C program to generate fibonacci series upto n value

#include<stdio.h>
int main()
{
    int sum = 0, n;
    int a = 0;
    int b = 1;
    printf("Enter the nth value: ");
    scanf("%d", &n);
    printf("Fibonacci series: ");
    while(sum <= n)
    {
        printf("%d ", sum);
        a = b; // swap elements
        b = sum;
        sum = a + b; // next term is the sum of the last two terms 
    }
    return 0;
}

Output:-
Input- Enter the nth value: 1000 
Output- Fibonacci series: 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987`}
                    />
                    <ProgramCard
                      heading="C program for Leap year"
                      language="C"
code={`#include <stdio.h>

int main()
{
    int year;
    printf(“Enter a year: “);
    scanf(“%d”,&year);
    printf(“/n”);
    if(year%4 == 0)
    {
        if( year%100 == 0)
        {
            if ( year%400 == 0)
                printf(“%d is a leap year”, year);
            else
                printf(“%d is not a leap year”, year);
        }
        else
            printf(“%d is a leap year”, year );
    }
    else
        printf(“%d is not a leap year”, year);
    printf(“/n”);
    return 0;
}

Output:-

Input- Enter a year:2004 
Output- 2004 is a leap year`}
                    />
                    <ProgramCard
                      heading="C Program to check a number is Prime number or not "
                      language="C"
code={`#include<stdio.h>
int main()
{
int n,i;
printf(“/nEnter the number : “);
scanf(“%d”,&n);
for(i = 2; i <= n/2; i++)
{
if(n % i ==0)
{
break;
}
}
if(i > n/2)
printf(“/n%d is a Prime Number/n”,n);
else
printf(“/n%d is not a Prime Number/n”, n);
return 0;
}`}
                    />
                    <ProgramCard
                      heading="C Program to check a number is Palindrome number or not"
                      language="C "
code={`#include <stdio.h>
int main()
{
    int n, reverse = 0, remainder, number;

    printf("Enter an integer: ");
    scanf(“%d”, &n);

    number = n;

    while( n!=0 )
    {
        remainder = n%10;
        reverse = reverse*10 + remainder;
        n /= 10;
    }

    if (number == reverse)
        printf("/n%d is a palindrome/n", number);
    else
        printf("/n%d is not a palindrome/n", number);

    return 0;
}

Output:-

Input- Enter an integer:1234321 
Output- 1234321 is a palindrome`}
                    />
                    <ProgramCard
                      heading="C Program to check whether the number is Armstrong or not
                      "
                      language="C"
code={`// C program to check whether the given number is Armstrong or not

#include
#include

int main()
{
    int number, temp, remainder, result = 0, n = 0 ;

    printf(“Enter an integer: “);
    scanf(“%d”, &number);

    temp = number;

    // Finding the number of digits

    while (temp != 0)
    {
        temp /= 10;
        ++n;
    }

    temp = number;

    // Checking if the number is armstrong

    while (temp != 0)
    {
        remainder = temp%10;
        result += pow(remainder, n);
        temp /= 10;
    }

    if(result == number)
        printf(“%d is an Armstrong number/n”, number);
    else
        printf(“%d is not an Armstrong number/n”, number);

    return 0;
}

Output:-

Input- Enter an integer: 1634 
Output- 1634 is an Armstrong number 
Input- Enter an integer:156 
Output- 156 is not an Armstrong number
`}
                    />
                    <ProgramCard
                      heading="C program to check whether the given number is Perfect number or not"
                      language="C"
code={`// C program to check whether the given number is a perfect number or not

#include<stdio.h>

int main()
{
    int i, num, sum = 0;

    printf(“/nEnter a number : “);
    scanf(“%d”, &num);

    for(i=1; i<num; i++)
    {
        if(num%i == 0)
        {
            sum += i;
        }
    }

    if(sum == num)
    {
        printf(“/n%d is a Perfect Number/n”, num);
    }
    else
    {
        printf(“/n%d is not a Perfect Number/n”, num);
    }

    return 0;
}

Output:-

Input- Enter a number:35 
Output- 35 is not a Perfect Number
`}
                    />
                    <ProgramCard
                      heading="C Program to find factors of a number"
                      language="C"
code={`// C program to find factors of a number using loops

#include <stdio.h>

int main()
{
    int num;
    printf(“/nEnter the number : “);
    scanf(“%d”,&num);
    int i,count = 0;
    printf(“/nThe factors of %d are : “,num);
    for(i = 1;i <= num; i++)
    {
        if(num % i == 0)
        {
            ++count;
            printf(“%d “,i);
        }
    }
    printf(“/n/nTotal factors of %d : %d/n”,num,count);
}

Output:-

Input- Enter the number :60 
Output- The factors of are 60 :1 2 3 4 5 6 10 12 15 20 30 60 
Total factors of 60:12`}
                    />
                    </div>
                    <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                    Pattern printing programs </h5>

                     <ProgramCard
                      heading="C program to print solid rectangle star pattern "
                      language="C"
code={`/* C program to print solid rectangle star pattern */

#include <stdio.h>

/* Function to print solid rectangle*/

void solid_rectangle(int n, int m)

{

    int i, j;

    for (i = 1; i <= n; i++)

    {

        for (j = 1; j <= m; j++)

        {

            printf(“*”);

        }

        printf(“n”);

    }

}

int main()

{

    int rows, columns;

    printf(“nEnter the number of rows : “);

    scanf(“%d”, &rows);

    printf(“nEnter the number of columns : “);

    scanf(“%d”, &columns);

    printf(“n”);

    solid_rectangle(rows, columns);

    return 0;

}

Output:-

Input -
Enter the number of rows : 3
Enter the number of columns : 6

Output -
* * * * * *
* * * * * *
* * * * * *
`}
                    />
                    <ProgramCard
                      heading="C program to print hollow rectangle star pattern"
                      language="C"
code={`/* C program to print hollow rectangle star pattern */

#include <stdio.h>

/* Function to print hollow rectangle*/

void hollow_rectangle(int n, int m)

{

    int i, j;

    for (i = 1; i <= n; i++)

    {

        for (j = 1; j <= m; j++)

        {

            if (i==1 || i==n || j==1 || j==m)

                printf(“*”);

            else

                printf(” “);

        }

        printf(“n”);

    }

}

int main()

{

    int rows, columns;

    printf(“nEnter the number of rows : “);

    scanf(“%d”, &rows);

    printf(“nEnter the number of columns : “);

    scanf(“%d”, &columns);

    printf(“n”);

    hollow_rectangle(rows, columns);

    return 0;

}

Output:-

Input -
Enter the number of rows : 4
Enter the number of columns : 6
Output -
* * * * * *
*         *
*         *
* * * * * *`}
                    />
                    <ProgramCard
                      heading="C program to print half pyramid pattern using stars"
                      language="C"
code={`// C program to print half pyramid pattern using stars
#include <stdio.h>
int main()
{
    int i, j,n;
    scanf(“%d”,&n);
    for(i = 0; i < n; i++)
    {
        for(j = 0; j <= i; j++)
        {
            printf(“*”);
        }
        printf(“/n”);
    }
    return 0;
}

Output:-

5
*
* *
* * *
* * * *
* * * * *

`}                    />
                    <ProgramCard
                      heading="C Program to print half pyramid pattern using numbers"
                      language="C"
code={`/* C program – Half Pyramid Pattern Printing using numbers */
#include
int main()
{
    int i, j,n;
    scanf(“%d”,&n);
    for(i = 1; i <= n; i++)
    {
        for(j = 1; j <= i; j++)
        {
            printf(“%d “,j);
        }
        printf(“/n”);
    }
    return 0;
}

Output:-

5
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`}
                    />
                    <ProgramCard
                      heading="C Program to print palindrome pyramid pattern using numbers & stars"
                      language="C"
code={`#include<stdio.h>
int main()
{
    int n, i, j, space, count = 1, num = 0, star = 8;
    scanf(“%d”, &n);
    space = n;
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= star; j++)
            if(i + j <= star + 1)
                printf(“*”);
        num++;
        for (j = 1; j <= i; j++)
        {
            printf(“%d”, num);
            if (i > 1 && count < i)
            {
                printf(“*”);
                count++;
            }
        }
        for (j = 1; j <= star; j++)
            if(i + n <= j + n)
                printf(“*”);
        printf(“/n”);
        space–;
        count = 1;
    }
    return 0;
}

Output:-

7
*******1********
*******2*2*******
******3*3*3******
*****4*4*4*4*****
****5*5*5*5*5****
***6*6*6*6*6*6***`}
                    />
                    <ProgramCard
                      heading="C Program for solid diamond pattern using stars"
                      language="C"
code={`/* C program – solid diamond pattern printing using stars */
#include <stdio.h>

int main()
{
    int n, c, k, space = 1;

    printf(“Enter the number of rows/n”);
    scanf(“%d”, &n);

    space = n – 1;

    for (k = 1; k <= n; k++)
    {
        for (c = 1; c <= space; c++)
            printf(” “);
        space–;
        for (c = 1; c <= 2*k-1; c++)
            printf(“*”);
        printf(“/n”);
    }
    space = 1;

    for (k = 1; k <= n – 1; k++)
    {
        for (c = 1; c <= space; c++)
            printf(” “);
        space++;
        for (c = 1 ; c <= 2*(n-k)-1; c++)
            printf(“*”);
        printf(“/n”);
    }	
    return 0;
}

Output:-

Enter the number of rows : 5

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *`}
                    />
                    <ProgramCard
                      heading="C Program to print diamond pattern using numbers and stars
                      "
                      language="C"
code={`/* C program for diamond pattern printing using numbers and stars */

#include <stdio.h>

int main()

{

    int i,j,count=1,n;

    printf(“Enter a numbern”);

    scanf(“%d”,&n);

    for(i=1;i<=n;i++)

    {

        for(j=1;j<=i;j++)

        {

            if(j<i)

                printf(“%d*”,count++);

            else

                printf(“%d”,count++);

        }

        printf(“n”);

    }

    count=count-n;

    for(i=n;i>=1;i–)

    { for(j=1;j<=i;j++)

    {

        if(j<i)

            printf(“%d*”,count++);

        else

            printf(“%d”,count++);

    }

     count=(count+1)-2*i;

     printf(“n”);

    }

    return 0;

}

Output:-

Input -
4
Output -
1
2*3
4*5*6
7*8*9*10
7*8*9*10
4*5*6
2*3
1
`}
                    />
                    <ProgramCard
                      heading="C program to print pascal’s triangle "
                      language="C"
code={`//  C program to print pascal’s triangle

#include
int main()
{
    int rows, coef = 1, space, i, j;
    printf(“/nEnter the number of rows : “);
    scanf(“%d”,&rows);
    printf(“/n”);

    for(i=0; i<rows; i++)
    {
        for(space=1; space <= rows-i; space++)
            printf(” “);

        for(j=0; j <= i; j++)
        {
            if (j==0 || i==0)
                coef = 1;
            else
                coef = coef*(i-j+1)/j;

            printf(“%4d”, coef);
        }
        printf(“/n/n”);
    }

    return 0;
}

Output:-

Enter the number of rows : 5
      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1`}
                    />
                    </div>
                    <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                    Pattern printing programs </h5>
                    
                    <ProgramCard
                      heading="C Program to replace all 0's with 1 in a given integer."
                      language="C"
code={`// C program to replace all 0’s with 1 in a given integer
#include<stdio.h>

int replace(long int number)
{
    // Base case for recursion termination
    if (number == 0)
        return 0;
    // Extract the last digit and change it if needed
    int digit = number % 10;
    if (digit == 0)
        digit = 1;
    // Convert remaining digits and append the last digit
    return replace(number/10) * 10 + digit;
}

int Convert(long int number)
{
    if (number == 0)
        return 1;
    else
        return replace(number);
}

int main()
{
    long int number;
    printf(“/nEnter the number : “);
    scanf(“%d”, &number);
    printf(“/nNumber after replacement : %dn”, Convert(number));
    return 0;
}

Output:-

Enter the number : 80150
The number after replacement : 81151
`}
                    />
                    <ProgramCard
                      heading="C Program to convert the given binary number into decimal number"
                      language="C"
code={`// C program to convert a binary number into decimal number

#include
#include

int binary_to_decimal(long int n)
{
    int decimal = 0, i = 0, remainder;
    while (n!=0)
    {
        remainder = n%10;
        n /= 10;
        decimal += remainder*pow(2,i);
        ++i;
    }
    return decimal;
}

int main()
{
    long int n;
    printf(“Enter a binary number: “);
    scanf(“%ld”, &n);
    printf(“/nDecimal number : %d/n “, binary_to_decimal(n));
    return 0;
}

Output:-
Input- Enter a binary number:11111111 
Output- Decimal number :255`}
                    />
                    <ProgramCard
                      heading="C Program to convert a number from decimal to binary "
                      language="C"
code={`#include <stdio.h>
long int decimal_to_binary(int n)
{
    long int binary = 0;
    int remainder, i, flag = 1;
    for(i = 1; n != 0; i = i * 10)
    {
        remainder = n % 2;
        n /= 2;
        binary += remainder * i;
    }
    return binary;
}
int main()
{
    int n;
    printf("Enter a decimal number: ");
    scanf("%d", &n);
    printf("Equivalent binary number: %d/n", decimal_to_binary(n));
    return 0;
}

Output
Input- Enter a decimal number:255 
Output- Equivalent binary number: 11111111
`}
                    />
                    <ProgramCard
                      heading="C Program to convert a number from decimal to octal
                      "
                      language="C"
code={`#include <stdio.h>
#include <math.h>

int decimal_to_octal(int decimal);
int main()
{
    int decimal;

    printf(“/nEnter a decimal number: “);
    scanf(“%d”, &decimal);

    printf(“/nEquivalent octal number : %d/n”, decimal_to_octal(decimal));

    return 0;
}

int decimal_to_octal(int decimal)
{
    int octal = 0, i = 1;

    while (decimal != 0)
    {
        octal += (decimal % 8) * i;
        decimal /= 8;
        i *= 10;
    }

    return octal;
}

Output:-

Input- Enter a decimal number:200 
Output- Equivalent octal number :310`}
                    />
                    <ProgramCard
                      heading="C Program to convert a number from octal to decimal
                      "
                      language="C"
code={`#include
#include

long int octal_to_decimal(int octal)
{
    int decimal = 0, i = 0;

    while(octal != 0)
    {
        decimal += (octal%10) * pow(8,i); // multiplying with powers of 8
        ++i;
        octal/=10;  // Divide by 10 to make it as decimal
    }

    i = 1;

    return decimal;
}

int main()
{
    int octal;

    printf(“/nEnter an octal number: “);
    scanf(“%d”, &octal);

    printf(“/nDecimal Equivalent : %d/n”,octal_to_decimal(octal));

    return 0;
}

Output:-

Input- Enter an octal number: 350 
Output- Decimal Equivalent :232

`}
                    />
                    <ProgramCard
                      heading="C Program to convert a number from binary to octal"
                      language="C"
code={`#include <stdio.h>
#include <math.h>

int binary_to_octal(long int binary)
{
    int octal = 0, decimal = 0, i = 0;

    while(binary != 0)
    {
        decimal += (binary%10) * pow(2,i);
        ++i;
        binary/=10;
    }

    i = 1;

    while (decimal != 0)
    {
        octal += (decimal % 8) * i;
        decimal /= 8;
        i *= 10;
    }

    return octal;
}

int main()
{
    long int binary;

    printf(“/nEnter a binary number: “);
    scanf(“%lld”, &binary);

    printf(“/nOctal Equivalent : %d/n”, binary_to_octal(binary));

    return 0;
}

Output:-
Input- Enter a binary number:1111 
Output- Octal Equivalent :17
`}
                    />
                    <ProgramCard
                      heading="C Program to convert a number from octal to binary
                      "
                      language="C"
code={`#include <stdio.h>
#include <math.h>

long long octal_to_binary(int octal)
{
    int decimal = 0, i = 0;
    long long binary = 0;

    while(octal != 0)
    {
        decimal += (octal%10) * pow(8,i);
        ++i;
        octal/=10;
    }

    i = 1;

    while (decimal != 0)
    {
        binary += (decimal % 2) * i;
        decimal /= 2;
        i *= 10;
    }

    return binary;
}


int main()
{
    int octal;

    printf(“/nEnter an octal number: “);
    scanf(“%d”, &octal);

    printf(“/nBinary Equivalent : %d/n”, octal_to_binary(octal));

    return 0;
}

Output:-

Input- Enter an octal number:67 
Output- Binary Equivalent :110111
`}
                    />
                    <ProgramCard
                      heading="C program to find the maximum number of handshakes"
                      language="C"
code={`// C program to find the maximum number of handshakes

#include
int main()
{
    //fill the code
    int num;
    scanf(“%d”,&num);
    int total = num * (num-1) / 2; // Combination nC2
    printf(“%d”,total);
    return 0;
}

Output:-

15
105`}
                    />
                    <ProgramCard
                      heading="C program to find the number of days in a given month"
                      language="C"
code={`// C program to find the number of days in a given month

#include<stdio.h>
int main()
{
    //fill the code
    int year, month;
    scanf(“%d %d”,&month,&year);
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
        printf(“Number of days is 31”);
    else if((month == 2) && (year%4 == 0) || ((year%100 == 0) &&(year%400 == 0)))
    {
        printf(“Number of days is 29”);
    }
    else if(month == 2)
    {
        printf(“Number of days is 28”);
    }	
    else
        printf(“Number of days is 30 “);
    return 0;
}

Output:-

3
1996
Number of days is 31`}
                    />
                    </div>
                    <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                     </h5>
                     C programs on Arrays
                    <ProgramCard
                      heading="C Program to insert an element in an array
                      "
                      language="C"
code={`/* C program to insert an element in an array */
#include <stdio.h>
int main()
{
    int n;
    scanf(“%d”,&n);
    int arr[n];
    int i;
    for(i = 0; i < n; i++)
    {
        scanf(“%d”,&arr[i]);
    }
    int pos;
    scanf(“%d”,&pos);
    int ele;
    scanf(“%d”,&ele);
    if(pos > n)
        printf(“Invalid Input”);
    else
    {
        for (i = n – 1; i >= pos – 1; i–)
            arr[i+1] = arr[i];

        arr[pos-1] = ele;

        printf(“Array after insertion is:/n”);

        for (i = 0; i <= n; i++)
            printf(“%d/n”, arr[i]);
    }

    return 0;
}

Output:-

5 (size of the array)
1 (array elements)
2
3
4
5
4 (Position)
10 (Element to be inserted)
Array after insertion is : 1 2 3 10 4 5`}
                    />
                    <ProgramCard
                      heading="C program to delete an element in an array"
                      language="C"
code={`/* C program to delete an element in an array */

#include <stdio.h>

int main()
{
    int array[100], position, c, n;

    printf(“Enter the number of elements of the array : “);
    scanf(“%d”, &n);

    printf(“/nInput the array elements : “);

    for (c = 0; c < n; c++)
        scanf(“%d”, &array[c]);

    printf(“/nEnter the position : “);
    scanf(“%d”, &position);

    if (position >= n+1)
        printf(“/nDeletion not possible./n”);
    else
    {
        for (c = position – 1; c < n – 1; c++)
            array[c] = array[c+1];

        printf(“/nArray after deletion : “);

        for (c = 0; c < n – 1; c++)
            printf(“%d/n”, array[c]);
    }

    return 0;
}

Output:-

5 (size of the array)
1 (array elements)
2
3
4
5
4 (Position to be deleted)
Array after deletion is : 1 2 3 5
`}
                    />
                    <ProgramCard
                      heading="C program to search an element in an array"
                      language="C"
code={`// C program to search an element in an array

#include <stdio.h>

int main()
{
    int array[100], ele, c, n;

    printf(“Enter the number of elements of the array : “);
    scanf(“%d”, &n);

    printf(“/nInput the array elements : “);

    for (c = 0; c < n; c++)
        scanf(“%d”, &array[c]);

    printf(“/nEnter element : “);
    scanf(“%d”, &ele);
    for(c = 0; c < n ; c++)
    {
        if(array[c] == ele)
        {
            printf(“/nElement found/n”);
        }
    }

    return 0;
}

Output:-

5 (size of the array)
1 (array elements)
2
3
4
5
5 (Element to be searched)
Element found`}
                    />
                    <ProgramCard
                      heading="C program to find the smallest and largest element in an array"
                      language="C"
code={`/ C program to find the smallest and largest element in an array

#include<stdio.h>

int main()
{
    int a[50],i,n,large,small;
    printf(“/nEnter the number of elements : “);
    scanf(“%d”,&n);
    printf(“/nInput the array elements : “);
    for(i=0;i<n;++i)
        scanf(“%d”,&a[i]);

    large=small=a[0];

    for(i=1;i<n;++i)
    {
        if(a[i]>large)
            large=a[i];

        if(a[i]<small)
            small=a[i];
    }

    printf(“/nThe smallest element is %d/n”,small);
    printf(“/nThe largest element is %d/n”,large);

    return 0;
}

Output:-

Enter the number of elements : 5
Input the array elements : 1 2 3 4 5
The smallest element is 1
The largest element is 5`}
                    /><ProgramCard
                    heading=""
                    language="C"
code={``}
                  />
                  <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    <ProgramCard
                      heading=""
                      language="C"
code={``}
                    />
                    
                       

                     </div>
                </div>
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

export default CPgramQuestions;