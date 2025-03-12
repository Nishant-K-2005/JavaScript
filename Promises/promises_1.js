const XHR = require("xmlhttprequest");

// ---------------Promise 1----------------

// const promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task is completed")
//         resolve()
//     },1000)
// })
// promise1.then(()=>{
//     console.log("Promise Consumed")
// })


// ---------------------Promise 2----------------------

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task 2')
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async Task 2 completed")
// })


// Promise 3
const promise3 = new Promise(function(resolve,reject){
    const reqUrl = "https://api.github.com/users/Nishant-K-2005"
    const xhr = new XHR.XMLHttpRequest()
    xhr.open('GET',reqUrl)
    xhr.onreadystatechange = ()=>{
        if (xhr.readyState === 4){
            data = this.responseText
            console.log(data)
            resolve(data)
        } else{
            console.log("Rejected")
            reject()
        }
    }
})
promise3.then(function(user){
    console.log(user)
})
promise3.catch(function(){
    console.log("API call Failed")
})