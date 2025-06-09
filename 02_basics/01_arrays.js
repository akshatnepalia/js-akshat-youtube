// Array declarations
const myArr = [0, 1, 2, 3, 4, 5];
const myHero = ['Superman', 'Batman', 'Wonderla']; // Typo fixed from 'myHeoro'
const myArr2 = new Array(1, 2, 3, 4);

console.log("Element at index 1:", myArr[1]); // Outputs: 1

// Array methods
myArr.push(6); // Adds 6 to the end
console.log("After push:", myArr);

myArr.pop(); // Removes the last element
console.log("After pop:", myArr);

myArr.unshift(0); // Adds 0 to the beginning
console.log("After unshift:", myArr);

myArr.shift(); // Removes the first element
console.log("After shift:", myArr);

console.log("Array length:", myArr.length); // Length of the array

console.log("Includes 9?:", myArr.includes(9)); // Check if 9 is present

console.log("Slice from index 1 to 3:", myArr.slice(1, 3)); // Gets elements from index 1 to 2
console.log("splice from index 1 to 3:", myArr.splice(1, 3)); // Removes elements from index 1 to 3
