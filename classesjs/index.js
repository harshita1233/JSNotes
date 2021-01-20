// CLASS BASICS
// methods are functions that exists on object
// we dont need to use prototype now
//it will act as same way
class Car{
    constructor(id){
        this.carid = id
    }
    identify(suffix){
        // console.log('car', this.carid)
        return `Car : ${this.carid} ${suffix}`
    }
}
let car = new Car(123)
console.log(car.carid)
console.log(car.identify('!!!'))

// INHERTANCE
//to avoid duplicating code
class Vehicle{
    constructor(){
        this.type='car'
    }
    start(){
        return `Type ${this.type}`
    }
}
class Car1 extends Vehicle{
    constructor(){
        super()
    } //need to call constructor from super or parent using super, optional
    start(){
        return 'hello' + super.start() //for accessing base class method
    }

}
let car1= new Car1()
 console.log(car1.type, car1.start()) //car hello