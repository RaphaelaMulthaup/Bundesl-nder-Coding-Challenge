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
      document.getElementById("main").innerHTML += divBundeslandhtml(bundesland);
  }
}

function divBundeslandhtml(bundesland) {
  return /*html*/ `
        <a href="${bundesland['url']}">
            <span>${bundesland['name']}</span>
            <span>${bundesland['population']}</span>
</a>
    `;
}
