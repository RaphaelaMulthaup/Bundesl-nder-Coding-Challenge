let responseAsJson;

async function getBundeslaender() {
  let bundeslandJson = "bundesland.json";
  let response = await fetch(bundeslandJson);
  responseAsJson = await response.json();
  console.log(responseAsJson);
}

async function render() {
  await getBundeslaender();
  for (let i = 0; i < responseAsJson.length; i++) {
    let bundesland = responseAsJson[i];
      document.getElementById("main").innerHTML += divBundeslandhtml(bundesland, i);
  }
}

function divBundeslandhtml(bundesland, i) {
  return /*html*/ `
  <div class="whiteMargin">
            <a id="${i}" href="${bundesland['url']}" onmouseover="hover(i)">
            <span class="name">${bundesland['name']}</span>
            <span class="population">${bundesland['population']} Millionen</span>
</a>
  </div>
    `;
}

function hover(i){
    document.getElementById('i').classList.add('hover');
}
