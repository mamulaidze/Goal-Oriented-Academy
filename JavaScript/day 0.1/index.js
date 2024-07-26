// console.log(5 + 99)
// console.log(95 - 9)
// console.log(5 * 99)
// console.log(99 / 5)
// console.log(5 ** 9)
// console.log(5 == 99)
// console.log(5 == 5)

const weather = prompt("Enter temperature:");


if (weather > 15 && weather < 25){
    console.log("Great Weather!")
}
else if(weather > 25){
    console.log("Hot Weather!")
}
else if(weather < 15 && weather > 0){
    console.log("Weather is Normal!")
}
else{
    console.log("Cold Weather!")
}
    
