let url = "https://dog.ceo/api/breeds/images/random"
let url2 = "https://catfact.ninja/fact"
let output = document.querySelector("#resultans");

let btn = document.querySelector("button");

btn.addEventListener("click" , async ()=>{
    let result = await getfact();
    // output.innerHTML=result;
    // console.log("btn was cliked ");
    console.log(result); 
    output.innerHTML=result;
});

async function getfact(){
    try{
        // let res = await fetch(url2);
        // let data = await res.json()
        let res = await axios.get(url2);
        return res.data.fact
        // console.log(data.fact);
    }catch(e){
        console.log("error - ", e );
        return " no fact found "
    }
}

async function dogImg(){
   try{
    let dogResult =  axios.get(url);
    console.log(dogResult);
   }catch(e){
    console.log("error - " , e );
   }
}
