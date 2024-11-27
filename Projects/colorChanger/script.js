const colorCollection = document.querySelector('.colors');

let bgColors = ['red','green','yellow','blue','black','grey']
let textColors = ['green','red','blue','yellow','wheat','black']

for(let i=0;i<colorCollection.children.length;i++){
    colorCollection.children[i].style.backgroundColor = bgColors[i]
    colorCollection.children[i].style.color = textColors[i]
    colorCollection.children[i].setAttribute('value',bgColors[i])
    colorCollection.children[i].addEventListener('click',()=>{
        document.body.style.backgroundColor = bgColors[i];
        document.body.style.color = textColors[i]
    })
}


