//1.Write a JavaScript function to display the current date in the format "MM/DD/YYYY".
let currentDate = new Date().toDateString();
console.log(currentDate);

//2.Create a script that shows the current time in the format "HH:MM"
let currentTime = new Date();
console.log("current month",currentTime.getMonth(),"current date",currentTime.getDate());

//3.Write a function
//that takes a number(1-7) as input and returns the day of the week (e.g., "Monday", "Tuesday") for that number.
function weekDays(a){
    if(a == 1){
        console.log("Monday")
    }else if(a == 2){
        console.log("Tuesday")
    }else if(a == 3){
        console.log("Wednesday")
    }else if(a == 4){
        console.log("Thursday")
    }else if(a == 5){
        console.log(" Friday")
    }else if(a == 6){
        console.log("Saturday")
    }else if(a == 7){
        console.log("Sunday")
    }else{
        console.log("Wrong number please enter numbers from 1-7")
    }
}
weekDays(2)

// Math

//1.Write a function that generates a random integer between a specified minimum and maximum value.
function generateNum(min , max){
    let randomNum = Math.floor(Math.random()*(max-min + 1))+min
    console.log(randomNum)
}
generateNum(1,100)

//2.Implement a function that takes a number as input and calculates its square root
function squareRoot(a){
    let square = Math.sqrt(a)
    console.log(square)
}
squareRoot(8)

//3.Write a function that rounds a given number to the nearest integer.
function roundNum(a){
    let round = Math.round(a) 
    console.log(round)
}
roundNum(5.66)

//4.Implement a function that rounds down a given number to the nearest integer.
function roundDown(a){
    let round = Math.floor(a)
    console.log(round)
}
roundDown(5.9)

//5.Write a function that rounds up a given number to the nearest integer.
function roundsUp(a){
    let round =  Math.ceil(a)
    console.log(round)
}
roundsUp(5.1)

//6.Develop a function that computes the power of a number (e.g., 2^3).
function numPow(num,pow){
    let power = Math.pow(num,pow)
    console.log(power)

}
numPow(2,3)

//7.Implement a function that returns the absolute value of a number.
function absoluteNum(a){
    let absolute = Math.abs(a)
    console.log(absolute)
}
absoluteNum(-6)

//8.Implement a function that takes an array of numbers as input and returns the largest number.
function largestNum(a){
    let max = a[0]
    for(let i = 1;i<a.length;i++){
        if(a[i]>max){
            max = a[i]
            
        }
        console.log(max)
    }
}
largestNum([1,2,3,4,5,100,6,7,8,99,9])

//9.Create a function that generates a random boolean value (true or false).
function randomBoolean(){
    let boolean = Math.random() < 0.5;
    console.log(boolean)
}
randomBoolean()

//10.Write a function that generates a random RGB color in the format
//"rgb(r, g, b)" where r, g, and b are integers between 0 and 255.
function rgbColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    console.log("random color: rgb("+r+", "+g+", "+b+")")
}
rgbColor()


//  SetTimeOut

//1.Write a script that displays an alert message "Hello!" after a delay of 2 seconds using setTimeout.
setTimeout(function(){
    alert("Hello!");
}, 2000);

//2.Implement a countdown from 5 to 1, logging each number to the console with a delay of 1 second using setTimeout.
function countdown(number){
    if (number > 0) {
        setTimeout(function() {
            console.log(number)
            countdown(number - 1);
        }, 1000)
    }
}
countdown(5);

//3.Write a script that shows a success message for 5 seconds and then automatically hides it using setTimeout.

//?????????????????????????????????????????

//  setInterval

//1.Implement a countdown timer that starts from a specified number
//of seconds and updates the display every second using setInterval.
function countdownTimer(seconds){
    let interval = setInterval(function(){
        if (seconds > 0) {
            console.log(seconds);
            seconds--
        } else {
            clearInterval(interval);
            console.log("Countdown complete!")
        }
    }, 1000)
}
countdownTimer(10)

//2.Build a digital clock in console that updates its display every 
//second using setInterval, When seaconds reach 60, update the minutes display...
function digitalClock(){
    let seconds = 0
    let minutes = 0
    let interval = setInterval(function(){
        seconds++;
        if (seconds === 60){
            seconds = 0
            minutes++
        }

        console.log(minutes+":"+seconds)
    }, 1000)
}
digitalClock();


//3.Create a script that generates a random number between 1 and 100 every 2 seconds using setInterval.
function generateRandomNumber(){
    setInterval(function(){
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);
    }, 2000)
}
generateRandomNumber();

