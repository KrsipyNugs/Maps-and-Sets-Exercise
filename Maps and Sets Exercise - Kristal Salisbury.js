// Quick Question #1
new Set([1,1,2,2,3,4]) 

// Quick Question #2
[...new Set("referee")].join("")

// Quick Questions #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// hasDuplicate - Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
hasDuplicate([1,3,2,1]) 
hasDuplicate([1,5,-1,4])

const hasDuplicate = arr => new Set(arr).size !== arr.length

// vowelCount
vowelCount('awesome')
vowelCount('Kristal') 

function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}