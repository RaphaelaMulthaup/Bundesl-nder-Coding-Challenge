async function getBundesländer(){
    let bundeslandJson = 'bundesland.json';
    let response = await fetch(bundeslandJson);
    let responseAsJson = await response.json();
console.log(responseAsJson);
}

function render(){
    
    document.getElementById('main').innerHTML += divBundeslandhtml();
}

function divBundeslandhtml(){
    return /*html*/ `
        <div>

        </div>
    `;
}