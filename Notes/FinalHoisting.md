### Hoisting-Breaking the Misconception
Since i started learning JS, I understood hoisting as the mechanism in which the variables and functions are hoisted to the of their scope. But not anymore, let's understand what hoisting actually is with series of examples.
<pre>console.log(hoist) // undefined
var hoist = 1;</pre>
I used to infer that the above code will be interpreted to as shown in the below code. The variable will be hoisted to top and the assignments doesn't gets hoisted, giving us undefined value
<pre>
var hoist;
console.log(hoist)
hoist = 1;
</pre>
Let's break the myth and understand what is happening under the hood. Our code remain as it is, it doesn't go anywhere.
When JS engine processes the code, execution context is created:-
1. Creation Phase- In this phase variables and function declarations are added to computer's memory in Lexical Environment(used to define the association of Identifiers to specific variables or functions ). Note-No values are assigned to them yet, enabling us to use them even before we declare it in our code.
2. Execution Phase- After the creation phase, JS engine check the code and in this phase if we have declared or assigned value to the variable in our code, it will get assigned to them.
Therefore, we are able to access the variables or functions even before we declare them because of what happens during Creation Phase, so JS engine already knows where the variables and the functions are sitting in the memory. Before moving further,key things to remember are - 
<pre>console.log(typeof(checkHoist))</pre>
 A undeclared variable, is always of the type undefined, during execution also
 <pre>console.log( typeof(checkHoist)) 
console.log(myCar) //index.js:214 Uncaught ReferenceError: myCar is not defined</pre>
Trying to access the undeclared variable will throw the reference error
Let's understand hoisting through the series of examples-
 #### var
 Let's understand how hoisting works with var
 <pre>console.log(hoist) // undefined
var hoist = 1;</pre>
We expected 1 to be logged but it logged undefined as explained earlier,in the creation phase, during compilation of code , var hoist will get stored in the memory. JS engine will add a placeholder value on its own that is undefined. Later during the execution phase , when the assignment is being done in our code, it will update that value in place of undefined.
<pre>console.log( checkHoist) //ReferenceError: checkHoist is not defined</pre>
In the above example, we got the reference error as the JS interpreter is saying that the variable was nowhere to be found in the memory, hence it is not defined.
 #### Functions 
 Let's see how will hoisting work with the function.
 <pre>checkHoisting()  //inside function
 console.log(typeof(checkHoisting))//function
function checkHoisting(){
    console.log("inside function")
}</pre>
As stated earlier, function declaration that is checkHoisting, in the creation phase gets stored in the memory,enabling us to invoke the function before we even declare it.
<pre>function checkHoist(){
    a = 20;
    var b = 30;
}
checkHoist();
console.log("a is global variable", a)//a is global variable 20
console.log(b) //ReferenceError: b is not defined</pre>
You must be wondering, how are we able to access a outside of its scope when it shouldn't get hoisted.
Important thing to note is when assigning value to an undeclared variable, implicitely create it as a global variable, when executed.
However, for accessing the undeclared variable like a, code within which it is being assigned should execute, else it will throw error as shown below.
We cannot access b outside of its scope.
<pre>function checkHoist(){
    a = 20;
    var b = 30;
}
// checkHoist();
console.log("a is global variable", a)//ReferenceError: a is not defined</pre>
Let's see some more example
<pre>function checkHoisting(){
    console.log(b) //undefined
    var b = 10;
}
checkHoisting()</pre>
In the above code, var b will get hoisted within its scope and will be then initialised to undefined at the moment that scope is entered, later during the execution phase, when the JS engine enters that line of code where we have assigned the value, variable b will be then updated.
Note- Arrow functions and function expressions doesn't gets hoisted.
<pre>checkHoist() //Uncaught ReferenceError: Cannot access 'foo' before initialization
const checkHoist = () =>{
    console.log(12)
}</pre>
<pre>foo() //Uncaught TypeError: foo is not a function
var foo = function(){
    console.log("no hoisting")
}</pre>
In the above example we get a type error as var foo is hoisted and will be treated as variable but type of foo is not known yet, as the assignment to a function is not hoisted.
Therefore, for the above code to work, we need to declare first and then use it.
<pre>var foo = function(){
    console.log("no hoisting"); //no hoisting
}
foo();</pre>
Note-Function declaration are hoisted over variable declaration but not over variable assignment.
Reading this might be confusing at first, let's understand with example
#### Variable assignment over function declaration
<pre>
var name = 'Mary'
function name(){
        return 'Blob'
}
console.log(typeof(name)) //string
</pre>
#### Function declaration over variable declaration
<pre>
var name
function name(){
        return 'Blob'
}
console.log(typeof(name)) //function

####class
We can classify class as class declaration and class expression
class declaration- They are also hoisted but remain uninitialised until evaluation, leading you to declare classes before accessing them.
<pre> var car = new Car();//ReferenceError: Cannot access 'Car' before initialization
car.color='blue';
car.model=' Honda City'
console.log(car)
class Car{
    constructor(color,model){
        this.color=color;
        this.model=model
    }
}</pre>
Your linter will display the message 
Class 'Car' used before its declaration.
Therefore, to access the class properties, we need to declare it first and then access it.
For the above code to work, we should write it like-
<pre>class Car{
    constructor(color,model){
        this.color=color;
        this.model=model
    }
}
    var car = new Car();//ReferenceError: Cannot access 'Car' before initialization
car.color='blue';
car.model=' Honda City'
console.log(car) Car {color: "blue", model: " Honda City"}</pre>
Therefore, during the creation phase, class will get hoisted but will remain uninitialised. When the JS engine has evaluated the class statement, it will then initialise the class with its value.
####class expression
class expression doesn't gets hoisted.
Let's see it with example
<pre>var car = new Car(); // Car is not a constructor
car.color='blue';
car.model='honda city'

var Car = class{
     constructor(color,model){
        this.color=color;
        this.model=model
    }
}</pre>

Correct way to implement this is-
<pre>var Car = class{
     constructor(color,model){
        this.color=color;
        this.model=model
    }
}
    var car = new Car(); // Car is not a constructor
car.color='blue';
car.model='honda city'
console.log(car) //Car {color: "blue", model: "honda city"}
</pre>

#### let and const
With the introduction of new changes in ES6+, comes let and const.
Variables declared with the let and const keyword are block scoped. They also get hoisted,but not as how var gets hoisted. 
During the creation phase, they get stored in the memory but unlike var, they don't get initialised. They remain uninitialised until their assignment is evaluated during runtime by JS engine.
<pre>console.log(a)//index.js:294 Uncaught ReferenceError: Cannot access 'a' before initialization
let a;</pre>
In the above example,during the creation phase, variable gets stored in the memory, but it is not initialised. when we tried to access the uninitialized variable, reference error was thrown.We can't access the variable until JS engine evaluates the point where they are declared in the code.
If the JS engine can't find their value, at the point where they are declared then undefined will be assigned to them, given below is the example to demonstrate the same.
<pre>let car;
console.log(car); //undefined
car= 6;</pre>
During the compilation, variable car gets stored in the memory, but it will not get initialised with any value  until the JS engine, during run time, executes that line of code.Since, it has no value that time(at the point of declaration), undefined will be assigned. After that 6 will be assigned and the value will be updated.
Note-let and const are initialised only in the execution phase. The time between declaration of variable and initialisation is temporal dead zone and accessing within this window, will throw reference error.
Being able to access a variable before its declaration is strange behavior, therefore temporal dead zone is necessary so that it could warn us-
<pre>
var teacher = 'Alice'
function printName(){
    console.log(teacher); //Reference error:Cannot access 'teacher' before initialisation
    let teacher='Bob'
}</pre>

Conclusion  
1. Always declare and initialise the variable before using them.
2. Use let and const whenever possible.
3. To avoid the pitfalls caused by the hoisting, it is strongly adviced to use 'use strict'.

That's all we need to know about Hoisting. If you like this article, please click the clap button. Also, suggestions are most welcome.