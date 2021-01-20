// FUNCTIONAL SCOPE
function setCard(){
    let message = "hello"
    let startFun = function(){
      let message = "hi"
      console.log("trying")
    };
    startFun(); 
    console.log(message) //hello
}
setCard();

// IIFE's
(function(){
    console.log("hello IIFE")
})();

let app = (function(){
    let carID=123
    console.log("hello IIFE in app")
    return {};
})(); 
console.log(app) // {}

//CLOSURES
let app1 = (function(){
    let carID=123;
    let getID = function(){                 
        return carID;      
    };
    return {
        getID:getID        //this is closure where we return object, where property is get id and value is the function getID which is getting assigned to app variable app1 gets set to the returned value of IIFE which has reference to function getID.
    };
})(); 
console.log(app1.getID())

//DEFAULT PARAMETER
// should be in last
let trackCar = function(city,unit="NY"){
    console.log(`Tracking ${city} and ${unit}`)
}
trackCar("AU")
trackCar("AY", "NK")

//PURE FUNCTIONS
//impure
var conrate = 1.5
function convert(amount){
    return amount+conrate;
}
convert(12);

//pure
var conrate = 1.5
function convert(amount,rate){ //rlies only on parameters passes
    return amount+rate;
}
convert(30, conrate);

// let likeCountPost = 0; // to keep track of likes, whenever like counts gets increased, declared globally 
//     function getLikesOnPost(){ //function to update the likes
//         likeCountPost += 1;
//     }
//     getLikesOnPost();
//     console.log("Like Count is", likeCountPost);
    // function getLikesOnPost(){ 
    //     let likeCountPost = 0;
    //     return function getCount(){
    //         return likeCountPost += 1;
    //     }
    // }
    // let likes = getLikesOnPost();
    // console.log("Like Count is", likes())
    // console.log("Like Count is", likes())
    function getLikesOnPost(){ 
        let likeCountPost = 0;
        return likeCountPost += 1;
    }
    let likes = getLikesOnPost();
    console.log("Like Count is", getLikesOnPost())//
    console.log("Like Count is", getLikesOnPost())