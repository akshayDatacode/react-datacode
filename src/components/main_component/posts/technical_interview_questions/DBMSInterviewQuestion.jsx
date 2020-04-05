import React, { Component } from 'react';
import QuestionCard from './QuestionCard';
class DBMSPosts extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <h1>DBMS Post</h1> 
            <QuestionCard
             question = {`Q1) What is DBMS used for?`}
             answer = {`DBMS, commonly known as Database Management System, 
             is an application system whose main purpose revolves around the data. 
             This is a system that allows its user to store the data, define it, 
             retrieve it and update the information about the data inside the database.`}
            />  
             <QuestionCard
             question = {`Q2) What is meant by a Database?`}
             answer = {`In simple terms, Database is a collection of data 
             in some organized way to facilitate its user’s to easily access, 
             manage and upload the data.
             `}
            />   
             <QuestionCard
             question = {`Q3) What is the purpose of normalization in DBMS?`}
             answer = {`Normalization is the process of analyzing the relational 
             schemas which are based on their respective functional dependencies 
             and the primary keys in order to fulfill certain properties.
             The properties include:
                  1. To minimize the redundancy of the data.
                  2. To minimize the Insert, Delete and Update Anomalies.
`}
            />   
             <QuestionCard
             question = {`Q4) What is the purpose of SQL?`}
             answer = {`SQL stands for Structured Query Language whose main purpose
              is to interact with the relational databases in the form of 
              inserting and updating/modifying the data in the database.`}
            />    
             <QuestionCard
             question = {`Q5) Explain the concepts of a Primary key and Foreign Key.`}
             answer = {` Primary Key is used to uniquely identify the records in 
             a database table while Foreign Key is mainly used to link two or more
              tables together, as this is a particular field(s) in one of the database
               tables which are the primary key of some other table.
             Example: There are 2 tables – Employee and Department. 
             Both have one common field/column as ‘ID’ where ID is the primary 
             key of the Employee table while this is the foreign key for the Department table.`}
            />   
            <QuestionCard
             question = {`Q6) What are the main differences between Primary key and Unique Key?`}
             answer = {`Given below are few differences:
                        1. The main difference between the Primary key 
                        and Unique key is that the Primary key can never
                         have a null value while the Unique key may consist of null value.
                        2. In each table, there can be only one primary key while 
                        there can be more than one unique key in a table.
             `}
            />  
             <QuestionCard
             question = {`Q7) What is the concept of sub-query in terms of SQL?`}
             answer = {`Sub-query is basically the query which is included inside some 
             other query and can also be called as an inner query which is found inside 
             the outer query.`}
            />   
             <QuestionCard
             question = {`Q8) What is the use of DROP command and what are the 
             differences between DROP, TRUNCATE and DELETE commands?`}
             answer = {`DROP command is a DDL command which is used to drop/delete the existing table, database, index or view from the database.
             The major difference between DROP, TRUNCATE and DELETE commands are:
             DROP and TRUNCATE commands are the DDL commands which are used to delete tables from the database and once the table gets deleted, all the privileges and indexes that are related to the table also get deleted. These 2 operations cannot be rolled back and so should be used only when necessary.
             DELETE command, on the other hand, is a DML Command which is also used to delete rows from the table and this can be rolled back.
             Note: It is recommended to use the ‘WHERE’ clause along with the DELETE command else the complete table will get deleted from the database.
             `}
            />   
             <QuestionCard
             question = {`Q9) What is the main difference between UNION and UNION ALL?
             `}
             answer = {`UNION and UNION ALL are used to join the data from 2 or more 
             tables but UNION removes duplicate rows and picks the rows which are distinct 
             after combining the data from the tables whereas UNION ALL does not remove the
              duplicate rows, it just picks all the data from the tables.`}
            />    
             <QuestionCard
             question = {`Q10) What is Correlated Subquery in DBMS?`}
             answer = {`A Subquery is also known as a nested query i.e. a query written inside some query. When a Subquery is executed for each of the rows of the outer query then it is termed as a Correlated Subquery.
             Example of Non-Correlated Subquery is:
             SELECT * from EMP WHERE ‘RIYA’ IN (SELECT Name from DEPT WHERE EMP.EMPID=DEPT.EMPID);
             Here, the inner query is not executed for each of the rows of the outer query.
             `}
            />   
           
            <QuestionCard
             question = {`Q11) Explain Entity, Entity Type, and Entity Set in DBMS?`}
             answer = {`Entity is an object, place or thing which has its independent existence in the real world and about which data can be stored in a database. For Example, any person, book, etc.
             Entity Type is a collection of entities that have the same attributes. For Example, the STUDENT table contains rows in which each row is an entity holding the attributes like name, age, and id of the students, hence STUDENT is an Entity Type which holds the entities having the same attributes.
             Entity Set is a collection of entities of the same type. For Example, A collection of the employees of a firm.`}
            />  
             <QuestionCard
             question = {`Q12) What are the different levels of abstraction in the DBMS?`}
             answer = {`There are 3 levels of data abstraction in the DBMS.
             They include:
             Physical Level: This is the lowest level of the data abstraction which states how the data is stored in the database.
             Logical Level: This is the next level of the data abstraction which states the type of the data and the relationship among the data that is stored in the database.
             View Level: This is the highest level in the data abstraction which shows/states only a part of the database.`}
            />   
             <QuestionCard
             question = {`Q13) What integrity rules exist in the DBMS?
             `}
             answer = {`There are 2 major integrity rules that exist in the DBMS.
             They are:
             Entity Integrity: This states a very important rule that value of a Primary key can never have a NULL value.
             Referential Integrity: This rule is related to the Foreign key which states that either the value of a Foreign key is a NULL value or it should be the primary key of any other relation.
             `}
            />   
             <QuestionCard
             question = {`Q14) What is E-R model in the DBMS?`}
             answer = {`E-R model is known as an Entity-Relationship model in the DBMS which is based on the concept of the Entities and the relationship that exists among these entities.`}
            />    
             <QuestionCard
             question = {`Q15) What is a functional dependency in the DBMS?`}
             answer = {`This is basically a constraint which is useful in describing the relationship among the different attributes in a relation.
             Example: If there is some relation ‘R1’ which has 2 attributes as Y and Z then the functional dependency among these 2 attributes can be shown as Y->Z which states that Z is functionally dependent on Y.
             `}
            />   
            <h1>Python question</h1> 
            <QuestionCard
             question = {`1) What is Python? What are the benefits of using Python?`}
             answer = {`Python is a programming language with objects, modules, threads, exceptions and automatic memory management. The benefits of pythons are that it is simple and easy, portable, extensible, built-in data structure and it is open source.`}
                />  
             <QuestionCard
             question = {`2) What is PEP 8?`}
             answer = {`PEP 8 is a coding convention, a set of recommendation, about how to write your Python code more readable.`}
            />   
             <QuestionCard
             question = {`3) What is pickling and unpickling?
             `}
             answer = {`Pickle module accepts any Python object and converts it into a string representation and dumps it into a file by using dump function, this process is called pickling. While the process of retrieving original Python objects from the stored string representation is called unpickling.`}
            />   
             <QuestionCard
             question = {`4) How memory is managed in Python?`}
             answer = {`Python memory is managed by Python private heap space. All Python objects and data structures are located in a private heap. The programmer does not have an access to this private heap and interpreter takes care of this Python private heap.
             The allocation of Python heap space for Python objects is done by Python memory manager. The core API gives access to some tools for the programmer to code.
             Python also have an inbuilt garbage collector, which recycle all the unused memory and frees the memory and makes it available to the heap space.
             `}
            />    
             <QuestionCard
             question = {`5) What are the tools that help to find bugs or perform static analysis?
             `}
             answer = {`PyChecker is a static analysis tool that detects the bugs in Python source code and warns about the style and complexity of the bug. Pylint is another tool that verifies whether the module meets the coding standard.
             `}
            />   
            <QuestionCard
             question = {`6) What are Python decorators?`}
             answer = {`A Python decorator is a specific change that we make in Python syntax to alter functions easily.
             `}
            />  
             <QuestionCard
             question = {`7) What is the difference between list and tuple?
             `}
             answer = {`The difference between list and tuple is that list is mutable while tuple is not. Tuple can be hashed for e.g as a key for dictionaries.
             `}
            />   
             <QuestionCard
             question = {`8) How are arguments passed by value or by reference?
             `}
             answer = {`Everything in Python is an object and all variables hold references to the objects. The references values are according to the functions; as a result you cannot change the value of the references. However, you can change the objects if it is mutable.
             `}
            />   
             <QuestionCard
             question = {`9) What is Dict and List comprehensions are?
             `}
             answer = {`They are syntax constructions to ease the creation of a Dictionary or List based on existing iterable.
             `}
            />    
             <QuestionCard
             question = {`10) What are the built-in type does python provides?
             `}
             answer = {`There are mutable and Immutable types of Pythons built in types Mutable built-in types
             List
             Sets
             Dictionaries

             Immutable built-in types

             Strings
             Tuples
             Numbers
             `}
            />   
            <h1>JAVA Post</h1> 
            <QuestionCard
             question = {`Q1. What are wrapper classes in Java?
             `}
             answer = {`Wrapper classes convert the Java primitives into the reference types (objects). Every primitive data type has a class dedicated to it. These are known as wrapper classes because they “wrap” the primitive data type into an object of that class. Refer to the below image which displays different primitive type, wrapper class and constructor argument.
             `}
            />  
             <QuestionCard
             question = {`Q2. What are constructors in Java?
             `}
             answer = {`In Java, constructor refers to a block of code which is used to initialize an object. It must have the same name as that of the class. Also, it has no return type and it is automatically called when an object is created.
             `}
            />   
             <QuestionCard
             question = {`Q3. What is singleton class in Java and how can we make a class singleton?
             `}
             answer = {`Singleton class is a class whose only one instance can be created at any given time, in one JVM. A class can be made singleton by making its constructor private.
             `}
            />   
             <QuestionCard
             question = {`Q4. What is the difference between equals() and == in Java?
             `}
             answer = {`Equals() method is defined in Object class in Java and used for checking equality of two objects defined by business logic.“==” or equality operator in Java is a binary operator provided by Java programming language and used to compare primitives and objects. public boolean equals(Object o) is the method provided by the Object class. The default implementation uses == operator to compare two objects. For example: method can be overridden like String class. equals() method is used to compare the values of two objects.
             `}
            />    
             <QuestionCard
             question = {`Q5. What is a package in Java? List down various advantages of packages.
             `}
             answer = {`Packages in Java, are the collection of related classes and interfaces which are bundled together. By using packages, developers can easily modularize the code and optimize its reuse. Also, the code within the packages can be imported by other classes and reused. Below I have listed down a few of its advantages:
             Packages help in avoiding name clashes
             They provide easier access control on the code
             Packages can also contain hidden classes which are not visible to the outer classes and only used within the package
             Creates a proper hierarchical structure which makes it easier to locate the related classes
             `}
            />   
            <QuestionCard
             question = {`Q6. Why pointers are not used in Java?
             `}
             answer = {`Java doesn’t use pointers because they are unsafe and increases the complexity of the program. Since, Java is known for its simplicity of code, adding the concept of pointers will be contradicting. Moreover, since JVM is responsible for implicit memory allocation, thus in order to avoid direct access to memory by the user,  pointers are discouraged in Java.
`}
            />  
             <QuestionCard
             question = {`Q7. What is JIT compiler in Java?
             `}
             answer = {`JIT stands for Just-In-Time compiler in Java. It is a program that helps in converting the Java bytecode into instructions that are sent directly to the processor. By default, the JIT compiler is enabled in Java and is activated whenever a Java method is invoked. The JIT compiler then compiles the bytecode of the invoked method into native machine code, compiling it “just in time” to execute. Once the method has been compiled, the JVM summons the compiled code of that method directly rather than interpreting it. This is why it is often responsible for the performance optimization of Java applications at the run time.
             `}
            />   
             <QuestionCard
             question = {`Q8. What are access modifiers in Java?
             `}
             answer = {`In Java, access modifiers are special keywords which are used to restrict the access of a class, constructor, data member and method in another class. Java supports four types of access modifiers:
             Default
             Private
             Protected
             Public
                          `}
            />   
             <QuestionCard
             question = {`Q9. Define a Java Class.
             `}
             answer = {`A class in Java is a blueprint which includes all your data.  A class contains fields (variables) and methods to describe the behavior of an object. Let’s have a look at the syntax of a class.
            
             class Abc {
             member variables // class body
             methods}
             `}
            />    
             <QuestionCard
             question = {`Q10. What is an object in Java and how is it created?
             `}
             answer = {`An object is a real-world entity that has a state and behavior. An object has three characteristics:
             State
             Behavior
             Identity
             An object is created using the ‘new’ keyword. For example:
             ClassName obj = new ClassName();
             `}
            />   
            <h1>C Post</h1> 
            <QuestionCard
             question = {`Q #1) What are the key features in the C programming language?

             `}
             answer = {`Features are as follows:

             Portability: It is a platform-independent language.
             Modularity: Possibility to break down large programs into small modules.
             Flexibility: The possibility of a programmer to control the language.
             Speed: C comes with support for system programming and hence it compiles and executes with high speed when compared with other high-level languages.
             Extensibility: Possibility to add new features by the programmer.`}
            />  
             <QuestionCard
             question = {`Q #2) What are the basic data types associated with C?

             `}
             answer = {`Int – Represent the number (integer)
             Float – Number with a fraction part.
             Double – Double-precision floating-point value
             Char – Single character
             Void – Special purpose type without any value.`}
            />   
             <QuestionCard
             question = {`Q #3) What is the description for syntax errors?

             `}
             answer = {`Answer: The mistakes/errors that occur while creating a program are called syntax errors. Misspelled commands or incorrect case commands, an incorrect number of parameters in calling method /function, data type mismatches can be identified as common examples for syntax errors.

             `}
            />   
             <QuestionCard
             question = {`Q #4) What is the process to create increment and decrement statement in C?

             `}
             answer = {`There are two possible methods to perform this task.

             Use increment (++) and decrement (-) operator.
             Example When x=4, x++ returns 5 and x- returns 3.
             
             Use conventional + or – sign.
             Example When x=4, use x+1 to get 5 and x-1 to get 3.`}
            />    
             <QuestionCard
             question = {`Q #5) What are reserved words with a programming language?

             `}
             answer = {`The words that are a part of the standard C language library are called reserved words. Those reserved words have special meaning and it is not possible to use them for any activity other than its intended functionality.

             Example: void, return int.
             
             `}
            />   
            <QuestionCard
             question = {`Q #6) What is the explanation for the dangling pointer in C?

             `}
             answer = {`When there is a pointer pointing to a memory address of any variable, but after some time the variable was deleted from the memory location while keeping the pointer pointing to that location is known as a dangling pointer in C.

             `}
            />  
             <QuestionCard
             question = {`Q #7) Describe static function with its usage?

             `}
             answer = {`Answer: A function, which has a function definition prefixed with a static keyword is defined as a static function. The static function should be called within the same source code.

             `}
            />   
             <QuestionCard
             question = {`Q #8) What is the difference between abs() and fabs() functions?

             `}
             answer = {`Answer: Both functions are to retrieve absolute value. abs() is for integer values and fabs() is for floating type numbers. Prototype for abs() is under the library file < stdlib.h > and fabs() is under < math.h >.

             `}
            />   
             <QuestionCard
             question = {`Q #9) Describe Wild Pointers in C?

             `}
             answer = {`Answer: Uninitialized pointers in the C code are known as Wild Pointers. They point to some arbitrary memory location and can cause bad program behavior or program crash.

             `}
            />    
             <QuestionCard
             question = {`Q #10) What is the difference between ++a and a++?

             `}
             answer = {`Answer: ‘++a”  is called prefixed increment and the increment will happen first on a variable. ‘a++' is called postfix increment and the increment happens after the value of a variable used for the operations.

             `}
            />   
            <h1>c++ Post</h1> 
            <QuestionCard
             question = {`Q #1) What is the basic structure of a C++ program?

             `}
             answer = {`The basic structure of a C++ program is shown below:

             #include<iostream.h>
             int main()
             {
                             cout<<”Hello,World!”;
                             return 0;
             }
             The first line`}
            />  
             <QuestionCard
             question = {`Q #2) What are the Comments in C++?

             `}
             answer = {`Comments in C++ are simply a piece of source code ignored by the compiler. They are only helpful for a programmer to add a description or additional information about their source code.

             In C++ there are two ways to add comments:
             
             //single-line comment
             /* block comment */
             The first type will discard everything after the compiler encounters “//”. In the second type, the compiler discards everything between “/*” and “*/”.`}
            />   
             <QuestionCard
             question = {`Q #3) Difference between Declaration and Definition of a variable.

             `}
             answer = {`Answer: The declaration of a variable is merely specifying the data type of a variable and the variable name. As a result of the declaration, we tell the compiler to reserve the space for a variable in the memory according to the data type specified.

             Example:
             
             int Result;
             char c;
             int a,b,c;
             All the above are valid declarations. Also, note that as a result of the declaration, the value of the variable is undetermined.
             
             Whereas, a definition is an implementation/instantiation of the declared variable where we tie up appropriate value to the declared variable so that the linker will be able to link references to the appropriate entities.
             
             From above Example,
             
             Result = 10;
             
             C = ‘A’;
             
             These are valid definitions.`}
            />   
             <QuestionCard
             question = {`Q #4) Comment on Local and Global scope of a variable.

             `}
             answer = {`Answer: The scope of a variable is defined as the extent of the program code within which the variable remains active i.e. it can be declared, defined or worked with.

             There are two types of scope in C++:
             
             Local Scope: A variable is said to have a local scope or is local when it is declared inside a code block. The variable remains active only inside the block and is not accessible outside the code block.
             Global Scope: A variable has a global scope when it is accessible throughout the program. A global variable is declared on top of the program before all the function definitions.
             Example:
             
             #include <iostream.h>
             Int globalResult=0; //global variable
             int main()
             {
             Int localVar = 10; //local variable.
             ….. 
              
             }`}
            />    
             <QuestionCard
             question = {`Q #5) What is the precedence when there are a Global variable and a Local variable in the program with the same name?

             `}
             answer = {`Answer: Whenever there is a local variable with the same name as that of a global variable, the compiler gives precedence to the local variable.

             Example:
             
             #include <iostream.h>
              int globalVar = 2;
             int main()
             {
              int globalVar = 5;
              cout<<globalVar<<endl;
             }
             The output of the above code is 5. This is because, although both the variables have the same name, the compiler has given preference to the local scope.`}
            />   
            <QuestionCard
             question = {`Q #6) When there are a Global variable and Local variable with the same name, how will you access the global variable?

             `}
             answer = {`Answer: When there are two variables with the same name but different scope, i.e. one is a local variable and the other is a global variable, the compiler will give preference to a local variable.

             In order to access the global variable, we make use of a “scope resolution operator (::)”. Using this operator, we can access the value of the global variable.
             
             Example:
             
             #include<iostream.h>
             int x= 10;
             int main()
             {
              int x= 2;
              cout<<”Global Variable x = “<<::x;
              cout<<”\nlocal Variable x= “<<x;
             }
             Output:
             
             Global Variable x = 10
             local Variable x= 2
             
             `}
            />  
             <QuestionCard
             question = {`Q #7) How many ways are there to initialize an int with a Constant?

             `}
             answer = {`Answer: There are two ways:

             The first format uses traditional C notation.
             int result = 10;
             The second format uses the constructor notation.
             int result (10);`}
            />   
             <QuestionCard
             question = {`Q #8) What is a Constant? Explain with an example.

             `}
             answer = {`Answer: A constant is an expression that has a fixed value. They can be divided into integer, decimal, floating-point, character or string constants depending on their data type.

             Apart from the decimal, C++ also supports two more constants i.e. octal (to the base 8) and hexadecimal (to the base 16) constants.
             
             Examples of Constants:
             
             75 //integer (decimal)
             0113 //octal
             0x4b //hexadecimal
             3.142 //floating point
             ‘c’ //character constant
             “Hello, World” //string constant
             Note: When we have to represent a single character, we use single quotes and when we want to define a constant with more than one character, we use double-quotes.`}
            />   
             <QuestionCard
             question = {`Q #9) How do you define/declare constants in C++?

             `}
             answer = {`Answer: In C++, we can define our own constants using the #define preprocessor directive.

             #define Identifier value
             
             Example:
             
             #include<iostream.h>
             #define PI 3.142
             int main ()
             {
                              float radius =5, area;
                              area = PI * r * r;
                              cout<<”Area of a Circle = “<<area;
             }
             Output: Area of a Circle = 78.55
             
             As shown in the above example, once we define a constant using #define directive, we can use it throughout the program and substitute its value.
             
             We can declare constants in C++ using the “const” keyword. This way is similar to that of declaring a variable, but with a const prefix.
             
             Examples of declaring a constant
             
             const int pi = 3.142;
             const char c = “sth”;
             const zipcode = 411014;
             
             In the above examples, whenever the type of a constant is not specified, the C++ compiler defaults it to an integer type.`}
            />    
             <QuestionCard
             question = {`Q #10) Comment on Assignment Operator in C++.

             `}
             answer = {`Answer: Assignment operator in C++ is used to assign a value to another variable.

             a = 5;
             
             This line of code assigns the integer value 5 to variable a.
             
             The part at the left of the =operator is known as an lvalue (left value) and the right as rvalue (right value). Lvalue must always be a variable whereas the right side can be a constant, a variable, the result of an operation or any combination of them.
             
             The assignment operation always takes place from the right to left and never at the inverse.
             
             One property which C++ has over the other programming languages is that the assignment operator can be used as the rvalue (or part of an rvalue) for another assignment.
             
             Example:
             
             a = 2 + (b = 5);
             
             is equivalent to:
             
             b = 5;
             a = 2 + b;
             
             Which means, first assign 5 to variable b and then assign to a, the value 2 plus the result of the previous expression of b(that is 5), leaves a with a final value of 7.
             
             Thus, the following expression is also valid in C++:
             
             a = b = c = 5;
             
             assign 5 to variables a, b and c.`}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />    
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />    
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />    
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />    
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />    
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />    
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />    
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />    
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />    
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />    
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />   
             <QuestionCard
             question = {``}
             answer = {``}
            />    
             <QuestionCard
             question = {``}
             answer = {``}
            />   
            </>
         );
    }
}
 
export default DBMSPosts;