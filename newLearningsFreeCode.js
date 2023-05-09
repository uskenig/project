const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  console.log();

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
  
const {today, tomorrow} = HIGH_TEMPERATURES;

console.log(today);
console.log(tomorrow);

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

const half = ({max, min}) => (max + min) / 2.0; 

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    let failureItems = [];
    for(let i = 0; i < arr.length; i++){
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

  class Thermostat {
    constructor(fahrenheit){
      this._fahrenheit = fahrenheit;
    }
  
    get temperature(){
      return (5 / 9) * (this._fahrenheit - 32);
    }
  
    set temperature(celsius){
      this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }