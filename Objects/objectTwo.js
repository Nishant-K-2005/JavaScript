// const user = new Object(); //Singleton Object
const user = {} //non-singleton object



const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
// const obj3 = Object.assign({},obj1,obj2); // Combining to existing objects into a new object. 1st argument is a target and rest all are sources

obj3 = {...obj1, ...obj2}; //Combinig two or more objects using spread operator

// console.log(obj3);

// console.log(Object.keys(obj3)); // Returns a Array of keys of given object.
// console.log(Object.values(obj3)); // Returns a Array of values of given object.
// console.log(Object.entries(obj3)); //Returns the key-value paris of object as Array of Arrays.
// console.log(obj3.hasOwnProperty('5')); // Check if the Object has the given property(key) or not.| true or false






// Destructuring values objects (used in React while passing props)
const course = {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}

const {courseName} = course;
const {courseInstructor: instructor} = course; 
console.log(courseName);
console.log(instructor);