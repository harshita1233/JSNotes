1. In inheritance why do we need super, is calling necessary.
2. What is prototype inheritance
Before diving into the classes.
methods are basically function that exist on the objects.
With the introduction of classes, we don't need to use prototype now.
They were introduced in ES6 standard.
<pre>class Vehicle{
    constructor(car){
        this.type=car
    }
    start(suffix){
        return `drive ${this.type} ${suffix}`
    }
}
let car = new Vehicle('ford car')
console.log( car.start("!!!")) //drive ford car !!!
</pre>
In the above example, we don't need to create constructor function now, it can be defined inside the class, where we can initialise the members/ or attach fields to our classes and initialise them.
Whenever we create an object of the class, constructor is called as new creates an instance of an object by setting the constructor to another object and makes this variable point to the newly created object and invokes the constructor function
We have also added a method inside our class which needs to be invoked separately.
JS classes are just syntactic sugar for constructor function and classes.
<pre>console.log(typeof(Vehicle)) //function</pre>
Below is demonstrated how to achieve the above with vanilla JS
<pre>function Vehicle(car) {
    this.type = car
}
Vehicle.prototype.start=function(suffix){
    return `drive ${this.type} ${suffix}`
}
let car = new Vehicle('ford car')
console.log( car.start("!!!")) //drive ford car !!!</pre>
let's see one more example-
<pre>class Vehicle{
    constructor(car){
        this.type= car;
    }
}
class Category extends Vehicle{
    constructor(name){
        super(name) //calling constructor here is optional
    }
}

let carType = new Category('ford')
console.log(carType.type) //ford
</pre>

In the above code, we have our parent class Vehicle, responsible for initializing the class member and the class Category which is our child class is extending the Vehicle class. We have then created an object using the new keyword. Now the question is why have I written constructor as optional in derived class in this case as-
1. If you don't provide your own constructor, default constructor will be created.
2. The default constructor, first calls the parent constructor passing any props, if provided.
3. Since we did not do any custom initialization, therefore we didn't supply the explicit constructor.  
<pre>class Vehicle{
    constructor(car){
        this.car= car;
    }
    start(){
        return this.car
    }
}
class Category extends Vehicle{
    constructor(name){
        super(name) //for this code, this is optional.
    }
    start(){
        return `Name of the brand is ${super.start()}`//for accessing base class methods we have used super keyword
    }
}

let carType = new Category('Ford')
console.log(carType.start()) //Name of the brand is Ford</pre>
### How can we achieve the prototype inheritance using classes?
Inheritance means to inherit the properties of the parent class, in order to avoid duplication of code.  
in ES5 style-
<pre>var Person = function(name){
    this.name= name;
}

function Man (name){
    Person.call(this, name)
    this.gender='Male'
}
Man.prototype = Object.create(Person.prototype)
Man.prototype.constructor=Man
var manName = new Man('John')
console.log(manName.gender, manName.name) //Male John</pre>
Using ES6+-
<pre>class Person{
    constructor(name){
        this.name = name
    }
}
class Man extends Person{
    constructor(name){
        super(name)
        this.gender='Male'
    }
}
var myName = new Man("John")
console.log(manName.gender, manName.name) //Male John
</pre>
