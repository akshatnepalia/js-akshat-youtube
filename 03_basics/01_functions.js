 
function sayMyname(){
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("T");
 }
 //sayMyname();

 //function addTwoNumbers(num1, num2){
   // console.log(num1 + num2);
 //}
 //addTwoNumbers(10, 20);

function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    return result;
}
const result = addTwoNumbers(10, 20);
//console.log("Result:",result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a valid username");
        return;
    }
    return `${username} logged in successfully!`;
}

//console.log(loginUserMessage("akshat"));

const user = {
    username: "akshat",
    prices:199
}

function handleObject(anyobject){
    console.log('Username is ${anyobject.username} and price is ${anyobject.prices}');
}

//handleObject(user);
handleObject({
    username: "akshat",
    prices: 199
});