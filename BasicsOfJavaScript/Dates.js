// ---------CURRENT DATE AND TIME-----------------
const date = new Date()
// console.log(`Date To String => ${date.toString()} \n`)
// console.log(`Date To ISO-String => ${date.toISOString()} \n`)
// console.log(`Date To DateString => ${date.toDateString()} \n`)
// console.log(`Date To LocalString => ${date.toLocaleString()} \n`)
// console.log(`Date To LocaleDateString => ${date.toLocaleDateString()} \n`)
// console.log(`Getting Time out of Date & Time =>  ${date.toLocaleTimeString()}\n`)



// // -----------SETTING DATE AND TIME------------------
// const createDate = new Date(2023,0,1) // In this Format Month Start from 0(jan).
// // console.log(createDate.toDateString())

// const createDate2 = new Date("2022-04-18") // In this fromat Month start from 1(jan) and we can change to mm-dd-yyyy
// console.log(createDate2.toDateString())vv
console.log(date.getDay()) // gives the Day in number start from 1(monday).
console.log(date.getMonth()) // gives the Month in number start from 0(Jan).





// //------------TIME STAMPS---------------
// const timeStamp = Date.now();
// console.log(timeStamp) //Give the value in mili sec. Counting start from 1 jan 1970 
// console.log(createDate.getTime()) //Give the value of that time in mili sec counting from 1 jan 1970.