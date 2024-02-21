let responseAsJson;
let lettersFilter = [];

async function getBundeslaender() {
  let bundeslandJson = "bundesland.json";
  let response = await fetch(bundeslandJson);
  responseAsJson = await response.json();
}

async function render() {
  await getBundeslaender();
  document.getElementById("main").innerHTML = '';
  for (let i = 0; i < responseAsJson.length; i++) {
    let bundesland = responseAsJson[i];
      document.getElementById("main").innerHTML += divBundeslandhtml(bundesland, i);
    createfilterarray(bundesland);  
  }
  renderFilter();
}

function divBundeslandhtml(bundesland, i) {
  return /*html*/ `
  <div class="whiteMargin">
            <a id="${i}" href="${bundesland['url']}" onmouseover="hover(${i})">
            <span class="name">${bundesland['name']}</span>
            <span class="population">${bundesland['population']} Millionen</span>
</a>
  </div>
    `;
}

function createfilterarray(bundesland){
    let firstLetter = Array.from(bundesland['name'])[0];
    let index = lettersFilter.indexOf(firstLetter);
    if (index == -1) {
        lettersFilter.push(firstLetter);
    }
}

function renderFilter(){
    document.getElementById('lettersFilter').innerHTML ='';
    for (let i = 0; i < lettersFilter.length; i++) {
        document.getElementById('lettersFilter').innerHTML += letterHtml(i);
    }
}

function letterHtml(i){
    return /*html*/ `
        <div class="divLetter" onclick="filter('${lettersFilter[i]}')">${lettersFilter[i]}</div>
    `
}

function filter(letter){
    document.getElementById("main").innerHTML = '';
    for (let i = 0; i < responseAsJson.length; i++) {
      let bundesland = responseAsJson[i];
      let firstLetterBundesland = Array.from(bundesland['name'])[0];
      if (firstLetterBundesland == letter) {
        document.getElementById("main").innerHTML += divBundeslandhtml(bundesland, i);
      } 
    } 
}

function hover(i){
    document.getElementById(i).classList.add('hover');
}
