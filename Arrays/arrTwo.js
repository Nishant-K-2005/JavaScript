const arr1 = ["ABC","DEF","GHI"]
const arr2 = ["JKL","MNO","PQR"]



// arr1.push(arr2) // It took arr2 as an element of arr1 | arr1 = ["ABC","DEF","GHI",["JKL","MNO","PQR"]]
// console.log(arr1) 


// const arr3 = arr1.concat(arr2); // concat merges two arrays and returns a new array. "DOES NOT CHANGE ORIGNAL ARRAY"
// console.log(arr3)


// const arr4 = [...arr1,...arr2]; // '...' spreads all the elements of array. and then we can combine them to create a single array
// console.log(arr4)


// const numArr = [1,2,3,[4,5],6,7,[8,9,[10,11,12]]]
// const flatNumArr = numArr.flat(2) // when we have array inside array (nested array) we can combine all elements into
                    // a single array using flat argument is till what depth we want to flat it we can also pass infinity
// console.log(flatNumArr);


let str = "Nishant"

// console.log(Array.isArray(str))

const strArr = Array.from(str)
// console.log(strArr)


console.log(Array.from({name:"Nishant"})) //If it can't convert it into array it will return an empty array

const name = "Nishant"
const age = 19

console.log(Array.of(name,age)) // creates an array with given data/variables as it's individual elements