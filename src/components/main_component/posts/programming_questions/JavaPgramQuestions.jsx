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
import Technologies from "../../../right_section/Technologies";

class JavaPgramQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
       <div className="container-fluids ">
          <HeaderCard
            title="Java Programming Examples Question"
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
                  <h3>Java Road Map</h3>
                </div>
              </div>
              <ul class="list-group list-group-flush">
              <li className="list-group-item">Java Introduction</li>
                <li className="list-group-item">Variables and Data Types</li>
                <li className="list-group-item">Java Operators</li>
                <li className="list-group-item">If-else</li>

                <li className="list-group-item">Switch-Case</li>
                <li className="list-group-item">For loop</li>
                <li className="list-group-item">While loop</li>
                <li className="list-group-item">do-while loop</li>
                <li className="list-group-item">Continue statement</li>
                <li className="list-group-item">Break statement</li>
                <h1>Advanced</h1>
                <li className="list-group-item">Constructor</li>
                <li className="list-group-item">Static keyword</li>
                <li className="list-group-item">Java Inheritance</li>
                <li className="list-group-item">Polymorphism</li>
                <li className="list-group-item">Abstract class</li>
                <li className="list-group-item">Interface</li>
                <li className="list-group-item">Encapsulation</li>
                <li className="list-group-item">Packages</li>
                <li className="list-group-item">Exception handling</li>

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
                      Basic Java Programming examples
                    </h5>
                    <ProgramCard
                      heading="Run your First Java Program"
                      language="Java"
code={`public class FirstJavaProgram {
  public static void main(String[] args){
    System.out.println("This is my first program in java");
  }//End of main
}//End of FirstJavaProgram Class

Output: This is my first program in java

`}
                     />
                     <ProgramCard
                      heading="Java Program to Add two Numbers
                      "
                      language="Java"
code={`public class AddTwoNumbers {

  public static void main(String[] args) {
       
     int num1 = 5, num2 = 15, sum;
     sum = num1 + num2;

     System.out.println("Sum of these numbers: "+sum);
  }
}

Output:

Sum of these numbers: 20`}
                     />
                     <ProgramCard
                      heading="Java Program to check Even or Odd number
                      "
                      language="Java"
code={`import java.util.Scanner;

class CheckEvenOdd
{
  public static void main(String args[])
  {
    int num;
    System.out.println("Enter an Integer number:");

    //The input provided by user is stored in num
    Scanner input = new Scanner(System.in);
    num = input.nextInt();

    /* If number is divisible by 2 then it's an even number
     * else odd number*/
    if ( num % 2 == 0 )
        System.out.println("Entered number is even");
     else
        System.out.println("Entered number is odd");
  }
}

Output 1:

Enter an Integer number:
78
Entered number is even

Output 2:

Enter an Integer number:
77
Entered number is odd`}
                     />
                     <ProgramCard
                      heading="Java Program to Add two Binary Numbers
                      "
                      language="Java"
code={`import java.util.Scanner;
public class JavaExample {
   public static void main(String[] args)
   {
	//Two variables to hold two input binary numbers	 
	long b1, b2;
	int i = 0, carry = 0;

	//This is to hold the output binary number
	int[] sum = new int[10];

	//To read the input binary numbers entered by user
	Scanner scanner = new Scanner(System.in);

	//getting first binary number from user
	System.out.print("Enter first binary number: ");
	b1 = scanner.nextLong();
	//getting second binary number from user
	System.out.print("Enter second binary number: ");
	b2 = scanner.nextLong();

	//closing scanner after use to avoid memory leak
	scanner.close();
	while (b1 != 0 || b2 != 0) 
	{
		sum[i++] = (int)((b1 % 10 + b2 % 10 + carry) % 2);
		carry = (int)((b1 % 10 + b2 % 10 + carry) / 2);
		b1 = b1 / 10;
		b2 = b2 / 10;
	}
	if (carry != 0) {
		sum[i++] = carry;
	}
	--i;
	System.out.print("Output: ");
	while (i >= 0) {
		System.out.print(sum[i--]);
	}
	System.out.print("/n");  
   }
}

Output:

Enter first binary number: 11100
Enter second binary number: 10101
Output: 110001`}
                     />
                     <ProgramCard
                      heading="Java Program to Multiply Two Numbers
                      "
                      language="Java"
code={`import java.util.Scanner;

public class Demo {

    public static void main(String[] args) {

        /* This reads the input provided by user
         * using keyboard
         */
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter first number: ");

        // This method reads the number provided using keyboard
        int num1 = scan.nextInt();
        
        System.out.print("Enter second number: ");
        int num2 = scan.nextInt();

        // Closing Scanner after the use
        scan.close();
        
        // Calculating product of two numbers
        int product = num1*num2;
        
        // Displaying the multiplication result
        System.out.println("Output: "+product);
    }
}

Output:

Enter first number: 15
Enter second number: 6
Output: 90`}
                     />
                     <ProgramCard
                      heading="Java Program to check Leap Year
                      "
                      language="Java"
code={`import java.util.Scanner;
public class Demo {

    public static void main(String[] args) {

    	int year;
    	Scanner scan = new Scanner(System.in);
    	System.out.println("Enter any Year:");
    	year = scan.nextInt();
    	scan.close();
        boolean isLeap = false;

        if(year % 4 == 0)
        {
            if( year % 100 == 0)
            {
                if ( year % 400 == 0)
                    isLeap = true;
                else
                    isLeap = false;
            }
            else
                isLeap = true;
        }
        else {
            isLeap = false;
        }

        if(isLeap==true)
            System.out.println(year + " is a Leap Year.");
        else
            System.out.println(year + " is not a Leap Year.");
    }
}

Output:

Enter any Year: 
2001
2001 is not a Leap Year.`}
                     />
                     <ProgramCard
                      heading="Java Program to check Vowel or Consonant using Switch Case
                      "
                      language="Java"
code={`import java.util.Scanner;
class JavaExample
{
   public static void main(String[ ] arg)
   {
	boolean isVowel=false;;
	Scanner scanner=new Scanner(System.in);
	System.out.println("Enter a character : ");
	char ch=scanner.next().charAt(0); 
	scanner.close();
	switch(ch)
	{
	   case 'a' :
	   case 'e' :
    	   case 'i' :
	   case 'o' :
	   case 'u' :
	   case 'A' :
	   case 'E' :
	   case 'I' :
	   case 'O' :
	   case 'U' : isVowel = true;
	}
	if(isVowel == true) {
	   System.out.println(ch+" is  a Vowel");
	}
	else {
	   if((ch>='a'&&ch<='z')||(ch>='A'&&ch<='Z'))
		System.out.println(ch+" is a Consonant");
	   else
		System.out.println("Input is not an alphabet");		
        }
   }
}

Output 1:

Enter a character : 
A
A is  a Vowel

Output 2:

Enter a character : 
P
P is a Consonant

Output 3:

Enter a character : 
9
Input is not an alphabet`}
                     />
                     <ProgramCard
                      heading="Java Program to Calculate Compound Interest
                      "
                      language="Java"
code={`public class JavaExample {

  public void calculate(int p, int t, double r, int n) {
      double amount = p * Math.pow(1 + (r / n), n * t);
      double cinterest = amount - p;
      System.out.println("Compound Interest after " + t + " years: "+cinterest);
      System.out.println("Amount after " + t + " years: "+amount);
  }
  public static void main(String args[]) {
    JavaExample obj = new JavaExample();
    obj.calculate(2000, 5, .08, 12);
  }
}

Output:

Compound Interest after 5 years: 979.6914166032102
Amount after 5 years: 2979.69141660321`}
                     />

                     <ProgramCard
                      heading="Java Program to Calculate Simple Interest
                      "
                      language="Java"
code={`import java.util.Scanner;
public class JavaExample
{
    public static void main(String args[]) 
    {
        float p, r, t, sinterest;
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter the Principal : ");
        p = scan.nextFloat();
        System.out.print("Enter the Rate of interest : ");
        r = scan.nextFloat();
        System.out.print("Enter the Time period : ");
        t = scan.nextFloat();
        scan.close();
        sinterest = (p * r * t) / 100;
        System.out.print("Simple Interest is: " +sinterest);
    }
}

Output:

Enter the Principal : 2000
Enter the Rate of interest : 6
Enter the Time period : 3
Simple Interest is: 360.0
`}
                     />
                     <ProgramCard
                      heading="Java Program to Find Quotient and Remainder
                      "
                      language="Java"
code={`public class JavaExample {
  public static void main(String[] args) {
      int num1 = 15, num2 = 2;
      int quotient = num1 / num2;
      int remainder = num1 % num2;
      System.out.println("Quotient is: " + quotient);
      System.out.println("Remainder is: " + remainder);
  }
}`}
                     />
                     <ProgramCard
                      heading="Java Program to Calculate Power of a Number
                      "
                      language="Java"
code={`public class JavaExample {
  public static void main(String[] args) {
    //Here number is the base and p is the exponent
      int number = 2, p = 5;
      long result = 1;
      
      //Copying the exponent value to the loop counter
      int i = p;
      for (;i != 0; --i)
      {
          result *= number;
      }
      
      //Displaying the output
      System.out.println(number+"^"+p+" = "+result);
  }
}`}
                     />
                     </div>

                     <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                    Java Strings Programs                    </h5>

                     <ProgramCard
                      heading="Program to convert char to String
                      "
                      language="Java"
code={`class CharToStringDemo
{
   public static void main(String args[])
   {
      // Method 1: Using toString() method
      char ch = 'a';
      String str = Character.toString(ch);
      System.out.println("String is: "+str);
 
      // Method 2: Using valueOf() method
      String str2 = String.valueOf(ch);
      System.out.println("String is: "+str2);
   }
}

Output:

String is: a
String is: a`}
                     />
                     <ProgramCard
                      heading="Program to Convert String to Char
                      "
                      language="Java"
code={`class StringToCharDemo
{
   public static void main(String args[])
   {
      // Using charAt() method
      String str = "Hello";
      for(int i=0; i<str.length();i++){
        char ch = str.charAt(i);
        System.out.println("Character at "+i+" Position: "+ch);
      } 
   }
}

Output:

Character at 0 Position: H
Character at 1 Position: e
Character at 2 Position: l
Character at 3 Position: l
Character at 4 Position: o
`}
                     />
                     <ProgramCard
                      heading="Java Program to find duplicate Characters in a String
                      "
                      language="Java"
code={`import java.util.HashMap;
import java.util.Map;
import java.util.Set;
 
public class Details {
 
  public void countDupChars(String str){
 
    //Create a HashMap 
    Map<Character, Integer> map = new HashMap<Character, Integer>(); 
 
    //Convert the String to char array
    char[] chars = str.toCharArray();
 
    /* logic: char are inserted as keys and their count
     * as values. If map contains the char already then
     * increase the value by 1
     */
    for(Character ch:chars){
      if(map.containsKey(ch)){
         map.put(ch, map.get(ch)+1);
      } else {
         map.put(ch, 1);
        }
    }
 
    //Obtaining set of keys
    Set<Character> keys = map.keySet();
 
    /* Display count of chars if it is
     * greater than 1. All duplicate chars would be 
     * having value greater than 1.
     */
    for(Character ch:keys){
      if(map.get(ch) > 1){
        System.out.println("Char "+ch+" "+map.get(ch));
      }
    }
  }
 
  public static void main(String a[]){
    Details obj = new Details();
    System.out.println("String: Datacode");
    System.out.println("-------------------------");
    obj.countDupChars("Datacode");
  
    System.out.println("\nString: Datacode.in");
    System.out.println("-------------------------");
    obj.countDupChars("Datacode.in");
 
    System.out.println("\nString: #@$@!#$%!!%@");
    System.out.println("-------------------------");
    obj.countDupChars("#@$@!#$%!!%@");
  }
}

Output:

String: Datacode
-------------------------
Char e 1
Char D 2
Char c 1
Char a 2
Char o 1
Char t 1



String: Datacode.in
-------------------------
Char e 1
Char D 2
Char c 1
Char a 2
Char o 1
Char t 1
Char i 1
Char n 1

String: #@$@!#$%!!%@
-------------------------
Char # 2
Char ! 3
Char @ 3
Char $ 2
Char % 2`}
                     />
                     <ProgramCard
                      heading="java program to check palindrome string using Stack"
                      language="Java"
code={`import java.util.Stack;
import java.util.Scanner;
class PalindromeTest {

    public static void main(String[] args) {

    	System.out.print("Enter any string:");
        Scanner in=new Scanner(System.in);
        String inputString = in.nextLine();
        Stack stack = new Stack();

        for (int i = 0; i < inputString.length(); i++) {
            stack.push(inputString.charAt(i));
        }

        String reverseString = "";

        while (!stack.isEmpty()) {
            reverseString = reverseString+stack.pop();
        }

        if (inputString.equals(reverseString))
            System.out.println("The input String is a palindrome.");
        else
            System.out.println("The input String is not a palindrome.");

    }
}

Output 1:

Enter any string:abccba
The input String is a palindrome.
`}
                     />
                     <ProgramCard
                      heading="Java Program to Sort Strings in an Alphabetical Order
                      "
                      language="Java"
code={`import java.util.Scanner;
public class JavaExample
{
    public static void main(String[] args) 
    {
        int count;
        String temp;
        Scanner scan = new Scanner(System.in);
        
        //User will be asked to enter the count of strings 
        System.out.print("Enter number of strings you would like to enter:");
        count = scan.nextInt();
        
        
        String str[] = new String[count];
        Scanner scan2 = new Scanner(System.in);
        
        //User is entering the strings and they are stored in an array
        System.out.println("Enter the Strings one by one:");
        for(int i = 0; i < count; i++)
        {
            str[i] = scan2.nextLine();
        }
        scan.close();
        scan2.close();
        
        //Sorting the strings
        for (int i = 0; i < count; i++) 
        {
            for (int j = i + 1; j < count; j++) { 
                if (str[i].compareTo(str[j])>0) 
                {
                    temp = str[i];
                    str[i] = str[j];
                    str[j] = temp;
                }
            }
        }
        
        //Displaying the strings after sorting them based on alphabetical order
        System.out.print("Strings in Sorted Order:");
        for (int i = 0; i <= count - 1; i++) 
        {
            System.out.print(str[i] + ", ");
        }
    }
}`}
                     />
                     <ProgramCard
                     heading="Java Program to reverse words in a String
                     "
                     language="Java"
code={`public class Example
{
   public void reverseWordInMyString(String str)
   {
	/* The split() method of String class splits
	 * a string in several strings based on the
	 * delimiter passed as an argument to it
	 */
	String[] words = str.split(" ");
	String reversedString = "";
	for (int i = 0; i < words.length; i++)
        {
           String word = words[i]; 
           String reverseWord = "";
           for (int j = word.length()-1; j >= 0; j--) 
	   {
		/* The charAt() function returns the character
		 * at the given position in a string
		 */
		reverseWord = reverseWord + word.charAt(j);
	   }
	   reversedString = reversedString + reverseWord + " ";
	}
	System.out.println(str);
	System.out.println(reversedString);
   }
   public static void main(String[] args) 
   {
	Example obj = new Example();
	obj.reverseWordInMyString("Datacode.in");
   }
}

Output:


Welcome to Datacode.in
emocleW ot ni.edocataD
`}
                    />
                    <ProgramCard
                    heading="Java program to perform Bubble Sort on Strings
                    "
                    language="Java"
code={`public class JavaExample {
  public static void main(String []args) {
 String str[] = { "Ajeet", "Steve", "Rick", "Becky", "Mohan"};
 String temp;
 System.out.println("Strings in sorted order:");
 for (int j = 0; j < str.length; j++) {
       for (int i = j + 1; i < str.length; i++) {
   // comparing adjacent strings
   if (str[i].compareTo(str[j]) < 0) {
     temp = str[j];
     str[j] = str[i];
     str[i] = temp;
   }
    }
    System.out.println(str[j]);
 }
  }
}`}
                   />
                   <ProgramCard
                     heading="Java program to find the occurrence of a character in a string
                     "
                     language="Java"
code={`class JavaExample {  

  static void countEachChar(String str) 
  { 
 //ASCII values ranges upto 256
 int counter[] = new int[256]; 

 //String length
 int len = str.length(); 

 /* This array holds the occurrence of each char, For example
  * ASCII value of A is 65 so if A is found twice then 
  * counter[65] would have the value 2, here 65 is the ASCII value
  * of A
  */
 for (int i = 0; i < len; i++) 
   counter[str.charAt(i)]++; 

 // We are creating another array with the size of String
 char array[] = new char[str.length()]; 
       for (int i = 0; i < len; i++) { 
    array[i] = str.charAt(i); 
    int flag = 0; 
    for (int j = 0; j <= i; j++) { 

   /* If a char is found in String then set the flag 
    * so that we can print the occurrence
    */
   if (str.charAt(i) == array[j])  
     flag++;                 
    } 

    if (flag == 1)  
       System.out.println("Occurrence of char " + str.charAt(i)
    + " in the String is:" + counter[str.charAt(i)]);             
 } 
  } 
  public static void main(String[] args) 
  {  
 String str = "beginnersbook"; 
 countEachChar(str); 
  } 
}`}
                    />
                    <ProgramCard
                    heading="Java Program to Count Vowels and Consonants in a String
                    "
                    language="Java"
code={`public class JavaExample {

  public static void main(String[] args) {
      String str = "Datacode";
      int vcount = 0, ccount = 0;

      //converting all the chars to lowercase
      str = str.toLowerCase();
      for(int i = 0; i < str.length(); i++) { char ch = str.charAt(i); if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') { vcount++; } else if((ch >= 'a'&& ch <= 'z')) {
              ccount++;
          }
      }
      System.out.println("Number of Vowels: " + vcount);
      System.out.println("Number of Consonants: " + ccount);
  }
}`}
                   />
                   </div>

                   <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                    Java Array Programs                    </h5>

                   <ProgramCard
                     heading="Java Program to Calculate average using Array
                     "
                     language="Java"
code={`public class JavaExample {

  public static void main(String[] args) {
      double[] arr = {19, 12.89, 16.5, 200, 13.7};
      double total = 0;

      for(int i=0; i<arr.length; i++){
        total = total + arr[i];
      }


      /* arr.length returns the number of elements 
       * present in the array
       */
      double average = total / arr.length;
      
      /* This is used for displaying the formatted output
       * if you give %.4f then the output would have 4 digits
       * after decimal point.
       */
      System.out.format("The average is: %.3f", average);
  }
}

Output:

The average is: 52.418`}
                    />
                    <ProgramCard
                    heading="Java program to sum the elements of an array
                    "
                    language="Java"
code={`class SumOfArray{
  public static void main(String args[]){
     int[] array = {10, 20, 30, 40, 50, 10};
     int sum = 0;
     //Advanced for loop
     for( int num : array) {
         sum = sum+num;
     }
     System.out.println("Sum of array elements is:"+sum);
  }
}

Output:

Sum of array elements is:160`}
                   />
                   <ProgramCard
                     heading="Java Program to reverse the Array
                     "
                     language="Java"
code={`import java.util.Scanner;
public class Example
{
   public static void main(String args[])
   {
	int counter, i=0, j=0, temp;
	int number[] = new int[100];
	Scanner scanner = new Scanner(System.in);
	System.out.print("How many elements you want to enter: ");
	counter = scanner.nextInt();

	/* This loop stores all the elements that we enter in an 
	 * the array number. First element is at number[0], second at 
	 * number[1] and so on
	 */
	for(i=0; i<counter; i++)
	{
	    System.out.print("Enter Array Element"+(i+1)+": ");
	    number[i] = scanner.nextInt();
	}

	/* Here we are writing the logic to swap first element with
	 * last element, second last element with second element and
	 * so on. On the first iteration of while loop i is the index 
	 * of first element and j is the index of last. On the second
	 * iteration i is the index of second and j is the index of 
	 * second last.
	 */
	j = i - 1;     
	i = 0;         
	scanner.close();
	while(i<j)
	{
  	   temp = number[i];
	   number[i] = number[j];
	   number[j] = temp;
	   i++;
	   j--;
	}

	System.out.print("Reversed array: ");
	for(i=0; i<counter; i++)
	{
	   System.out.print(number[i]+ "  ");
	}       
   }
}

Output:

How many elements you want to enter: 5
Enter Array Element1: 11
Enter Array Element2: 22
Enter Array Element3: 33
Enter Array Element4: 44
Enter Array Element5: 55
Reversed array: 55  44  33  22  11`}
                    />
                    <ProgramCard
                    heading="Java Program to Sort an Array in Ascending Order
                    "
                    language="Java"
code={`import java.util.Scanner;
public class JavaExample 
{
    public static void main(String[] args) 
    {
    	int count, temp;
    	
    	//User inputs the array size
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter number of elements you want in the array: ");
        count = scan.nextInt();
    
        int num[] = new int[count];
        System.out.println("Enter array elements:");
        for (int i = 0; i < count; i++) 
        {
            num[i] = scan.nextInt();
        }
        scan.close();
        for (int i = 0; i < count; i++) 
        {
            for (int j = i + 1; j < count; j++) { 
                if (num[i] > num[j]) 
                {
                    temp = num[i];
                    num[i] = num[j];
                    num[j] = temp;
                }
            }
        }
        System.out.print("Array Elements in Ascending Order: ");
        for (int i = 0; i < count - 1; i++) 
        {
            System.out.print(num[i] + ", ");
        }
        System.out.print(num[count - 1]);
    }
}`}
                   />
                   <ProgramCard
                     heading=" convert a char array to a string in Java"
                     language="Java"
code={`class CharArrayToString
{
   public static void main(String args[])
   {
      // Method 1: Using String object
      char[] ch = {'g', 'o', 'o', 'd', ' ', 'm', 'o', 'r', 'n', 'i', 'n', 'g'};
      String str = new String(ch);
      System.out.println(str);
 
      // Method 2: Using valueOf method
      String str2 = String.valueOf(ch);
      System.out.println(str2);
   }
}`}
                    /><ProgramCard
                    heading="Java Program to Add Two Matrix using Multi-dimensional Arrays
                    "
                    language="Java"
code={`public class JavaExample {
  public static void main(String[] args) {
      int rows = 2, columns = 4;
      
      // Declaring the two matrices as multi-dimensional arrays
      int[][] MatrixA = { {1, 1, 1, 1}, {2, 3, 5, 2} };
      int[][] MatrixB = { {2, 3, 4, 5}, {2, 2, 4, -4} };
      
      /* Declaring a matrix sum, that will be the sum of MatrixA
       * and MatrixB, the sum matrix will have the same rows and
       * columns as the given matrices.
       */
      int[][] sum = new int[rows][columns];
      for(int i = 0; i < rows; i++) {
          for (int j = 0; j < columns; j++) {
              sum[i][j] = MatrixA[i][j] + MatrixB[i][j];
          }
      }
      // Displaying the sum matrix
      System.out.println("Sum of the given matrices is: ");
      for(int i = 0; i < rows; i++) {
          for (int j = 0; j < columns; j++) {
              System.out.print(sum[i][j] + "    ");
          }
          System.out.println();
      }
  }
}`}
                   />
                   </div>
                   <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                    Java Recursion Programs                    </h5>

                   <ProgramCard
                     heading=" Java program to Reverse a number using recursion
                     "
                     language="Java"
code={`import java.util.Scanner;
class RecursionReverseDemo
{
   //A method for reverse
   public static void reverseMethod(int number) {
       if (number < 10) {
	   System.out.println(number);
	   return;
       }
       else {
           System.out.print(number % 10);
           //Method is calling itself: recursion
           reverseMethod(number/10);
       }
   }
   public static void main(String args[])
   {
	int num=0;
	System.out.println("Input your number and press enter: ");
	Scanner in = new Scanner(System.in);
	num = in.nextInt();
	System.out.print("Reverse of the input number is:");
	reverseMethod(num);
	System.out.println();
   }
}

Output:

Input your number and press enter: 
5678901
Reverse of the input number is:1098765`}
                    />
                    <ProgramCard
                    heading="java program to check palindrome string using recursion
                    "
                    language="Java"
code={`package beginnersbook.com;
import java.util.Scanner;
class PalindromeCheck
{
    //My Method to check
    public static boolean isPal(String s)
    {   // if length is 0 or 1 then String is palindrome
        if(s.length() == 0 || s.length() == 1)
            return true; 
        if(s.charAt(0) == s.charAt(s.length()-1))
        /* check for first and last char of String:
         * if they are same then do the same thing for a substring
         * with first and last char removed. and carry on this
         * until you string completes or condition fails
         * Function calling itself: Recursion
         */
        return isPal(s.substring(1, s.length()-1));

        /* If program control reaches to this statement it means
         * the String is not palindrome hence return false.
         */
        return false;
    }

    public static void main(String[]args)
    {
    	//For capturing user input
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the String for check:");
        String string = scanner.nextLine();
        /* If function returns true then the string is
         * palindrome else not
         */
        if(isPal(string))
            System.out.println(string + " is a palindrome");
        else
            System.out.println(string + " is not a palindrome");
    }
}

Output:

Enter the String for check:
qqaabb
qqaabb is not a palindrome

Output 2:

Enter the String for check:
cocoococ
cocoococ is a palindrome`}
                   />
                   <ProgramCard
                     heading="Java Program to Reverse a String using Recursion
                     "
                     language="Java"
code={`import java.util.Scanner;
public class JavaExample {

    public static void main(String[] args) {
        String str;
        System.out.println("Enter your username: ");
        Scanner scanner = new Scanner(System.in);
        str = scanner.nextLine();
        scanner.close();
        String reversed = reverseString(str);
        System.out.println("The reversed string is: " + reversed);
    }

    public static String reverseString(String str)
    {
        if (str.isEmpty())
            return str;
        //Calling Function Recursively
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}

Output:

Enter your username: 
How are you doing?
The reversed string is: ?gniod uoy era woH
`}
                    />
                    <ProgramCard
                    heading="java program to find factorial of a given number using recursion
                    "
                    language="Java"
code={`import java.util.Scanner;
class FactorialDemo{
   public static void main(String args[]){
      //Scanner object for capturing the user input
      Scanner scanner = new Scanner(System.in);
      System.out.println("Enter the number:");
      //Stored the entered value in variable
      int num = scanner.nextInt();
      //Called the user defined function fact
      int factorial = fact(num);
      System.out.println("Factorial of entered number is: "+factorial);
   }
   static int fact(int n)
   {
       int output;
       if(n==1){
         return 1;
       }
       //Recursion: Function calling itself!!
       output = fact(n-1)* n;
       return output;
   }
}

Output:

Enter the number:
5
Factorial of entered number is: 120`}
                   />
                   </div>
                   
                   <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                    Java Programs on numbers                  </h5>

                   <ProgramCard
                   heading="Java Program to display first n or first 100 prime numbers
                   "
                   language="Java"
code={`import java.util.Scanner;

class PrimeNumberDemo
{
   public static void main(String args[])
   {
      int n;
      int status = 1;
      int num = 3;
      //For capturing the value of n
      Scanner scanner = new Scanner(System.in);
      System.out.println("Enter the value of n:");
      //The entered value is stored in the var n
      n = scanner.nextInt();
      if (n >= 1)
      {
         System.out.println("First "+n+" prime numbers are:");
         //2 is a known prime number
         System.out.println(2);
      }

      for ( int i = 2 ; i <=n ;  )
      {
         for ( int j = 2 ; j <= Math.sqrt(num) ; j++ )
         {
            if ( num%j == 0 )
            {
               status = 0;
               break;
            }
         }
         if ( status != 0 )
         {
            System.out.println(num);
            i++;
         }
         status = 1;
         num++;
      }         
   }
}

Output:

Enter the value of n:
15
First 15 prime numbers are:
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47`}
                  />
                  <ProgramCard
                  heading="Java program to display prime numbers from 1 to 100 and 1 to n
                  "
                  language="Java"
code={`class PrimeNumbers
{
   public static void main (String[] args)
   {		
       int i =0;
       int num =0;
       //Empty String
       String  primeNumbers = "";

       for (i = 1; i <= 100; i++)         
       { 		  	  
          int counter=0; 	  
          for(num =i; num>=1; num--)
	  {
             if(i%num==0)
	     {
 		counter = counter + 1;
	     }
	  }
	  if (counter ==2)
	  {
	     //Appended the Prime number to the String
	     primeNumbers = primeNumbers + i + " ";
	  }	
       }	
       System.out.println("Prime numbers from 1 to 100 are :");
       System.out.println(primeNumbers);
   }
}

Output:

Prime numbers from 1 to 100 are :
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97`}
                 />
                 <ProgramCard
                     heading="Java Program to break Integer into Digits
                     "
                     language="Java"
code={`import java.util.Scanner;
public class JavaExample 
{
    public static void main(String args[])
    {
        int num, temp, digit, count = 0;
        
        //getting the number from user
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter any number:");
        num = scanner.nextInt();
        scanner.close();
        
        //making a copy of the input number
        temp = num;
        
        //counting digits in the input number
        while(num > 0)
        {
            num = num / 10;
            count++;
        }
        while(temp > 0)
        {
            digit = temp % 10;
            System.out.println("Digit at place "+count+" is: "+digit);
            temp = temp / 10;
            count--;
        }
    }
}`}
                    /><ProgramCard
                    heading="Java program to check prime number
                    "
                    language="Java"
code={`import java.util.Scanner;
class PrimeCheck
{
   public static void main(String args[])
   {		
	int temp;
	boolean isPrime=true;
	Scanner scan= new Scanner(System.in);
	System.out.println("Enter any number:");
	//capture the input in an integer
	int num=scan.nextInt();
        scan.close();
	for(int i=2;i<=num/2;i++)
	{
           temp=num%i;
	   if(temp==0)
	   {
	      isPrime=false;
	      break;
	   }
	}
	//If isPrime is true then the number is prime else not
	if(isPrime)
	   System.out.println(num + " is a Prime Number");
	else
	   System.out.println(num + " is not a Prime Number");
   }
}

Output:

Enter any number:
19
19 is a Prime Number

Output 2:

Enter any number:
6
6 is not a Prime Number`}
                   />
                   <ProgramCard
                     heading="Java Program to Check if given Number is Perfect Square
                     "
                     language="Java"
code={`import java.util.Scanner;
class JavaExample { 

    static boolean checkPerfectSquare(double x)  
    { 

	// finding the square root of given number 
	double sq = Math.sqrt(x); 

	/* Math.floor() returns closest integer value, for
	 * example Math.floor of 984.1 is 984, so if the value
	 * of sq is non integer than the below expression would
	 * be non-zero.
	 */
	return ((sq - Math.floor(sq)) == 0); 
    } 
 
    public static void main(String[] args)  
    { 
	System.out.print("Enter any number:");
	Scanner scanner = new Scanner(System.in);
	double num = scanner.nextDouble(); 
	scanner.close();

	if (checkPerfectSquare(num)) 
		System.out.print(num+ " is a perfect square number"); 
	else
		System.out.print(num+ " is not a perfect square number"); 
    } 
}`}
                    />
                    <ProgramCard
                    heading="Java Program to Find square root of a Number without sqrt
                    "
                    language="Java"
code={`import java.util.Scanner;
class JavaExample { 

    public static double squareRoot(int number) {
	double temp;

	double sr = number / 2;

	do {
		temp = sr;
		sr = (temp + (number / temp)) / 2;
	} while ((temp - sr) != 0);

	return sr;
    }

    public static void main(String[] args)  
    { 
	System.out.print("Enter any number:");
	Scanner scanner = new Scanner(System.in);
	int num = scanner.nextInt(); 
	scanner.close();

	System.out.println("Square root of "+ num+ " is: "+squareRoot(num));
    } 
}`}
                   />
                   <ProgramCard
                     heading="Java program to Print Armstrong numbers between a given range
                     "
                     language="Java"
code={`import java.util.Scanner;

public class JavaExample
{
    public static void main(String args[])
    {
	int num, start, end, i, rem, temp, counter=0;
		
	Scanner scanner = new Scanner(System.in);
	System.out.print("Enter the start number: ");
	start = scanner.nextInt();
	System.out.print("Enter the end number: ");
	end = scanner.nextInt();
	scanner.close();

	//generate Armstrong numbers between start and end
	for(i=start+1; i<end; i++)
	{
	   temp = i;
	   num = 0;
	   while(temp != 0)
	   {
		rem = temp%10;
		num = num + rem*rem*rem;
		temp = temp/10;
	   }
	   if(i == num)
	   {
		if(counter == 0)
		{
		   System.out.print("Armstrong Numbers Between "+start+" and "+end+": ");
		}
		   System.out.print(i + "  ");
		   counter++;
	   }
	}
	// if no Armstrong number is found
	if(counter == 0)
	{
	   System.out.print("There is no Armstrong number Between "+start+" and "+end);
	}
    }
}`}
                    />
                    <ProgramCard
                    heading="Java Program to find Sum of Natural Numbers
                    "
                    language="Java"
code={`public class Demo {

  public static void main(String[] args) {

     int num = 10, count = 1, total = 0;

     while(count <= num)
     {
         total = total + count;
         count++;
     }

     System.out.println("Sum of first 10 natural numbers is: "+total);
  }
}

Output:

Sum of first 10 natural numbers is: 55`}
                   />
                   <ProgramCard
                     heading="Java Program to check if Number is Positive or Negative
                     "
                     language="Java"
code={`public class Demo
{
    public static void main(String[] args) 
    {
        int number=109;
        if(number > 0)
        {
            System.out.println(number+" is a positive number");
        }
        else if(number < 0)
        {
            System.out.println(number+" is a negative number");
        }
        else
        {
            System.out.println(number+" is neither positive nor negative");
        }
    }
}

Output:

109 is a positive number`}
                    />
                    <ProgramCard
                    heading="Java program to generate random number                    "
                    language="Java"
code={`import java.util.*;
class GenerateRandomNumber {
   public static void main(String[] args) {
      int counter;
      Random rnum = new Random();
      /* Below code would generate 5 random numbers
       * between 0 and 200.
       */
      System.out.println("Random Numbers:");
      System.out.println("***************");
      for (counter = 1; counter <= 5; counter++) {
         System.out.println(rnum.nextInt(200));
      }
   }
}

Output:

Random Numbers:
***************
135
173
5
17
15
`}
                   />
                   <ProgramCard
                     heading="Java Program to Check Armstrong Number
                     "
                     language="Java"
code={`public class JavaExample {

  public static void main(String[] args) {

      int num = 370, number, temp, total = 0;

      number = num;
      while (number != 0)
      {
          temp = number % 10;
          total = total + temp*temp*temp;
          number /= 10;
      }

      if(total == num)
          System.out.println(num + " is an Armstrong number");
      else
          System.out.println(num + " is not an Armstrong number");
  }
}

Output:

370 is an Armstrong number`}
                    />
                    <ProgramCard
                    heading="Java Program to Find GCD of Two Numbers
                    "
                    language="Java"
code={`public class GCDExample1 {

  public static void main(String[] args) {

    //Lets take two numbers 55 and 121 and find their GCD
      int num1 = 55, num2 = 121, gcd = 1;

      /* loop is running from 1 to the smallest of both numbers
       * In this example the loop will run from 1 to 55 because 55
       * is the smaller number. All the numbers from 1 to 55 will be 
       * checked. A number that perfectly divides both numbers would
       * be stored in variable "gcd". By doing this, at the end, the 
       * variable gcd will have the largest number that divides both
       * numbers without remainder.
       */
      for(int i = 1; i <= num1 && i <= num2; i++)
      {
          if(num1%i==0 && num2%i==0)
              gcd = i;
      }

      System.out.printf("GCD of %d and %d is: %d", num1, num2, gcd);
  }

}

Output:

GCD of 55 and 121 is: 11`}
                   />
                   <ProgramCard
                     heading="Java Program to find largest of three Numbers
                     "
                     language="Java"
code={`public class JavaExample{

  public static void main(String[] args) {

      int num1 = 10, num2 = 20, num3 = 7;

      if( num1 >= num2 && num1 >= num3)
          System.out.println(num1+" is the largest Number");

      else if (num2 >= num1 && num2 >= num3)
          System.out.println(num2+" is the largest Number");

      else
          System.out.println(num3+" is the largest Number");
  }
}

Output:

20 is the largest Number`}
                    /><ProgramCard
                    heading="Java Program to Swap two numbers using Bitwise XOR Operator
                    "
                    language="Java"
code={`import java.util.Scanner;
public class JavaExample 
{
    public static void main(String args[])
    {
        int num1, num2;
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter first number:");
        num1 = scanner.nextInt();
        System.out.print("Enter second number:");
        num2 = scanner.nextInt();
        /* To make you understand, lets assume I am going
         * to enter value of first number as 10 and second 
         * as 5. Binary equivalent of 10 is 1010 and 5 is
         * 0101
         */
        
        //num1 becomes 1111 = 15
        num1 = num1 ^ num2;
        //num2 becomes 1010 = 10
        num2 = num1 ^ num2;
        //num1 becomes 0101 = 5
        num1 = num1 ^ num2;
        scanner.close();
        System.out.println("The First number after swapping:"+num1);
        System.out.println("The Second number after swapping:"+num2);
    }
}

Output:


Enter first number:10
Enter second number:5
The First number after swapping:5
The Second number after swapping:10`}
                   />
                   </div>

                   <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                    Java Programs on Input/Output                  </h5>


                   <ProgramCard
                     heading="Java Program to read integer value from the Standard Input
                     "
                     language="Java"
code={`import java.util.Scanner;

public class Demo {

    public static void main(String[] args) {

        /* This reads the input provided by user
         * using keyboard
         */
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter any number: ");

        // This method reads the number provided using keyboard
        int num = scan.nextInt();

        // Closing Scanner after the use
        scan.close();
        
        // Displaying the number 
        System.out.println("The number entered by user: "+num);
    }
}

Output:

Enter any number: 101
The number entered by user: 101`}
                    />
                    <ProgramCard
                    heading="Java program to get IP address
                    "
                    language="Java"
code={`import java.net.InetAddress;

class GetMyIPAddress
{
   public static void main(String args[]) throws Exception
   {
      /* public static InetAddress getLocalHost()
       * throws UnknownHostException: Returns the address 
       * of the local host. This is achieved by retrieving 
       * the name of the host from the system, then resolving 
       * that name into an InetAddress. Note: The resolved 
       * address may be cached for a short period of time.
       */
      InetAddress myIP=InetAddress.getLocalHost();
 
      /* public String getHostAddress(): Returns the IP 
       * address string in textual presentation.
       */
      System.out.println("My IP Address is:");
      System.out.println(myIP.getHostAddress());
  }
}

Output:

My IP Address is:
115.242.7.243`}
                   />
                   <ProgramCard
                     heading="Java Program to get input from user
                     "
                     language="Java"
code={`import java.util.Scanner;

class GetInputData
{
  public static void main(String args[])
  {
     int num;
     float fnum;
     String str;
 
     Scanner in = new Scanner(System.in);
 
     //Get input String
     System.out.println("Enter a string: ");
     str = in.nextLine();
     System.out.println("Input String is: "+str);
 
     //Get input Integer
     System.out.println("Enter an integer: ");
     num = in.nextInt();
     System.out.println("Input Integer is: "+num);
 
     //Get input float number
     System.out.println("Enter a float number: ");
     fnum = in.nextFloat();
     System.out.println("Input Float number is: "+fnum); 
  }
}

Output:

Enter a string: 
Datacode.in

Input String is: Datacode.in

Enter an integer: 
27

Input Integer is: 27

Enter a float number: 
12.56

Input Float number is: 12.56`}

                    />
                    </div>

                    <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                    Java Programs on Geometrical calculations              </h5>

                    <ProgramCard
                    heading="Java Program to Calculate Area of Rectangle
"
                    language="Java"
code={`import java.util.Scanner;
class AreaOfRectangle {
   public static void main (String[] args)
   {
	   Scanner scanner = new Scanner(System.in);
	   System.out.println("Enter the length of Rectangle:");
	   double length = scanner.nextDouble();
	   System.out.println("Enter the width of Rectangle:");
	   double width = scanner.nextDouble();
	   //Area = length*width;
	   double area = length*width;
	   System.out.println("Area of Rectangle is:"+area);
   }
}

Output:

Enter the length of Rectangle:
2
Enter the width of Rectangle:
8
Area of Rectangle is:16.0`}
                   />
                   <ProgramCard
                     heading="Java program to calculate area of Square
                     "
                     language="Java"
code={`import java.util.Scanner;
class SquareAreaDemo {
   public static void main (String[] args)
   {
       System.out.println("Enter Side of Square:");
       //Capture the user's input
       Scanner scanner = new Scanner(System.in);
       //Storing the captured value in a variable
       double side = scanner.nextDouble();
       //Area of Square = side*side
       double area = side*side; 
       System.out.println("Area of Square is: "+area);
   }
}

Output:


Enter Side of Square:
2.5

Area of Square is: 6.25`}
                    />
                    <ProgramCard
                    heading="Java program to calculate area of Triangle
                    "
                    language="Java"
code={`import java.util.Scanner;
class AreaTriangleDemo {
   public static void main(String args[]) {   
      Scanner scanner = new Scanner(System.in);

      System.out.println("Enter the width of the Triangle:");
      double base = scanner.nextDouble();

      System.out.println("Enter the height of the Triangle:");
      double height = scanner.nextDouble();

      //Area = (width*height)/2
      double area = (base* height)/2;
      System.out.println("Area of Triangle is: " + area);      
   }
}

Output:

Enter the width of the Triangle:
2
Enter the height of the Triangle:
2
Area of Triangle is: 2.0`}
                   />
                   <ProgramCard
                     heading="Java Program to calculate area and circumference of circle
                     "
                     language="Java"
code={`import java.util.Scanner;
class CircleDemo
{
   static Scanner sc = new Scanner(System.in);
   public static void main(String args[])
   {
      System.out.print("Enter the radius: ");
      /*We are storing the entered radius in double
       * because a user can enter radius in decimals
       */
      double radius = sc.nextDouble();
      //Area = PI*radius*radius
      double area = Math.PI * (radius * radius);
      System.out.println("The area of circle is: " + area);
      //Circumference = 2*PI*radius
      double circumference= Math.PI * 2*radius;
      System.out.println( "The circumference of the circle is:"+circumference) ;
   }
}

Output:


Enter the radius: 1
The area of circle is: 3.141592653589793
The circumference of the circle is:6.283185307179586`}
                    />
                    </div>

                    <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                    Java Programs on Sorting and Searching              </h5>

                    <ProgramCard
                    heading="Bubble sort program for sorting in ascending Order
                    "
                    language="Java"
code={`import java.util.Scanner;

class BubbleSortExample {
  public static void main(String []args) {
    int num, i, j, temp;
    Scanner input = new Scanner(System.in);
 
    System.out.println("Enter the number of integers to sort:");
    num = input.nextInt();
 
    int array[] = new int[num];
 
    System.out.println("Enter " + num + " integers: ");
 
    for (i = 0; i < num; i++) 
      array[i] = input.nextInt();
 
    for (i = 0; i < ( num - 1 ); i++) {
      for (j = 0; j < num - i - 1; j++) {
        if (array[j] > array[j+1]) 
        {
           temp = array[j];
           array[j] = array[j+1];
           array[j+1] = temp;
        }
      }
    }
 
    System.out.println("Sorted list of integers:");
 
    for (i = 0; i < num; i++) 
      System.out.println(array[i]);
  }
}

Output:

Enter the number of integers to sort:
6
Enter 6 integers: 
12
6
78
9
45
08
Sorted list of integers:
6
8
9
12
45
78`}
                   />
                   <ProgramCard
                    heading="Bubble sort program for sorting in descending Order
                    "
                    language="Java"
code={`import java.util.Scanner;

class BubbleSortExample {
  public static void main(String []args) {
    int num, i, j, temp;
    Scanner input = new Scanner(System.in);
 
    System.out.println("Enter the number of integers to sort:");
    num = input.nextInt();
 
    int array[] = new int[num];
 
    System.out.println("Enter " + num + " integers: ");
 
    for (i = 0; i < num; i++) 
      array[i] = input.nextInt();
 
    for (i = 0; i < ( num - 1 ); i++) {
      for (j = 0; j < num - i - 1; j++) {
        if (array[j] < array[j+1]) 
        {
          temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }
    }
 
    System.out.println("Sorted list of integers:");
 
    for (i = 0; i < num; i++) 
      System.out.println(array[i]);
  } 
}


Output:

Enter the number of integers to sort:
6
Enter 6 integers: 
89
12
45
9
56
102
Sorted list of integers:
102
89
56
45
12
9
`}
                   />
                   <ProgramCard
                     heading="Java program for linear search
                     "
                     language="Java"
code={`import java.util.Scanner;
class LinearSearchExample
{
   public static void main(String args[])
   {
      int counter, num, item, array[];
      //To capture user input
      Scanner input = new Scanner(System.in);
      System.out.println("Enter number of elements:");
      num = input.nextInt(); 
      //Creating array to store the all the numbers
      array = new int[num]; 
      System.out.println("Enter " + num + " integers");
      //Loop to store each numbers in array
      for (counter = 0; counter < num; counter++)
        array[counter] = input.nextInt();

      System.out.println("Enter the search value:");
      item = input.nextInt();

      for (counter = 0; counter < num; counter++)
      {
         if (array[counter] == item) 
         {
           System.out.println(item+" is present at location "+(counter+1));
           /*Item is found so to stop the search and to come out of the 
            * loop use break statement.*/
           break;
         }
      }
      if (counter == num)
        System.out.println(item + " doesn't exist in array.");
   }
}

Output 1:

Enter number of elements:
6
Enter 6 integers
22
33
45
1
3
99
Enter the search value:
45
45 is present at location 3`}
                    />
                    <ProgramCard
                    heading="Java program to perform binary search 
                    "
                    language="Java"
code={`import java.util.Scanner;
class BinarySearchExample
{
   public static void main(String args[])
   {
      int counter, num, item, array[], first, last, middle;
      //To capture user input
      Scanner input = new Scanner(System.in);
      System.out.println("Enter number of elements:");
      num = input.nextInt(); 

      //Creating array to store the all the numbers
      array = new int[num];

      System.out.println("Enter " + num + " integers");
      //Loop to store each numbers in array
      for (counter = 0; counter < num; counter++)
          array[counter] = input.nextInt();

      System.out.println("Enter the search value:");
      item = input.nextInt();
      first = 0;
      last = num - 1;
      middle = (first + last)/2;

      while( first <= last )
      {
         if ( array[middle] < item )
           first = middle + 1;
         else if ( array[middle] == item )
         {
           System.out.println(item + " found at location " + (middle + 1) + ".");
           break;
         }
         else
         {
             last = middle - 1;
         }
         middle = (first + last)/2;
      }
      if ( first > last )
          System.out.println(item + " is not found.\n");
   }
}


Output 1:

Enter number of elements:
7
Enter 7 integers
4
5
66
77
8
99
0
Enter the search value:
77
77 found at location 4.`}
                   />
                   <ProgramCard
                    heading="Java Program for Selection Sorting
                    "
                    language="Java"
code={`class JavaExample
{
    void selectionSort(int arr[])
    {
        int len = arr.length;
 
        for (int i = 0; i < len-1; i++)
        {
            // Finding the minimum element in the unsorted part of array
            int min = i;
            for (int j = i+1; j < len; j++)
                if (arr[j] < arr[min])
                    min = j;
 
            /* Swapping the found minimum element with the first
             * element of the sorted subarray using temp variable
             */
            int temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
 
    // Displays the array elements
    void printArr(int arr[])
    {
        for (int i=0; i<arr.length; i++)
            System.out.print(arr[i]+" ");
        System.out.println();
    }
 
    public static void main(String args[])
    {
        JavaExample obj = new JavaExample();
        int numarr[] = {101,5,18,11,80, 67};
        
        System.out.print("Original array: ");
        obj.printArr(numarr);
        
        //calling method for selection sorting
        obj.selectionSort(numarr);
        
        System.out.print("Sorted array: ");
        obj.printArr(numarr);
    }
}`}
                   />
                   </div>

                   <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                    Java Programs on Pattern Printing           </h5>

                   <ProgramCard
                     heading="Java program to print Floyd’s triangle 
                     "
                     language="Java"
code={`import java.util.Scanner;
class FloydTriangleExample
{
    public static void main(String args[])
    {
       int rows, number = 1, counter, j;
       //To get the user's input
       Scanner input = new Scanner(System.in);
       System.out.println("Enter the number of rows for floyd's triangle:");
       //Copying user input into an integer variable named rows
       rows = input.nextInt();
       System.out.println("Floyd's triangle");
       System.out.println("****************");
       for ( counter = 1 ; counter <= rows ; counter++ )
       {
           for ( j = 1 ; j <= counter ; j++ )
           {
                System.out.print(number+" ");
                //Incrementing the number value
                number++;
           }
           //For new line
           System.out.println();
       }
   }
}

Output:

Enter the number of rows for floyd's triangle:
6
Floyd's triangle
****************
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
16 17 18 19 20 21`}
                    />
                    <ProgramCard
                    heading="Java Program to print Pascal Triangle
                    "
                    language="Java"
code={`import java.util.Scanner;
public class JavaExample {
    static int fact(int num) {
	int factorial;

	for(factorial = 1; num > 1; num--){
		factorial *= num;
	}
	return factorial;
    }
    static int ncr(int n,int r) {
	return fact(n) / ( fact(n-r) * fact(r) );
    }
    public static void main(String args[]){
	int rows, i, j;

	//getting number of rows from user
	System.out.println("Enter number of rows:");
	Scanner scanner = new Scanner(System.in);
	rows = scanner.nextInt();
	scanner.close();

	System.out.println("Pascal Triangle:");
	for(i = 0; i < rows; i++) {
		for(j = 0; j < rows-i; j++){
			System.out.print(" ");
		}
		for(j = 0; j <= i; j++){
			System.out.print(" "+ncr(i, j));
		}
		System.out.println();
 	}
    }
}`}
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
                                          <Technologies />

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JavaPgramQuestions;
