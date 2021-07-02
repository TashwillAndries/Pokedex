let baseurl = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const results = data;
      let pokeListCon = document.querySelector(".right-container__screen");
      let npcontainer = document.querySelector(".right-container__buttons");
      let pokemonlist = data.results;
      pokeListCon.innerHTML = ``;
      pokemonlist.forEach((btn) => {
        pokeListCon.innerHTML += `<button class='list-item' onclick="getpokeInfo('${btn.url}')">${btn.name}</button>`;
      });
      npcontainer.innerHTML = `<div class="left-button" onclick="getPokemonList('${data.previous}')">Prev</div>
      <div class="right-button" onclick="getPokemonList('${data.next}')">Next</div>`;
    });
}

getPokemonList(baseurl);

function getpokeInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".poke-name").innerHTML = `${data.name}`;
      document.querySelector(".poke-id").innerHTML = `#${data.id}`;
      document.querySelector(".poke-weight").innerHTML = `${data.weight}`;
      document.querySelector(".poke-height").innerHTML = `${data.height}`;
      document.querySelector(".poke-front-image").innerHTML = `
    <img src="${data.sprites.front_default} ">`;
      document.querySelector(".poke-back-image").innerHTML = `
    <img src="${data.sprites.back_default} ">`;
      document.querySelector(
        ".poke-type-one"
      ).innerHTML = `${data.types[0].type.name}`;
      document.querySelector(
        ".poke-type-two"
      ).innerHTML = `${data.types[1].type.name}`;
      document.querySelector(".right-button");
    });
}
