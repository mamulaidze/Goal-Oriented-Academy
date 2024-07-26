function findMax(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
  }
  console.log("yvelaze didia:",findMax([99,6,8,9,3]))
  
  //2
  function diffNums(a, b, c){
    if (a !== b || a !== c || b !== c){
        console.log("all numbers are not same")
    } else if(a==b || a==c || b ==c){
      console.log("all numbers are same")
    }
    return true
  }
  console.log(diffNums(6,6,6))
  
  [99]  
  
  
  