let Body = document.querySelector("body");
// let btn = document.createElement("button");
// btn.innerHTML= " lick mee ! ";
// Body.appendChild(btn);


// let btn = document.querySelector("button ");
 let btns =  document.querySelectorAll("button");
 
 for (btn of btns){
    btn.onclick=sayhlo;
 }

//  btn.onclick= function(){
//     console.log("msg");
//  } 


function sayhlo(){
    onclick=console.log('msg');
    alert(" fuck you !");

}

btn.onclick=sayhlo;

btn.addEventListener("click " , function(){
    console.log(this.innerText);
})

let Form = document.querySelector("form");
Form.addEventListener("submit" , function(event){
    event.preventDefault();
    let user = document.querySelector("username");
    let pass = document.querySelector("#pass");
    console.cog(user.innerText);
    console.log(pass.innerHTML);
})