const joinInfo={
    name: "Giorgi",
    lastName: "Mamulaidze",
    age: 16,
    hobby: "Foot ball"
}

console.log("Hello my name is "+joinInfo.name+" "+joinInfo.lastName+" "+"i am "+joinInfo.age+" "+"years old , mu hobby is playing "+joinInfo.hobby+".")

function ageCheck(a){
    if (a > 18){
        console.log("You are "+a+" Years old, you are adult!")
    }
    else if (a == 18){
        console.log(console.log("You are "+a+" Years old, you are adult!"))
    }
    else {
        console.log("You are "+a+" years old, you are not  adult!")
    }
}

ageCheck(12)
ageCheck(18)
ageCheck(33)


function colorChanger(){
    let paragrapi = document.getElementById("myP");
    paragrapi.style.color = "red"
}

