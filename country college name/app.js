let url = "http://universities.hipolabs.com/search?name=";
async function getCollege(country) {
  try {
    let res = await axios.get(url + country);
    let colleges = res.data;
    let arr = [];
    for (colleges of colleges) {
      arr.push({
        name: colleges.name,
        country: colleges.country,
        state: colleges.state,
        website: colleges.web_pages[0],
      });
    }
    return arr;
  } catch (Error) {
    console.log("Error fetching data:", Error);
  }
}
document.querySelector("button").addEventListener("click", async () => {
  let country = document.querySelector("input");
  country = country.value;
  let colleges = await getCollege(country);
  if (colleges.length == 0) {
    alert("Type error or Data not found");
  } else {
    show(colleges);
  }
  document.querySelector("input").value = "";
});
function show(colleges) {
  let list = document.querySelector(".list");
  list.innerText = "";
  for (coll of colleges) {
    list.innerHTML += `<li>${coll.name}</li>`;
  }
}
document.querySelector("input").addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    document.querySelector("button").click();
  }
});

