
function map(arr, func) {
 const searray = arr.length 

 for (i = 0; i < arr.length; i++) {
  searray[i] = func(arr[i])

    // skapa en ny tom array av samma längd som arr

    // för varje element i arr
    //      newArray[j] = func(arr[j])

    // returnera den nya arrayen
}

return searray 
}

// Test 1
console.log('\nTEST 1')
const numberArray = [10, 50, 100]
const newNumberArray = map(numberArray, x => x + 5)
console.log(newNumberArray) // [15, 55, 105]
console.log(numberArray)    // [10, 50, 100] 

// Test 2
console.log('\nTEST 2')
const stringArray = ['boll', 'häst', 'flygplan']
const newStringArray = map(stringArray, str => str.toUpperCase())
console.log(newStringArray) // ['BOLL', 'HÄST', 'FLYGPLAN']
console.log(stringArray)    // ['boll', 'häst', 'flygplan']

// Test 3 - GÖR ETT EGET TEST HÄR
console.log('\nTEST 3')
const number = [13, 3, 8, 9, 6]
const newnumber = number.map(x => x / 3); 
console.log(number)
console.log(newnumber)
