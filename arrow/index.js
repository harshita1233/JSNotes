//Arrow function ES2015
let getID =()=>123
let getID3 =_ =>123
let getID1 = prefix =>prefix+123
let getID2 = (prefix, suffice) =>{
    return suffice+prefix
}
console.log(getID2(12,12))

