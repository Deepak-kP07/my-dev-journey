arr=[1,3,4,5,6,8,9];
// arr.forEach(element => {
//     console.log(element);
// });

let val = arr.every((el) => (el%2==0));

// min number in array

let result = arr.reduce((min , el) => {
    if(min < el){
        return min ;
    }else{
        return el ;
    }
})

//defult parameters 
function sum (a , b=0 ) {
    return a+b ;
    
}

//spread
let minimum = Math.min(...arr);

//rest 
function allELements (...arr){
   for (let i = 0; i < arr.length; i++) {
    console.log(" elements are :" , arr[i]);
    
   } 
}

//destrucring
let [first , second , ...remainig ]=arr;
const mySelft = {
    name : "Deepak",
    age:20,
    username:"deepak_kp_7",
    password: "don'tforgot"
};

let [username , password]=mySelft;
