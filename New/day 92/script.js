// დაწერეთ ფუნქცია, რომელიც მიიღებს რამდენიმე რიცხვს და დააბრუნებს ამ რიცხვების მაქსიმალურ მნიშვნელობას. გამოიყენეთ spread ოპერატორი.
function findMax(...nums){
    console.log(Math.max(...nums))
}
findMax(1,4,2,3,5,6,3,6,7,8,9,11)

//გაქვთ რიცხვების სია. დაწერეთ ფუნქცია, რომელიც ამოირჩევს იმ რიცხვებს, რომლებიც დიდია 10-ზე. გამოიყენეთ filter მეთოდი.

function tenPlus(a){
    let answer = a.filter(i => i > 10)
    console.log(answer);

}

let numbers = [1,2,3,4,55,66,3,2,4,77,1]
tenPlus(numbers)


//მოცემულია სია, რომელშიც შესაძლოა იყოს დუბლირებული ელემენტები. დაწერეთ ფუნქცია, რომელიც დააბრუნებს სიას, რომელშიც დუბლიკატები აღარ იქნება.
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

const cifrebi = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 9, 10];
const noDup = removeDuplicates(numbers);
console.log(noDup);

// შექმენით ფუნქცია, რომელიც მიიღებს რამდენიმე რიცხვს და დააბრუნებს ამ რიცხვების მინიმალურ მნიშვნელობას. გამოიყენეთ rest ოპერატორი.

function findMin(...b){
    let minNum = Math.min(...b);
    console.log(minNum);
}
findMin(1,3,4,3,2,1,3,4,5,3,1,0.1,3)