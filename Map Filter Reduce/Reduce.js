let myNums = [1,2,3,4,5];
let myTotal = myNums.reduce((acc,curr)=>acc+curr,0);
// console.log(myTotal);


let myProduct = myNums.reduce((acc,curr)=>acc*curr,1);
// console.log(myProduct)


// In above code 0 & 1 are initial value of accumulator


let myShoppingCart = [
    {item:"Shoes",price:1800},
    {item:"shirt",price:800},
    {item:"Perfume",price:350},
    {item:"Jeans",price:1400},
    {item:"watch",price:3000}
]
let myTotalBill = myShoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(myTotalBill)