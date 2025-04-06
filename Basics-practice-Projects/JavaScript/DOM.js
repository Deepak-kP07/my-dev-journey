//im practicing evryting in console

// document.getElementById("#dom").innerHTML(" new heading");
document.getElementById("dom").innerHTML="new heading ";
document.getElementsByClassName(".box-name").innerHTML="new box name";
// let     Body = document.querySelector("body");
console.log( Body);

function bg(){
    Body.style.backgroundColor="lightblue";
}
setTimeout(bg ,4000);
// setInterval(bg , 2000);
let btn = document.createElement("button");
btn.innerHTML="click me ! "
// Body.insertAdjacentElement("beforebegin" ,btn);

let box = document.querySelector(".box");
box.append(btn);
box.prepend(btn);
box.appendChild(btn);
box.insertAdjacentElement('afterbegin',btn);
box.insertAdjacentElement('afterend',btn);
box.insertAdjacentElement("beforeend",btn);
box.insertAdjacentElement("beforebegin",btn);




