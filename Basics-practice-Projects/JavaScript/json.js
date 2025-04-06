let obj = {
    name : "deepak",
    age : 20 ,
    clg : "RGUKT SKLM",      // this is in js object formate 
    GF  : "satya" ,
}
console.log(obj.name);
let jsonData = JSON.stringify(obj);
console.log(jsonData);
let jsonToString = JSON.parse(jsonData);
console.log(jsonToString);
