# CP5 — Pokédex

Landing page estática com tema retrô de Pokédex, feita em **HTML, CSS e JavaScript puro** (sem build, sem dependências).

## Seções

| Seção | Conteúdo |
| --- | --- |
| **Início** | Hero com título e botão *Start*, que faz scroll suave até os integrantes |
| **Integrantes** | Lista dos membros do grupo no estilo "Choose your character" |
| **Pokémons** | Grade de cards com filtro por tipo e modal ao clicar no sprite |
| **Cartas** | Formulário simples que espelha nome e HP digitados em um preview |

## Como funciona

Todo o comportamento vive em `main.js`:

- `renderPokemons(filtro)` monta a grade a partir do array `pokemonData` e refaz o HTML a cada troca de filtro. Os sprites vêm do repositório público [PokeAPI/sprites](https://github.com/PokeAPI/sprites).
- Os botões de filtro usam delegação de evento no container `#filterList`, lendo o tipo do `data-type`.
- `openModal(nome)` adiciona a classe `active` no overlay para exibir o modal.
- `updateCard()` copia os valores dos inputs para o preview da carta.

Fontes: *Press Start 2P* e *Noto Serif*, carregadas do Google Fonts.

## Como rodar

Não há build. Basta abrir o `index.html` no navegador:

```bash
git clone https://github.com/gfirmino231-spec/cp5-Pokedex.git
cd cp5-Pokedex
start index.html          # Windows
```

Ou servir a pasta, se preferir:

```bash
npx serve .
```

## Arquivos

```
index.html    marcação e seções
style.css     estilos
main.js       dados dos pokémons, filtro, modal e preview de carta
```

## Pendências

- [ ] Substituir os placeholders `Nome - RM 000000` pelos integrantes reais
- [ ] Adicionar o filtro do tipo *planta* (o Bulbasaur existe nos dados, mas não há botão para ele)
- [ ] Preencher o modal com mais detalhes além do nome
