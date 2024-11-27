let form = document.querySelector('.formBox');
let randomNum = Math.ceil(Math.random()*100);
let prvInputs = [];

let chances = document.querySelector('#chances')

// console.log(typeof(chances.textContent))
console.log(randomNum)

form.children[1].addEventListener('click',()=>{
    let currInput = form.children[0].value;
    if (currInput == randomNum){
        form.children[4].textContent = "Number matched."
        form.children[1].setAttribute('disabled','true');
    }else{
        prvInputs.push(currInput)
        document.querySelector('#values').textContent = prvInputs.toString()
        if(parseInt(chances.textContent) > 1){
            chances.textContent = parseInt(chances.textContent)-1
        }else{
            chances.textContent = 0
            form.children[4].textContent = "Opps! better luck next time."
            form.children[1].setAttribute('disabled','true');
            
        }
    }
})