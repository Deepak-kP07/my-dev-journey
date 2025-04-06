
        
let n = document.querySelector('.num');

// const decrement = () => {
//     let nValue = parseInt(n.innerText);
//     nValue = nValue -1;
//     n.innerText=nValue;
// }; 

// const increment = () => {
//     let nValue = parseInt(n.innerText);
//     nValue = nValue +1;
//     n.innerText=nValue;
// }; 


// let's cook this with eent listener  

let dec = document.querySelector(".minus");
dec.addEventListener("click" , ()=>{
    let nValue = parseInt(n.innerText);
    nValue = nValue -1;
    n.innerText=nValue;
})

let inc = document.querySelector(".plus");
inc.addEventListener("click" , ()=>{
    let nValue = parseInt(n.innerText);
    nValue = nValue +1;
    n.innerText=nValue;
})