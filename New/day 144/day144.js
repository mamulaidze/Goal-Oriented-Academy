//! 1
function findAverage(array) {
    if (array.length === 0) {
      return 0;
    }
    return array.reduce((acc, curr) => acc + curr, 0) / array.length
}//! 2
function DNAtoRNA(dna) {
    return dna.toUpperCase().replaceAll("T","U")
}
//! 3 
function fakeBin(x) {
    let str = "";
    for (let i = 0; i < x.length; i++) {
      if (x[i] < 5) {
        str += 0;
      } else {
        str += 1;
      }
    }
    return str;
}

//! 4
function stringToArray(string){
    return string.split(" ")
}

//! 5
function countBy(x, n) {
    let z = [];
    for(let i = 1;i<=n;i++){
      z.push(i*x)
    }
    return z;
}
//! 6
const reverseSeq = n => {
    let arr =[]
    for(let i = n;i>=1;i--){
      arr.push(i)
    }
    return arr
}
//! 7
const rps = (p1, p2) => {
    if (p1 === p2) {
      return "Draw!";
    } else if (
      (p1 === "scissors" && p2 === "paper") ||
      (p1 === "paper" && p2 === "rock")||
      (p1 === "rock" && p2 === "scissors")
    ) {
      return "Player 1 won!"
    } else {
      return "Player 2 won!"
    }
};