import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllFacts } from '../data/facts.js';

const factCard = (fact) => html`
  <div class="fact">
    <img src=${fact.imageUrl} alt="example1" />
    <h3 class="category">${fact.category}</h3>
    <p class="description">${fact.description}</p>
    <a class="details-btn" href="/details/${fact._id}">More Info</a>
  </div>
`;

const dashboardTemplate = (facts) => html`
  <h2>Fun Facts</h2>

  ${facts.length === 0
    ? html`
        <h2>No Fun Facts yet.</h2>
      `
    : html`
        <section id="dashboard">${facts.map((fact) => factCard(fact))}</section>
      `}
`;

export async function dashboardView(ctx) {
  const facts = await getAllFacts();

  ctx.render(dashboardTemplate(facts));
}
