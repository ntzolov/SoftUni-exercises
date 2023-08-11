import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchFruits } from '../services/dataService.js';

const fruitTemplate = (fruit) => html`
  <div class="fruit">
    <img src=${fruit.imageUrl} alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/details/${fruit._id}">More Info</a>
  </div>
`;

const searchTemplate = (onSearch, fruits) => html`
  <section id="search">
    <div class="form">
      <h2>Search</h2>
      <form class="search-form" @submit=${onSearch}>
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4>Results:</h4>

    <!-- <div class="search-result">
      ${fruits && fruits.length > 0
      ? html`
          ${fruits.map((fruit) => fruitTemplate(fruit))}
        `
      : typeof fruits === 'object' && fruits.length === 0
      ? html`
          <p class="no-result">No result.</p>
        `
      : ''}
    </div> -->

    <div class="search-result">
      ${typeof fruits === 'object' && fruits.length === 0
        ? html`
            <p class="no-result">No result.</p>
          `
        : fruits && fruits.length > 0
        ? html`
            ${fruits.map((fruit) => fruitTemplate(fruit))}
          `
        : null}
    </div>
  </section>
`;

export function searchView(ctx) {
  ctx.render(searchTemplate(onSearch));

  async function onSearch(e) {
    e.preventDefault();

    const searchElement = document.getElementById('search-input');
    const searchText = searchElement.value;

    if (searchText === '') {
      return alert('Fill the field :)');
    }

    const fruits = await searchFruits(searchText);
    ctx.render(searchTemplate(onSearch, fruits));
  }
}

{
}
