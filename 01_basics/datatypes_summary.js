const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId); // false, because Symbols are always unique

const bigNumber = 23455677899976n;

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "akshat",
    age: 22,
};

function myFunction() {
    console.log("hello world");
}
myFunction(); // This will run the function and log "hello world"

console.log(typeof bigNumber); // Output: bigint

// ❌ Incorrect object creation with `=` instead of `:`
// let userone = {
//     email = "user@google.com",
//     upi = "user@ybl"
// };

// ✅ Corrected version:
let userone = {
    email: "user@google.com",
    upi: "user@ybl"
};

let usertwo = userone;
usertwo.email = "akshat@google.com";

console.log(userone.email); // Output: akshat@google.com
console.log(usertwo.email); // Output: akshat@google.com
