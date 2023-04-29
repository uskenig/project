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