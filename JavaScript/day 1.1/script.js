                    //   1
let inp1 = Number(prompt("Enter first number: "));
let inp2 = Number(prompt("Enter second number: "));
console.log(inp1 * inp2);
console.log(inp1 / inp2);
console.log(inp1 + inp2);
console.log(inp1 - inp2);

                    //   2
let userName = prompt("Enter your name: ");
let lastName = prompt("Enter your last name: ");
alert("Hello "+userName+" "+lastName);

                    //   3
function calculate(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
}
console.log("The sum is " + sum);
}                 
calculate(5, 9);
                    //   4
function calculateEven(start,end){
    evenSum = 0;
    for(i=start; i<end; i++){
        if(i%2 == 0){
            evenSum +=i
            console.log(evenSum)
        }
    }
};

calculateEven(1,5);