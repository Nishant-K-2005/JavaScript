let keyCodeArea = document.querySelector('.keyCode')

document.addEventListener('keydown',(e)=>{
    keyCodeArea.innerHTML = "KeyCode: "+String(e.code)
})