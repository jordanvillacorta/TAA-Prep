// Solution #1:
let firstUniqChar = function(s) {
  let splitString = s.split("");
  let count = 0;

  for(let i = 0; i < splitString.length; i++) {
    count = 0;
    let currentLetter = splitString[i];

    for(let j = 0; j < splitString.length; j++) {
      if (currentLetter === splitString[j]) {
        count += 1;
      }    
    }

    if(count === 1) {
      return i;
    }
  }
  
  return -1;
};


// Solution #2: 
let firstUniqChar = function(string) {
  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1) {
    return i;
  }
}

return -1;
};



