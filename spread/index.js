//SPREAD
// take array and spread out its elements so that they can be assigned to paramaters
//example1
function sendCars(car1,car2){
    console.log(car1, car2) //1,2
}
let cars=[1,2,3,4,5]
sendCars(...cars)

//example2
// strings are iterables
function sendCars1(car1,car2,car3){
    console.log(car1, car2, car3) //a b
}
let cars1='abc'
sendCars1(...cars1)



