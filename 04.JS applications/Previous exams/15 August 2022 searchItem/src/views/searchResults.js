import { html } from '../../node_modules/lit-html/lit-html.js';

const resultCard = (el, userData) => html`
  <li class="card">
    <img src=${el.imageUrl} alt="travis" />
    <p>
      <strong>Brand:</strong>
      <span class="brand">${el.brand}</span>
    </p>
    <p>
      <strong>Model:</strong>
      <span class="model">${el.model}</span>
    </p>
    <p>
      <strong>Value:</strong>
      <span class="value">${el.value}</span>
      $
    </p>
    ${userData
      ? html`
          <a class="details-btn" href="/details/${el._id}">Details</a>
        `
      : null}
  </li>
`;

export const searchResults = (result, userData) => html`
  <div id="search-container">
    <ul class="card-wrapper">
      ${result.length === 0
        ? html`
            <h2>There are no results found.</h2>
          `
        : html`
            ${result.map((el) => resultCard(el, userData))}
          `}
    </ul>
  </div>
`;
