

const person = {
    name: "Nick",
    age: 24
  
  }
  
const person2 = JSON.parse(JSON.stringify(person))
  
person2.name = "Mary"
person.name = "Doc"
  
console.log(person)
console.log(person2)
  
person.country = "USA"
delete person.age
  


console.log() 

person2.height = "180"

console.log()
console.log(person)
console.log(person2)

const weight = "100kg"
const badHabbit = false

const userProfile = {
    weight,
    badHabbit,
    domain: "food"
}

console.log(userProfile)


function findUniq(arr) {
    let num1 = arr[0]
    let num2 = arr[1]
    for (let i = 2; i < arr.length; i++){
        if(num1 == num2){
            if(arr[i] != num1)
            return arr[i]
        }
        else {
            if(arr[i] == num1){
                return num2
            } else {
                return num1
            }
        }
    }
}
  
let arqarr = [1, 1, 1, 2, 1, 1]
console.log(findUniq(arqarr))