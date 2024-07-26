const divP = document.getElementById("divp");

function submitFunc() {
    const divWidth = document.getElementById("divwidth").value;
    const divHeight = document.getElementById("divheight").value;
    const divColor = document.getElementById("divcolor").value;
    const divText = document.getElementById("divtext").value;

    divP.style.width = divWidth + "px"; 
    divP.style.height = divHeight + "px";
    divP.style.color = divColor;
    divP.textContent = divText;
}


//2. შექმენით js ობიექტი სადაც იქნება ჩაშენებული 2 ობიექტი, შექმნის შემდეგ შეცვალეთ ამ ჩაშენებული ობიექტების კუთნილებები და დაბეჭდეთ

const myFriend = {
    name: "Dachi",
    lastName: "Zurabashvili",
    age: 17,
    car : {
        brand: "Mercedes-Benz",
        model: "e55 AMG",
        motor: "5.5 compressor"
    },
    nose: {
        width: "6-sm",
        length: "10-sm"
    }
}

console.log(myFriend.car.model)
console.log(myFriend.car.motor)
console.log(myFriend.car.brand)
console.log(myFriend.nose.width)
console.log(myFriend.nose.length)
