//arrow function 
const sum = (a , b )=> {
    console.log(a+b);
    console.log("arrow function");
};


const mul = (a,b )=>(
    a*b 
);

function func() {
    console.log(" hii ");
    
}

setTimeout(func ,4000);
let id = setInterval(func , 3000);
console.log(id);