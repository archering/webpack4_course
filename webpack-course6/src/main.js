import './index.html'
import './main.css'
import sum from './utils/sum';
import minus from './utils/minus';


var root = document.querySelectorAll("body")[0];
var hello = document.createElement("h2");
hello.innerHTML = "hello world";
root.appendChild(hello);


let a = 10;


console.log(a+"+ 200=",sum(a,200));


minus(100,10).then(function(result){
    console.log("100-10=",result);
});

console.log("becareful ");

