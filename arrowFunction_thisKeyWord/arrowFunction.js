const func = ()=>{
    let userName = 'NK'
    console.log(this) // In a arrow function 'this' will return an empty object
    console.log(this.userName) // It will return 'undefined'
}     
// func()



const addTwo = (a, b)=>{
    return {
        num1:a,
        num2:b,
        sum:a+b
    }
} // This arrow functions uses explicit return statement
console.log(addTwo(5,5))


const addThree = (a,b,c)=>({
    num1:a,
    num2:b,
    num3:c,
    sum:a+b+c
}) // This arrow function uses implicit return statement
console.log(addThree(4,3,5))

// We can use implicit return (where we don't have to write return and insted of curly braces we use parenthisis) when we want just to return something from function and not perform any other task inside of the function