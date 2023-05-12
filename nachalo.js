const myCity = {
    name: 'New York',
    country: 'US'
}

console.log(myCity)

myCity.population = 1000

delete myCity.country
console.log(myCity)

myCity['popular'] = true

const eastSide = 'side'
myCity[eastSide] = 'E   astSide'
console.log(myCity)


const newCity = {
    name: 'Seattle',
    location(){
        console.log('get location')
    }
}

newCity.location()


fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => console.log(json))


const  getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    ) 

getData('https://jsonplaceholder.typicode.com/todos')
.then(data => console.log(data))
.catch(error => console.log(error.message))


const timerPromise = () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(), 2000))

const asyncFunc = async () => {
    console.log("Timer starts")
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log("Timer ended", (endTime - startTime))
}

const newGetData = async (url) => {
    const resp = await fetch(url)
    const dataJson = await resp.json()
    return resp
}

const url = 'https://jsonplaceholder.typicode.com/todos'
const data = await newGetData(url)