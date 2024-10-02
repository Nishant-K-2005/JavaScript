const arr = [1,2,3,4,"Nishant",true]

// arr.push(10) // Appends a element in an array
// console.log(arr) 

// arr.pop() // Deletes the last element of an array
// console.log(arr) 

// arr.unshift(0) // Adds an element in the front of an array
// console.log(arr) 

// arr.shift() // Deletes the first element of an array.
// console.log(arr) 

// console.log(arr.includes(4)) // returns a boolean value (if ele in arr then true | else false);
// console.log(arr.indexOf(4)) // returns the index of given element | if ele not there then it returns -1.


const strArr = arr.join('|') // It Converts the Array into String and the argument given is the symbol by which it is seprated (by default it is seprated by coma(,))

// console.log(strArr)
// console.log(typeof strArr)

const newArr1 = arr.slice(1,4) // give a sub array of an array from mentioned indices (last index is not included).
// It does not change the orignal array. 
console.log(newArr1)
console.log("A-> ",arr)


const newArr2 = arr.splice(1,4) //give s sub array of an array from mentioned indices (last index is included).
// It changes the orignal array. It removes all the elements of that indices from orignal array.
console.log(newArr2)
console.log("B-> ",arr)