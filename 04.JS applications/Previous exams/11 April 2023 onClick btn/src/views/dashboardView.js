import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllEvents } from '../services/data.js';

const eventTemplate = (ev) => html`
  <div class="event">
    <img src=${ev.imageUrl} alt="example1" />
    <p class="title">${ev.name}</p>
    <p class="date">${ev.date}</p>
    <a class="details-btn" href="/details/${ev._id}">Details</a>
  </div>
`;

const dashboardTemplate = (events) => html`
  ${events.length > 0
    ? html`
        <h2>Current Events</h2>
        <section id="dashboard">${events.map((ev) => eventTemplate(ev))}</section>
      `
    : html`
        <h4>No Events yet.</h4>
      `}
`;

export async function dashboardView(ctx) {
  const events = await getAllEvents();

  ctx.render(dashboardTemplate(events));
}
