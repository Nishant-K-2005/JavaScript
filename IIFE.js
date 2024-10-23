(function func1(){
    // Named IIFE
    console.log("This is a Immediately Invoked Function")
})();
// This is a IIFE Immediately Invoked function expression
// Using this syntax we can define and execute the fuction at the same time
// This is used to Protect the fuction content from global scope polution
// A "semi-colon (;)" is required to write further code After a IIFE.

((name)=>{
    console.log(`This is a Immediately Invoked Arrow Function made by ${name}`)
})('NK'); 
//This is a Immediately Invoked Arrow Function