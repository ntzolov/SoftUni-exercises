import { html } from '../../node_modules/lit-html/lit-html.js';
import { searchShoes } from '../data/shoes.js';
import { getFormData, getUser } from '../util.js';
import { searchResults } from './searchResults.js';

const searchTemplate = (onSearch, result, userData) => html`
  <section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf" @submit=${onSearch}>
      <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
      <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>
    ${result !== '' ? searchResults(result, userData) : null}
  </section>
`;

export async function searchView(ctx) {
  let searchText = '';
  let result = '';
  let userData;

  ctx.render(searchTemplate(onSearch, result, userData));

  async function onSearch(e) {
    e.preventDefault();
    
    searchText = getFormData().search;

    if (searchText) {
      result = await searchShoes(searchText);
      userData = getUser();
    }

    ctx.render(searchTemplate(onSearch, result, userData));
  }
}
