const formEle = document.querySelector('.form');
// console.log(formEle.children[0])
function calBMI(){
    let height = formEle.children[0].value;
    let weight = formEle.children[1].value;
    height = height/100;
    BMI = weight/(height*height);
    formEle.children[3].value = BMI;
}
formEle.children[2].addEventListener('click',calBMI);   