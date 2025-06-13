let a=300
if (true){
    let a=10
    const b=20
    console.log("Inside if block:",a);
}
console.log(a)
function one(){
    const username = "Akshat";
    function two(){

    const website = "Akshat.com";
    console.log(username);
    }

    two()

}
//one()

if(true){
    const username = "Akshat";
    if (username === "Akshat") {
     const website = "Akshat.com";
        //console.log(username+website);
    }
}

function addone(num){
    let result = num + 1;
    return result;
}
console.log(addone(10))

 