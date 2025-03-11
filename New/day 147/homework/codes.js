 //!    1
function sumMix(x){
    let sum = 0
    for (let i = 0; i < x.length; i++){
      sum += Number(x[i])
       
    }
return sum
}

//!      2
function doubleChar(str) {
    let sum = ""
    for(let i = 0; i < str.length; i++){
      sum += str[i] + str[i]
    }
    return sum
}
//!       3 
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0)
} 
//!      4
function reverseWords(str){
    return str.split(" ").reverse().join(" ")
}
//!    5
function sumStr(a,b) {
    return String(Number(a)+Number(b))
}