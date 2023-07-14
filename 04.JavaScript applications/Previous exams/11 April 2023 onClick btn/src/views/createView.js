import { html } from '../../node_modules/lit-html/lit-html.js';
import { createEvent } from '../services/data.js';

const createTemplate = (onCreate) => html`
  <section id="create">
    <div class="form">
      <h2>Add Event</h2>
      <form class="create-form" @submit=${onCreate}>
        <input type="text" name="name" id="name" placeholder="Event" />
        <input type="text" name="imageUrl" id="event-image" placeholder="Event Image URL" />
        <input type="text" name="category" id="event-category" placeholder="Category" />

        <textarea id="event-description" name="description" placeholder="Description" rows="5" cols="50"></textarea>

        <input type="text" name="date" id="date" placeholder="When?" />

        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;

export function createView(ctx) {
  ctx.render(createTemplate(onCreate));

  async function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(document.querySelector('form'));
    const { name, imageUrl, category, description, date } = Object.fromEntries(formData);

    for (const field of [name, imageUrl, category, description, date]) {
      if (field === '') {
        return alert('All fields are required!');
      }
    }

    await createEvent({ name, imageUrl, category, description, date });
    ctx.page.redirect('dashboard');
  }
}
