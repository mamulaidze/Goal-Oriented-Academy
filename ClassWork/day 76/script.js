//1
function findUniq(arr) {
    arr.sort(function(a, b) { return a - b });
    
    if(arr[0] != arr[1]){
      return arr[0]
    } else{
      return arr[arr.length - 1]
    }
}

//2
function descendingOrder(n){
  const str_n = String(n);
  const numbers = [];
  
  for(let i = 0; i < str_n.length; i++){
    numbers.push(Number(str_n[i]))
  }
  
  numbers.sort(function(a, b) {return b - a})
  
  let result = '';
  
  for(let i = 0; i < numbers.length; i++){
    result += String(numbers[i]);
  }
  
  return Number(result)
  
} 

//3
function firstNonRepeatingLetter(s) {
  const lower_s = s.toLowerCase();
  
  for(let i = 0; i < s.length; i++){
    if(lower_s.indexOf(lower_s[i]) === lower_s.lastIndexOf(lower_s[i])){
      return s[i]
    }
  }
  
  return ""
}

