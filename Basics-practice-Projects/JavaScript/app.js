// alert("hii buddy !");

// let firstName = prompt("enter your first name  :");
// let lastName  = prompt("enter your last name :" );
// let greeting = `hi ${firstName +" " + lastName} , welcome to page !`;
// alert(greeting);

// let n = prompt(" how many task do you want to add : ")
let todo = [];
let i=1;
while(i){
    let t = prompt(" add your todo list : ");
    todo.push(t);
    let  n = prompt(" do you want to add one more 0/1 ");
    i =parseInt(n);
}
// for (let k = 0 ; k<5 ;k++){
//     console.log(k);
// }
console.log(" your todo list is : ")
for(let j = 0 ; j<todo.length ; j++){
    console.log(j , todo[j]);
}

i = prompt("do you want to delete any of yuor item 0/1 :");
if(i){
    let m = 1;
    while (m) {
       let index =  prompt(" enter the index of item you want to delete : ");
       todo.splice(index,1);
       let choice = prompt( "do you want to delete one more item 0/1" );
        m = parseInt(choice);
    }
}else{
    console.log(" you can exit now , youre todo list is rady");
}


console.log(" your final  todo list is : ")
for(let j = 0 ; j<todo.length ; j++){
    console.log(j , todo[j]);
}
 