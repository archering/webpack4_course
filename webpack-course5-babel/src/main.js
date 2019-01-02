import './index.html'
import './main.css'


var root = document.querySelectorAll("body")[0];
var hello = document.createElement("h2");
hello.innerHTML = "hello world";
root.appendChild(hello);


let a = 10;

let sum = (a,b) => a+b;

console.log(a+"+ 200=",sum(a,200));

console.log("becareful ");