import { html } from '../lib.js';
import { getAllFruits } from '../services/dataService.js';

const fruitTemplate = (fruit) => html`
  <div class="fruit">
    <img src=${fruit.imageUrl} alt=${fruit.name} />
    <h3 class="title">'${fruit.name}'</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/details/${fruit._id}">More Info</a>
  </div>
`;

const dashboardTemplate = (fruits) => html`
  ${fruits.length === 0
    ? html`
        <h2>No fruit info yet.</h2>
      `
    : html`
        <h2>Fruits</h2>
        <section id="dashboard">${fruits.map((fruit) => fruitTemplate(fruit))}</section>
      `}
`;

export async function dashboardView(ctx) {
  const allFruits = await getAllFruits();

  ctx.updateNav();
  ctx.render(dashboardTemplate(allFruits));
}
