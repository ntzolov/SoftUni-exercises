import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { deleteEventById, getAllEvents, getEventById } from '../services/data.js';
import { addPeople, getTotalPeople, isUserGoing } from '../services/events.js';
import { getUser } from '../util.js';

const detailsTemplate = (ev, userData, isOwner, onDelete, onGoing) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${ev.imageUrl} alt="example1" />
      <p id="details-title">${ev.name}</p>
      <p id="details-category">
        Category:
        <span id="categories">${ev.category}</span>
      </p>
      <p id="details-date">
        Date:
        <span id="date">${ev.date}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <span>${ev.description}</span>
        </div>
      </div>

      <h3>
        Going:
        <span id="go">${ev.totalPeople}</span>
        times.
      </h3>

      <div id="action-buttons">
        ${isOwner
          ? html`
              <a href="/details/${ev._id}/edit" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
            `
          : html`
              ${nothing}
            `}
        ${userData && !isOwner && !ev.isUserGoing
          ? html`
              <a href="javascript:void(0)" @click=${onGoing} id="go-btn">Going</a>
            `
          : html`
              ${nothing}
            `}
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const ev = await getEventById(id);
  const userData = getUser();
  const isOwner = userData._id === ev._ownerId;
  ev.totalPeople = await getTotalPeople(id);

  if (userData) {
    const isGoing = await isUserGoing(id, userData._id);
    ev.isUserGoing = isGoing === 0 ? false : true;
  } else {
    ev.isUserGoing = {};
  }

  update();
  function update() {
    ctx.render(detailsTemplate(ev, userData, isOwner, onDelete, onGoing));
  }

  async function onDelete(e) {
    const confirmed = confirm('Are you sure you want to delete the event?');

    if (confirmed) {
      await deleteEventById(id);
      ctx.page.redirect('/dashboard');
    }
  }

  async function onGoing(e) {
    await addPeople({ eventId: id });
    ctx.page.redirect('/details/' + id);
  }
}
