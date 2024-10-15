const s1 = Symbol("Key1")

const user = {
    name: "Nishant",
    'city name': 'Jamnagar',
    age: 18,
    email: "Nishant@google.com",
    marks: [80,78,93,74,70],
    s1: 'objKey1', // This is not reffering to above symbol it is a normal string key.
    [s1]: 'SymbolKey' // This is the right way of refering to a symbol as a key in object.
}

// note:-  In Object all keys are by default converted to strings

// console.log(user.email) 
// console.log(user['name'])
// Both of the above ways are correct for accessing the values of object.
// But in some cases the 1st way will not work. The cases are:-
//                   1. When we define key in qoutes with space between words.
//                   2. When we want to refer to a symbol as key of the object

// console.log(user['city name']); // In this case we can not use dot(.) operator to access the value of 'city name'
// console.log(user[s1]); // Only this will call the Symbol Key. On using dot(.) it  will  show undefined or other key value with same name


user['email'] = "NK@google.com";
// Object.freeze(user); // After freezing a object we cannot make any change to that object.
user['email'] = "NK@outlook.com";
// console.log(user)

user.greeting = function(){
    console.log(`Hello This is User ${this.name}`);
} // 'greeting' is now a function stored in the object 'user'. 


console.log(user.greeting); // Returns the refrence of the function (function is not executed);
user.greeting(); // Executes the function

