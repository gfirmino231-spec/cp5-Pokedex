const pokemonData = [
  { name: "Bulbasaur", type: "planta", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
  { name: "Charmander", type: "fogo", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
  { name: "Squirtle", type: "agua", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" }
];

function renderPokemons(filter = "todos") {
  const grid = document.getElementById("pokemonGrid");
  grid.innerHTML = "";

  const list = filter === "todos"
    ? pokemonData
    : pokemonData.filter(p => p.type === filter);

  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "poke-card";
    div.innerHTML = `<img src="${p.sprite}" onclick="openModal('${p.name}')">`;
    grid.appendChild(div);
  });
}

function openModal(name) {
  document.getElementById("modalName").innerText = name;
  document.getElementById("modal").classList.add("active");
}

document.getElementById("modalClose").onclick = () => {
  document.getElementById("modal").classList.remove("active");
};

document.getElementById("filterList").addEventListener("click", e => {
  if (e.target.dataset.type) {
    renderPokemons(e.target.dataset.type);
  }
});

function scrollToIntegrantes() {
  document.getElementById("integrantes").scrollIntoView({ behavior: "smooth" });
}

function updateCard() {
  document.getElementById("previewName").innerText =
    document.getElementById("cardName").value;

  document.getElementById("previewHP").innerText =
    document.getElementById("cardHP").value;
}

// INIT
renderPokemons();