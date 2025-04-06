
// let redBox =document.querySelector(".red");
// let blueBox =document.querySelector(".blue");
// let orangeBox =document.querySelector(".orange");
// let purpleBox =document.querySelector(".purple");

let gameseq=[];
let userseq=[];
let H3 = document.querySelector("h3");
let btns=["red" , "blue" , "orange" , "purple"];
let level = 0 ;
let started=false;
document.addEventListener("keypress", function() {
    if (!started) {
        console.log("Game started");
        started = true;
        levelup();
    }
});
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } , 250 );
    
}
function levelup() {
    level++;
    H3.innerText=  `level${level}`;
    let randInx = Math.floor(Math.random()*3);
    let randcolor = btns[randInx];
    let randBtn = document.querySelector(`.${randcolor}`);
    console.log(randInx);
    console.log(randBtn);
    console.log(randcolor);
    btnFlash(randBtn);
}
function btnPress (){
    // console.log("btn was pressed ");
    let btn   = this ;
    btnFlash(btn);
}
let allBtn = document.querySelectorAll(".btn");
for (btn of btns){
    btn.addEventListener("click" , btnPress);
}