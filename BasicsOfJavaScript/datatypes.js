let int = 5;
let decimal = 5.5; // type= number
let char = 'T';
let bool = true;
let Null = null;
let num = 123456789009876543n // type = bigint

// -----------SYMBOLS------------
const id = Symbol('123');
const id2 = Symbol('123');
console.log(id == id2); // false
// Each and every Symbol is uniquely identified even if values passed into them are exactly same.