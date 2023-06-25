function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = "";
  for (let char of str) {
    if (!(vowels.includes(char))){
      newStr += char;
    }
  }
  return newStr;
}

const removeVowels = str =>
    str.replace(/[aeiou]/gi, '');

let word = "This website is for losers LOL!";
console.log(disemvowel(word));

let wordTwo = "This website is for losers LOL!";
console.log(removeVowels(wordTwo));


function highAndLow(numbers){
    // ...
    
    

    const num = numbers.split(" ");
    let numInt = [];

    for (let i = 0; i < num.length; i++){
      numInt[i] = parseInt(num[i]);
      }

    let min = numInt[0];
    let max = numInt[0];
  
    for (let i = 0; i < numInt.length; i++){
      if (min > numInt[i]) {
        min = numInt[i];
      }
      else if (max < numInt[i]){
        max = numInt[i];
      }
    }

    let result = max + " " + min;

    return result;
  }

  let one = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
  console.log(highAndLow(one));


  function descendingOrder(n){
    let arrNum = Array.from(String(n), Number);
    let spare = 0;
    let nn = "";
    for (let i = 0; i < arrNum.length; i++){
        for (let k = i + 1; k < arrNum.length; k++){
          if(arrNum[i] < arrNum[k]) {
            spare = arrNum[i];
            arrNum[i] = arrNum[k];
            arrNum[k] = spare;
          }
        } 
    }  
    return +arrNum.join('');
}


let digit = 123456789;
console.log(descendingOrder(digit));


const myDog = {
  // Only change code below this line
"name": "Don",
"legs": 11,
"tails": 2,
"friends": ["mary", "nick", "sara"]

  // Only change code above this line
};

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

// Setup
const testObjTwo = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"]; 



function portion(a,i,n){
  let newArr = [];
  for (let k = i; k < a[n]; k++){
    if (k == n) {
      n = k
    };
    newArr.push(a[k]);
    
   
    }
   return newArr;
  }

  
  console.log(portion([1,2,3,4],1,2));

  function persistence(num) {
    let count = 0;
    num = num.toString();
    while(num.length > 1){
      count ++;
      num = num.split('').map(Number).reduce((a, b) => (a * b).toString()
      )
    } 
    
    return count;
  }

  console.log("CHECKING CURRENT TIME");
  let date = new Date();
  //console.log(date.toLocaleTimeString().substring(0,8));
  console.log(date.toTimeString().substring(0,8));
  console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());



  let strNew = ""
  let ee = ""
  let str = "world"
  function solution(str){
      strNew = str.split("")
      console.log(strNew)
      
  }
  

  solution(str)

  function findAverage(array) {
    const length = array.length
    let sum = 0
    if (length === 0) return 0
    for (let i = 0; i < length; i++) {
        sum += array[i]
    }
    return sum/length;
}