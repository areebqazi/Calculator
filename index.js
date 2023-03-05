let a = 8
let b = 5
document.getElementById("num1-el").textContent=a
document.getElementById("num2-el").textContent=b

let temp=document.getElementById("sum-el")

function add(){
     temp.textContent="Result : "+(a+b)
}
function subtract(){
    temp.textContent="Result : "+(a-b)
}
function divide(){
    temp.textContent="Result : "+a/b
}
function multiply(){
    temp.textContent="Result : "+a*b
}

