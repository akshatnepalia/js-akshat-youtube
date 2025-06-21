const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this); // Global object

const chai = () => {
    let username = "hitesh";
    console.log(this); // Lexical scope
};

chai();

const addTwo = (num1, num2) => ({ username: "hitesh" });
console.log(addTwo(3, 4)); // { username: 'hitesh' }

const myArray = [2, 5, 3, 7, 8];
myArray.forEach((item) => {
    console.log(item);
});
