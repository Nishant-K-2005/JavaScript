let arr = [1,2,3,4,5]
let newarr = arr.map((num)=>num*10);
// console.log(newarr);

// chaining
let newarr2 = arr.map((num)=>num*10).map((num)=>num+10);
// console.log(newarr2)

let newarr3 = arr
    .map((num)=>num*10)
    .map((num)=>num*5)
    .filter((num)=>num>100)
    
    console.log(newarr3)