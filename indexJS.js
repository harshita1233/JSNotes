// // let app = (function(){
// //     let carId=123;
// //     let getCardId = function(){
// //         console.log("from inner function", carId)
// //         return carId;
// //     }
// //     return{ getCardId
// //         }
// // })();

// // console.log(app.getCardId())
// // var sum = (function(){
// //     var foo = 20;
// //     function bar(){
// //         foo = foo +10;
// //         console.log(foo);
// //     }
    
// //     return foo
// // })();
// // console.log("1", sum)
// // sum()
// // sum()

// // let cat= {
// //     carid:12,
// //     startCar: function(message){
// //     //    console.log(`Hello ${message} car id is ${this.carid}`)
// //          return this.carid
// //     }
// // }
// // let newcats={carid:456}
// //console.log(cat.startCar.call(newcats, 'Harshita'))
// // console.log(newFun())
// // let cats={
// //     catid:12,
// //     getId: function(id, prefix){
// //         console.log("details are:" +prefix, +id, +this.catid )
// //     }
// // }
// // let newcats={catid:456}
// // cats.getId.apply(newcats,[1997, 'meow'])
// // class Vehicle{
// //     constructor(car){
// //         this.type=car
// //     }
// //     start(suffix){
// //         return `drive ${this.type} ${suffix}`
// //     }
// // }
// // let car = new Vehicle('ford car')
// // console.log( car.start("!!!"))
// // console.log(typeof(Vehicle))

// // function Vehicle(car) {
// //     this.type = car
// // }
// // Vehicle.prototype.start=function(suffix){
// //     return `drive ${this.type} ${suffix}`
// // }
// // let car = new Vehicle('ford car')
// // console.log( car.start("!!!"))
// // class Vehicle{
// //     constructor(car){
// //         this.car= car;
// //     }
// //     start(){
// //         return this.car
// //     }
// // }
// // class Category extends Vehicle{
// //     constructor(name){
// //         super(name) //for this code, this
// //     }
// //     start(){
// //         return `Name of the brand is ${super.start()}`//for accessing base class methods we have used super keyword
// //     }
// // }

// // let carType = new Category('Ford')
// // console.log(carType.start()) //Name of the brand is Ford
// // class Vehicle{
// //     constructor(car){
// //         this.type= car;
// //     }
// // }
// // class Category extends Vehicle{
// //     // constructor(name){
// //     //     super(name)
// //     //     this.category='fiesta' //calling constructor here is optional
// //     // }

// // }

// // let carType = new Category('ford')
// // console.log(carType.type)

// var Person = function(name){
//     this.name= name;
// }

// function Man (name){
//     Person.call(this, name)
//     this.gender='Male'
// }
// Man.prototype.getName= function(){
//     console.log('j', this.gender,'h')
//     return this.gender
// }

// Man.prototype = Object.create(Person.prototype)
// Man.prototype.constructor=Man
// var manName = new Man('John')
// console.log(manName.gender, manName.name)
// console.log(manName, Person,'-', Man)
// console.log(manName.getName())
// console.log(manName.constructor)
// console.log(manName.constructor ===Man)
// console.log(Man.prototype.constructor)
// console.log(manName instanceof Man)
// // function Vehicle(car) {
// //     this.type = car
// // }
// // Vehicle.prototype.start=function(suffix){
// //     return `drive ${this.type} ${suffix}`
// // }
// // let car = new Vehicle('ford car')
// // console.log( car.start()) //drive ford car !!!
// console.log(typeof(myCar));
//  console.log(myCar) //

// // let myCar1;
// // console.log(myCar1)

// var myCar2= 233
// console.log(typeof(myCar2), myCar2) //?
// myCar2 //?
// function add(){
//     a= 2;
// }
// add()
// console.log(a)
// function checkHoist(){
//     a = 20;
//     console.log("inside function")
// }

// checkHoist();
// console.log("a is global variable", a)
// console.log(b)

// var teacher = 'Alice'
// function printName(){
//     console.log(teacher); //Reference error:Cannot access 'teacher' before initialisation
//     let teacher='Bob'
// }
// printName()
// var name
// function name(){
//         return 'Blob'
// }
// console.log(typeof(name))
// var car = new Car();//ReferenceError: Cannot access 'Car' before initialization
// car.color='blue';
// car.model=' Honda City'
// console.log(car)
// class Car{
//     constructor(color,model){
//         this.color=color;
//         this.model=model
//     }
// // }
// class Car{
//     constructor(color,model){
//         this.color=color;
//         this.model=model
//     }
// }
//     var car = new Car();//ReferenceError: Cannot access 'Car' before initialization
// car.color='blue';
// car.model=' Honda City'
// console.log(car) //Car {color: "blue", model: " Honda City"}
// var car = new Car();
// car.color='blue';
// car.model='honda city'

// var Car = class{
//      constructor(color,model){
//         this.color=color;
//         this.model=model
//     }
// }
// var Car = class{
//     constructor(color,model){
//        this.color=color;
//        this.model=model
//    }
// }
// var car = new Car(); // Car is not a constructor
// car.color='blue';
// car.model='honda city'
// console.log(car) //Car {color: "blue", model: "honda city"}
// let car;
// console.log(car); //undefined
//console.log(typeof(myCar));
// console.log(myCar)
// console.log(hoist) // undefined
// var hoist = 1;

// console.log(checkHoist, typeof(checkHoist)) //undefined "undefined"
// var checkHoist
// console.log( typeof(checkHoist)) //undefined
// console.log( typeof(checkHoist)) 
// console.log(myCar) //index.js:214 Uncaught ReferenceError: myCar is not defined
// console.log( checkHoist) //ReferenceError: checkHoist is not defined
// checkHoisting()  //inside function
// console.log(typeof(checkHoisting)) //function
// function checkHoisting(){
//     console.log("inside function")
// }
// function checkHoist(){
//     a = 20;
//     var b = 30;
// }
// // checkHoist();
// console.log("a is global variable", a)//ReferenceError: a is not defined

// function checkHoisting(){
//     console.log(b) //undefined
//     var b = 10;
// }
// checkHoisting()
// checkHoist() //Uncaught ReferenceError: Cannot access 'foo' before initialization
// const checkHoist = () =>{
//     console.log(12)
// }
 //Uncaught TypeError: foo is not a function
// var foo = function(){
//     console.log("no hoisting"); //no hoisting
// }
// foo();
// var name 
// function name(){
//     return 'Blob'
// }
// console.log(typeof(name)) //function
// var car = new Car();//ReferenceError: Cannot access 'Car' before initialization
// car.color='blue';
// car.model=' Honda City'
// console.log(car)
// class Car{
//     constructor(color,model){
//         this.color=color;
//         this.model=model
//     }
// }
// class Car{
//   constructor(color,model){
// 		this.color=color;
// 		this.model=model
//   }
// }
// var car = new Car();
// car.color='blue';
// car.model=' Honda City'
// console.log(car) //Car {color: "blue", model: " Honda City"}
// var car = new Car(); //Uncaught TypeError: Car is not a constructor
// car.color='blue';
// car.model='honda city'

// var Car = class{
//      constructor(color,model){
//         this.color=color;
//         this.model=model
//     }
// }
// var Car = class{
// 	constructor(color,model){
// 		this.color=color;
// 		this.model=model
//  }
// }
// var car = new Car();
// car.color='blue';
// car.model='honda city'
// console.log(car) //Car {color: "blue", model: "honda city"}
// function check(){
// 	if(true){
// 		const check1= 12
// 	}
// 	console.log(check1)
// }
// check()
// console.log(a)//index.js:294 Uncaught ReferenceError: Cannot access 'a' before initialization
// let a;
// var teacher = 'Alice'
// function printName(){
//     console.log(teacher); //Reference error:Cannot access 'teacher' before initialisation
//     let teacher='Bob'
// }
// printName();
// console.log( typeof(checkHoist)) 
// console.log(myCar) //index.js:214 Uncaught ReferenceError: myCar is not defined
// console.log(hoist) // undefined
// var hoist = 1;
// console.log(checkHoist) //ReferenceError: checkHoist is not defined
// checkHoisting()
// console.log(typeof(checkHoisting))//function
// function checkHoisting(){
//     console.log("inside function")  //inside function
// }
// function checkHoist(){
//     a = 20;
//     var b = 30;
// }
// checkHoist();
// console.log("a is global variable", a)//a is global variable 20
// console.log(b) //ReferenceError: b is not defined
// let car;
// console.log(car); //undefined
// car= 6;