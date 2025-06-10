//singleton

// object literals

const mySym=Symbol("Key1")

const  JsUser={
    name:'akshat',
    age:20,
    "full name":"Akshat Nepalia",
    mySym:"myKey1",
    email:'akshat@gmail.com',
    location:'india',
    isLoggedIn:true,
    lastLoginDays:["Monday","Saturday"]

}

//console.log(JsUser.email)
//console.log(JsUser["full name"])
//console.log(typeof JsUser.mySym) // "myKey1", as it is a key in JsUser;
//console.log(JsUser[mySym]) // undefined, as mySym is not a key in JsUser
//console.log(JsUser["mySym"]) // "myKey1", as it is a key in JsUser;

JsUser.email=" aksahat@chatgpt.com"
//Object.freeze(JsUser) // This will prevent any further changes to the JsUser object
//console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JsUser");
}
console.log(JsUser.greeting()) // Hello JsUser

JsUser.greetingTwo=function(){
    console.log(`Hello ${this.name}`);
}
console.log(JsUser.greetingTwo()) // Hello akshat
