const container = document.getElementById("pokemon-container");
const search = document.getElementById("search");

let pokemons = [];

// Função para buscar da API
async function fetchPokemons() {
    for (let i = 1; i <= 50; i++) {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let data = await res.json();

        pokemons.push(data);
        createCard(data);
    }
}

// Criar card na tela
function createCard(pokemon) {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
        <h3>${pokemon.name}</h3>
        <img src="${pokemon.sprites.front_default}">
    `;

    container.appendChild(div);
}

// Filtro de busca
search.addEventListener("input", () => {
    container.innerHTML = "";

    const filtered = pokemons.filter(p =>
        p.name.includes(search.value.toLowerCase())
    );

    filtered.forEach(createCard);
});

fetchPokemons();