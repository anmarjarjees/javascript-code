
async function getData(url) {
    const response = await fetch(url);
    // console.log(response);
    let data = await response.json();
    console.log(data); // ? the 3 instruments
}

const myUrl = "https://anmarjarjees.github.io/json-examples/music-inst.json";
getData(myUrl);