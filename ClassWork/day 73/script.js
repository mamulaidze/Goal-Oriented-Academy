const cars = new Array("Mercedes-Benz" , "BMW" , "Volvo" , "Fiat")
cars.push("Nissan")
console.log(cars)
cars.pop()
console.log(cars)
cars[2] = "Toyota"
console.log(cars)
    //2
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
for (let i = 0; i < nums.length; i++){
        sum += nums[i]
}
console.log("the sum is: ", sum)

    //3
const names = new Array("Gio" , "Gio","Gio" , "nika" , "ilia", "dachi", "dima", "edi", "ucha")
let saxeli = "Gio"
let saxelebisJami = 0
for (let i = 0; i < names.length; i++) {
        if (names[i] === saxeli) {
            saxelebisJami++;
    }
}
console.log(saxeli,"meordeba",saxelebisJami+"-jer")

    //4
const cifrebi = new Array(1,2,3,4,5,6,7,8,9,10);

for(let i = 0; i < cifrebi.length; i++){
    let oddOrEven = cifrebi[i];
    if (oddOrEven % 2 == 0){
        console.log("this num is even ", oddOrEven);
    }
    else{
        console.log("this num is odd ", oddOrEven)
    }
}