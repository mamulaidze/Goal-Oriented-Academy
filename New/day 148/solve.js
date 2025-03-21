function removeConsecutiveDuplicates(string) {
    let words = string.split(" ")
    let result = [words[0]]
  
    for (let i = 1; i < words.length; i++) {
        if (words[i] !== words[i - 1]){
              result.push(words[i]);      
        }
    }
      return result.join(" ")
  }
  