            //Conditional statements:

//1. Write a function that takes a number as input and logs whether it is positive, negative, or zero.
function typeFunc(inpNum){
    if(inpNum<0){
        console.log(inpNum," is negative number!")
    }else if(inpNum==0){
        console.log(inpNum," this number is equal to zero!")
    }else{
        console.log(inpNum," this number is positive!")
}
}
typeFunc(-1)

//2. Write a function that determines if a number is even or odd and logs the result.
function oddOrEven(numb){
    if (numb%2==0){
        console.log(numb," this number is even!")
    }else{
        console.log(numb," this number is odd!")
    }
}
oddOrEven(2)

//3. Write a function that checks if a given year is a leap year and logs the result.
function leapYear(year){
    if(year%4==0){
        console.log(year," this is leap year!")
    }else{
        console.log(year, " this year isn't leap!")
    }
}
leapYear(20)

//4. Write a function that takes two numbers as parameters and returns the larger one.
function largerNumb(a,b){
    if(a>b){
        console.log(a," is bigger than ",b)
    }else if(a==b){
        console.log(a," equals to ",b)
    }else{
        console.log(b," is bigger than ",a)
    }
};
largerNumb(3,1);
largerNumb(1,1);

//5. Write a function that takes three numbers as parameters and returns the smallest one.
function biggestNumb(a,b,c){
    if(a>b & a>c){
        console.log("between ",a+","+b+","+c,"the biggest is ",a)
    }else if(b>a & b>c){
        console.log("between ",a+","+b+","+c,"the biggest is ",b)
    }else if(c>a & c>b){
        console.log("between ",a+","+b+","+c,"the biggest is ",c)
    }else{
        console.log("TF")
    }
    
}
biggestNumb(7,4,5);

//Write a function that checks if a given string is empty (has zero length)

function lenFunc(str) {
    if (str.length === 0) {
        console.log("The given string is empty!");
    } else {
        console.log("Here is your string:", str);
    }
}
lenFunc("")

// Write a function that converts a numeric grade (0-100) to a letter grade (A, B, C, etc.).
function letterGrade(a) {
    if (a >= 96.67 && a <= 100) {
        console.log("Your grade is A+");
    } else if (a >= 93.33 && a < 96.67) {
        console.log("Your grade is A");
    } else if (a >= 90 && a < 93.33) {
        console.log("Your grade is A-");
    } else if (a >= 86.67 && a < 90) {
        console.log("Your grade is B+");
    } else if (a >= 83.33 && a < 86.67) {
        console.log("Your grade is B");
    } else if (a >= 80 && a < 83.33) {
        console.log("Your grade is B-");
    } else if (a >= 76.67 && a < 80) {
        console.log("Your grade is C+");
    } else if (a >= 70 && a < 76.67) {
        console.log("Your grade is C");
    } else if (a >= 60 && a < 70) {
        console.log("Your grade is D");
    } else {
        console.log("Your grade is F");
    }
}

letterGrade(77);


//10. Write a function that converts temperature from Celsius to Fahrenheit based on user input.
function celToFah(a){
    let m = (a*1.8)+32;
    console.log(a,"to Fahrenheit is ",m);
}
celToFah(4)


  //Objects

  //Create an object representing a person with properties like name, age, and city. 
  //Add a property for email to the person object and set its value.
let myBro = {
    name: "Dachi",
    lastName: "muchu",
    age:67,
    height:245.5,
    legs:1,
    hands:3,
    skinColor:"black",
    email:"hyseviwevv@gmail.com"
}

//Write code to access and log the name and age of the person object created in task 1.
myBro.name = "Gocha";
console.log(myBro.name ," is ",myBro.skinColor+"."+" send him message here: ",myBro.email);

//Create an object representing a car with properties like make, model, and an owner object with properties like name and age.
//Add a method to the car object that calculates the age of the car based on the current year and the year the car was manufactured. 
//(Do not use this keyword)
let car = {
    make: "Mercedes",
    model: "Rocket 1000",
    owner: {
        name: "Giorgi mamulaidze",
        age: 16
    },
    calculateAge: function(current, realized) {
       console.log("car age is",current - realized)
    }
}
car.calculateAge(2024,1980)
//Write code to access and log the owner's name and age of the car object created in task 4.
console.log("Owner's Name:",car.owner.name+", "+ "Age:", car.owner.age);

//Change the model of the car to a new value.
car.model = "b-ნ-w";

      //While loops

// Write a while loop that logs numbers from 1 to 10
// let i=0;
// while(i<10+1){
//     console.log(i)
//     i++
// }

//Write a while loop that logs numbers from 10 down to 1
let b =10+1;
while(b>0){
    console.log(b)
    b--
}

//for loop

// Write a for loop that logs numbers from 1 to 10 to the console

for (let num = 0; num <= 10; num++) {
    console.log(num);
}

//Write a for loop that logs even numbers between 1 and 20.
// for(let i = 0;i<20;i++){
//     console.log("the even numbers",i)
// }































//functions

// Write a function addNumbers that takes two parameters and returns their sum
function addNumber(a,b){
    console.log("the sum of this numbers is",a+b)
}
addNumber(5,6)