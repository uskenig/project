// const makeServerRequest = new Promise((resolve, reject) => {
//     let responseFromServer;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });


// makeServerRequest.then(result => {
//     console.log(result)
//   })

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

console.log(result)

let quoteSampleNew = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let res = quoteSampleNew.match(myRegex); 

let difficultSpelling = "Mississippi";
let myRegEx = /s+/g;
let resultOne = difficultSpelling.match(myRegEx);

let text = "<h1>Winter is coming</h1>";
let myReg = /<h[0-9]*?1>/; // Change this line
let rrr = text.match(myReg);

let quoteSam = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/; // Change this line
let resultNew = quoteSam.match(nonAlphabetRegex).length;
console.log(resultNew)
console.log()