import { html } from '../../node_modules/lit-html/lit-html.js';
import { editEventById, getEventById } from '../services/data.js';

const editTemplate = (onEdit, ev) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Event</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input type="text" .value=${ev.name} name="name" id="name" placeholder="Event" />
        <input type="text" .value=${ev.imageUrl} name="imageUrl" id="event-image" placeholder="Event Image" />
        <input type="text" .value=${ev.category} name="category" id="event-category" placeholder="Category" />

        <textarea
          id="event-description"
          .value=${ev.description}
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"></textarea>

        <label for="date-and-time">Event Time:</label>
        <input type="text" .value=${ev.date} name="date" id="date" placeholder="When?" />

        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

export async function editView(ctx) {
  const id = ctx.params.id;
  const ev = await getEventById(id);
  ctx.render(editTemplate(onEdit, ev));

  async function onEdit(e) {
    e.preventDefault();

    const formData = new FormData(document.querySelector('form'));
    const { name, imageUrl, category, description, date } = Object.fromEntries(formData);

    for (const field of [name, imageUrl, category, description, date]) {
      if (field === '') {
        return alert('All fields are required!');
      }
    }

    await editEventById(id, { name, imageUrl, category, description, date });
    ctx.page.redirect('/details/' + id);
  }
}
