const body = document.getElementById('bodyTag');
const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');

let colorInterval;

startBtn.addEventListener('click',function(){
    console.log("Start")
    if(!colorInterval){    
        colorInterval = setInterval(function(){
            const hex = "0123456789ABCDEF";
            let color = '#'
            for (let i=0;i<6;i++){
                color += hex[Math.floor(Math.random()*16)]
            }
            console.log(color)
            body.style.backgroundColor = `${color}`
        },1000) 
    }

})

stopBtn.addEventListener('click',function(){
    clearInterval(colorInterval)
    colorInterval = null // For memory management 
    console.log("Stopped")
})