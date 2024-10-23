const user = {
username: 'Nishant',
    age: 19,
    welcome: function(){
        // console.log(`${this.username}, Welcome`)
    }
}
user.welcome()
user.username = 'NK'
user.welcome() 
// In JS 'this' keyword is used to get current context of the object
    // In node the gobal current context is an empty object.
    // In Browser the gobal current context is a window object which has the browser events and other stuff.






function func(){
    let userName = 'NISHANT' 
    console.log(this.userName)//It will return 'undefined'
    console.log(this) // inside a function this will return a object of functions that we can use inside it.
}
func()


