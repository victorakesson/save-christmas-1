
function filter(arr, func) {
    let newarr = [] 

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            newarr.push(arr[i])
        }
        
    }
 return newarr
}

// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = filter(numbers, x => x < 10)
console.log(filteredNumbers)

// TEST 2 - skriv själv

const cars = ["mercedes", "volvo", "mishubishu", "nissa"]
const filteredCars = filter(cars, x => x.length < 6  )
console.log(filteredCars)


// TEST 3 - skriv själv

const fruits = ["Orange", "apple", "banana", "pineapple", "coconut"]
const filteredfruits = filter(fruits, x => x.length < 7 )
console.log(filteredfruits)