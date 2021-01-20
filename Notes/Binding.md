1. what is this?
2. explain this.

this references  current execution context or it is a object called context or the object that owns currently executing code.
Its value depends on how the function is invoked or on the object that the function is attached to.
Whenever a function is invoked a separate execution context is created, therefore attaching of this to it is necessary, to set the context of the function.

Call(), apply(),bind()-  
They are used to attach this to the function and invoke it.
We will study how do they work under the hood.

1. bind  
It makes the copy of the function and changes its this value. It basically returns the function.
<pre>let car= {
    carid:12,
    startCar: function(){
        return this.carId
    }
}
let newcats={carId:456}
let newFun = car.startCar.bind(newcats)
console.log(newFun()) // 456</pre>
In the above code car is a object having a function and newcats doesn't have. We can using bind, bind the startCar function to the newcats and call it later. bind made a copy of the startCar function and assigned this to the newcats.

2. call()
It attaches this to the function and invokes the function immediately.We can also send arguments to the function as a comma separated list following the owner object.
<pre>let cat= {
    carid:12,
    startCar: function(message){
        console.log(`Hello ${message} car id is ${this.carid}`) //Hello Harshita car id is 456
    }
}
let newcats={carid:456}
cat.startCar.call(newcats, 'Harshita')</pre> 

3. apply  
Its purpose is also to attach this to the function and invoke it immediately.
The only differnce between call and apply is that, we pass array of arguments instead of comma separated list.
<pre>let cats={
    catid:12,
    getId: function(id, prefix){
        console.log("details are:" +prefix, +id, +this.catid )
    }
}
let newcats={catid:456}
cats.getId.apply(newcats,[1997, 'meow']) //details are:meow 1997 456</pre>