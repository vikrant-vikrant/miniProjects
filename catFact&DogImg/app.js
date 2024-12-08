//to use API
const url3 = "https://catfact.ninja/fact";
const data = async () =>{
    let response = await fetch(url3);
    console.log(response); //JSON format
    let data = await response.json();
    console.log(data);
}
// data();

let url = "https://catfact.ninja/fact";
async function getfact(){
    try{
        let res = await axios.get(url);
        return (res.data.fact);
    }catch(e){
        console.log("Error found ", e)
        return "NO FACT FOUND"
    }
}
let btn = document.querySelector("button")
btn.addEventListener("click", async()=>{

    let data = await getfact();
    // console.log(data)
    let p  = document.querySelector("p");
    p.innerText = data;
})
let url2 = "https://dog.ceo/api/breeds/image/random";
async function getimg(){
    try{
        let img = await axios.get(url2);
        return (img.data.message);
    }catch(e){
        console.log("Error found ", e)
        return "NO IMAGE FOUND"
    }
}
let dogbtn = document.querySelector("#dogimg")
dogbtn.addEventListener("click", async()=>{
    let link = await getimg();
    // console.log(link)
    let img  = document.querySelector("#doog");
    img.setAttribute("src",link);
})

