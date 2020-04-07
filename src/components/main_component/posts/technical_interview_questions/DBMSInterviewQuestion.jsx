import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
class DBMSPosts extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>DBMS Post</h1>

        <h1>Python question</h1>

        <h1>JAVA Post</h1>
        <QuestionCard
          question={`Q1. What are wrapper classes in Java?
             `}
          answer={`Wrapper classes convert the Java primitives into the reference types (objects). Every primitive data type has a class dedicated to it. These are known as wrapper classes because they “wrap” the primitive data type into an object of that class. Refer to the below image which displays different primitive type, wrapper class and constructor argument.
             `}
        />
        <QuestionCard
          question={`Q2. What are constructors in Java?
             `}
          answer={`In Java, constructor refers to a block of code which is used to initialize an object. It must have the same name as that of the class. Also, it has no return type and it is automatically called when an object is created.
             `}
        />
        <QuestionCard
          question={`Q3. What is singleton class in Java and how can we make a class singleton?
             `}
          answer={`Singleton class is a class whose only one instance can be created at any given time, in one JVM. A class can be made singleton by making its constructor private.
             `}
        />
        <QuestionCard
          question={`Q4. What is the difference between equals() and == in Java?
             `}
          answer={`Equals() method is defined in Object class in Java and used for checking equality of two objects defined by business logic.“==” or equality operator in Java is a binary operator provided by Java programming language and used to compare primitives and objects. public boolean equals(Object o) is the method provided by the Object class. The default implementation uses == operator to compare two objects. For example: method can be overridden like String class. equals() method is used to compare the values of two objects.
             `}
        />
        <QuestionCard
          question={`Q5. What is a package in Java? List down various advantages of packages.
             `}
          answer={`Packages in Java, are the collection of related classes and interfaces which are bundled together. By using packages, developers can easily modularize the code and optimize its reuse. Also, the code within the packages can be imported by other classes and reused. Below I have listed down a few of its advantages:
             Packages help in avoiding name clashes
             They provide easier access control on the code
             Packages can also contain hidden classes which are not visible to the outer classes and only used within the package
             Creates a proper hierarchical structure which makes it easier to locate the related classes
             `}
        />
        <QuestionCard
          question={`Q6. Why pointers are not used in Java?
             `}
          answer={`Java doesn’t use pointers because they are unsafe and increases the complexity of the program. Since, Java is known for its simplicity of code, adding the concept of pointers will be contradicting. Moreover, since JVM is responsible for implicit memory allocation, thus in order to avoid direct access to memory by the user,  pointers are discouraged in Java.
`}
        />
        <QuestionCard
          question={`Q7. What is JIT compiler in Java?
             `}
          answer={`JIT stands for Just-In-Time compiler in Java. It is a program that helps in converting the Java bytecode into instructions that are sent directly to the processor. By default, the JIT compiler is enabled in Java and is activated whenever a Java method is invoked. The JIT compiler then compiles the bytecode of the invoked method into native machine code, compiling it “just in time” to execute. Once the method has been compiled, the JVM summons the compiled code of that method directly rather than interpreting it. This is why it is often responsible for the performance optimization of Java applications at the run time.
             `}
        />
        <QuestionCard
          question={`Q8. What are access modifiers in Java?
             `}
          answer={`In Java, access modifiers are special keywords which are used to restrict the access of a class, constructor, data member and method in another class. Java supports four types of access modifiers:
             Default
             Private
             Protected
             Public
                          `}
        />
        <QuestionCard
          question={`Q9. Define a Java Class.
             `}
          answer={`A class in Java is a blueprint which includes all your data.  A class contains fields (variables) and methods to describe the behavior of an object. Let’s have a look at the syntax of a class.
            
             class Abc {
             member variables // class body
             methods}
             `}
        />
        <QuestionCard
          question={`Q10. What is an object in Java and how is it created?
             `}
          answer={`An object is a real-world entity that has a state and behavior. An object has three characteristics:
             State
             Behavior
             Identity
             An object is created using the ‘new’ keyword. For example:
             ClassName obj = new ClassName();
             `}
        />
        <h1>C Post</h1>
        <QuestionCard
          question={`Q #1) What are the key features in the C programming language?

             `}
          answer={`Features are as follows:

             Portability: It is a platform-independent language.
             Modularity: Possibility to break down large programs into small modules.
             Flexibility: The possibility of a programmer to control the language.
             Speed: C comes with support for system programming and hence it compiles and executes with high speed when compared with other high-level languages.
             Extensibility: Possibility to add new features by the programmer.`}
        />
        <QuestionCard
          question={`Q #2) What are the basic data types associated with C?

             `}
          answer={`Int – Represent the number (integer)
             Float – Number with a fraction part.
             Double – Double-precision floating-point value
             Char – Single character
             Void – Special purpose type without any value.`}
        />
        <QuestionCard
          question={`Q #3) What is the description for syntax errors?

             `}
          answer={`Answer: The mistakes/errors that occur while creating a program are called syntax errors. Misspelled commands or incorrect case commands, an incorrect number of parameters in calling method /function, data type mismatches can be identified as common examples for syntax errors.

             `}
        />
        <QuestionCard
          question={`Q #4) What is the process to create increment and decrement statement in C?

             `}
          answer={`There are two possible methods to perform this task.

             Use increment (++) and decrement (-) operator.
             Example When x=4, x++ returns 5 and x- returns 3.
             
             Use conventional + or – sign.
             Example When x=4, use x+1 to get 5 and x-1 to get 3.`}
        />
        <QuestionCard
          question={`Q #5) What are reserved words with a programming language?

             `}
          answer={`The words that are a part of the standard C language library are called reserved words. Those reserved words have special meaning and it is not possible to use them for any activity other than its intended functionality.

             Example: void, return int.
             
             `}
        />
        <QuestionCard
          question={`Q #6) What is the explanation for the dangling pointer in C?

             `}
          answer={`When there is a pointer pointing to a memory address of any variable, but after some time the variable was deleted from the memory location while keeping the pointer pointing to that location is known as a dangling pointer in C.

             `}
        />
        <QuestionCard
          question={`Q #7) Describe static function with its usage?

             `}
          answer={`Answer: A function, which has a function definition prefixed with a static keyword is defined as a static function. The static function should be called within the same source code.

             `}
        />
        <QuestionCard
          question={`Q #8) What is the difference between abs() and fabs() functions?

             `}
          answer={`Answer: Both functions are to retrieve absolute value. abs() is for integer values and fabs() is for floating type numbers. Prototype for abs() is under the library file < stdlib.h > and fabs() is under < math.h >.

             `}
        />
        <QuestionCard
          question={`Q #9) Describe Wild Pointers in C?

             `}
          answer={`Answer: Uninitialized pointers in the C code are known as Wild Pointers. They point to some arbitrary memory location and can cause bad program behavior or program crash.

             `}
        />
        <QuestionCard
          question={`Q #10) What is the difference between ++a and a++?

             `}
          answer={`Answer: ‘++a”  is called prefixed increment and the increment will happen first on a variable. ‘a++' is called postfix increment and the increment happens after the value of a variable used for the operations.

             `}
        />
        <h1>c++ Post</h1>
        <QuestionCard
          question={`Q #1) What is the basic structure of a C++ program?

             `}
          answer={`The basic structure of a C++ program is shown below:

             #include<iostream.h>
             int main()
             {
                             cout<<”Hello,World!”;
                             return 0;
             }
             The first line`}
        />
        <QuestionCard
          question={`Q #2) What are the Comments in C++?

             `}
          answer={`Comments in C++ are simply a piece of source code ignored by the compiler. They are only helpful for a programmer to add a description or additional information about their source code.

             In C++ there are two ways to add comments:
             
             //single-line comment
             /* block comment */
             The first type will discard everything after the compiler encounters “//”. In the second type, the compiler discards everything between “/*” and “*/”.`}
        />
        <QuestionCard
          question={`Q #3) Difference between Declaration and Definition of a variable.

             `}
          answer={`Answer: The declaration of a variable is merely specifying the data type of a variable and the variable name. As a result of the declaration, we tell the compiler to reserve the space for a variable in the memory according to the data type specified.

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
          question={`Q #4) Comment on Local and Global scope of a variable.

             `}
          answer={`Answer: The scope of a variable is defined as the extent of the program code within which the variable remains active i.e. it can be declared, defined or worked with.

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
          question={`Q #5) What is the precedence when there are a Global variable and a Local variable in the program with the same name?

             `}
          answer={`Answer: Whenever there is a local variable with the same name as that of a global variable, the compiler gives precedence to the local variable.

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
          question={`Q #6) When there are a Global variable and Local variable with the same name, how will you access the global variable?

             `}
          answer={`Answer: When there are two variables with the same name but different scope, i.e. one is a local variable and the other is a global variable, the compiler will give preference to a local variable.

             In order to access the global variable, we make use of a “scope resolution operator (::)”. Using this operator, we can access the value of the global variable.
             
             Example:
             
             #include<iostream.h>
             int x= 10;
             int main()
             {
              int x= 2;
              cout<<”Global Variable x = “<<::x;
              cout<<”/nlocal Variable x= “<<x;
             }
             Output:
             
             Global Variable x = 10
             local Variable x= 2
             `}
        />
        <QuestionCard
          question={`Q #7) How many ways are there to initialize an int with a Constant?

             `}
          answer={`Answer: There are two ways:

             The first format uses traditional C notation.
             int result = 10;
             The second format uses the constructor notation.
             int result (10);`}
        />
        <QuestionCard
          question={`Q #8) What is a Constant? Explain with an example.

             `}
          answer={`Answer: A constant is an expression that has a fixed value. They can be divided into integer, decimal, floating-point, character or string constants depending on their data type.

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
          question={`Q #9) How do you define/declare constants in C++?

             `}
          answer={`Answer: In C++, we can define our own constants using the #define preprocessor directive.

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
          question={`Q #10) Comment on Assignment Operator in C++.

             `}
          answer={`Answer: Assignment operator in C++ is used to assign a value to another variable.

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
                <h1>Computer Networks Interview Questions</h1>

        <QuestionCard question={`Q #1) What is a Network?

`} 
answer={`Answer: Network is defined as a set of devices connected to each other using a physical transmission medium.

For Example, A computer network is a group of computers connected with each other to communicate and share information and resources like hardware, data, and software. In a network, nodes are used to connect two or more networks.

`} />
        <QuestionCard question={`Q #2) What is a Node?

`} 
        answer={`Answer: Two or more computers are connected directly by an optical fiber or any other cable. A node is a point where a connection is established. It is a network component that is used to send, receive and forward the electronic information.

        A device connected to a network is also termed as Node. Let's consider that in a network there are 2 computers, 2 printers, and a server are connected, then we can say that there are five nodes on the network.`} />
        <QuestionCard question={`Q #3) What is Network Topology?

`} 
        answer={`Answer: Network topology is a physical layout of the computer network and it defines how the computers, devices, cables, etc are connected to each other.

        `} />
        <QuestionCard question={`Q #4) What are Routers?

`} 
        answer={`Answer: The router is a network device that connects two or more network segments. It is used to transfer information from the source to the destination.

        Routers send the information in terms of data packets and when these data packets are forwarded from one router to another router then the router reads the network address in the packets and identifies the destination network.`} />
        <QuestionCard question={`Q #5) What is the OSI reference model?

`} 
        answer={`Answer: Open System Interconnection, the name itself suggests that it is a reference model that defines how applications can communicate with each other over a networking system.

        It also helps to understand the relationship between networks and defines the process of communication in a network.`} />
        <QuestionCard question={`Q #6) What are the layers in OSI Reference Models? Describe each layer briefly.

`} 
        
        answer={`Answer: Given below are the seven layers of OSI Reference Models:

        a) Physical Layer (Layer 1): It converts data bits into electrical impulses or radio signals. Example: Ethernet.

        b) Data Link Layer (Layer 2): At the Data Link layer, data packets are encoded and decoded into bits and it provides a node to node data transfer. This layer also detects the errors that occurred at Layer 1.

        c) Network Layer (Layer 3): This layer transfers variable length data sequence from one node to another node in the same network. This variable-length data sequence is also known as “Datagrams”.

        d) Transport Layer (Layer 4): It transfers data between nodes and also provides acknowledgment of successful data transmission. It keeps track of transmission and sends the segments again if the transmission fails.

        e) Session Layer (Layer 5): This layer manages and controls the connections between computers. It establishes, coordinates, exchange and terminates the connections between local and remote applications.

        f) Presentation Layer (Layer 6): It is also called as “Syntax Layer”. Layer 6 transforms the data into the form in which the application layer accepts.

        g) Application Layer (Layer 7): This is the last layer of the OSI Reference Model and is the one that is close to the end-user. Both end-user and application layer interacts with the software application. This layer provides services for email, file transfer, etc.

        `} />
        <QuestionCard question={`Q #7) What is the difference between Hub, Switch, and Router?

`} 
        answer={`Answer:

        Hub	:- Hub is least expensive, least intelligent and least complicated of the three.
        It broadcast all data to every port which may cause serious security and reliability concern	In a Network, Hub is a common connection point for devices connected to the network. Hub contains multiple ports and is used to connect segments of LAN
        
        Switch	:- Switches work similarly like Hubs but in a more efficient manner.
        It creates connections dynamically and provides information only to the requesting port Switch is a device in a network which forwards packets in a network
        
        Router:- The router is smartest and most complicated out of these three. It comes in all shapes and sizes. Routers are similar like little computers dedicated for routing network traffic. Routers are located at gateway and forwards data packets

`} />
        <QuestionCard question={`Q #8) Explain TCP/IP Model

`} 
        answer={`Answer: The most widely used and available protocol is TCP/IP i.e. Transmission Control Protocol and Internet Protocol. TCP/IP specifies how data should be packaged, transmitted and routed in their end to end data communication
        
        Given below is a brief explanation of each layer:

        Application Layer: This is the top layer in the TCP/IP model. It includes processes that use the Transport Layer Protocol to transmit the data to their destination. There are different Application Layer Protocols such as HTTP, FTP, SMTP, SNMP protocols, etc.
        
        Transport Layer: It receives the data from the Application Layer which is above the Transport Layer. It acts as a backbone between the host's system connected with each other and it mainly concerns about the transmission of data. TCP and UDP are mainly used as Transport Layer protocols.
        
        Network or Internet Layer: This layer sends the packets across the network. Packets mainly contain source & destination IP addresses and actual data to be transmitted.
        
        Network Interface Layer: It is the lowest layer of the TCP/IP model. It transfers the packets between different hosts. It includes encapsulation of IP packets into frames, mapping IP addresses to physical hardware devices, etc.`} />
        
        <QuestionCard question={`Q #9) What is HTTP and what port does it use?

`} 
        answer={`Answer: HTTP is HyperText Transfer Protocol and it is responsible for web content. Many web pages are using HTTP to transmit the web content and allow the display and navigation of HyperText. It is the primary protocol and port used here is TCP port 80.

        `} />
        <QuestionCard question={`Q #10) What is HTTPs and what port does it use?

`} 
        answer={`Answer: HTTPs is a Secure HTTP. HTTPs is used for secure communication over a computer network. HTTPs provides authentication of websites that prevents unwanted attacks.

        In bi-directional communication, the HTTPs protocol encrypts the communication so that the tampering of the data gets avoided. With the help of an SSL certificate, it verifies if the requested server connection is a valid connection or not. HTTPs use TCP with port 443.`} />
     

        <h1>RDBMS Interview Questions</h1>

        <QuestionCard question={`1. What are the different features of an RDBMS?
`} 
        answer={`Name. Every relation in a relational database should have a name which is unique among all other relations.
        Attributes. Each column in a relation is called an attribute.
        Tuples. Each and every row in a relation is called a tuple. A tuple defines a collection of attribute values.`} />
        <QuestionCard question={`2. Explain the E-R Model?
`} 
        answer={`E-R model is an Entity-Relationship model. E-R model is based on a real-world which is made up of entities and related objects. Entities are illustrated in a database by a set of attributes.`} />
        <QuestionCard question={`3. Define the object-oriented model?
`} 
        answer={`The object-oriented model is based on collections of objects. An object accommodates values which are stored in instance variables inside the object. Objects having an identical type of values and the exact same methods are grouped together into classes.

        `} />
        <QuestionCard question={`4. Explain three levels of data abstraction?
`} 
        answer={`1.Physical level: This is the lowest level of abstraction and it describes how data is stored.

        2.Logical level: The next level of abstraction is logical, it describes what type of data is stored in a database and what is the relationship between these data.
        
        3.View level: The highest level of abstraction and it describes the only entire database.

`} />
        <QuestionCard question={`5. What are different Codd’s 12 rules for Relational Database?
`} 
        answer={`Codd’s 12 rules are a set of thirteen rules (numbered zero to twelve) proposed by Edgar F. Codd.
        Codd’s rules: –
        Rule 0: The system has to qualify as Relational, as a Database, and also as a Management System.
        Rule 1: The information rule: Each and every information in the database is to be represented uniquely, mainly name values in column positions within a different row of a table.
        Rule 2: The guaranteed access rule: All data must be ingressive. It says that every scalar value in the database must be correctly/logically addressable.
        Rule 3: Systematic treatment of null values: The DBMS must allow each tuple to remain null.
        Rule 4: Active online catalog (database’s structure) based on the relational model: The system must support an online, relational etc. structure which is ingressive to allowed users by means of their regular query.
        Rule 5: The comprehensive data sublanguage: The system has to assist a minimum of one relational language that:
        1.Has a linear syntax
        2.Which can be used as both interactively and within application programs,
        3.It supports data definition operations(DDL), data manipulation operations(DML), security and integrity constraints, and transaction management operations (begin, commit, and rollback).
        Rule 6: The view updating rule: All views that theoretically improve must be upgradable by the system.
        Rule 7: High-level insert, update, and delete: The system must support insert, update, and delete operators.
        Rule 8: Physical data independence: Modify the physical level (how the data is stored, using arrays or linked lists etc.) must not require a modification to an application.
        Rule 9: Logical data independence: Modify the logical level (tables, columns, rows etc.) must not require a modification to an application.
        Rule 10: Integrity independence: Integrity constraints must be identified individually from application programs and stored in the catalog.
        Rule 11: Distribution independence: The distribution of portions of a database to different locations should not be visible to users of the database.
        Rule 12: The nonsubversion rule: If the system provides a low-level (i.e. records) interface, then that interface can’t be used to subvert the system.


`} />
        <QuestionCard question={`6.What is normalization? and what explains different normalization forms?
`} 
        answer={`Database normalization is a process of organizing data to minimize data redundancy. Which in turn ensures data consistency. There are many problems associated with data redundancy such as disk space wastage, data inconsistency, DML (Data Manipulation Language) queries become slow. There are different normalisation forms: – 1NF, 2NF, 3NF, BCNF, 4NF,5NF, ONF, DKNF.
        1.1NF: – The data in each column should be atomic number multiple values separated by a comma. The table does not contain any repeating column groups. Identity each record uniquely using the primary key.
        2.2NF: – The table should match all the conditions of 1NF and move redundant data to a separate table. Moreover, it creates a relationship between these tables using foreign keys.
        3.3NF: – for a 3NF table should fulfill all the conditions of 1NF and 2NF. 3NF doesn’t contain attributes which are partially dependent upon primary key.`} />
        <QuestionCard question={`7. Define primary key, foreign key, candidate key, super key?
`} 
        answer={`Primary key: The primary key is the key that doesn’t allow duplicate values and null values. A primary key can be defined at column level or table level. Only one primary key per table is allowed.
        Foreign key: foreign key allows the values present in the referenced column only. It allows duplicate or null values. It can be defined as a column level or table level. It can reference a column of a unique/primary key.
        Candidate Key: A Candidate key is minimum super key, there is no proper subgroup of Candidate key attributes can be a super key.
        Super Key: A superkey is a set of attributes of a relation schema on which all attributes of the schema are partially dependent. No two rows can have the same value of super key attributes.`} />
        <QuestionCard question={`8. What is a different type of indexes?
`} 
        answer={`Indexes are: –
        Clustered index: – It is the index at which data is physically stored in the disk. Therefore, only one clustered index can be created to a database table.
        Non-clustered index: – It does not define physical data but it defines a logical ordering. Typically, B-Tree or B+ trees are created for this purpose.`} />
        <QuestionCard question={`9. What are the advantages of RDBMS?
`} 
        answer={`
        •Controlling Redundancy.
        •Integrity can be enforced.
        •Inconsistency can be avoided.
        •Data can be shared.
        •Standard can be enforced.
        
        `} />
        <QuestionCard question={`10. Name some subsystems of RDBMS?
`} 
        answer={`Input-output, Security, Language Processing, Storage Management, Logging and Recovery, Distribution Control, Transaction Control, Memory Management.`} />

        <h1>SQL Interview Questions</h1>

        <QuestionCard question={`1. What is SQL?`} 
        answer={`SQL stands for Structured Query Language , and it is used to communicate with the Database. This is a standard language used to perform tasks such as retrieval, updation, insertion and deletion of data from a database.

        Standard SQL Commands are Select.`} />
        <QuestionCard question={`2. What is a Database?`} 
        answer={`Database is nothing but an organized form of data for easy access, storing, retrieval and managing of data. This is also known as structured form of data which can be accessed in many ways.

        Example: School Management Database, Bank Management Database.`} />
        <QuestionCard question={`3. What are tables and Fields?

`} 
        answer={`A table is a set of data that are organized in a model with Columns and Rows. Columns can be categorized as vertical, and Rows are horizontal. A table has specified number of column called fields but can have any number of rows which is called record.

        Example:.
        
        Table: Employee.
        Field: Emp ID, Emp Name, Date of Birth.
        
        Data: 201456, David, 11/15/1960.`} />

        <QuestionCard question={`4. What is a primary key?`} 
        answer={`A primary key is a combination of fields which uniquely specify a row. This is a special kind of unique key, and it has implicit NOT NULL constraint. It means, Primary key values cannot be NULL.

        `} />
        <QuestionCard question={`5. What is a unique key?

`} 
        answer={`A Unique key constraint uniquely identified each record in the database. This provides uniqueness for the column or set of columns.

        A Primary key constraint has automatic unique constraint defined on it. But not, in the case of Unique Key.
        
        There can be many unique constraint defined per table, but only one Primary key constraint defined per table.`} />
        <QuestionCard question={`6. What is a foreign key?`} 
        answer={`A foreign key is one table which can be related to the primary key of another table. Relationship needs to be created between two tables by referencing foreign key with the primary key of another table.`} />
        <QuestionCard question={`7. What is a join?`} 
        answer={`This is a keyword used to query data from more tables based on the relationship between the fields of the tables. Keys play a major role when JOINs are used.
 `} />
        <QuestionCard question={`8. What is normalization?

`} 
        answer={`Normalization is the process of minimizing redundancy and dependency by organizing fields and table of a database. The main aim of Normalization is to add, delete or modify field that can be made in a single table.`} />
        
        <QuestionCard question={`9. What is Denormalization.

`} 
        answer={`DeNormalization is a technique used to access the data from higher to lower normal forms of database. It is also process of introducing redundancy into a table by incorporating data from the related tables.`} />
        <QuestionCard question={`10. What is a View?`} 
        answer={`A view is a virtual table which consists of a subset of data contained in a table. Views are not virtually present, and it takes less space to store. View can have data of one or more tables combined, and it is depending on the relationship.
 `} />

        <h1>Testing INterview Questions</h1>

        <QuestionCard question={`1. What is Software Testing?
`} 
        answer={`According to ANSI/IEEE 1059 standard – A process of analyzing a software item to detect the differences between existing and required conditions (i.e., defects) and to evaluate the features of the software item.`} />
        <QuestionCard question={`2. What are Quality Assurance and Quality Control?   
`} 
        answer={`Quality Assurance: Quality Assurance involves in process-oriented activities. It ensures the prevention of defects in the process used to make Software Application. So the defects don’t arise when the Software Application is being developed.
        Quality Control: Quality Control involves in product-oriented activities. It executes the program or code to identify the defects in the Software Application.`} />
        <QuestionCard question={`3. What is Verification in software testing?
`} 
        answer={`Verification is the process, to ensure that whether we are building the product right i.e., to verify the requirements which we have and to verify whether we are developing the product accordingly or not. Activities involved here are Inspections, Reviews, Walk-throughs.`} />
        <QuestionCard question={`4. What is Validation in software testing?
`} 
        answer={`Validation is the process, whether we are building the right product i.e., to validate the product which we have developed is right or not. Activities involved in this is Testing the software application`} />
        <QuestionCard question={`5. What is Static Testing?
`} 
        answer={`Static Testing involves in reviewing the documents to identify the defects in the early stages of SDLC.

        `} />
        <QuestionCard question={`6. What is Dynamic Testing?
`} 
        answer={`Dynamic testing involves in the execution of code. It validates the output with the expected outcome.

        `} />
        <QuestionCard question={`7. What is White Box Testing?
`} 
        answer={`White Box Testing is also called as Glass Box, Clear Box, and Structural Testing. It is based on applications internal code structure. In white-box testing, an internal perspective of the system, as well as programming skills, are used to design test cases. This testing usually was done at the unit level.`} />
        <QuestionCard question={`8. What is Black Box Testing?
`} 
        answer={`Black Box Testing is a software testing method in which testers evaluate the functionality of the software under test without looking at the internal code structure. This can be applied to every level of software testing such as Unit, Integration, System and Acceptance Testing.`} />
        <QuestionCard question={`9. What is Grey Box Testing?
`} 
        answer={`Grey box is the combination of both White Box and Black Box Testing. The tester who works on this type of testing needs to have access to design documents. This helps to create better test cases in this process.
        `} />
        <QuestionCard question={`10. What is Positive and Negative Testing?
`} 
        answer={`Positive Testing: It is to determine what system supposed to do. It helps to check whether the application is justifying the requirements or not.

        Negative Testing: It is to determine what system not supposed to do. It helps to find the defects from the software.

        `} />

        <h1>SDLC Interview Questions</h1>

<QuestionCard question={`Q1. What is SDLC and what is it used for?
`} 
answer={`SDLC (Software Development Life Cycle) is the process of design and development of a product or service to be delivered to the customer that is being followed for the software or systems projects in the Information Technology or Hardware Organizations. SDLC framework is useful in delivering the products or customers which ensures high quality and efficient.`} />
<QuestionCard question={`Q2. What are the different types of SDLC methodologies?
`} 
answer={`This is the basic SDLC Interview Questions asked in an interview. The different models of SDLC are –

1. Waterfall model
2. Agile model
3. Iterative or incremental model
4. Spiral model
5. RAD – Rapid Application Development model
6. V-Shaped model
7. Evolutionary prototype model
`} />
<QuestionCard question={`Q3. What are the different phases of the Waterfall model?
`} 
answer={`The different phases or steps involved in the waterfall model are Requirements, Design, Execution, Testing, and Release. This model is of sequential form and moves downward without any deviations. Every phase will start only after the completion of the previous one. This process was being followed for a long time and a traditional approach and has been the best one since agile is adopted recently. This type of model does not involve any kind of frequent requirement changes and needs follows clear documentation from the beginning to the end. The phases and activities are well planned.

`} />
<QuestionCard question={`Q4. What is CMM Maturity Level and what is its importance?
`} 
answer={`The CMM (Capability Maturity Model) is a standard or benchmark which is used in the process of the development model in an organization to study or know the maturity of the processes being followed in an organization. The CMMI level is used to determine the quality or maturity of a software development process in an organization i.e. either software or hardware. It will be used to assess the organization on a scale of five different levels and the processes being followed in the organization. The five different levels are Initial, Repeatable, Defined, Capable (Managed) and Efficient (Optimizing).`} />
<QuestionCard question={`Q5. What are the drawbacks of Waterfall model?
`} 
answer={`The drawbacks of the waterfall model are – It will not be ideal for larger and complex projects when the requirements are not clearly documented and not clear. It is not easier and also not possible to go back to any stage or phase during the Software Development Process. No software product or service will be delivered until the last stages or phases of the Software Development Life Cycle which will be a form of risk. The process of testing can also be completed only after the completion of the Development phase and also cannot be carried out in parallel.`} />
<QuestionCard question={`Q6. Who are the different team members involved in the different phases of the Waterfall model?
`} 
answer={`The different team members or key members involved in Waterfall model development process are Technical Manager, Developers, Senior Developers, Business analyst, Technical Lead or System Architect or Solutions Architect or Technical Architect in the Design Phase and the Developers, Senior Developers in the Coding phase. Testers or Analysts in the Testing Phase. Project Manager, Program Manager, and Maintenance Team will be in the Maintenance phase of the Software Development Life Cycle process. The team members involved in the different project phases also depends on the structure of the organization and the roles and responsibilities being followed or maintained by the particular organization.`} />
<QuestionCard question={`Q7. What are LLDs or HLDs in SDLC?
`} 
answer={`The LLD (Low-Level Design) and HLD (High-level Design) are used to analyze and understand the project in a high level and low-level overview to different types of team members to the customers depending on the technical or business knowledge of the person. The Low-level Design is a detailed design implementation which will be helpful in the development process for the Developers whereas the High-Level Design will be given by Architects to proceed with the development process initially. This will be easier to know or look at a glance to understand about the project easily.`} />
<QuestionCard question={`Q8. What are the different phases in the Agile model?
`} 
answer={`The different phases involved in the Agile model are Planning, Requirements, Analysis, Design, Coding, Unit Testing, System Integration Testing, Non-Functional Testing, and Acceptance Testing. The Agile model will be followed using any Agile boards such as Scrum or Kanban. There will be a number of Sprints to be followed and all the deliverables will be done in the form of Story Points.`} />
<QuestionCard question={`Q9. What are the advantages of the agile model?
`} 
answer={`This is the advanced SDLC Interview Questions asked in an interview. The different advantages of following the Agile model in a Software Development Life Cycle process are as below:

It is easier and simple to understand and to use and implement.
It has simple and easier deliverables which are planned frequently based on Sprints which ensures frequent and high-quality deliverables.
It is very good for smaller and also larger or complex projects and ends up with high-quality project deliverables.`} />
<QuestionCard question={`Q10. What is a V-shaped model in SDLC?
`} 
answer={`The V-shaped model is a type of extension model and the testing will be planned earlier. The different steps are given below:

Planning
Requirements
Architecture
Design
Implementation
Unit Testing
Integration Testing
System and Acceptance Testing
Maintenance`} />

<h1>CLoud Computing Interview Questions</h1>

<QuestionCard question={`1) What is cloud computing?
`} 
answer={`Cloud computing is an internet based new age computer technology. It is the next stage technology that uses the clouds to provide the services whenever and wherever the user need it.It provides a method to access several servers world wide.


`} />
<QuestionCard question={`2) What are the benefits of cloud computing?
`} 
answer={`The main benefits of cloud computing are:

Data backup and storage of data.
Powerful server capabilities.
Incremented productivity.
Very cost effective and time saving.
Software as Service known as SaaS.`} />
<QuestionCard question={`3) What is a cloud?
`} 
answer={`A cloud is a combination of networks ,hardware, services, storage, and interfaces that helps in delivering computing as a service. It has three users :

End users
Business management users
cloud service provider`} />
<QuestionCard question={`4) What are the different data types used in cloud computing?
 `} 
answer={`There are different data types in cloud computing like emails, contracts, images , blogs etc. As we know that data is increasing day by day so it is needed to new data types to store these new data. For an example, if you want to store video then you need a new data type.

`} />
<QuestionCard question={`5) Which are the different layers that define cloud architecture?
`} 
answer={`Following are the different layers that are used by cloud architecture:

CLC or Cloud Controller
Walrus
Cluster Controller
SC or Storage Controller
NC or Node Controller`} />
<QuestionCard question={`6) Which platforms are used for large scale cloud computing?
`} 
answer={`The following platforms are used for large scale cloud computing:

Apache Hadoop
MapReduce
`} />
<QuestionCard question={`7) What are the different layers in cloud computing? Explain working of them.
`} 
answer={`There are 3 layers in the hierarchy of cloud computing.

Infrastructure as a service (IaaS):It provides cloud infrastructure in terms of hardware as like memory, processor, speed etc.

Platform as a service (PaaS):It provides cloud application platform for the developer.

Software as a service (SaaS)::It provides the cloud applications to users directly without installing anything on the system. These applications remains on cloud.

`} />
<QuestionCard question={`8) What do you mean by software as a service?
`} 
answer={`Software As a Service (SaaS) is an important layer of cloud computing. It provides cloud applications like Google is doing. It facilitate users to save their document on the cloud and create as well.

`} />
<QuestionCard question={`9) What is the platform as a service?
`} 
answer={`It is also a layer in cloud architecture. This model is built on the infrastructure model and provide resources like computers, storage and network. It is responsible to provide complete virtualization of the infrastructure layer, make it look like a single server and invisible for outside world.

`} />
<QuestionCard question={`10) What is on-demand functionality? How is it provided in cloud computing?
`} 
answer={`Cloud computing provides a on-demand access to the virtualized IT resources. It can be used by the subscriber. It uses shared pool to provide configurable resources. Shared pool contains networks, servers, storage, applications and services.

`} />

<h1>OS Interview Questions</h1>

<QuestionCard question={`1) What is an operating system?
`} 
answer={`The operating system is a software program that facilitates computer hardware to communicate and operate with the computer software. It is the most important part of a computer system without it computer is just like a box.

`} />
<QuestionCard question={`2) What is the main purpose of an operating system?
`} 
answer={`There are two main purposes of an operating system:

It is designed to make sure that a computer system performs well by managing its computational activities.
It provides an environment for the development and execution of programs.`} />
<QuestionCard question={`3) What are the different operating systems?
`} 
answer={`
Batched operating systems
Distributed operating systems
Timesharing operating systems
Multi-programmed operating systems
Real-time operating systems`} />
<QuestionCard question={`4) What is a socket?
`} 
answer={`A socket is used to make connection between two applications. Endpoints of the connection are called socket.

`} />
<QuestionCard question={`5) What is a real-time system?
`} 
answer={`Real-time system is used in the case when rigid-time requirements have been placed on the operation of a processor. It contains a well defined and fixed time constraints.

`} />
<QuestionCard question={`6) What is kernel?
`} 
answer={`Kernel is the core and most important part of a computer operating system which provides basic services for all parts of the OS.

`} />
<QuestionCard question={`7) What is monolithic kernel?
`} 
answer={`A monolithic kernel is a kernel which includes all operating system code is in single executable image.

`} />
<QuestionCard question={`8) What do you mean by a process?
`} 
answer={`An executing program is known as process. There are two types of processes:

Operating System Processes
User Processes`} />
<QuestionCard question={`9) What are the different states of a process?
`} 
answer={`A list of different states of process:

New Process
Running Process
Waiting Process
Ready Process
Terminated Process`} />
<QuestionCard question={`10) What is the difference between micro kernel and macro kernel?
`} 
answer={`Micro kernel: micro kernel is the kernel which runs minimal performance affecting services for operating system. In micro kernel operating system all other operations are performed by processor.

Macro Kernel: Macro Kernel is a combination of micro and monolithic kernel.

`} 
 
/>
<h1>Datastructures Interview Questions</h1>
<QuestionCard question={`1) What is Data Structure? Explain.
`} 
answer={`The data structure is a way that specifies how to organize and manipulate the data. It also defines the relationship between them. Some examples of Data Structures are arrays, Linked List, Stack, Queue, etc. Data Structures are the central part of many computer science algorithms as they enable the programmers to handle the data in an efficient way

`} 
 
/>
<QuestionCard question={`2) Describe the types of Data Structures?
`} 
answer={`Data Structures are mainly classified into two types:

Linear Data Structure: A data structure is called linear if all of its elements are arranged in the sequential order. In linear data structures, the elements are stored in a non-hierarchical way where each item has the successors and predecessors except the first and last element.

Non-Linear Data Structure: The Non-linear data structure does not form a sequence i.e. each item or element is connected with two or more other items in a non-linear arrangement. The data elements are not arranged in the sequential structure.

`} 
 
/>
<QuestionCard question={`3) List the area of applications of Data Structure.
`} 
answer={`Data structures are applied extensively in the following areas of computer science:

Compiler Design,
Operating System,
Database Management System,
Statistical analysis package,
Numerical Analysis,
Graphics,
Artificial Intelligence,
Simulation
`} 
 
/>
<QuestionCard question={`4) What is the difference between file structure and storage structure?
`} 
answer={`Difference between file structure and storage structure:

The main difference between file structure and storage structure is based on memory area that is being accessed.

Storage structure: It is the representation of the data structure in the computer memory.

File structure: It is the representation of the storage structure in the auxiliary memory`} 
 
/>
<QuestionCard question={`5) List the data structures which are used in RDBMS, Network Data Modal, and Hierarchical Data Model.
`} 
answer={`RDBMS uses Array data structure
Network data model uses Graph
Hierarchal data model uses Trees`} 
 
/>
<QuestionCard question={`6) What are the operations that can be performed on a stack?
`} 
answer={`Push Operations
Pop Operations
Peek Operations`} 
 
/>
<QuestionCard question={`7) Write the stack overflow condition.
`} 
answer={`Overflow occurs when top = Maxsize -1

`} 
 
/>
<QuestionCard question={`8) What is the difference between PUSH and POP?
`} 
answer={`PUSH and POP operations specify how data is stored and retrieved in a stack.

PUSH: PUSH specifies that data is being "inserted" into the stack.

POP: POP specifies data retrieval. It means that data is being deleted from the stack.`} 
 
/>
<QuestionCard question={`9) Write the steps involved in the insertion and deletion of an element in the stack.
`} 
answer={`Push:

Increment the variable top so that it can refer to the next memory allocation
Copy the item to the at the array index value equal to the top
Repeat step 1 and 2 until stack overflows

Pop:

Store the topmost element into the an another variable
Decrement the value of the top
Return the topmost element`} 
 
/>
<QuestionCard question={`10) What is a postfix expression?
`} 
answer={`An expression in which operators follow the operands is known as postfix expression. The main benefit of this form is that there is no need to group sub-expressions in parentheses or to consider operator precedence.

The expression "a + b" will be represented as "ab+" in postfix notation.`} 
 
/>
      </>
    );
  }
}

export default DBMSPosts;
