let cars=[
    {cars:12,style:'convertible'},
    {cars:23, style:'sedan'},
    {cars:45,style:'prime'},
    {cars:55, style:'sedan'},
    {cars:90,style:'prime'}
]
let car1 = cars.forEach((item,index)=>console.log(item,index)) //forEach
let car2 = cars.filter((item) =>{return item.style=='sedan'}); //filter
console.log(car2)
let car3 = cars.every((item)=>item.cars>10) //every return true or false
console.log(car3) //check for every condition prints false
let car4 = cars.find((item)=>item.cars>12) //find
console.log(car4) //used when we want to find the first match prints {cars: 23, style: "sedan"}

let items={
    product:'widget',
    quantity:3,
    price:6.6
}
for(let item in items){
    console.log(item,items[item]) //product,quantity,price
}