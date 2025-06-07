const name = "akshat";
const repocount = 50;

// Old way
console.log(name + repocount + " value");

// New way using template literals
console.log(`My name is ${name} and my repo count is ${repocount}`);

const gameName=new String("akshathc")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length); //tells the length
console.log(gameName.toUpperCase()); //converts the whole string into uppercase

console.log(gameName.charAt(2)); //which charater is present on that index
//console.log(gameName.indexof('a'));//on which index value is present


const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);







