//DESTRUCTURING
//allows to assign values in arrays or objects to a variable
//when square,curly braces on left side means destructuring will take place
// destructuring arrays
let carIds=[1,2,3,4,5,6,7,8,9]
let [carId, , ...cars] = carIds
// it has skipped 2
console.log(carId,cars) //1 (7) [3, 4, 5, 6, 7, 8, 9]

//destructuring objects
let car={
    id:5050,
    style:'convertible',
    color:'black',
    wheels:4
}
let {id, style} = car;
console.log(id, style) //5050 "convertible"
let color, wheels;
//{color, wheels} = car; //error because compiler confused whether destructurinf or starting code block
({color, wheels} = car);
console.log(color, wheels)

