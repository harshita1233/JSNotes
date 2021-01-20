// THIS
//It refers to object called context

function getCar(){
    console.log(this===window) //true
}
getCar()
console.log(this===window) //true

let cats = {
    carID:123,
    getID: function(){
        console.log(this.carID) //123
        return this.carID // this refers to the object that holds the function cats
    }
}
console.log(cats.getID())

// call and apply
//main purpose is to change th value of this i.e to change th value of this that is context of the function

let cats1 = {
    carID:123,
    getID: function(){
        console.log("car", this.carID) //123
        return this.carID // this refers to the object that holds the function cats
    }
}
let newCats = {carID:3454}
console.log(cats1.getID.call(newCats)) 

//apply
//We can pass arguments
//pass array of arguments
let cats2 = {
    carID:123,
    getID: function(prefix,hi){
        console.log(hi)  //hi
        console.log("car", this.carID) //123
        return prefix +  this.carID // this refers to the object that holds the function cats
    }
}
let newCats1 = {carID:3454}
console.log(cats2.getID.apply(newCats1,['ID:',"hi"]))

//bind
//to make copy of function and changes its this value
let cat3 = {
    carID: 123,
    startCar:function(){ //making copy of this function and assignging newcat to "this"
        return this.carID
    }
};
let newcats = {carID:456};
let newFun = cat3.startCar.bind(newcats)
console.log("new", newFun())