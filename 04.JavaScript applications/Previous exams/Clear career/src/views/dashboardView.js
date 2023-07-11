import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../services/data.js';

const offerTemplate = (offer) => html`
  <div class="offer">
    <img src=${offer.imageUrl} alt="example1" />
    <p>
      <strong>Title:</strong>
      <span class="title">${offer.title}</span>
    </p>
    <p>
      <strong>Salary:</strong>
      <span class="salary">${Number(offer.salary)}</span>
    </p>
    <a class="details-btn" href="/details/${offer._id}">Details</a>
  </div>
`;

const dashboardTemplate = (data) => html`
  <section id="dashboard">
    ${data.length > 0
      ? html`
          <h2>Job Offers</h2>
          ${data.map((offer) => offerTemplate(offer))}
        `
      : html`
          <h2>No offers yet.</h2>
        `}
  </section>
`;

export async function dashboardView(ctx) {
  const data = await getAllOffers();
  ctx.render(dashboardTemplate(data));
}
