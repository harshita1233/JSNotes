//constructor function
//used to instantiate new objects
function Car(){} //constructor function
let car = new Car()//new car creates new car object and assign to car

function Car1(id){
    this.carId = id;//this will be new empt object where we store properties and functions for the object in this
}
//
let car1 = new Car1(123) // function gets brand new empt context
console.log("test", car1.carId) //123

function Car2(id){
    this.carId = id;
    this.startId = function(){
        console.log("car", this.carId, this)

    };
}
let car2 = new Car2(123)

car2.startId()
// console.log("car", car2.startId())

//PROTOTYPES
// When we make constructor function which has a property and a method attache to it. So 
//if we create many objects of it,function will also be replicated many times. So to avoid prototype exists
//it exists directly on car as function, saves ot of memory
function Car3(id){
    this.id = id
}
Car3.prototype.start = function(){
    console.log("proto", this.id, this)
}
let car3 = new Car3(123)
car3.start()

// Expanding Objects using prototypes
// It is used to expand objexts and give new functionality to all its instances of an object. Polyfill use prototypes
String.prototype.hello = function(){ //STring is bilt and can access its prototypes and set method hello to this function.Any string in js has now aceess to this function.We created string foo and called hello in it
    return this.toString() + " hello"
}
console.log('foo'.hello())

//JSON
// when we send it to api we need to convert to JSOn i.e keys should have doublle quotes
 let car5 = {
     id: 123,
     style:'convertible'
 }
 console.log(JSON.stringify(car5))
 let car4=[
     {id: 123},
     {id: 544},
     {id: 543}
 ]
 console.log(JSON.stringify(car4))
 let car6 = `[{"id":123},{"id":544},{"id":543}]` //it should be in quotes
 console.log(JSON.parse(car6))

 //STATE IMMUTABILITY 
 var state = {color:'red', name:'adams'}
 state.name='john'//immutability

 //to avoid
 var state1 = Object.assign({}, state, {name:'buttercup'})//clone or merge objects