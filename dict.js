fetch("dict.csv")
.then((res) => res.text())
.then((text) => setData(text));

let data;
function setData(text) {
  text = text.replaceAll(", ", ",");
  data = Papa.parse(text, {"header": true})["data"];
}

const cardBox = document.getElementById("card-box");
const searchBar = document.getElementById("search-bar");

function search() {
  cardBox.innerHTML = "";
  let query = searchBar.value;
  let result = [];
  data.forEach((item) => {
    let content = JSON.stringify(item);
    if (content.includes(query.toLowerCase())) {
      result.push(item);
    }
  });
  createCards(result, query);
}

function createCards(list, query) {
  if (list.length > 0) {
      list.forEach(obj => {
      card(obj);
    })
  } else {
    cardBox.innerHTML = `No results found for ${query}... <br> Try searching for a synonym`;
  }
}

function card(obj) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <h2 class="word">${obj["root"]}</h2>
  <ul class="patterns">
    <li><span class="pattern">${obj["p1"]}</span><span class="ghost">n</span></li>
    <li><span class="pattern">${obj["p2"]}</span><span class="ghost">adj</span></li>
    <li><span class="pattern">${obj["p3"]}</span><span class="ghost">v</span></li>
    <li><span class="pattern">${obj["p4"]}</span><span class="ghost">gerund</span></li>
    <li><span class="pattern">${obj["p5"]}</span><span class="ghost">n</span></li>
    <li><span class="pattern">${obj["p6"]}</span><span class="ghost">n</span></li>
  </ul>`;
  cardBox.appendChild(card);
}