// function savetoDb(data){

//     return new Promise((resolve , reject) => {
//         let internetSpeed = Math.floor(Math.random()*10) + 1 ;
//         if (internetSpeed>4) {
//             resolve("success : data was saved ");

//         }else{
//             reject("failure : weak connection data was not saved ");
//         }
//     });
// }

// savetoDb(" deepak")
// .then((result)=>{
//     console.log("result was resolved ");
//     console.log(result);
//     savetoDb(" data 2 ");
// })
// .then((result)=>{
// console.log("result two was relsoved");
// console.log(result);
// })
// .catch((error)=>{
//     console.log("result was rejected");
//     console.log(error);
// })

h1 = document.querySelector("h1");

// function chnageColor(colorR , delayD , nextColorN) {
//     setTimeout(()=>{
//         h1.style.color=colorR;
//         if(nextColorN)
//             nextColorN()
//     },delayD);

// }
// chnageColor("yellow" , 1000 , ()=>{
//     chnageColor("blue", 1000 , ()=>{
//         chnageColor("green" , 1000 , ()=>{
//             chnageColor("orange" , 1000 , ()=>{
//                 chnageColor("red" , 1000 , ()=>{

//                 })
//             }
//             )
//         })
//     })
// })

function chnageColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color chnaged to ${color}`);
      resolve("color changed ! ");
    }, delay);
  });
}
// chnageColor("violet" , 250 )
// .then(()=>{
//    return chnageColor("red" , 250 );
//    console.log("red completed");
// })
// .then(()=>{
//     return chnageColor("blue" , 250);
// })
// .then(()=>{
//     return chnageColor("green" , 250);
// })
// .then(()=>{
//    return chnageColor("yellow" , 250);
// })
// .then(()=>{
//    return chnageColor("orange" , 250);
// })
// .then(()=>{
//     return chnageColor("red" , 250 );
// })

// .catch(()=>{
//     console.log("error");
// })

async function color() {
  try {
    await chnageColor("red", 1000);
    await chnageColor("blue", 1000);
    await chnageColor("green", 1000);
    await chnageColor("pink", 1000);
    await chnageColor("yellow", 1000);
    await chnageColor("red", 1000);
    await chnageColor("blue", 1000);
    await chnageColor("orange", 1000);
  } catch (err) {
    console.log(" error cought ");
    console.log(err);
  }
  let a = 5;
  console.log(a + 3);
}
color();
