//Rest Parameter
//1) allows function to store multiple arguments in a single array
// Rest parameters must be last formal parameter
function sendCars(...allCars){
    console.log(allCars) // [1, 2, 3, 4, 5, 6]
}
sendCars(1,2,3,4,5,6)

function sendCars1(day,...allCars){
    console.log(day, allCars) //monday , (6) [2, 3, 4, 5, 6, Array(3)]
}
sendCars1("monday",2,3,4,5,6,[1,2,3])