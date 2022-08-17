var slide = document.getElementById("slider")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var btn5 = document.getElementById("btn5")
var btn6 = document.getElementById("btn6")
var btn7 = document.getElementById("btn7")

btn1.onclick=function(){
    slide.style.transform = "translateX(0px)";
    btn1.classList.add("active")
    btn2.classList.remove("active")
    btn3.classList.remove("active")
    btn4.classList.remove("active")
    btn5.classList.remove("active")
    btn6.classList.remove("active")
    btn7.classList.remove("active")
}
btn2.onclick=function(){
    slide.style.transform = "translateX(-100%)";
    btn2.classList.add("active")
    btn1.classList.remove("active")
    btn3.classList.remove("active")
    btn4.classList.remove("active")
    btn5.classList.remove("active")
    btn6.classList.remove("active")
    btn7.classList.remove("active")
}
btn3.onclick=function(){
    slide.style.transform = "translateX(-200%)";
    btn3.classList.add("active")
    btn2.classList.remove("active")
    btn1.classList.remove("active")
    btn4.classList.remove("active")
    btn5.classList.remove("active")
    btn6.classList.remove("active")
    btn7.classList.remove("active")
}
btn4.onclick=function(){
    slide.style.transform = "translateX(-300%)";
    btn4.classList.add("active")
    btn2.classList.remove("active")
    btn3.classList.remove("active")
    btn1.classList.remove("active")
    btn5.classList.remove("active")
    btn6.classList.remove("active")
    btn7.classList.remove("active")
}
btn5.onclick=function(){
    slide.style.transform = "translateX(-400%)";
    btn5.classList.add("active")
    btn2.classList.remove("active")
    btn3.classList.remove("active")
    btn4.classList.remove("active")
    btn1.classList.remove("active")
    btn6.classList.remove("active")
    btn7.classList.remove("active")
}
btn6.onclick=function(){
    slide.style.transform = "translateX(-500%)";
    btn6.classList.add("active")
    btn2.classList.remove("active")
    btn3.classList.remove("active")
    btn4.classList.remove("active")
    btn5.classList.remove("active")
    btn1.classList.remove("active")
    btn7.classList.remove("active")
}
btn7.onclick=function(){
    slide.style.transform = "translateX(-600%)";
    btn1.classList.remove("active")
    btn2.classList.remove("active")
    btn3.classList.remove("active")
    btn4.classList.remove("active")
    btn5.classList.remove("active")
    btn6.classList.remove("active")
    btn7.classList.add("active")
}
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft +=containerWidth;
    })
    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -=containerWidth;
    })
})
// account-page
var loginform = document.getElementById("login-form")
var regform = document.getElementById("reg-form")
var indicator = document.getElementById("indicator")
function reg(){
    regform.style.transform="translateX(0px)";
    loginform.style.transform="translateX(0px)";
    indicator.style.transform="translate(100px)";
}
function login(){
    regform.style.transform="translateX(300px)";
    loginform.style.transform="translateX(300px)";
    indicator.style.transform="translate(0px)";
}