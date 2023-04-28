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