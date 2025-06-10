// const tinderUser=new Object()
const tinderUser = {}
    tinderUser.id="1234",
    tinderUser.name="John",
    tinderUser.isLoggedIn=true

//console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:
            {
                firstname:"John",
                lastname:"Doe"
            }

    }
}

//console.log(regularUser.fullname.userfullname);

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"a",5:"b",6:"c"}

//const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)

const obj4={...obj1,...obj2}
console.log(obj4)
























































