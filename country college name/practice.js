let url = "http://universities.hipolabs.com/search?name=";
async function getCollege(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("ERROR FOUND")
        console.log(e)
    }
};
let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input");
    country = country.value
    console.log(country);
    let colleges = await getCollege(country);
    show(colleges);
})
function show(colleges){
    let list = document.querySelector("#list")
    list.innerText = "";
    for(coll of colleges){
        console.log(coll.name)
        let li = document.createElement("li");
        li.innerText = coll.name;
        list.appendChild(li)
    }
}
