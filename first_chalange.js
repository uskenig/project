//find vowels

function getCount(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str){
        if (vowels.includes(char)){
            count++;
        }
    }
    console.log(count);
  }


  let a = "avakaa"
  console.log(getCount(a));


  // freeCodeCamp task
  
  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 7:
        answer = "Ate Nine";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case "John":
        answer = "";
        break;
      case 156:
        answer = "";
        break;
    }
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);