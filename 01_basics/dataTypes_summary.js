//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "prince",
    age: 20,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//#####################################################

// Stack(primitive) , Heap(non- primitivetype)

let myYoutubeName = "Princekumar"

let anotherName = myYoutubeName
anotherName = "Tech coder"

// console.log(anotherName)
// console.log(myYoutubeName)

let obj1 = {name: "Prince"};
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul
